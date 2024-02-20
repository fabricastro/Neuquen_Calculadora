<template>
  <header class="bg-main-color px-4 md:px-10 py-6 border-b-10 border-secondary-color flex justify-between items-center">
    <a href="https://www.neuquenpymes.com.ar">
      <img id="logo" src="@/assets/logo.svg" alt="" class="h-10" />
    </a>
    <img src="@/assets/icons/menu.svg" alt="Menu" class="h-10 width-auto md:hidden" id="menu-trigger" />
    <nav
      class="absolute left-0 top-0 md:relative z-10 opacity-0 pointer-events-none md:opacity-100 md:pointer-events-auto w-screen h-screen md:w-auto md:h-auto bg-main-color md:bg-transparent px-10 py-16 md:p-0 flex flex-col justify-between"
    >
      <img src="@/assets/icons/x.svg" alt="Close menu" class="h-10 width-auto hidden absolute right-4 top-7" id="close-menu" />
      <ul class="flex flex-col md:flex-row text-white text-xl md:text-sm xl:text-base uppercase font-bold tracking-wide">
        <li><a href="https://www.neuquenpymes.com.ar" class="transition duration-200 border-b-5 pb-1 border-transparent hover:border-secondary-color">Home</a></li>
        <li class="mt-10 md:mt-0 md:ml-8 xl:ml-12">
          <a href="https://www.neuquenpymes.com.ar/nosotros.html" class="transition duration-200 border-b-5 pb-1 border-transparent hover:border-secondary-color"
            >Nosotros</a
          >
        </li>
        <li class="mt-10 md:mt-0 md:ml-8 xl:ml-12">
          <a href="https://www.neuquenpymes.com.ar/#products" class="transition duration-200 border-b-5 pb-1 border-transparent hover:border-secondary-color"
            >Productos</a
          >
        </li>
        <li class="mt-10 md:mt-0 md:ml-8 xl:ml-12">
          <a href="https://www.neuquenpymes.com.ar/calculadora.html" class="border-b-5 pb-1 border-secondary-color">Calculadora</a>
        </li>
        <li class="mt-10 md:mt-0 md:ml-8 xl:ml-12">
          <a href="https://www.neuquenpymes.com.ar/preguntas.html" class="transition duration-200 border-b-5 pb-1 border-transparent hover:border-secondary-color"
            >Preguntas</a
          >
        </li>
        <li class="mt-10 md:mt-0 md:ml-8 xl:ml-12">
          <a href="https://www.neuquenpymes.com.ar/index.html#contact" class="transition duration-200 border-b-5 pb-1 border-transparent hover:border-secondary-color"
            >Contacto</a
          >
        </li>
        <li></li>
      </ul>
      <a href="/" class="block mt-16 md:hidden">
        <img id="logo" src="images/logo.svg" alt="" class="h-7" />
      </a>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Navbar',
}
</script>

<style lang="scss" scoped>
header {
  background: #092c40;
}
nav {
  font-family: 'Montserrat', sans-serif;
}
</style>
