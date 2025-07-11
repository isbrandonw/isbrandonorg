<template>
  <div>
    <UiNavbar sticky class="backdrop-blur-lg bg-background/80 border-b border-border/50 shadow-md">
      <UiContainer class="flex h-16 items-center justify-between">
        <!-- Brand/Logo -->
        <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold text-foreground hover:text-primary transition-colors focus:outline-none" aria-label="Home">
          <Icon name="lucide:terminal" class="h-6 w-6 text-primary" />
          <span class="hidden sm:inline">{{ siteName }}</span>
        </NuxtLink>

        <!-- Navigation Menu -->
        <nav class="flex-1 flex justify-center">
          <UiNavigationMenu class="hidden md:flex">
            <UiNavigationMenuList>
              <UiNavigationMenuItem>
                <UiNavigationMenuLink as="NuxtLink" to="/" class="nav-link">Home</UiNavigationMenuLink>
              </UiNavigationMenuItem>
              <UiNavigationMenuItem>
                <UiNavigationMenuLink
                  href="#about"
                  class="nav-link"
                  @click.prevent="handleNav('about')"
                  role="button"
                  tabindex="0"
                  aria-label="About"
                >About</UiNavigationMenuLink>
              </UiNavigationMenuItem>
              <UiNavigationMenuItem>
                <UiNavigationMenuLink 
                  href="https://isbrandon.info" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  class="nav-link"
                >Blog</UiNavigationMenuLink>
              </UiNavigationMenuItem>
              <!-- Remove Projects, add GitHub -->
              <UiNavigationMenuItem>
                <UiNavigationMenuLink
                  href="https://github.com/isbrandonw"
                  target="_blank"
                  rel="noopener noreferrer"
                  class="nav-link flex items-center gap-2"
                  aria-label="GitHub"
                >
                  <Icon name="lucide:github" class="h-5 w-5" />
                  <span class="hidden sm:inline">GitHub</span>
                </UiNavigationMenuLink>
              </UiNavigationMenuItem>
              <UiNavigationMenuItem>
                <UiNavigationMenuLink
                  href="#contact"
                  class="nav-link"
                  @click.prevent="handleNav('contact')"
                  role="button"
                  tabindex="0"
                  aria-label="Contact"
                >Contact</UiNavigationMenuLink>
              </UiNavigationMenuItem>
            </UiNavigationMenuList>
          </UiNavigationMenu>
        </nav>

        <!-- Actions: Theme Switcher & GitHub -->
        <div class="flex items-center gap-2">
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton class="h-9 w-9" variant="ghost" size="icon" title="Theme switcher" aria-label="Theme switcher">
                <span class="sr-only">Theme switcher</span>
                <Icon :name="currentIcon || 'lucide:sun'" class="h-[18px] w-[18px]" />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="end" :side-offset="5">
              <UiDropdownMenuItem
                class="cursor-pointer"
                v-for="(m, i) in modes"
                :key="i"
                :icon="m.icon"
                :title="m.title"
                @click="handleSetTheme(m.value)"
              />
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>

        <!-- Mobile Hamburger -->
        <div class="md:hidden flex items-center">
          <UiDropdownMenu>
            <UiDropdownMenuTrigger as-child>
              <UiButton variant="ghost" size="icon" aria-label="Open navigation menu">
                <Icon name="lucide:menu" class="h-6 w-6" />
              </UiButton>
            </UiDropdownMenuTrigger>
            <UiDropdownMenuContent align="end" :side-offset="5">
              <UiDropdownMenuItem as="NuxtLink" to="/" title="Home" icon="lucide:home" />
              <UiDropdownMenuItem
                title="About"
                icon="lucide:user"
                @click="handleNav('about')"
                role="button"
                tabindex="0"
                aria-label="About"
              />
              <UiDropdownMenuItem 
                title="Blog" 
                icon="lucide:book-open" 
                @click="handleBlogNav"
                role="button"
                tabindex="0"
                aria-label="Blog"
              />
              <!-- Remove Projects, add GitHub -->
              <UiDropdownMenuItem
                title="GitHub"
                icon="lucide:github"
                @click="handleGithubNav"
                role="button"
                tabindex="0"
                aria-label="GitHub"
              />
              <UiDropdownMenuItem
                title="Contact"
                icon="lucide:mail"
                @click="handleNav('contact')"
                role="button"
                tabindex="0"
                aria-label="Contact"
              />
            </UiDropdownMenuContent>
          </UiDropdownMenu>
        </div>
      </UiContainer>
    </UiNavbar>
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { useColorMode } from '@vueuse/core';
import { useNuxtApp, useRoute, useRouter } from 'nuxt/app';
import { computed, nextTick } from 'vue';

const modes = [
  { icon: "lucide:sun", title: "Light", value: "light" },
  { icon: "lucide:moon", title: "Dark", value: "dark" },
  { icon: "lucide:laptop", title: "System", value: "auto" },
];

const colorMode = useColorMode();
const setTheme = (val: 'light' | 'dark' | 'auto') => {
  colorMode.value = val;
};
const handleSetTheme = (val: string) => {
  setTheme(val as 'light' | 'dark' | 'auto');
};

const currentIcon = computed(() => {
  return modes.find((m) => m.value === colorMode.value)?.icon;
});

// Use Nuxt config if available, otherwise fallback
let siteName = 'isbrandon.org';
const { $config } = useNuxtApp();
if ($config?.public?.COMPANY_NAME) {
  siteName = String($config.public.COMPANY_NAME);
}

const route = useRoute();
const router = useRouter();

const handleNav = async (anchor: string) => {
  if (route.path === '/') {
    await nextTick();
    const el = document.getElementById(anchor);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  } else {
    router.push('/').then(() => {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 300);
    });
  }
};

const handleGithubNav = () => {
  window.open('https://github.com/isbrandonw', '_blank', 'noopener');
};

const handleBlogNav = () => {
  window.open('https://isbrandon.info', '_blank', 'noopener');
};
</script>

<style scoped>
.nav-link {
  @apply px-4 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent focus:outline-none focus:bg-accent focus:text-primary transition-colors;
}
</style>
