import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const projectRoot = process.cwd();
const sourcePath = path.join(projectRoot, "public", "images", "human-ai-hands.png");
const machinePath = path.join(projectRoot, "public", "images", "human-ai-machine.png");
const humanPath = path.join(projectRoot, "public", "images", "human-ai-human.png");

const { data, info } = await sharp(sourcePath).removeAlpha().raw().toBuffer({ resolveWithObject: true });
const total = info.width * info.height;
const visited = new Uint8Array(total);
const queue = new Int32Array(total);
let head = 0;
let tail = 0;

const isBackdrop = (index) => {
  const offset = index * 3;
  const r = data[offset];
  const g = data[offset + 1];
  const b = data[offset + 2];
  return r > 220 && g > 220 && b > 220 && Math.max(r, g, b) - Math.min(r, g, b) < 20;
};

const enqueue = (index) => {
  if (!visited[index] && isBackdrop(index)) {
    visited[index] = 1;
    queue[tail++] = index;
  }
};

for (let x = 0; x < info.width; x += 1) {
  enqueue(x);
  enqueue((info.height - 1) * info.width + x);
}

for (let y = 0; y < info.height; y += 1) {
  enqueue(y * info.width);
  enqueue(y * info.width + info.width - 1);
}

while (head < tail) {
  const index = queue[head++];
  const x = index % info.width;
  if (x > 0) enqueue(index - 1);
  if (x < info.width - 1) enqueue(index + 1);
  if (index >= info.width) enqueue(index - info.width);
  if (index < total - info.width) enqueue(index + info.width);
}

const rgba = Buffer.alloc(total * 4);
for (let index = 0; index < total; index += 1) {
  const sourceOffset = index * 3;
  const outputOffset = index * 4;
  rgba[outputOffset] = data[sourceOffset];
  rgba[outputOffset + 1] = data[sourceOffset + 1];
  rgba[outputOffset + 2] = data[sourceOffset + 2];
  rgba[outputOffset + 3] = visited[index] ? 0 : 255;
}

const split = Math.round(info.width * 0.53);
const transparentSource = sharp(rgba, {
  raw: { width: info.width, height: info.height, channels: 4 },
});

await Promise.all([
  transparentSource
    .clone()
    .extract({ left: 0, top: 0, width: split, height: info.height })
    .png({ compressionLevel: 9 })
    .toFile(machinePath),
  transparentSource
    .clone()
    .extract({ left: split, top: 0, width: info.width - split, height: info.height })
    .png({ compressionLevel: 9 })
    .toFile(humanPath),
]);

const [machine, human] = await Promise.all([fs.stat(machinePath), fs.stat(humanPath)]);
console.log(`Prepared transparent hand assets: ${machine.size} + ${human.size} bytes`);
