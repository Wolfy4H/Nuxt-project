<template>
    <div>
        <div class="grid-cols-4 gap-5">
            <div v-for="p in products"> 
                <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>

//fetch the products

const { data: products} = await useFetch('https://fakestoreapi.com/products/')
</script>