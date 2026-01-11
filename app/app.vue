<template>
  <div class="min-h-screen bg-[#07070D] text-white">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
 
     <!-- Starfield Background -->
<!-- Starfield Background -->
<div class="absolute inset-0 overflow-hidden pointer-events-none">
  <div class="stars layer-1"></div>
  <div class="stars layer-2"></div>
  <div class="stars layer-3"></div>
</div>

      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4">
        <h1 class="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
            Marcílio Alano Filho
          </span>
        </h1>
        <p class="text-xl md:text-3xl text-[#8282D5] mb-8 animate-fade-in-delay">
          Front-end Developer | Vue · Nuxt · UI
        </p>
        <div class="flex flex-wrap gap-4 justify-center animate-fade-in-delay-2">

<!-- Download CV -->
<a
  :href="cvUrl"
  download
  class="px-8 py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0]
         rounded-lg font-medium
         hover:scale-105 hover:shadow-xl
         transition-all duration-300"
>
  Download CV
</a>

<!-- WhatsApp -->
<a
:href="`https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent('Olá Marcílio, vim pelo seu portfólio')}`"
  target="_blank"
  class="px-8 py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0]
         rounded-lg font-medium
         hover:scale-105 hover:shadow-xl
         transition-all duration-300"
>
  Entre em Contato
</a>

<!-- LinkedIn -->
<a
  :href="linkedinUrl"
  target="_blank"
  class="px-8 py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0]
         rounded-lg font-medium
         hover:scale-105 hover:shadow-xl
         transition-all duration-300""
>
  LinkedIn
</a>

<!-- Github -->
<a
  :href="githubUrl"
  target="_blank"
  class="px-8 py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0]
         rounded-lg font-medium
         hover:scale-105 hover:shadow-xl
         transition-all duration-300""
>
  Github
</a>

</div>
        
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg class="w-6 h-6 text-[#8282D5]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>

    <!-- Quem Sou Section -->
    <section id="about" class="py-20 px-4 bg-gradient-to-b from-[#07070D] to-[#0a0a12]">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-5xl font-bold text-center mb-16">
      <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
        Sobre mim
      </span>
    </h2>

    <div class="grid md:grid-cols-2 gap-12 items-center">
      <!-- Video -->
      <div class="relative group">
        <div class="absolute inset-0 bg-gradient-to-r from-[#3D3DA4] to-[#8282D5] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>

        <div class="relative bg-[#07070D] p-4 rounded-2xl">
          <div class="w-full aspect-[4/5] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#3D3DA4] via-[#6565C0] to-[#8282D5]">
            
            <video
              autoplay
              muted
              loop
              playsinline
              class="foto-Perfil w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
            >
              <source :src="fotoPerfil" type="video/mp4" />
              Seu navegador não suporta vídeo.
            </video>

          </div>
        </div>
      </div>


          <!-- Bio -->
          <div class="space-y-6">
            <p class="text-lg text-gray-300 leading-relaxed">
              Olá! Sou um desenvolvedor front-end apaixonado por criar experiências digitais incríveis. 
              Com expertise em Vue.js, Nuxt e Tailwind CSS, transformo ideias em interfaces elegantes e funcionais.
            </p>
            
            <div class="space-y-4">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#8282D5] mb-2">Missão</h3>
                  <p class="text-gray-400">Criar soluções web inovadoras que impactam positivamente a vida das pessoas.</p>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6565C0] to-[#8282D5] flex items-center justify-center flex-shrink-0">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-semibold text-[#8282D5] mb-2">Valores</h3>
                  <p class="text-gray-400">Excelência técnica, design centrado no usuário e aprendizado contínuo.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="skills" class="py-20 px-4">
  <div class="max-w-6xl mx-auto">
    <h2 class="text-5xl font-bold text-center mb-16">
      <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
        Habilidades
      </span>
    </h2>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="skill in skills"
        :key="skill.name"
        class="group relative p-6 rounded-xl 
               bg-gradient-to-br from-[#E8E8FF] to-[#DADAFF]
               border border-white/70
               shadow-lg hover:shadow-xl
               transition-all duration-300 hover:-translate-y-1"
      >
        <!-- brilho sutil -->
        <div class="absolute inset-0 rounded-xl bg-white opacity-0 group-hover:opacity-10 transition-opacity"></div>

        <div class="relative flex flex-col items-center text-center gap-4">
          
          <!-- Ícone -->
          <div
            class="flex items-center justify-center w-14 h-14 rounded-xl
                   bg-white border border-white shadow-md
                   group-hover:scale-110 transition-transform duration-300"
          >
            <img
              :src="skill.icon"
              :alt="skill.name"
              class="w-8 h-8 object-contain"
            />
          </div>

          <!-- Nome -->
          <h3 class="text-lg font-semibold text-[#2A2A5E]">
            {{ skill.name }}
          </h3>

          <!-- Categoria -->
          <span class="text-xs uppercase tracking-wider text-[#4B4BA6]">
            {{ skill.category }}
          </span>

        </div>
      </div>
    </div>
  </div>
</section>


<!-- O que eu sei construir -->
<section class="py-20 px-4 bg-[#07070D]">
  <div class="max-w-5xl mx-auto">

    <h2 class="text-4xl font-bold text-center mb-16">
      <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
        O que eu sei construir
      </span>
    </h2>

    <ul class="grid gap-6 md:grid-cols-2">
      
      <!-- Card -->
      <li
        class="group relative p-6 rounded-xl
               border border-[#3D3DA4]/40
               bg-gradient-to-br from-[#0B0B16] to-[#07070D]
               transition-all duration-300
               hover:-translate-y-1 hover:border-[#8282D5]/60"
      >
        <!-- Glow sutil -->
        <div class="absolute inset-0 rounded-xl bg-[#6565C0]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <p class="relative text-gray-300 leading-relaxed">
          Interfaces modernas e responsivas com <span class="text-[#8282D5] font-medium">Vue</span> e <span class="text-[#8282D5] font-medium">Nuxt</span>
        </p>
      </li>

      <li
        class="group relative p-6 rounded-xl
               border border-[#3D3DA4]/40
               bg-gradient-to-br from-[#0B0B16] to-[#07070D]
               transition-all duration-300
               hover:-translate-y-1 hover:border-[#8282D5]/60"
      >
        <div class="absolute inset-0 rounded-xl bg-[#6565C0]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <p class="relative text-gray-300 leading-relaxed">
          Componentes reutilizáveis com foco em <span class="text-[#8282D5] font-medium">organização</span> e <span class="text-[#8282D5] font-medium">escalabilidade</span>
        </p>
      </li>

      <li
        class="group relative p-6 rounded-xl
               border border-[#3D3DA4]/40
               bg-gradient-to-br from-[#0B0B16] to-[#07070D]
               transition-all duration-300
               hover:-translate-y-1 hover:border-[#8282D5]/60"
      >
        <div class="absolute inset-0 rounded-xl bg-[#6565C0]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <p class="relative text-gray-300 leading-relaxed">
          Integração com <span class="text-[#8282D5] font-medium">APIs REST</span> e consumo de dados assíncronos
        </p>
      </li>

      <li
        class="group relative p-6 rounded-xl
               border border-[#3D3DA4]/40
               bg-gradient-to-br from-[#0B0B16] to-[#07070D]
               transition-all duration-300
               hover:-translate-y-1 hover:border-[#8282D5]/60"
      >
        <div class="absolute inset-0 rounded-xl bg-[#6565C0]/5 opacity-0 group-hover:opacity-100 transition-opacity"></div>

        <p class="relative text-gray-300 leading-relaxed">
          Layouts <span class="text-[#8282D5] font-medium">acessíveis</span>, limpos e orientados à experiência do usuário
        </p>
      </li>

    </ul>
  </div>
</section>

   

    <!-- Footer -->
    <footer class="py-8 px-4 border-t border-[#3D3DA4]">
      <div class="max-w-6xl mx-auto text-center text-gray-400">
        <p>© 2025 Desenvolvido por Marcílio Alano Filho com Vue.js & Tailwind CSS</p>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'


const cvUrl = 'MARCÍLIO ALANO FILHOCV.pdf' // <-- coloque seu arquivo aqui
const whatsappNumber = '5548996385461' // <-- coloque seu número aqui
const linkedinUrl = 'https://www.linkedin.com/in/marcilio-filho1110/'
const githubUrl = 'https://github.com/MarcilioFilho12'
// Usar imagem da pasta public (mais confiável no Nuxt)
const fotoPerfil = 'video_1766790806011.mp4'


function openWhatsApp() {
  const message = `
Olá! 👋
Vi seu portfólio e gostaria de conversar.
`.trim()

  const encodedMessage = encodeURIComponent(message)

  const url = `whatsapp://send?phone=${whatsappNumber}&text=${encodedMessage}`

  window.location.href = url
}


const skills = ref([
  { name: 'Vue.js', icon: '/icons/vuedotjs.svg', category: 'Framework' },
  { name: 'Nuxt 3', icon: '/icons/nuxt.svg', category: 'Framework' },
  { name: 'JavaScript (ES6+)', icon: '/icons/javascript.svg', category: 'Core' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'Core' },
  { name: 'Tailwind CSS', icon: '/icons/tailwindcss.svg', category: 'Styling' },
  { name: 'React', icon: '/icons/react.svg', category: 'Framework' }
])



// Criar partículas com valores fixos (gerados uma única vez)
const particles = ref([])

onMounted(() => {
  particles.value = Array.from({ length: 20 }, (_, i) => {
    const size = Math.random() * 4 + 2
    const x = Math.random() * 100
    const y = Math.random() * 100
    const duration = Math.random() * 20 + 10
    const delay = Math.random() * 5
    const randomX = (Math.random() - 0.5) * 2
    const randomY = (Math.random() - 0.5) * 2
    
    return {
      id: i,
      size: `${size}px`,
      left: `${x}%`,
      top: `${y}%`,
      duration: `${duration}s`,
      delay: `${delay}s`,
      randomX,
      randomY
    }
  })
})

const getParticleStyle = (particle) => {
  if (!particle) return {}
  
  return {
    width: particle.size,
    height: particle.size,
    left: particle.left,
    top: particle.top,
    animationDuration: particle.duration,
    animationDelay: particle.delay,
    '--random-x': particle.randomX,
    '--random-y': particle.randomY
  }
}
</script>


<style scoped>

@keyframes drift {
  from {
    transform: translate3d(0, 0, 0);
  }
  to {
    transform: translate3d(-300px, -600px, 0);
  }
}

@keyframes twinkle {
  from {
    opacity: 0.4;
  }
  to {
    opacity: 1;
  }
}
.stars {
  position: absolute;
  inset: -200px;
  background-repeat: repeat;
  animation: drift linear infinite, twinkle ease-in-out infinite alternate;
}

/* Camada mais distante */
.layer-1 {
  background-image: radial-gradient(1px 1px at 20% 30%, #ffffff88 50%, transparent 100%),
                    radial-gradient(1px 1px at 80% 70%, #ffffff55 50%, transparent 100%);
  background-size: 600px 600px;
  animation-duration: 180s, 6s;
  opacity: 0.4;
}

/* Camada média */
.layer-2 {
  background-image: radial-gradient(1.5px 1.5px at 10% 40%, #b8b8ff 50%, transparent 100%),
                    radial-gradient(1.5px 1.5px at 60% 80%, #d0d0ff 50%, transparent 100%);
  background-size: 400px 400px;
  animation-duration: 120s, 4s;
  opacity: 0.6;
}

/* Camada próxima */
.layer-3 {
  background-image: radial-gradient(2px 2px at 50% 50%, #ffffff 50%, transparent 100%),
                    radial-gradient(2px 2px at 90% 20%, #e0e0ff 50%, transparent 100%);
  background-size: 250px 250px;
  animation-duration: 80s, 3s;
  opacity: 0.8;
}

.foto-Perfil {
  object-position: center 30%;
  object-fit: contain;
}
</style>