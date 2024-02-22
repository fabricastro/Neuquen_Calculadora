<template>
  <div id="app">
    <Navbar />
    <main class="xl:max-w-screen-xl lg:max-w-screen-lg mx-auto">
      <Home />
    </main>
    <footer class="py-16 bg-main-color">
      <div class="container px-5 md:px-5 md:mx-auto flex flex-col md:flex-row items-center md:justify-between">
        <img src="./assets/logo.svg" alt="Neuquén Pymes" class="h-10 w-auto mb-8 md:mb-0" />
        <div class="flex flex-col md:flex-row text-white">
          <div class="font-bold text-tight text-sm">Seguinos y enterate<br />de tips y novedades!</div>
          <ul class="flex items-center pt-5 md:pt-0 md:pl-5 md:ml-5 md:border-l-2 border-secondary-color">
            <li>
              <a href="https://ar.linkedin.com/company/neuquén-pymes-sgr" target="_blank">
                <img src="@/assets/icons/linkedin.svg" alt="Linkedin" class="h-8 md:h-6 mr-3" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/neuquenpymes" target="_blank">
                <img src="@/assets/icons/instagram-f.svg" alt="Instagram" class="h-8 md:h-6 mr-3" />
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com/neuquenpymessgr/" target="_blank">
                <img src="@/assets/icons/facebook.svg" alt="Facebook" class="h-8 md:h-6" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
    <a href="https://wa.me/5492994092129?text=%C2%A1Hola!%20Quisiera%20informaci%C3%B3n%20respecto%20a%20sus%20productos" id="contact-whatsapp" target="_blank">
      <img src="@/assets/icons/whatsapp-s.svg" alt="Whatsapp" />
    </a>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    Home,
  },
}
</script>

<style lang="scss">
body {
  overflow-x: hidden;
  background: #fff;
  opacity: 1;
  transition: 0.7s opacity;

  &.fade {
    opacity: 0;
    transition: none;
  }
}
</style>
