<template>
  <section class="no-break">
    <h3>
      {{ props.company }}<span> - {{ props.title }}</span>
    </h3>
    <a class="dates-and-location">
      {{ props.dates[0].toFormat('LLLL yyyy') }} - {{ props.dates[1].toFormat('LLLL yyyy') }} ({{
        toHuman(props.dates[1].diff(props.dates[0]))
      }}) - {{ props.location }}</a
    >
    <p class="about">
      <a>{{ props.about }}</a>
    </p>
  </section>
  <div v-for="stage of props.stages" :key="stage.name" class="stage no-break">
    <section v-if="!stage.hide">
      <h4>
        {{ stage.name }}
      </h4>
      <a class="dates"
        >{{ stage.dates[0].toFormat('LLLL yyyy') }} - {{ stage.dates[1].toFormat('LLLL yyyy') }} ({{
          toHuman(stage.dates[1].diff(stage.dates[0]))
        }})</a
      >
      <ul class="tags">
        <li v-for="tag of stage.tags" :key="tag" class="tag">
          {{ tag }}
        </li>
      </ul>
      <p v-if="!!stage.description" class="description">
        {{ stage.description }}
      </p>
      <ul class="tasks">
        <li v-for="task of stage.tasks" :key="task" class="task">- {{ task }}</li>
      </ul>
    </section>
  </div>
</template>

<script setup lang="ts">
import { toHuman } from '@/lib/duration-to-human'
import type { Experience } from '@/types/experience'

const props = defineProps<Experience>()
</script>

<style scoped>
h4 {
  margin-bottom: 0.25rem;
}

li {
  line-height: 1.2rem;
}

.company {
  margin-bottom: 0.5rem;
}

.stage {
  margin-bottom: 1rem;
  margin-left: 0.75rem;
}

.about {
  margin-block: 0.25rem 0.5rem;
  font-style: italic;
  font-size: 0.85rem;
  line-height: 0.9rem;
}

.description {
  margin-block: 0.75rem;
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
  background-color: var(--tag-background-color);
  color: var(--tag-text-color);
  padding: 0.125rem 0.5rem;
  border-radius: 0.35rem;
}

.dates-and-location {
  font-size: 0.875rem;
  color: var(--secondary-text-color);
  position: relative;
  top: -0.25rem;
}

.dates {
  font-size: 0.875rem;
  color: var(--secondary-text-color);
  position: relative;
  top: -0.5rem;
}
</style>
