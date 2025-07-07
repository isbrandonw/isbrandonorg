<template>
  <section class="py-16 lg:py-24">
    <UiContainer>
      <!-- Section Header -->
      <div class="text-center mb-16">
        <h2 id="about" class="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
          About Me
        </h2>
        <p class="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto">
          Building scalable applications and leading engineering teams
        </p>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
        <!-- Text Content -->
        <div class="space-y-6">
          <div>
            <h3 class="pl-4 text-2xl font-semibold text-foreground mb-4">My Journey</h3>
            <p class="pl-4 text-muted-foreground leading-relaxed">
              My journey into software engineering began with a fascination for web applications, leading me to explore full-stack development using Nuxt.js, Vue.js, and Node.js. Beyond the web, I'm also diving into the world of embedded systems, where I'm gaining experience with C/C++. This allows me to connect software to hardware and explore a wider range of creative possibilities. I'm driven to continually learn and build impactful projects across different domains.
            </p>
          </div>
          
          <div class="pt-4">
            <h3 class="p-4 pl-4 text-2xl font-semibold text-foreground mb-4">Mission</h3>
            <ul class="list-disc list-inside space-y-2 mt-4 pl-8">
              <li>Building innovative solutions in web (Nuxt.js, Vue.js) and embedded systems (C/C++)</li>
              <li>Sharing knowledge gained to make technical concepts accessible</li>
              <li>Fostering growth and connection within the developer community</li>
              <li>Inspiring and connecting with others on their tech learning adventures</li>
            </ul>
          </div>
        </div>

        <!-- Skills/Tech Stack -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-foreground mb-6">Tech Stack & Expertise</h3>
          
          <div class="space-y-4">
            <div>
              <h4 class="font-medium text-foreground mb-2">Frontend</h4>
              <div class="flex flex-wrap gap-2">
                <UiBadge v-for="tech in frontendTech" :key="tech" variant="secondary" class="text-sm">
                  {{ tech }}
                </UiBadge>
              </div>
            </div>
            
            <div>
              <h4 class="font-medium text-foreground mb-2">Backend</h4>
              <div class="flex flex-wrap gap-2">
                <UiBadge v-for="tech in backendTech" :key="tech" variant="secondary" class="text-sm">
                  {{ tech }}
                </UiBadge>
              </div>
            </div>
            
            <div>
              <h4 class="font-medium text-foreground mb-2">Cloud & DevOps</h4>
              <div class="flex flex-wrap gap-2">
                <UiBadge v-for="tech in cloudTech" :key="tech" variant="secondary" class="text-sm">
                  {{ tech }}
                </UiBadge>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Timeline/Highlights -->
      <div class="mb-16">
        <h3 id="projects" class="text-2xl font-semibold text-foreground text-center mb-12">Professional Highlights</h3>
        
        <UiTimeline class="max-w-4xl mx-auto">
          <UiTimelineItem
            v-for="(highlight, index) in highlights"
            :key="highlight.id"
            :step="index + 1"
          >
            <UiTimelineIndicator>
              <Icon :name="highlight.icon" class="h-4 w-4" />
            </UiTimelineIndicator>
            <UiTimelineContent>
              <UiTimelineHeader>
                <UiTimelineTitle>{{ highlight.title }}</UiTimelineTitle>
                <UiTimelineDate>{{ highlight.date }}</UiTimelineDate>
              </UiTimelineHeader>
              <p class="text-muted-foreground mt-2">{{ highlight.description }}</p>
            </UiTimelineContent>
          </UiTimelineItem>
        </UiTimeline>
      </div>

      <!-- Values/Philosophy Cards -->
      <div>
        <h3 class="text-2xl font-semibold text-foreground text-center mb-12">Core Values</h3>
        
        <div class="p-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <UiCard v-for="value in values" :key="value.title" class="p-6 hover:shadow-lg transition-shadow">
            <UiCardHeader class="pb-4">
              <div class="flex items-center space-x-3 mb-2">
                <div class="p-2 bg-primary/10 rounded-lg">
                  <Icon :name="value.icon" class="h-6 w-6 text-primary" />
                </div>
                <UiCardTitle class="text-lg">{{ value.title }}</UiCardTitle>
              </div>
            </UiCardHeader>
            <UiCardContent>
              <p class="text-muted-foreground">{{ value.description }}</p>
            </UiCardContent>
          </UiCard>
        </div>
      </div>
    </UiContainer>
  </section>
</template>

<script lang="ts" setup>
const frontendTech = [
  'React', 'Vue.js', 'TypeScript', 'Next.js', 'Nuxt.js',
  'Tailwind CSS', 'JavaScript'
];

const backendTech = [
  'Node.js', 'Python', 'Express.js', 'FastAPI', 'PostgreSQL',
  'MongoDB', 'REST APIs', 'Appwrite'
];

const cloudTech = [
  'Docker', 'Kubernetes', 'CI/CD', 'Terraform',
  'GitHub Actions', 'Vercel', 'DevOps', 'AWS'
];

const highlights = [
  {
    id: 1,
    title: 'ESP32-H2 Development',
    date: 'Present',
    description: 'Exploring embedded systems development with ESP32-H2 SoC, focusing on IoT applications, sensor integration, and low-power wireless communication protocols.',
    icon: 'lucide:rocket'
  },
  {
    id: 2,
    title: 'Expanding Full-Stack Skills',
    date: '2023',
    description: 'Worked across the stack with modern frameworks like Vue, Nuxt, and Node.js, building features from UI to backend APIs.',
    icon: 'lucide:layers'
  },
  {
    id: 3,
    title: 'Open Source Participation',
    date: '2022',
    description: 'Contributed to open source projects, learning from the community and improving my skills through real-world code reviews.',
    icon: 'lucide:git-branch'
  },
  {
    id: 4,
    title: 'Continuous Learning',
    date: '2021',
    description: 'Completed online courses, attended workshops, and built personal projects to deepen my understanding of web technologies.',
    icon: 'lucide:graduation-cap'
  }
];

const values = [
  {
    title: 'Continuous Learning',
    description: "I'm always exploring new technologies and approaches, eager to grow my skills and stay up to date with the latest in software development.",
    icon: 'lucide:book-open'
  },
  {
    title: 'Code Quality',
    description: "I strive to write clean, maintainable code and value learning best practices from experienced engineers.",
    icon: 'lucide:shield-check'
  },
  {
    title: 'Team Collaboration',
    description: "I enjoy working with others, sharing ideas, and learning from teammates to build better software together.",
    icon: 'lucide:users'
  }
];
</script>