<script>
export default {
  name: "footer.component"
}
</script>

<template>
  <footer class="footer">
    <h1 class="footer-title">UniRide</h1>
    <div class="links-container">
      <a href="#" class="footer-link">YouTube</a>
      <a href="mailto:example@uniride.com" class="footer-link">E-mail</a>
      <a href="#" class="footer-link">Instagram</a>
      <a href="#" class="footer-link">Tiktok</a>
      <a href="#" class="footer-link">Facebook</a>
    </div>
    <hr class="footer-line" />
    <p class="footer-copy">©2025 UniRide. Derechos reservados.</p>
  </footer>
</template>



<style scoped>
.footer {
  background-color: #facc15; /* bg-yellow-400 */
  padding: 1.5rem 0;
  border-radius: 1rem;
  text-align: center;
}

.footer-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937; /* text-gray-800 */
  margin-bottom: 1rem;
}

.links-container {
  display: flex;
  margin-left: 40%;
  margin-right: 40%;
  flex-direction: row;
  align-items: center;
  gap: 2rem;
  font-weight: 600;
}

.footer-link {
  text-decoration: none;
  color: #264653;
}

.footer-link:hover {
  text-decoration: underline;
}

.footer-line {
  border: none;
  height: 2px;
  width: 90%;
  margin: 1rem auto;
  background: linear-gradient(to right, #00c9a7, #a6f0c6);
}

.footer-copy {
  font-size: 0.875rem;
  color: #374151; /* text-gray-700 */
}

</style>