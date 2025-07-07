<template>
    <UiContainer class="grid grid-cols-1 gap-y-10 py-16 md:gap-8 md:py-24 lg:grid-cols-3">
      <div
        v-for="(f, i) in features"
        :key="i"
        class="group flex flex-col items-center justify-center"
      >
        <div class="flex h-12 w-12 items-center justify-center rounded-md border">
          <Icon
            :name="f.icon"
            class="h-5 w-5 transition-colors group-hover:text-primary lg:h-6 lg:w-6"
          />
        </div>
        <h3
          class="mt-4 text-balance text-center text-lg font-semibold lg:mt-5 lg:text-xl"
          v-html="f.title"
        />
        <p
          class="mt-1 max-w-[400px] text-balance text-center text-muted-foreground lg:mt-2 lg:max-w-none"
          v-html="f.description"
        />
      </div>
    </UiContainer>
  </template>
  
  <script lang="ts" setup>
const { $config } = useNuxtApp();
const COMPANY_NAME = $config.public.COMPANY_NAME;

    const features = [
      {
        icon: "lucide:code-2",
        title: "Full-Stack Development",
        description:
          "Continually learning how to build real projects from start to finish. Nuxt, Vue, and Node.js. ",
      },
      {
        icon: "lucide:users",
        title: "Technical Leadership",
        description:
          "Working together with other developers, learning from teammates, and understanding how to solve problems as a group.",
      },
      {
        icon: "lucide:lightbulb",
        title: "Knowledge Sharing",
        description: `Sharing what I learn, writing down helpful tips in Confluence, and supporting others makes my world go round.`,
      },
    ];
  </script>
  