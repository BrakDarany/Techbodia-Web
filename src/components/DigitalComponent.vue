<template>
  <div class="banner-container flex flex-col items-center justify-center md:flex-row min-h-[90vh]">
    <div class="flex flex-col gap-4">
      <div class="
        customer-text inline-flex items-center justify-center
        py-1 rounded-full text-sm font-medium">
        Customer Satisfaction First
      </div>

      <div>
        <div class="main-heading">
          <span class="heading-dark">We Build</span>
          <span class="heading-gradient">Digital Future</span>
        </div>
      </div>

      <p class="description">
        Transforming ideas into powerful, tailor-made digital solutions.
        Architecting, building and securing the technology that empowering our global clients.
      </p>

      <div class="flex flex-col lg:flex-row lg:items-center gap-5 mt-3">
        <button class="apply-btn">
          Apply Now
          <img src="../assets/DigitalFuture/arrow-right.svg" alt="#" width="24">
        </button>
        <a href="#" class="culture-link">View Our Working Culture</a>
      </div>

      <div class="stats-section">
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Projects</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">50+</div>
          <div class="stat-label">Experts</div>
        </div>
        <div class="stat-item">
          <div class="stat-number">2</div>
          <div class="stat-label">Offices</div>
        </div>
      </div>
    </div>

    <div class="video-section">
      <div class="video-container">
        <div class="video-placeholder rounded-3xl">
          <button class="play-button">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.2"/>
              <path d="M19 16L19 32L32 24L19 16Z" fill="white"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.banner-container {
  padding: 4rem 2rem;
  gap: 2rem;
  background-color: #FAF7F9;
}

.banner-left {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.customer-text {
  background-color: #FDF2F8;
  color: #E91E63;
  width: 220px;
  margin-top: 73px;
}

.main-heading {
  font-size: 48px;
  font-weight: 700;
  line-height: 1.3;
  margin: 0;
  letter-spacing: -0.02em;
}

.heading-dark {
  display: block;
  color: #0F172A;
}

.heading-gradient {
  display: block;
  background-image: linear-gradient(to right, #E91E63, #9333EA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.description {
  font-size: 16px;
  color: #475569;
  line-height: 1.625;
  margin: 0;
  max-width: 520px;
}

.apply-btn {
  background: #E91E63;
  color: white;
  padding: 0.9rem;
  border: none;
  border-radius: 9999px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 8px 24px rgba(233, 30, 99, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  width: 170px;
}

.apply-btn:hover {
  transform: translateY(-2px);
  box-shadow: 0 12px 32px rgba(233, 30, 99, 0.4);
}

.culture-link {
  color: #0F172A;
  background-color: white;
  padding: 0.9rem 2rem;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: color 0.5s ease;
  border: 1px solid #E2E8F0;
  border-radius: 30px;
  width: 262px;
}

.culture-link:hover {
  color: #E91E63;
  border: 1px solid #E91E63;
}

.stats-section {
  display: flex;
  gap: 3rem;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 0.5px solid rgba(241, 245, 249, 1);
}

.stat-item {
  display: flex;
  flex-direction: column;
}

.stat-number {
  font-size: 1.875rem;
  font-weight: 700;
  color: #0F172A;
}

.stat-label {
  font-size: 0.875rem;
  color: #64748B;
}

.video-section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 208px;
  width: 512px;
}

.video-container {
  width: 382px;
  height: 215px;
  display: flex;
  flex-direction: column;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  background: #0F172A;
  border-radius: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

.play-button {
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
}

.play-button:hover {
  transform: scale(1.1);
}

.video-footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.3), transparent);
  color: white;
  font-size: 0.875rem;
}

.video-label {
  font-weight: 500;
}

.video-duration {
  font-size: 0.875rem;
  opacity: 0.9;
}

@media (min-width: 768px) {
  .banner-container {
    height: 92vh;
  }

  .main-heading {
    font-size: 70px;
  }

  .video-container{
    width: 588px;
    height: 270px;
  }

  .stats-section{
    border: none;
  }

  .customer-text{
    margin: 0px;
  }
}
</style>
