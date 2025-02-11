<script setup>
const event = props.event

const props = defineProps({
  event: {
    required: true,
  },
})
</script>

<template>
  <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p>
</template>
