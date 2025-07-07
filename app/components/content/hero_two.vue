<template>
    <UiContainer class="flex flex-col gap-y-5 py-10 md:flex-row md:gap-10 md:py-0 lg:h-[720px]">
      <div class="flex h-full items-center justify-center md:w-2/3 xl:w-1/2">
        <div class="text-center md:text-left">
          <h1 class="mb-4 mt-7 text-4xl font-bold md:text-5xl lg:mb-6 lg:mt-5 xl:text-6xl">
            Software Engineering Insights
          </h1>
          <p class="text-lg text-muted-foreground lg:text-xl">
            Building full-stack, scalable applications and documenting the journey through web development, system design, and tech leadership.
          </p>
          <div class="mt-8 grid grid-cols-1 gap-3 md:flex lg:mt-12">
            <UiButton size="lg">EXPLORE ARTICLES</UiButton>
          </div>
        </div>
      </div>
      <div class="h-[350px] md:h-full md:w-1/3 xl:w-1/2">
        <!-- eslint-disable-next-line vue/html-self-closing -->
        <img
          class="h-full w-full object-cover lg:[clip-path:polygon(15%_0,100%_0,100%_100%,0_100%)]"
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Software Engineering Journey"
          loading="eager"
          width="700"
          height="800"
          :title="heroTitle"
        />
      </div>
    </UiContainer>
  </template>
  
  <script lang="ts" setup>
  import { computed } from 'vue';
  const config = useRuntimeConfig();

  const heroTitle = computed(() => `${config.public.COMPANY_NAME} - Software Engineering Journey`);
  </script>
  