export function ContactSection() {
  return (
    <section className="content-section contact-section" id="contact" aria-labelledby="contact-title">
      <div className="section-index"><span>05</span><strong>联系我</strong><small>CONTACT</small></div>
      <article className="contact-paper">
        <span className="contact-eyebrow">LET&apos;S CREATE SOMETHING TOGETHER.</span>
        <div className="contact-intro">
          <h2 id="contact-title">吕诗云</h2>
          <p>Brand Designer / AIGC Visual Designer</p>
        </div>
        <p className="contact-note">期待有趣的合作，<br />一起创造有价值的视觉作品。</p>
        <address>
          <a href="tel:+8613207041860"><small>PHONE</small><span>+86 13207041860</span></a>
          <a href="mailto:3141900669@qq.com"><small>EMAIL</small><span>3141900669@qq.com</span></a>
          <div><small>WECHAT</small><span>g020806</span></div>
        </address>
        <span className="contact-thanks">Thank you!</span>
        <span className="contact-rule" aria-hidden="true" />
      </article>
    </section>
  );
}
