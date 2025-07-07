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
              I'm a passionate software engineer with extensive experience in full-stack development, 
              system architecture, and technical leadership. My journey spans from building scalable 
              web applications to mentoring development teams and driving technical strategy.
            </p>
          </div>
          
          <div>
            <h3 class="pl-4 text-2xl font-semibold text-foreground mb-4">Mission</h3>
            <p class="pl-4 text-muted-foreground leading-relaxed">
              I believe in the power of continuous learning and knowledge sharing. Through this platform, 
              I document my experiences, share technical insights, and contribute to the developer community. 
              My goal is to bridge the gap between complex technical concepts and practical implementation.
            </p>
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
  'GitHub Actions', 'Vercel', 'Supabase', 'AWS'
];

const highlights = [
  {
    id: 1,
    title: 'Technical Leadership Role',
    date: 'Present',
    description: 'Leading engineering teams, architecting scalable systems, and driving technical strategy for complex applications.',
    icon: 'lucide:crown'
  },
  {
    id: 2,
    title: 'Full-Stack Architecture',
    date: '2023',
    description: 'Designed and implemented microservices architecture serving millions of users with 99.9% uptime.',
    icon: 'lucide:layers'
  },
  {
    id: 3,
    title: 'Open Source Contributions',
    date: '2022',
    description: 'Active contributor to open source projects and maintainer of several npm packages used by the community.',
    icon: 'lucide:git-branch'
  },
  {
    id: 4,
    title: 'Mentorship & Teaching',
    date: '2021',
    description: 'Mentored 15+ junior developers and conducted technical workshops on modern web development practices.',
    icon: 'lucide:graduation-cap'
  }
];

const values = [
  {
    title: 'Continuous Learning',
    description: 'Technology evolves rapidly. I stay current with industry trends and continuously expand my skill set to deliver cutting-edge solutions.',
    icon: 'lucide:book-open'
  },
  {
    title: 'Code Quality',
    description: 'Writing clean, maintainable, and well-tested code is fundamental. Quality over quantity, always.',
    icon: 'lucide:shield-check'
  },
  {
    title: 'Team Collaboration',
    description: 'Great software is built by great teams. I believe in fostering collaborative environments where everyone can thrive.',
    icon: 'lucide:users'
  }
];
</script>