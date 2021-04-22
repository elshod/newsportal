<template>
    <nav class="navbar">
        <div class="container">
            <ul class="navbar__menu" :class="{'flex-start':category.length<5}">
                <li v-for="(cat,index) of category" :key="index">
                    <router-link class="link" :to="'/category/'+cat.link">{{cat.title}}</router-link>
                </li>
                
            </ul>
        </div>
    </nav>
</template>

<script>
    export default {
        computed:{
            category(){
                return this.$store.getters.getActiveCategory
            }
        }
    }
</script>

<style>

</style>