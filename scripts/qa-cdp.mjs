import fs from "node:fs/promises";
import path from "node:path";

const debuggingUrl = process.env.CDP_URL ?? "http://127.0.0.1:9223";
const targetUrl = process.argv[3] ?? process.env.QA_TARGET ?? "http://localhost:3000";
const outputDir = process.argv[2] ?? process.env.QA_OUTPUT_DIR ?? process.cwd();
const viewportWidth = Number(process.argv[4] ?? 1440);
const viewportHeight = Number(process.argv[5] ?? 1000);
const capturePrefix = viewportWidth < 700 ? "portfolio-fragments-mobile" : "portfolio-fragments";

const targets = await fetch(`${debuggingUrl}/json`).then((response) => response.json());
const target = targets.find((item) => item.type === "page");
if (!target) throw new Error("No browser page target found");

const socket = new WebSocket(target.webSocketDebuggerUrl);
let nextId = 0;
const pending = new Map();

socket.addEventListener("message", (event) => {
  const message = JSON.parse(event.data);
  if (!message.id) return;
  if (!message.id || !pending.has(message.id)) return;
  const { resolve, reject } = pending.get(message.id);
  pending.delete(message.id);
  if (message.error) reject(new Error(message.error.message));
  else resolve(message.result);
});

await new Promise((resolve, reject) => {
  socket.addEventListener("open", resolve, { once: true });
  socket.addEventListener("error", reject, { once: true });
});

const send = (method, params = {}) => new Promise((resolve, reject) => {
  const id = ++nextId;
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, method, params }));
});

const pause = (duration) => new Promise((resolve) => setTimeout(resolve, duration));
const evaluate = (expression) => send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
const screenshot = async (name) => {
  const result = await send("Page.captureScreenshot", { format: "png", fromSurface: true });
  await fs.writeFile(path.join(outputDir, name), Buffer.from(result.data, "base64"));
};

await send("Page.enable");
await send("Runtime.enable");
await send("Emulation.setDeviceMetricsOverride", {
  width: viewportWidth,
  height: viewportHeight,
  deviceScaleFactor: 1,
  mobile: viewportWidth < 700,
});
await send("Page.navigate", { url: targetUrl });
await pause(2600);

const metrics = await evaluate(`JSON.stringify(
  [".fragments-title", ".fragments-script", ".cover-collage-left", ".cover-collage-right", ".archive-open"].map((selector) => {
    const element = document.querySelector(selector);
    const rect = element?.getBoundingClientRect();
    const style = element ? getComputedStyle(element) : null;
    return {
      selector,
      rect: rect ? { x: rect.x, y: rect.y, width: rect.width, height: rect.height, right: rect.right } : null,
      display: style?.display,
      opacity: style?.opacity,
    };
  })
)`);

await screenshot(`${capturePrefix}-cdp-home.png`);
for (const [x, y] of [[180, 190], [310, 270], [480, 330], [640, 420], [820, 370]]) {
  await send("Input.dispatchMouseEvent", { type: "mouseMoved", x, y });
  await pause(45);
}
await pause(260);
await screenshot(`${capturePrefix}-trail.png`);
await send("Input.dispatchMouseEvent", { type: "mouseWheel", x: viewportWidth / 2, y: viewportHeight / 2, deltaX: 0, deltaY: 620 });
await pause(1100);
await screenshot(`${capturePrefix}-transition.png`);
await send("Input.dispatchMouseEvent", { type: "mouseWheel", x: viewportWidth / 2, y: viewportHeight / 2, deltaX: 0, deltaY: 700 });
await pause(1100);
await screenshot(`${capturePrefix}-curtain.png`);
await evaluate(`document.querySelector('.about-section').scrollIntoView({behavior:'auto'})`);
await pause(700);
await screenshot(`${capturePrefix}-about.png`);

console.log(metrics.result.value);
await send("Browser.close");
