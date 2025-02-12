<template>
  <p>Register for the event</p>
  <button @click="register">Register Me</button>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'  // Correct import for navigation

// Use useRouter to get access to the router instance
const router = useRouter()

const props = defineProps({
  event: {
    type: Object,
    required: true,
  },
})

function register() {
  // Use router.push to navigate
  router.push({
    name: 'event-details',
    params: { id: props.event.id },
  })
}
</script>
