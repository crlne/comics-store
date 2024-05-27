<template>
  <footer class="footer">
    <div class="newsletter-section">
      <div class="image-container">
        <img src="@/assets/footer.png" alt="Newsletter" class="footer-image" />
        <div class="overlay">
          <h2 class="newsletter-text">Resgate o nerd dentro de você assinando nossa newsletter</h2>
          <div class="newsletter-signup">
            <input type="email" placeholder="Digite seu email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-info">
      <h1 class="footer-title">Comics Store</h1>
      <p>&copy; 2024 Comics Store. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'ComicsFooter',
};
</script>

<style scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
  background-color: black;
  color: white;
}

.newsletter-section {
  width: 100%;
  text-align: center;
  position: relative;
  margin-bottom: 0;
  overflow: hidden;
}

.image-container {
  position: relative;
  width: 100%;
  height: 60vh; 
  max-height: 60vh;
  overflow: hidden;
}

.footer-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
}

.newsletter-text {
  font-family: 'Bangers', cursive;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #000;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.newsletter-signup {
  display: flex;
  justify-content: center;
  margin-top: 1rem;
}

.newsletter-signup input {
  padding: 0.5rem;
  font-size: 1rem;
  border: 2px solid #000;
  border-radius: 4px;
  width: 300px;
  margin-right: 20px;
}

.newsletter-signup input:focus {
  outline: none; 
  border-color: #ff4500;
  box-shadow: 0 0 5px #ff4500;
}

.newsletter-signup button {
  padding: 0.5rem;
  font-size: 1rem;
  background-color: yellow;
  border: 2px solid #000;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

.newsletter-signup button:hover {
   background-color: #000;
   color: #fff;
   box-shadow: 0 0 10px rgba(255, 69, 0, 0.5);
}

.footer-info {
  width: 100%;
  text-align: left;
  padding: 1rem;
}

.footer-title {
  font-family: 'Bangers', cursive;
  font-size: 1.5rem;
  margin: 0;
  color: white;
}

.footer-info p {
  margin: 0.5rem 0;
  text-align: center;
}
</style>
