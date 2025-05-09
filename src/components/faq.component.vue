<script>
export default {
  name: "FAQ"
};
</script>

<template>
  <section class="faq-section">
    <div class="faq-left">
      <h2 class="faq-subtitle">{{ $t('faq.subtitle') }}</h2>
      <p class="faq-description">{{ $t('faq.description') }}</p>
    </div>
    <div class="faq-right">
      <h1 class="faq-title">{{ $t('faq.title') }}</h1>

      <div class="faq-item">
        <p class="faq-question">{{ $t('faq.questions.whoCanUse.question') }}</p>
        <p class="faq-answer">{{ $t('faq.questions.whoCanUse.answer') }}</p>
        <hr class="faq-divider" />
      </div>

      <div class="faq-item">
        <p class="faq-question">{{ $t('faq.questions.howToCoordinate.question') }}</p>
        <p class="faq-answer">{{ $t('faq.questions.howToCoordinate.answer') }}</p>
        <hr class="faq-divider" />
      </div>

      <div class="faq-item">
        <p class="faq-question">{{ $t('faq.questions.isItSafe.question') }}</p>
        <p class="faq-answer">{{ $t('faq.questions.isItSafe.answer') }}</p>
        <hr class="faq-divider" />
      </div>

      <div class="faq-item">
        <p class="faq-question">{{ $t('faq.questions.whereToDownload.question') }}</p>
        <p class="faq-answer">{{ $t('faq.questions.whereToDownload.answer') }}</p>
        <hr class="faq-divider" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  background-color: #0f0f0f;
  padding: 3rem 5%;
  color: #ffffff;
  flex-wrap: wrap;
}

.faq-left {
  max-width: 35%;
}

.faq-subtitle {
  font-size: 1.5rem;
  font-weight: bold;
  color: #00c9a7;
  margin-bottom: 0.5rem;
}

.faq-description {
  color: #6b7280; /* gris claro */
  font-weight: 500;
}

.faq-right {
  max-width: 60%;
}

.faq-title {
  font-size: 2rem;
  font-weight: bold;
  color: #d1d5db;
  text-align: center;
  margin-bottom: 1.5rem;
}

.faq-item {
  margin-bottom: 1.2rem;
}

.faq-question {
  color: #00c9a7;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.faq-answer {
  color: #9ca3af;
  font-size: 0.95rem;
  max-width: 85%;
}

.faq-divider {
  border: none;
  height: 1px;
  background-color: #e5e7eb;
  margin-top: 0.8rem;
}
</style>