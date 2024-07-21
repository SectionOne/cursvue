<template>
    <section class="flex flex-col">
        <h1>Curs <small class="text-blue-500"> Introducció a Go</small></h1>

        <img 
        :src="`https://store.barcelonactiva.cat/zhofsgdjxfzvjra/img/${id}.png`" 
        alt="Golang" 
        class="w-[200px] h-[200px] mt-5"
        width="200"
        height="200"
        />
        <RouterLink
            class="bg-blue-500 text-white p-2 rounded mt-5 text-center"
            :to="{name: 'Cursos', params: {id: 'javascript'}}">
            Javascript
        </RouterLink>
    </section>
</template>

<script lang="ts" setup>
interface Props { //Realitzem una interficie per tipar els valors de l'URL
    id: string;
}
defineProps<Props>(); //Recuperem els valors de l'URL
</script>