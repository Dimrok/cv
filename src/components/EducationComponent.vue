<template>
  <section class="no-break">
    <h3>
      {{ props.institution }}<span> - {{ props.degree }}</span>
    </h3>
    <p>
      <a class="dates">
        {{ props.dates[0].toFormat('LLLL yyyy') }} - {{ props.dates[1].toFormat('LLLL yyyy') }}
      </a>
    </p>
    <p>
      <a class="about">{{ props.description }}</a>
    </p>
    <ul class="tags">
      <li v-for="tag of props.activities" :key="tag" class="tag">
        {{ tag }}
      </li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import type { Education } from '@/types/education'

const props = defineProps<Education>()
</script>

<style scoped>
.dates {
  font-size: 0.875rem;
  color: var(--secondary-text-color);
  position: relative;
  top: -0.25rem;
}

.about {
  width: auto;
  margin-block: 0.25rem;
  font-style: italic;
  font-size: 0.85rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-block: 0 0.5rem;
}

.tag {
  display: inline-block;
  font-size: 0.7rem;
  font-weight: 600;
  margin-right: 0.5rem;
  background-color: var(--tag-background-color);
  color: var(--tag-text-color);
  padding: 0.125rem 0.5rem;
  border-radius: 0.35rem;
}
</style>
