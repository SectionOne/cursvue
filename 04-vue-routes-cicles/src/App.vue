<template>
  <nav>
    <RouterLink to="/">Principal</RouterLink>
    <RouterLink to="/caracteristiques">Caracteristiques</RouterLink>
    <RouterLink to="/preus">Preus</RouterLink>
    <RouterLink to="/contacte">Contacte</RouterLink>
  </nav>
  <main class="bg-slate-100" >
    <RouterView />
  </main>
</template>
<script lang="ts" setup>
import { RouterLink } from 'vue-router';


</script>