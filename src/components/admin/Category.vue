<template>
    <div>
        <h4>Bo'limlar</h4>
        <hr>
        <h6>Yangi bo`lim</h6>
        <input type="text" v-model="cat.title">
        <input type="text" v-model="cat.link">
        <button @click="add">Qo'shish</button>
        <hr>
        <table>
            <tr v-for="(cat,index) of category" :key="index">
                <td>{{index+1}}</td>
                <td>{{cat.title}}</td>
                <td>{{cat.link}}</td>
                <td><button>Tahrirlash</button></td>
                <td>
                    <button @click="del(index)">O'chirish</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
export default {
    data(){
        return {
            cat: {}
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addCategory',this.cat)
            this.cat={}
        },
        del(index){
            const obj = {
                index: index,
                obj: this.category[index]
            }
            this.$store.dispatch('delCategory',obj)
        }
    },
    computed: {
        category(){
            return this.$store.getters.category
        }
    }
}
</script>

<style>

</style>