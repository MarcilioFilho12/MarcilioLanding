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

        <!-- Título com mask reveal -->
        <div class="reveal-mask mb-6">
          <h1 class="text-6xl md:text-8xl font-bold">
            <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
              Marcílio Alano Filho
            </span>
          </h1>
        </div>

        <div class="reveal-mask" style="--reveal-delay: 0.15s">
          <p class="text-xl md:text-3xl text-[#8282D5] mb-8">
            Front-end Developer | Vue · Nuxt · UI
          </p>
        </div>

        <!-- Botões com hover duplo -->
        <div class="reveal-mask flex flex-wrap gap-4 justify-center" style="--reveal-delay: 0.3s">

          <a :href="cvUrl" download class="btn" data-text="Download CV">
            <span class="btn-bg"></span>
            <span class="btn-inner" :data-text="'Download CV'">
              <span class="btn-text">Download CV</span>
            </span>
          </a>

          <a href="https://wa.me/message/BYRF7JJBEGOBM1" target="_blank" class="btn" data-text="Entre em Contato">
            <span class="btn-bg"></span>
            <span class="btn-inner" :data-text="'Entre em Contato'">
              <span class="btn-text">Entre em Contato</span>
            </span>
          </a>

          <a :href="linkedinUrl" target="_blank" class="btn" data-text="LinkedIn">
            <span class="btn-bg"></span>
            <span class="btn-inner" :data-text="'LinkedIn'">
              <span class="btn-text">LinkedIn</span>
            </span>
          </a>

          <a :href="githubUrl" target="_blank" class="btn" data-text="Github">
            <span class="btn-bg"></span>
            <span class="btn-inner" :data-text="'Github'">
              <span class="btn-text">Github</span>
            </span>
          </a>

        </div>
      </div>

      <!-- Scroll Indicator com efeito cometa -->
      <div class="scroll-indicator-wrap absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span class="text-[#8282D5]/50 text-xs tracking-widest uppercase">scroll</span>
        <div class="scroll-rail">
          <div class="scroll-comet"></div>
        </div>
      </div>

    </section>

    <!-- Sobre mim -->
    <section id="about" class="py-20 px-4 bg-gradient-to-b from-[#07070D] to-[#0a0a12]">
      <div class="max-w-6xl mx-auto">

        <div class="section-reveal mb-16">
          <h2 class="text-5xl font-bold text-center">
            <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
              Sobre mim
            </span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 gap-12 items-center">

          <!-- Vídeo -->
          <div class="section-reveal relative group" style="--reveal-delay: 0.1s">
            <div class="absolute inset-0 bg-gradient-to-r from-[#3D3DA4] to-[#8282D5] rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative bg-[#07070D] p-4 rounded-2xl">
              <div class="w-full aspect-[4/5] rounded-xl overflow-hidden relative bg-gradient-to-br from-[#3D3DA4] via-[#6565C0] to-[#8282D5]">
                <video
                  autoplay muted loop playsinline
                  class="foto-Perfil w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-105"
                >
                  <source :src="fotoPerfil" type="video/mp4" />
                  Seu navegador não suporta vídeo.
                </video>
              </div>
            </div>
          </div>

          <!-- Bio -->
          <div class="space-y-6">

            <div class="section-reveal bio-card" style="--reveal-delay: 0.15s">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#6565C0] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
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
            </div>

            <div class="section-reveal bio-card" style="--reveal-delay: 0.25s">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#6565C0] to-[#8282D5] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618V15.382a1 1 0 01-1.447.894L15 14m-6 0H5a2 2 0 01-2-2V8a2 2 0 012-2h4m0 8v4m0-4V6" />
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
            </div>

            <div class="section-reveal bio-card" style="--reveal-delay: 0.35s">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3D3DA4] to-[#8282D5] flex items-center justify-center flex-shrink-0" aria-hidden="true">
                  <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V6m0 12v-2m9-4a9 9 0 11-18 0 9 9 0 0118 0z" />
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
      </div>
    </section>

    <!-- O que eu sei construir -->
    <section class="py-20 px-4 bg-[#07070D]">
      <div class="max-w-5xl mx-auto">

        <div class="section-reveal mb-16">
          <h2 class="text-4xl font-bold text-center">
            <span class="bg-gradient-to-r from-[#8282D5] to-[#6565C0] bg-clip-text text-transparent">
              O que eu sei construir
            </span>
          </h2>
        </div>

        <ul class="grid gap-6 md:grid-cols-2">

          <li
            v-for="(item, i) in skills"
            :key="i"
            class="section-reveal skill-card group relative p-6 rounded-xl border border-[#3D3DA4]/40 bg-gradient-to-br from-[#0B0B16] to-[#07070D] transition-all duration-300 hover:-translate-y-1 hover:border-[#8282D5]/60 overflow-hidden"
            :style="`--reveal-delay: ${i * 0.1}s`"
          >
            <!-- Glow -->
            <div class="absolute inset-0 rounded-xl bg-[#6565C0]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <!-- Overlay escuro no hover (técnica do Ravi) -->
            <div class="card-overlay absolute inset-0 rounded-xl pointer-events-none"></div>

            <p class="relative text-gray-300 leading-relaxed" v-html="item"></p>
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
import { onMounted } from 'vue'

const cvUrl = '/curriculo-marcilio.pdf'
const linkedinUrl = 'https://www.linkedin.com/in/marcilio-filho1110/'
const githubUrl = 'https://github.com/MarcilioFilho12'
const fotoPerfil = 'video_1766790806011.mp4'

const skills = [
  'Interfaces modernas e responsivas com <span class="text-[#8282D5] font-medium">Vue</span> e <span class="text-[#8282D5] font-medium">Nuxt</span>',
  'Componentes reutilizáveis com foco em <span class="text-[#8282D5] font-medium">organização</span> e <span class="text-[#8282D5] font-medium">escalabilidade</span>',
  'Integração com <span class="text-[#8282D5] font-medium">APIs REST</span> e consumo de dados assíncronos',
  'Layouts <span class="text-[#8282D5] font-medium">acessíveis</span>, limpos e orientados à experiência do usuário',
]

onMounted(() => {
  // Reveal inicial (hero) — dispara imediatamente
  document.querySelectorAll('.reveal-mask').forEach((el) => {
    el.classList.add('is-visible')
  })

  // Scroll reveal para elementos .section-reveal
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.15 },
  )

  document.querySelectorAll('.section-reveal').forEach((el) => observer.observe(el))
})
</script>

<style scoped>

/* ─── Starfield ─────────────────────────────────────── */
@keyframes drift {
  from { transform: translate3d(0, 0, 0); }
  to   { transform: translate3d(-300px, -600px, 0); }
}
@keyframes twinkle {
  from { opacity: 0.4; }
  to   { opacity: 1; }
}
.stars {
  position: absolute;
  inset: -200px;
  background-repeat: repeat;
  animation: drift linear infinite, twinkle ease-in-out infinite alternate;
}
.layer-1 {
  background-image:
    radial-gradient(1px 1px at 20% 30%, #ffffff88 50%, transparent 100%),
    radial-gradient(1px 1px at 80% 70%, #ffffff55 50%, transparent 100%);
  background-size: 600px 600px;
  animation-duration: 180s, 6s;
  opacity: 0.4;
}
.layer-2 {
  background-image:
    radial-gradient(1.5px 1.5px at 10% 40%, #b8b8ff 50%, transparent 100%),
    radial-gradient(1.5px 1.5px at 60% 80%, #d0d0ff 50%, transparent 100%);
  background-size: 400px 400px;
  animation-duration: 120s, 4s;
  opacity: 0.6;
}
.layer-3 {
  background-image:
    radial-gradient(2px 2px at 50% 50%, #ffffff 50%, transparent 100%),
    radial-gradient(2px 2px at 90% 20%, #e0e0ff 50%, transparent 100%);
  background-size: 250px 250px;
  animation-duration: 80s, 3s;
  opacity: 0.8;
}

/* ─── Vídeo de perfil ───────────────────────────────── */
.foto-Perfil {
  object-position: center 30%;
  object-fit: contain;
}

/* ─── Reveal mask (hero — dispara imediato) ─────────── */
.reveal-mask {
  overflow: hidden;
  clip-path: inset(0% 0% 100% 0%);
  transition: clip-path 0.75s cubic-bezier(0.625, 0.05, 0, 1);
  transition-delay: var(--reveal-delay, 0s);
}
.reveal-mask.is-visible {
  clip-path: inset(0% 0% 0% 0%);
}

/* ─── Scroll reveal (seções) ────────────────────────── */
.section-reveal {
  opacity: 0;
  transform: translateY(2rem);
  transition:
    opacity 0.7s cubic-bezier(0.625, 0.05, 0, 1),
    transform 0.7s cubic-bezier(0.625, 0.05, 0, 1);
  transition-delay: var(--reveal-delay, 0s);
}
.section-reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* ─── Botões com hover duplo ────────────────────────── */
.btn {
  position: relative;
  display: inline-flex;
  overflow: hidden;
  padding: 0.75rem 2rem;
  border-radius: 0.5rem;
  font-weight: 500;
  background: linear-gradient(to right, #3D3DA4, #6565C0);
  color: white;
  text-decoration: none;
  transition: transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s;
}
.btn:hover {
  box-shadow: 0 8px 30px #6565C040;
  transform: scale(0.97);
}
.btn:active {
  transform: scale(0.94);
}

.btn-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(to right, #5252c0, #8282D5);
  opacity: 0;
  transition: opacity 0.3s;
}
.btn:hover .btn-bg {
  opacity: 1;
}

.btn-inner {
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  overflow: hidden;
}

/* Texto duplicado via ::after + data-text */
.btn-inner::after {
  content: attr(data-text);
  display: block;
  grid-area: 1 / 1;
  clip-path: inset(0% 0% 100% 0%);
  translate: 0 -0.3em;
  scale: 1.05;
  transform-origin: top center;
  transition:
    clip-path 0.4s cubic-bezier(0.32, 0.72, 0, 1),
    scale 0.3s cubic-bezier(0.34, 2.27, 0.64, 1),
    translate 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}
.btn-text {
  display: block;
  grid-area: 1 / 1;
  clip-path: inset(0% 0% 0% 0%);
  translate: 0 0;
  scale: 1;
  transform-origin: bottom center;
  transition:
    clip-path 0.4s cubic-bezier(0.32, 0.72, 0, 1),
    scale 0.3s cubic-bezier(0.34, 2.27, 0.64, 1),
    translate 0.35s cubic-bezier(0.32, 0.72, 0, 1);
}

@media (hover: hover) and (pointer: fine) {
  .btn:hover .btn-inner::after {
    clip-path: inset(0% 0% 0% 0%);
    scale: 1;
    translate: 0 0;
    transition-delay: 0.05s;
  }
  .btn:hover .btn-text {
    clip-path: inset(100% 0% 0% 0%);
    translate: 0 0.3em;
    scale: 0.95;
  }
}

/* ─── Scroll indicator (cometa) ─────────────────────── */
.scroll-rail {
  position: relative;
  width: 1px;
  height: 6rem;
  background: color-mix(in srgb, #8282D5 30%, transparent);
  overflow: hidden;
}
.scroll-comet {
  position: absolute;
  left: 50%;
  top: 0;
  width: 9px;
  height: 1.6em;
  background: rgba(130, 130, 213, 0.9);
  clip-path: polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%);
  animation: scroll-comet 2.4s cubic-bezier(0.7, 0.05, 0.13, 1) infinite;
  will-change: transform, opacity, clip-path;
}

@keyframes scroll-comet {
  0% {
    transform: translate(-50%, -160%) scaleY(0.8);
    opacity: 0;
    clip-path: polygon(20% 0%, 80% 0%, 80% 100%, 20% 100%);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, -100%) scaleY(0.95);
  }
  55% {
    transform: translate(-50%, 260%) scaleY(1.8);
    clip-path: polygon(28% 0%, 72% 0%, 90% 22%, 82% 100%, 18% 100%, 10% 22%);
  }
  80% {
    transform: translate(-50%, 520%) scaleY(1);
    opacity: 1;
    clip-path: polygon(16% 0%, 84% 0%, 84% 100%, 16% 100%);
  }
  100% {
    transform: translate(-50%, 620%) scaleY(0.5);
    opacity: 0;
  }
}

/* ─── Cards overlay hover ───────────────────────────── */
.card-overlay {
  background: rgba(0, 0, 0, 0);
  transition: background 0.4s ease;
}
.skill-card:hover .card-overlay {
  background: rgba(0, 0, 0, 0.08);
}

/* ─── Bio cards ─────────────────────────────────────── */
.bio-card {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid transparent;
  transition: border-color 0.3s;
}
.bio-card:hover {
  border-color: #3D3DA4;
}
</style>
