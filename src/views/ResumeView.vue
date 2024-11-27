<template>
  <header>{{ $t('print') }}</header>
  <section class="head">
    <div>
      <h1>{{ self.firstName }} {{ self.lastName.toUpperCase() }}</h1>
      <h2>Software Engineer, Former Chief Technology Officer at Koala Insurance</h2>
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
          <li><a href="tel:+33640129679">+33 6 40 12 96 79</a></li>
          <li><a href="mailto:antony.mechin@gmail.com">antony.mechin@gmail.com</a></li>
          <li><a href="https://dimrok.github.io/resume">dimrok.github.io/resume</a></li>
          <li><a href="https://linkedin.com/in/antony-mechin">linkedin.com/in/antony-mechin</a></li>
          <li><a href="https://github.com/dimrok">github.com/dimrok</a></li>
        </ul>
      </section>
      <section>
        <h3>Languages</h3>
        <ul>
          <li><span>French:</span> Native</li>
          <li><span>English:</span> Professional</li>
          <li><span>Spanish:</span> Beginner</li>
        </ul>
      </section>
      <section>
        <h3>Skills</h3>
        <ul>
          <li v-for="[name, grade] of Object.entries(skills)" :key="name">
            <div class="skill">
              {{ name }}
              <StarRating
                class="stars"
                :increment="0.5"
                :read-only="true"
                :show-rating="false"
                :fixed-points="1"
                :star-id="0"
                :round-start-rating="false"
                :rating="grade"
                active-color="black"
                inactive-color="white"
              />
            </div>
          </li>
        </ul>
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
        <h3>Experience</h3>
        <div v-for="xp of experience" :key="xp.company" class="experience">
          <ExperienceComponent v-bind="xp" />
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

import ExperienceComponent from '@/components/ExperienceComponent.vue'
import EducationComponent from '@/components/EducationComponent.vue'
import StarRating from 'vue-star-rating'

const skills: Record<string, number> = {
  'Project Management': 4,
  TypeScript: 4,
  Processes: 4,
  'Node.js': 4,
  Docker: 4,
  NestJS: 4,
  Prisma: 4,
  'People Management': 3.5,
  AWS: 3.5,
  Hiring: 3.5,
  Tooling: 3,
}
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

.experience,
.education {
  margin-bottom: 1rem;
  position: relative;
}

.experience::after,
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
