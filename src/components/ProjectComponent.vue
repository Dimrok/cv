<template>
  <section class="no-break">
    <h4>
      <a v-if="props.url" :href="props.url">{{ props.name }}</a>
      <template v-else>{{ props.name }}</template>
    </h4>
    <a class="dates">{{ formatPeriod(props.dates) }} ({{ periodDuration(props.dates) }})</a>
    <p class="about">{{ props.about }}</p>
    <ul class="tags">
      <li v-for="tag of props.skills" :key="tag" class="tag">
        {{ tag }}
      </li>
    </ul>
    <ul class="tasks">
      <li v-for="task of props.tasks" :key="task" class="task">- {{ task }}</li>
    </ul>
  </section>
</template>

<script setup lang="ts">
import { formatPeriod, periodDuration } from '@/lib/period'
import type { Project } from '@/types/project'

const props = defineProps<Project>()
</script>

<style scoped>
li {
  line-height: 1.2rem;
}

.dates {
  font-size: 0.875rem;
  color: var(--color-text-secondary);
  position: relative;
  top: -0.25rem;
}

.about {
  margin-block: 0.25rem 0.5rem;
  font-style: italic;
  font-size: 0.85rem;
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
