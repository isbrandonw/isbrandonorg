<template>
  <div>
    <!-- Hero Section -->
    <ContentHero />

    <!-- Features Section -->
    <ContentFeature />

    <UiGradientDivider class="container my-16" />

    <!-- About Section -->
    <ContentAbout />

    <UiGradientDivider class="container my-16" />

    <!-- TODO: Review best implementation of blog section -->

    <UiGradientDivider class="container my-16" />

    <!-- Contact Section -->
    <ContentContact />
  </div>
</template>

<script setup lang="ts">
import { useNuxtApp } from 'nuxt/app';
// Remove explicit component imports; Nuxt auto-imports components from components/ directory

const { $config } = useNuxtApp();
const COMPANY_NAME = $config.public.COMPANY_NAME;
</script>
