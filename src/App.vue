<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
* {
  font-size: 12px;
  --ff-sans-serif: 'Avenir', Helvetica, Arial, sans-serif;
  --ff-serif: 'Georgia', serif;
}

body {
  font-family: var(--ff-sans-serif);
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
  font: 600 1.8rem/1.1em var(--ff-serif);
}

h2 {
  font: 700 2rem/1.2em var(--ff-sans-serif);
  margin-block: 1rem;
}

h3 {
  font: 700 1.6rem/1.4em var(--ff-sans-serif);
}

h4 {
  font: 600 1.4rem/1.6em var(--ff-sans-serif);
}

h5 {
  font: 600 1.2rem/1.8em var(--ff-sans-serif);
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
