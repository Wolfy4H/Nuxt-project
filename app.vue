<template>
  <div>
    <!-- Navigatiebalk -->
    <header class="bg-gradient-to-r from-[#D7AED3] to-[#4B5563] text-white p-7">
      <nav class="flex justify-between items-center">
        <!-- Logo of Titel -->
        <div class="text-2xl font-bold">Logo</div>

        <!-- Navigatie menu (altijd zichtbaar op desktop, verborgen op mobiel) -->
        <ul class="hidden md:flex space-x-6">
          <li><NuxtLink to="/" class="font-bold text-2xl hover:text-gray-400">Home</NuxtLink></li>
          <li><NuxtLink to="/about" class="font-bold text-2xl hover:text-gray-400">About</NuxtLink></li>
          <li><NuxtLink to="/contact" class="font-bold text-2xl hover:text-gray-400">Contact</NuxtLink></li>
        </ul>

        <!-- Hamburger-menu knop (zichtbaar op kleine schermen) -->
        <button 
          @click="toggleMenu" 
          class="md:hidden text-white focus:outline-none"
        >
          <svg 
            class="w-8 h-8" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        <!-- Uitklapbaar menu voor mobiel -->
        <div 
          class="absolute md:hidden top-20 left-0 w-full bg-[#4B5563] p-5 transition-all duration-300"
          :class="{'hidden': !isOpen, 'block': isOpen}"
        >
          <ul class="flex flex-col space-y-4">
            <li><NuxtLink to="/" class="font-bold text-2xl hover:text-gray-400">Home</NuxtLink></li>
            <li><NuxtLink to="/about" class="font-bold text-2xl hover:text-gray-400">About</NuxtLink></li>
            <li><NuxtLink to="/contact" class="font-bold text-2xl hover:text-gray-400">Contact</NuxtLink></li>
          </ul>

          <!-- Login en Water-knoppen in het mobiele menu -->
          <div class="flex flex-col mt-4 space-y-4">
            <Water />
            <Login />
          </div>
        </div>

        <!-- Knoppen (Login + Water) altijd zichtbaar op desktop -->
        <div class="hidden md:flex space-x-4">
          <Water />
          <Login />
        </div>
      </nav>
    </header>

    <!-- De daadwerkelijke pagina's worden hier geladen -->
    <NuxtPage />
  </div>
</template>

<script>
import { ref } from 'vue'
import Login from '@/components/Login.vue'
import Water from '@/components/Water.vue'
</script>
