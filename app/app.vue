<template>
  <div class="min-h-screen bg-[#07070D] text-white">
    <!-- Hero Section -->
    <section id="home" class="relative min-h-screen flex items-center justify-center overflow-hidden">
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
            href="https://wa.me/message/BYRF7JJBEGOBM1"
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
                   transition-all duration-300"
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
                   transition-all duration-300"
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
          <div class="space-y-4">
          <!-- Missão -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0]
                     flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-[#8282D5] mb-2">Missão</h3>
              <p class="text-gray-400">
                Aprender continuamente conforme as demandas dos projetos, aprimorando
                desempenho, produtividade e qualidade técnica para entregar soluções
                web eficientes e confiáveis.
              </p>
            </div>
          </div>

          <!-- Visão -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6565C0] to-[#8282D5]
                     flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M15 10l4.553-2.276A1 1 0 0121 8.618V15.382a1 1 0 01-1.447.894L15 14m-6 0H5a2 2 0 01-2-2V8a2 2 0 012-2h4m0 8v4m0-4V6" />
              </svg>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-[#8282D5] mb-2">Visão</h3>
              <p class="text-gray-400">
                Consolidar-me como desenvolvedor front-end, criando interfaces modernas,
                performáticas e bem estruturadas que facilitem a vida das pessoas e
                escalem com o produto.
              </p>
            </div>
          </div>

          <!-- Valores -->
          <div class="flex items-start gap-4">
            <div
              class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#8282D5]
                     flex items-center justify-center flex-shrink-0"
              aria-hidden="true"
            >
              <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2
                     3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2
                     m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <div>
              <h3 class="text-xl font-semibold text-[#8282D5] mb-2">Valores</h3>
              <p class="text-gray-400">
                Qualidade técnica, responsabilidade com o código, aprendizado contínuo,
                colaboração e foco em soluções simples que resolvem problemas reais.
              </p>
            </div>
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
const cvUrl = 'MARCÍLIO ALANO FILHOCV (3).pdf'
const linkedinUrl = 'https://www.linkedin.com/in/marcilio-filho1110/'
const githubUrl = 'https://github.com/MarcilioFilho12'
const fotoPerfil = 'video_1766790806011.mp4'
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