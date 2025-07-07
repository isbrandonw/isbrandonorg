<template>
    <UiContainer class="grid grid-cols-1 gap-y-10 py-16 md:gap-8 md:py-24 lg:grid-cols-3">
      <div
        v-for="(f, i) in features"
        :key="i"
        class="group flex flex-col items-start rounded-xl border border-zinc-800 bg-zinc-900/60 p-6 shadow-sm transition hover:shadow-lg hover:border-primary"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mb-4">
          <Icon
            :name="f.icon"
            class="h-6 w-6 text-primary"
          />
        </div>
        <h3
          class="text-xl font-bold text-foreground mb-3"
          v-html="f.title"
        />
        <ul class="space-y-2 list-none pl-0 w-full">
          <li
            v-for="(point, idx) in f.description"
            :key="idx"
            class="flex items-start text-left text-muted-foreground"
          >
            <span class="mt-1 mr-2 flex-shrink-0">
              <Icon name='lucide:dot' class="h-4 w-4 text-primary" />
            </span>
            <span v-html="point" />
          </li>
        </ul>
      </div>
    </UiContainer>
  </template>
  
  <script lang="ts" setup>
const { $config } = useNuxtApp();
const COMPANY_NAME = $config.public.COMPANY_NAME;

type Feature = {
  icon: string;
  title: string;
  description: string[];
};

const features: Feature[] = [
  // Full-Stack Web Application Development
  {
    icon: "lucide:code-2",
    title: "Full-Stack Web Application Development",
    description: [
      "Passionate about building robust and scalable web applications from concept to deployment.",
      "Current tech stack: <b>Nuxt.js</b>, <b>Vue.js</b> for UI, <b>Node.js</b> for server-side logic.",
      "Exploring modern UI libraries like <b>Shadcn UI</b> and platforms like <b>Vercel</b> and <b>Netlify</b> for deployment."
    ]
  },
  // Embedded Systems and IoT Development
  {
    icon: "lucide:cpu",
    title: "Embedded Systems and IoT Development",
    description: [
      "Growing interest in embedded systems and the Internet of Things.",
      "Exploring development with <b>ESP32</b> SoC, <b>FreeRTOS</b>, and related toolchains.",
      "Learning how software interacts with the physical world to create innovative solutions."
    ]
  },
  // Entrepreneurial Drive & Problem Solving
  {
    icon: "lucide:briefcase",
    title: "Entrepreneurial Drive & Problem Solving",
    description: [
      "Strong entrepreneurial mindset and drive to launch new projects.",
      "Exploring small business resources and e-commerce strategies.",
      "Enjoy tackling challenges and finding creative solutions through code and innovation."
    ]
  }
];
  </script>
  