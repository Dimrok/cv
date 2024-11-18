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
    <p class="about">{{ props.description }}</p>
    <ul class="tags">
      <li v-for="tag of props.activities" :key="tag" class="tag">
        {{ $t(`activities.${tag}`) }}
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
  color: var(--color-text-secondary);
  position: relative;
  top: -0.25rem;
}

.about {
  width: auto;
  margin-block: 0.75rem;
  font-style: italic;
  font-size: 0.9rem;
  line-height: 0.9rem;
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
  background-color: var(--color-background-tag);
  color: var(--color-text-tag);
  padding: 0.125rem 0.5rem;
  border-radius: 0.35rem;
}
</style>
