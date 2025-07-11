<template>
    <UiContainer class="relative flex flex-col items-center justify-center min-h-[80vh] py-16 text-center lg:py-24">
      <!-- Animated background accent -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute -top-40 -right-32 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div class="absolute -bottom-40 -left-32 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      </div>
      
      <!-- Badge -->
      <div class="relative z-10 mb-8">
        <UiBadge variant="outline" class="px-4 py-2 text-sm font-medium bg-background/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-colors">
          <Icon class="mr-2 h-3 w-3" name="lucide:code" />
          Software Engineer & Technology Enthusiast
        </UiBadge>
      </div>
  
      <!-- Main heading -->
      <div class="relative z-10 max-w-4xl mx-auto">
        <h1 class="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl">
          Hi, I'm Brandon. 💎
        </h1>
        <!-- Profile Avatar -->
        <div class="relative z-10 mb-8 animate-fadeIn" style="animation-delay: 0.1s;">
          <div class="relative w-32 h-32 sm:w-40 sm:h-40 lg:w-48 lg:h-48 mx-auto">
            <UiAvatar class="w-full h-full border-4 border-primary/20 shadow-2xl hover:border-primary/40 transition-all duration-300 hover:scale-105">
              <UiAvatarImage src="/imgs/isbrandon-logo.png" alt="Brandon - Software Engineer" />
              <UiAvatarFallback class="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
                B
              </UiAvatarFallback>
            </UiAvatar>
            <!-- Decorative ring -->
            <div class="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping" style="animation-delay: 2s;"></div>
          </div>
        </div>
        <h2 class="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl py-4 my-6">
          <span class="bg-gradient-to-r from-white via-white/90 to-white/70 bg-clip-text text-transparent">
            Learn. Build.
          </span>
          <br />
          <span class="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent animate-fadeIn">
            Repeat.
          </span>
        </h2>
        
        <p class="mx-auto max-w-2xl text-xl text-muted-foreground lg:text-2xl leading-relaxed animate-fadeIn" style="animation-delay: 0.2s;">

          Ready to join innovative 
          projects, aiming to continuously grow my technical skills while making tangible contributions. 

        </p>
      </div>
  
      <!-- CTA Buttons -->
      <div class="relative z-10 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:mt-12 animate-fadeIn" style="animation-delay: 0.4s;">
        <UiButton
          as="a"
          href="#about"
          size="lg"
          class="group px-8 py-4 text-lg font-semibold bg-gradient-to-r from-zinc-900 to-zinc-800 text-white shadow-lg hover:from-zinc-800 hover:to-zinc-700 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-zinc-500/60 focus:ring-offset-2 border border-zinc-700"
          aria-label="Learn more about Brandon"
        >
          <Icon name="lucide:lightbulb" class="mr-2 h-5 w-5 group-hover:rotate-12 transition-transform" />
          About
          <Icon name="lucide:arrow-right" class="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
        </UiButton>
        <UiButton
          as="a"
          href="#contact"
          size="lg"
          variant="outline"
          class="group px-8 py-4 text-lg font-semibold border-primary/30 text-primary hover:border-primary/60 hover:bg-primary/5 transition-all duration-200 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2"
          aria-label="Contact Brandon"
        >
          <Icon name="lucide:mail" class="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
          Contact
        </UiButton>
      </div>

      <!-- Scroll indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="lucide:chevron-down" class="h-6 w-6 text-muted-foreground/60" />
      </div>
    </UiContainer>
  </template>
  
  <script lang="ts" setup>
import { useNuxtApp } from 'nuxt/app';
const { $config } = useNuxtApp();
const COMPANY_NAME = $config.public.COMPANY_NAME;
</script>
  