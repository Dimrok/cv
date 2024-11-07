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
  --base-text-color: #000000;
  --secondary-text-color: #666666;
  --aside-background-color: #7da5dd;
  --tag-background-color: #d3d3d3;
  --tag-text-color: #000;

  color: var(--base-text-color);
}

li {
  line-height: 1.1rem;
}

a {
  color: var(--base-text-color);
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
</style>
