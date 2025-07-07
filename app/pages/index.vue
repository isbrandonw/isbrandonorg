<template>
  <div>
    <!-- Navigation -->
    <UiNavbar sticky class="bg-background/80 backdrop-blur-sm border-b border-border/50">
      <div class="container flex items-center justify-between py-4">
        <div class="flex items-center space-x-2">
          <Icon name="lucide:terminal" class="h-6 w-6 text-primary" />
          <span class="text-xl font-bold text-foreground">{{ COMPANY_NAME }}</span>
        </div>
        <div class="flex items-center space-x-4">
          <UiButton variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground">
            Blog (coming soon)
          </UiButton>
          <UiButton variant="ghost" size="sm" class="text-muted-foreground hover:text-foreground">
            Projects
          </UiButton>
          <UiButton variant="outline" size="sm" class="border-primary/20 hover:border-primary/40" aria-label="Contact">
            Contact
          </UiButton>
        </div>
      </div>
    </UiNavbar>

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
import ContentBlogBlogpage from '~/components/content/blog/blogpage.vue';
import ContentHero from '~/components/content/hero.vue';
import ContentFeature from '~/components/content/feature.vue';
import ContentAbout from '~/components/content/about.vue';
import ContentContact from '~/components/content/contact.vue';

const { $config } = useNuxtApp();
const COMPANY_NAME = $config.public.COMPANY_NAME;

</script>
