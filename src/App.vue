<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  font-size: 12px;
}

body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100vw;
}

body > div {
  max-width: calc(21cm);
}

h1,
h2,
h3,
h4,
h5 {
  margin: 0;
}

h1 {
  font-size: 2rem;
  line-height: 2rem;
  padding-bottom: 0.5rem;
  font-weight: 700;
}

h2 {
  font-size: 1.8rem;
  line-height: 1.8rem;
  font-weight: 700;
  margin-block: 1rem;
}

h3 {
  font-size: 1.4rem;
  font-weight: 600;
  line-height: 1.4rem;
}

h4,
h5 {
  font-size: 1.125rem;
  font-weight: 600;
}

* {
  --color-text-primary: #000000;
  --color-background: #ffffff;
  --color-text-secondary: #666666;
  --color-background-aside: #7da5dd;
  --color-background-tag: #d3d3d3;
  --color-text-tag: #000;

  color: var(--color-text-primary);
}

li {
  line-height: 1.1rem;
}

a {
  color: var(--color-text-primary);
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media print {
  header {
    display: none;
  }
}

@media (prefers-color-scheme: dark) {
  * {
    --color-text-primary: #000000;
    --color-background: #ffffff;
    --color-text-secondary: #666666;
    --color-background-aside: #7da5dd;
    --color-background-tag: #d3d3d3;
    --color-text-tag: #000;

    color: var(--color-text-primary);
  }
}
</style>
