<template>
  <UiCard class="p-8">
    <UiCardHeader class="pb-6">
      <UiCardTitle class="text-2xl">Send a Message</UiCardTitle>
      <p class="text-muted-foreground">Fill out the form below and I'll get back to you soon.</p>
    </UiCardHeader>
    <UiCardContent>
      <form @submit="submit" class="space-y-6">
        <fieldset :disabled="isSubmitting" class="space-y-6">
          <!-- Name Fields -->
          <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
            <UiVeeInput label="First name" placeholder="First name" name="firstName" />
            <UiVeeInput label="Last name" placeholder="Last name" name="lastName" />
          </div>
          <!-- Email Field -->
          <UiVeeInput label="Email" placeholder="your@email.com" type="email" name="email" />
          <!-- Subject Field -->
          <UiVeeSelect name="subject" label="Subject" placeholder="Select a topic" required>
            <option value="">Select a topic</option>
            <option value="collaboration">Project Collaboration</option>
            <option value="consultation">Technical Consultation</option>
            <option value="mentorship">Mentorship</option>
            <option value="speaking">Speaking Engagement</option>
            <option value="other">Other</option>
          </UiVeeSelect>
          <!-- Message Field -->
          <UiVeeTextarea
            :rows="5"
            label="Message"
            placeholder="Tell me about your project, question, or how I can help..."
            name="message"
          />
          <!-- Submit Button -->
          <UiButton type="submit" size="lg" class="w-full group" :disabled="isSubmitting">
            <Icon 
              v-if="!isSubmitting" 
              name="lucide:send" 
              class="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" 
            />
            <Icon 
              v-else 
              name="svg-spinners:ring-resize" 
              class="mr-2 h-5 w-5" 
            />
            {{ isSubmitting ? 'Sending...' : 'Send Message' }}
          </UiButton>
        </fieldset>
      </form>
    </UiCardContent>
  </UiCard>
</template>

<script lang="ts" setup>
import { object, string } from 'yup';
import type { InferType } from 'yup';
import { useForm } from 'vee-validate';
import { toast } from '../../composables/useToast';

const schema = object({
  firstName: string().required().label('First name'),
  lastName: string().required().label('Last name'),
  email: string().email().required().label('Email'),
  subject: string().required().label('Subject'),
  message: string().required().min(10).label('Message'),
});

const { handleSubmit, isSubmitting } = useForm<InferType<typeof schema>>({
  validationSchema: schema,
});

const submit = handleSubmit(async (values) => {
  try {
    console.log('Contact form submission:', values);
    // Simulate API call - replace with actual implementation
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. I'll get back to you soon.",
      variant: 'success',
    });
  } catch (error) {
    toast({
      title: 'Error',
      description: 'Failed to send message. Please try again or contact me directly.',
      variant: 'destructive',
    });
  }
});
</script> 