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
            <div class="pl-4 space-y-4">
              <p class="text-muted-foreground leading-relaxed">
                My software engineering journey began with a fascination for understanding how things work.
                When I first started learning C/C++ and web development, I found it challenging, but my curiosity kept me going until I figured things out.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                This drive to solve problems led me to explore full-stack development with Nuxt.js, Vue.js, and Node.js, and
                what it takes to design systems that are scalable and maintainable.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                I started learning object-oriented programming early on with C/C++. My focus has always been on software design and
                core concepts, and you soon realize that what coding language doesn't matter as much as understanding the
                fundamental data structures that all languages manipulate. A more plain example is C++ and Rust. Learning any of them
                will have a short learning curve.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                I eventually found myself wanting to control the physical world which led me to embedded systems,
                which lets me connect software directly to hardware. This opens up exciting new creative possibilities to make web
                development all play nice with my PCB and electrical components.
              </p>
              <p class="text-muted-foreground leading-relaxed">
                I cannot help buy to be continuously learning and building projects that make a real impact across
                different areas of technology.
              </p>
            </div>
          </div>
        </div>

        <!-- Skills/Tech Stack & Mission -->
        <div class="space-y-6">
          <!-- Mission Section -->
          <div>
            <UiCard class="bg-background/80 border border-border/40 rounded-xl shadow-lg p-6 mb-6">
              <div class="flex items-center gap-3 mb-4">
                <span class="inline-flex items-center justify-center rounded-full bg-primary/10 text-primary p-2">
                  <Icon name="lucide:heart-handshake" class="h-6 w-6" />
                </span>
                <h3 class="text-2xl font-semibold text-foreground tracking-tight">Mission</h3>
              </div>
              <div>
                <ul class="space-y-4">
                  <li class="flex items-start gap-3">
                    <span class="mt-1">
                      <Icon name="lucide:cpu" class="h-5 w-5 text-primary" />
                    </span>
                    <span class="text-base text-muted-foreground">
                      Embedded systems (C/C++) &mdash; building innovative solutions in web (Nuxt.js, Vue.js)
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1">
                      <Icon name="lucide:book-open" class="h-5 w-5 text-primary" />
                    </span>
                    <span class="text-base text-muted-foreground">
                      Sharing knowledge to make technical concepts accessible
                    </span>
                  </li>
                  <li class="flex items-start gap-3">
                    <span class="mt-1">
                      <Icon name="lucide:rocket" class="h-5 w-5 text-primary" />
                    </span>
                    <span class="text-base text-muted-foreground">
                      Continuously learning and building projects that make a real impact across technology
                    </span>
                  </li>
                </ul>
              </div>
            </UiCard>
          </div>

          <!-- Tech Stack Section -->
          <div>
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
    title: 'Technical Program Analyst',
    date: '2022 - Present',
    description: 'As a Technical Support Engineer, I served as the primary technical contact for over 80 C/C++ development teams. My role involved in-depth systems analysis, ensuring regulatory compliance with standards like MISRA and AUTOSAR, and improving processes through automation.',
    icon: 'lucide:briefcase'
  },
  {
    id: 2,
    title: 'Process Automation & Improvement',
    date: '2019 - 2022',
    description: 'During my time as a Program Analyst Intern and in my subsequent roles, I focused on identifying system inefficiencies. I developed automated solutions using Python and Bash to optimize workflows, enhance program delivery, and ensure data accuracy.',
    icon: 'lucide:cogs'
  },
  {
    id: 3,
    title: 'Systems & Technical Analysis',
    date: '2020 - 2022',
    description: 'My education and early career were focused on systems analysis. I have experience with embedded systems, CI/CD pipelines, and utilizing tools like Git for version control. I am proficient in analyzing system architecture and managing databases with SQL.',
    icon: 'lucide:database'
  },
  {
    id: 4,
    title: 'Computer Science Education',
    date: '2015 - 2022',
    description: 'I earned a Bachelor of Science in Computer Science from California State University, San Bernardino, following an Associate of Science from Riverside City College. My coursework included Systems Analysis, Database Management, and Data Structures & Algorithms.',
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