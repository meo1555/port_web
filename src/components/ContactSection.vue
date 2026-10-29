
<template>
  <section id="contact" class="section contact-section">
    <div class="container">
      <div class="contact-box">
        <p class="section-label">CONTACT</p>
        <h2>Let's create something<br />meaningful.</h2>
        <p class="contact-description">
          หากสนใจผลงาน หรือต้องการติดต่อ สามารถส่งข้อความมาหาฉันได้
        </p>

        <a class="primary-button" :href="'mailto:' + email">
          ส่งอีเมล ↗
        </a>

        <p class="email-address">{{ email }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ContactSection',

  props: {
    email: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.contact-section {
  padding-top: 40px;
}

.contact-box {
  padding: 56px 24px;
  border: 1px solid var(--border);
  border-radius: 20px;
  background:
    radial-gradient(
      circle at 85% 15%,
      rgba(147, 91, 210, 0.2),
      transparent 35%
    ),
    var(--surface);
  text-align: center;
}

.contact-box h2 {
  margin: 14px 0;
  font-family: 'Space Grotesk', 'Kanit', sans-serif;
  font-size: clamp(30px, 5vw, 46px);
  line-height: 1.3;
}

.contact-description {
  max-width: 500px;
  margin: 0 auto 24px;
  color: var(--text-muted);
}

.email-address {
  margin: 18px 0 0;
  color: var(--text-muted);
  font-size: 13px;
  overflow-wrap: anywhere;
}
</style>
