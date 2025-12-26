<template>
  <div class="min-h-screen bg-[#07070D] text-white">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-gradient-to-br from-[#3D3DA4] via-[#07070D] to-[#6565C0] opacity-30"></div>
        <div class="particles-container">
          <div v-for="particle in particles" :key="particle.id" 
               class="particle"
               :style="getParticleStyle(particle)">
          </div>
        </div>
      </div>
      
      <!-- Hero Content -->
      <div class="relative z-10 text-center px-4">
        <h1 class="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
          <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
            Marcílio Alano Filho
          </span>
        </h1>
        <p class="text-xl md:text-3xl text-[#8282D5] mb-8 animate-fade-in-delay">
          Desenvolvedor Front-end
        </p>
        <div class="flex gap-4 justify-center animate-fade-in-delay-2">
          <button class="px-8 py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] rounded-lg hover:scale-105 transition-transform duration-300">
            Download CV
          </button>
          <button class="px-8 py-3 border-2 border-[#8282D5] rounded-lg hover:bg-[#8282D5] hover:bg-opacity-10 transition-all duration-300">
            Entre em Contato
          </button>
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
          <!-- Photo -->
          <div class="relative group">
            <div class="absolute inset-0 bg-gradient-to-r from-[#3D3DA4] to-[#8282D5] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity"></div>
            <div class="relative bg-[#07070D] p-4 rounded-2xl">
              <div class="w-full aspect-[4/5] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#3D3DA4] via-[#6565C0] to-[#8282D5]">
                <img 
                  :src="fotoPerfil" 
                  alt="Marcílio Alano Filho" 
                  class="foto-Perfil w-full h-full object-contain rounded-xl transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
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

    <!-- Habilidades Section -->
    <section id="skills" class="py-20 px-4">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
            Habilidades
          </span>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div v-for="skill in skills" :key="skill.name"
               class="group relative bg-gradient-to-br from-[#0a0a12] to-[#07070D] p-6 rounded-xl border border-[#3D3DA4] hover:border-[#8282D5] transition-all duration-300 hover:scale-105">
            <div class="absolute inset-0 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] opacity-0 group-hover:opacity-10 rounded-xl transition-opacity"></div>
            
            <div class="relative">
              <div class="flex items-center justify-between mb-4">
                <h3 class="text-xl font-semibold text-[#8282D5]">{{ skill.name }}</h3>
                <span class="text-2xl">{{ skill.icon }}</span>
              </div>
              
              <div class="w-full bg-[#07070D] rounded-full h-3 mb-2">
                <div class="h-3 rounded-full bg-gradient-to-r from-[#3D3DA4] to-[#8282D5] transition-all duration-1000"
                     :style="{ width: skill.level + '%' }">
                </div>
              </div>
              
              <p class="text-sm text-gray-400">{{ skill.level }}% Proficiência</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projetos Section -->
    <section id="projects" class="py-20 px-4 bg-gradient-to-b from-[#07070D] to-[#0a0a12]">
      <div class="max-w-6xl mx-auto">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
            Projetos
          </span>
        </h2>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="project in projects" :key="project.title"
               class="group relative bg-[#0a0a12] rounded-xl overflow-hidden border border-[#3D3DA4] hover:border-[#8282D5] transition-all duration-300 hover:scale-105">
            <div class="aspect-video bg-gradient-to-br from-[#3D3DA4] to-[#6565C0] relative overflow-hidden flex items-center justify-center">
              <span class="text-7xl opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300">{{ project.icon }}</span>
            </div>
            
            <div class="p-6">
              <h3 class="text-xl font-semibold text-[#8282D5] mb-2">{{ project.title }}</h3>
              <p class="text-gray-400 text-sm mb-4">{{ project.description }}</p>
              
              <div class="flex flex-wrap gap-2 mb-4">
                <span v-for="tech in project.tech" :key="tech"
                      class="px-3 py-1 text-xs bg-[#3D3DA4] bg-opacity-30 border border-[#6565C0] rounded-full">
                  {{ tech }}
                </span>
              </div>
              
              <div class="flex gap-4">
                <a href="#" class="text-[#8282D5] hover:text-[#6565C0] transition-colors text-sm">
                  Ver Demo →
                </a>
                <a href="#" class="text-[#8282D5] hover:text-[#6565C0] transition-colors text-sm">
                  Código →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Contato Section -->
    <section id="contact" class="py-20 px-4">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl font-bold text-center mb-16">
          <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
            Entre em Contato
          </span>
        </h2>

        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Form -->
          <div class="space-y-6">
            <div>
              <label class="block text-[#8282D5] mb-2">Nome</label>
              <input type="text" 
                     class="w-full px-4 py-3 bg-[#0a0a12] border border-[#3D3DA4] rounded-lg focus:border-[#8282D5] focus:outline-none transition-colors"
                     placeholder="Seu nome"/>
            </div>
            
            <div>
              <label class="block text-[#8282D5] mb-2">Email</label>
              <input type="email" 
                     class="w-full px-4 py-3 bg-[#0a0a12] border border-[#3D3DA4] rounded-lg focus:border-[#8282D5] focus:outline-none transition-colors"
                     placeholder="seu@email.com"/>
            </div>
            
            <div>
              <label class="block text-[#8282D5] mb-2">Mensagem</label>
              <textarea rows="5" 
                        class="w-full px-4 py-3 bg-[#0a0a12] border border-[#3D3DA4] rounded-lg focus:border-[#8282D5] focus:outline-none transition-colors resize-none"
                        placeholder="Sua mensagem..."></textarea>
            </div>
            
            <button class="w-full py-3 bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] rounded-lg hover:scale-105 transition-transform duration-300 font-semibold">
              Enviar Mensagem
            </button>
          </div>

          <!-- Contact Info -->
          <div class="space-y-6">
            <div class="flex items-center gap-4 p-4 bg-[#0a0a12] rounded-lg border border-[#3D3DA4]">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Email</p>
                <p class="text-[#8282D5]">marciliochu@gmail.com</p>
              </div>
            </div>
            
            <div class="flex items-center gap-4 p-4 bg-[#0a0a12] rounded-lg border border-[#3D3DA4]">
              <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6565C0] to-[#8282D5] flex items-center justify-center flex-shrink-0">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
              </div>
              <div>
                <p class="text-sm text-gray-400">Localização</p>
                <p class="text-[#8282D5]">Garopaba,SC, Brasil</p>
              </div>
            </div>

            <div class="flex gap-4 pt-6">
              <a href="#" class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] flex items-center justify-center hover:scale-110 transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] flex items-center justify-center hover:scale-110 transition-transform">
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
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

// Usar imagem da pasta public (mais confiável no Nuxt)
const fotoPerfil = '/foto-perfil.png'

const skills = ref([
  { name: 'Vue.js', level: 95, icon: '💚' },
  { name: 'Nuxt', level: 90, icon: '⚡' },
  { name: 'JavaScript', level: 92, icon: '🟨' },
  { name: 'TypeScript', level: 85, icon: '🔷' },
  { name: 'Tailwind CSS', level: 95, icon: '🎨' },
  { name: 'React', level: 80, icon: '⚛️' },
])

const projects = ref([
  {
    title: 'E-commerce Moderno',
    description: 'Plataforma de vendas com carrinho, checkout e dashboard admin.',
    tech: ['Vue 3', 'Nuxt', 'Tailwind'],
    icon: '🛒'
  },
  {
    title: 'Dashboard Analytics',
    description: 'Sistema de visualização de dados em tempo real com gráficos interativos.',
    tech: ['Vue', 'Chart.js', 'API'],
    icon: '📊'
  },
  {
    title: 'App de Tarefas',
    description: 'Gerenciador de projetos e tarefas com drag-and-drop.',
    tech: ['Nuxt 3', 'Pinia', 'Tailwind'],
    icon: '✅'
  },
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
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes float {
  0%, 100% { transform: translate(0, 0); }
  50% { transform: translate(var(--float-x), var(--float-y)); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

.animate-fade-in-delay {
  animation: fadeIn 1s ease-out 0.3s both;
}

.animate-fade-in-delay-2 {
  animation: fadeIn 1s ease-out 0.6s both;
}

.particle {
  position: absolute;
  background: radial-gradient(circle, #8282D5 0%, transparent 70%);
  border-radius: 50%;
  pointer-events: none;
  animation: float infinite ease-in-out;
  --float-x: calc(var(--random-x, 0) * 50px);
  --float-y: calc(var(--random-y, 0) * 50px);
}

.foto-Perfil {
  object-position: center;
  object-fit: contain;
}
</style>