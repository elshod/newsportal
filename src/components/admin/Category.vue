<template>
    <div>
        <h6>Bo'limlar</h6>
        <hr>
        <h4>Yangi bo`lim</h4>
        <div class="row">
            <div class="col-4">
                <input type="text" v-model="cat.title">
            </div>
            <div class="col-4">
                <input type="text" v-model="cat.link">
            </div>
            <div class="col-4">
                <button @click="add" v-show="isToggle" class="primary">Qo'shish</button>
                <button @click="save" v-show="!isToggle" class="primary">Saqla</button>
            </div>
        </div>
        <hr>
        <table>
            <tr v-for="(cat,index) of category" :key="index">
                <td>{{index+1}}</td>
                <td>{{cat.title}}</td>
                <td>{{cat.link}}</td>
                <td><button @click="edit(index)">Tahrirlash</button></td>
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
            cat: {},
            isToggle:true,
            editIndex:-1,
        }
    },
    methods:{
        add(){
            this.$store.dispatch('addCategory',this.cat)
            this.cat={}
        },
        edit(index){
            this.editIndex = index
            this.isToggle = false
            this.cat = this.category[index]
        },
        save(){
            const obj = {
                index: this.editIndex,
                obj: this.cat
            }
            this.$store.dispatch('editCategory',obj)
            this.cat = {}
            this.isToggle = true
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