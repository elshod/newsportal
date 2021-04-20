<template>
    <h1>{{category.title}} bo'limi</h1>
</template>

<script>
export default {
    data(){
        return {
            link: this.$route.params.link
        }
    },
    watch: {
        $route(to, from) {
            this.link = to.params.link
        }
    },
    computed: {
        category(){
            return this.$store.getters.getByLink(this.link)
        }
    }
}
</script>

<style>

</style>