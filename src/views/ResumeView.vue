<template>
  <header>{{ $t('print') }}</header>
  <section class="head">
    <div>
      <h1>{{ self.firstName }} {{ self.lastName.toUpperCase() }}</h1>
      <h2>{{ self.headline }}</h2>
      <p class="highlight"><span>Location: </span>{{ self.locations.join(' | ') }}</p>
      <p class="highlight"><span>Nationality: </span>{{ $t('nationality.fr') }}</p>
      <p class="highlight"><span>Age: </span>{{ self.birth.diffNow().negate().toFormat('y') }}</p>
    </div>
    <img src="@/assets/picture.jpeg" alt="Profile picture" />
  </section>
  <section class="page-wrapper">
    <aside>
      <section>
        <h3>Contact</h3>
        <ul>
          <li v-for="link of [self.phone, self.email, ...self.links]" :key="link.href">
            <a :href="link.href">{{ link.label }}</a>
          </li>
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          <li v-for="language of self.languages" :key="language.name">
            <span>{{ language.name }}:</span> {{ language.level }}
          </li>
        </ul>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li v-for="skill of self.skills" :key="skill.name">
            <div class="skill">
              <span :title="skill.stale ? $t('skills.stale') : undefined">
                {{ skill.name }}<template v-if="skill.stale">*</template>
              </span>
              <StarRating
                class="stars"
                :increment="0.5"
                :read-only="true"
                :show-rating="false"
                :fixed-points="1"
                :star-id="0"
                :round-start-rating="false"
                :rating="skill.level"
                active-color="black"
                inactive-color="white"
              />
            </div>
          </li>
        </ul>
        <p v-if="self.skills.some((skill) => skill.stale)" class="footnote">
          * {{ $t('skills.stale') }}
        </p>
      </section>
      <section>
        <h3>Professional Interests</h3>
        <ul>
          <li v-for="interest in self.professionalInterests" :key="interest">
            {{ $t(`interests.${interest}`) }}
          </li>
        </ul>
      </section>
      <section>
        <h3>Personal Interests</h3>
        <ul>
          <li v-for="interest in self.personalInterests" :key="interest">
            {{ $t(`interests.${interest}`) }}
          </li>
        </ul>
      </section>
    </aside>
    <div class="content">
      <section>
        <p class="summary">{{ self.summary }}</p>
      </section>
      <section>
        <h3>Experience</h3>
        <div v-for="xp of experience" :key="xp.company" class="experience">
          <ExperienceComponent v-bind="xp" />
        </div>
      </section>
      <section>
        <h3>Personal Projects</h3>
        <div v-for="project of projects" :key="project.name" class="project">
          <ProjectComponent v-bind="project" />
        </div>
      </section>
      <section>
        <h3>Education</h3>
        <div v-for="edu of education" :key="edu.institution" class="education">
          <EducationComponent v-bind="edu" />
        </div>
      </section>
    </div>
  </section>
</template>

<script setup lang="ts">
import { self } from '@/data/self'
import { experience } from '@/data/experience'
import { education } from '@/data/education'
import { projects } from '@/data/projects'

import ExperienceComponent from '@/components/ExperienceComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'
import ProjectComponent from '@/components/ProjectComponent.vue'
import StarRating from 'vue-star-rating'
</script>

<style scoped>
* {
  --inner-padding: 2rem;
}

header {
  background-color: gainsboro;
  text-align: center;
  margin-bottom: 0.5rem;
}

.head {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin: 1rem var(--inner-padding);
}

.head .highlight {
  font-size: 1.4rem;
}

.head .highlight span {
  font-size: 1.4rem;
  font-weight: 700;
}

.head img {
  height: 128px;
}

.page-wrapper {
  display: grid;
  grid-template-columns: max-content auto;
}

.page-wrapper > div {
  padding-top: var(--inner-padding);
}

aside {
  font-size: 0.8rem;
  padding: var(--inner-padding);
  background-color: var(--color-background-aside);
}

aside ul {
  list-style-type: none;
  padding-left: 0.5rem;
  padding-bottom: 1rem;
}

aside ul li {
  line-height: 2rem;
}

aside li span {
  font-weight: 700;
}

aside .skill span {
  font-weight: inherit;
}

aside .footnote {
  margin-block: -0.5rem 1rem;
  font-size: 0.85rem;
  font-style: italic;
}

aside h3 {
  margin: 0;
}

aside .skill {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

aside .skill .stars {
  height: min-content;
}

.vue-star-rating {
  display: inline-block;
  max-width: 5rem;
  max-height: 1rem;
}

.content {
  padding: var(--inner-padding);
}

.content h3 {
  position: relative;
  margin-bottom: 0.2em;
}

.content h3::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: var(--color-text-primary);
}

.summary {
  margin-block: 0 1rem;
  font-size: 1.1rem;
  line-height: 1.5rem;
}

.experience,
.project,
.education {
  margin-bottom: 1rem;
  position: relative;
}

.experience::after,
.project::after,
.education::after {
  content: '';
  position: absolute;
  bottom: -0.65rem;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: var(--color-text-secondary);
}

.experience:last-child::after,
.project:last-child::after,
.education:last-child::after {
  display: none;
}

@media print {
  * {
    --inner-padding: 1rem;
  }

  .head img {
    height: 2.5cm;
  }

  aside ul li {
    line-height: 1.4rem;
    margin-left: 0rem;
  }
}

@media screen and (max-width: 572px) {
  .page-wrapper {
    grid-template-columns: 1fr;
  }

  aside {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  aside section {
    flex: 1 1 100%;
  }

  aside ul {
    padding-left: 0;
  }

  aside ul li {
    padding-left: 0;
  }

  .content .head {
    flex-direction: column;
    gap: 1rem;
  }

  .content .head img {
    width: 100%;
    height: auto;
  }

  .content section {
    margin-bottom: 1rem;
  }

  .experience,
  .education {
    margin-bottom: 1rem;
  }

  .experience::after,
  .education::after {
    bottom: -0.5rem;
  }
}
</style>
