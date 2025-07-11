<template>
  <section id="contact" class="py-16 lg:py-24 bg-background">
    <UiContainer>
      <!-- Section Header -->
      <div class="flex flex-col items-center mb-16">
        <div class="relative w-full max-w-2xl">
          <div class="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-primary/30 via-primary/10 to-card/30 blur-lg opacity-60"></div>
          <div class="relative rounded-3xl bg-card border border-card shadow-xl px-8 py-10 text-center backdrop-blur-md">
            <h2 class="text-4xl md:text-5xl font-extrabold tracking-tight text-foreground mb-4 drop-shadow-lg">
              Let's Connect
            </h2>
            <p class="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-2">
              Always interested in discussing technology, sharing knowledge, or collaborating on interesting projects.
            </p>
          </div>
        </div>
      </div>

      <div class="space-y-8"></div>
        <!-- Contact Information -->
        <div class="space-y-8 flex flex-col items-center justify-center h-full lg:min-h-[500px]">
          <div class="text-center">
            <h3 class="text-2xl font-bold text-foreground mb-4 tracking-tight">Get In Touch</h3>
            <p class="text-muted-foreground leading-relaxed mb-8">
              Whether you're looking to discuss a project, share ideas, or just connect with a fellow developer, <br/>
              I'd love to hear from you. Feel free to reach out through any of the channels below.
            </p>
          </div>

          <!-- Contact Methods -->
          <div class="space-y-6 w-full max-w-md">
            <div class="flex items-center space-x-4 group bg-card/80 rounded-xl p-4 hover:bg-primary/10 transition-colors">
              <div class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="lucide:mail" class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 class="font-medium text-foreground">Email</h4>
                <p class="text-muted-foreground">brandon@isbrandon.org</p>
              </div>
            </div>

            <div class="flex items-center space-x-4 group bg-card/80 rounded-xl p-4 hover:bg-primary/10 transition-colors">
              <div class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="lucide:linkedin" class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 class="font-medium text-foreground">LinkedIn</h4>
                <p class="text-muted-foreground">Connect professionally</p>
              </div>
            </div>

            <div class="flex items-center space-x-4 group bg-card/80 rounded-xl p-4 hover:bg-primary/10 transition-colors">
              <div class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="lucide:github" class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 class="font-medium text-foreground">GitHub</h4>
                <p class="text-muted-foreground">Check out my projects</p>
              </div>
            </div>

            <div class="flex items-center space-x-4 group bg-card/80 rounded-xl p-4 hover:bg-primary/10 transition-colors">
              <div class="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                <Icon name="lucide:twitter" class="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 class="font-medium text-foreground">Twitter</h4>
                <p class="text-muted-foreground">Follow for tech insights</p>
              </div>
            </div>
          </div>

          <!-- Response Time -->
          <UiCard class="p-6 border-primary/20 w-full max-w-md mx-auto bg-card/80 backdrop-blur rounded-xl">
            <div class="flex items-center space-x-3">
              <Icon name="lucide:clock" class="h-5 w-5 text-primary" />
              <div>
                <h4 class="font-medium text-foreground">Response Time</h4>
                <p class="text-sm text-muted-foreground">Usually within 24-48 hours</p>
              </div>
            </div>
          </UiCard>
        </div>

        <!-- Contact Form Removed -->
    </UiContainer>
  </section>
</template>

<script lang="ts" setup>
// Contact form has been extracted to its own component (ContactForm.vue)
</script>