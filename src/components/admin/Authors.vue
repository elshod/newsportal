<template>
    <div>
        <h6>Mualliflar</h6>
        <hr>
        <div v-if="active">
            <h4>Yangi muallif</h4>
            <div class="row">
                <div class="col-4">
                    <input type="text" v-model="author.name" placeholder="Ism sharifi">
                </div>
                <div class="col-4">
                    <input type="text" v-model="author.spec" placeholder="Mutaxassisligi">
                </div>
                <div class="col-4">
                    <input type="text" v-model="author.url" placeholder="Rasm url">
                </div>
                <div class="col-4">
                    <input type="text" v-model="author.fb" placeholder="Facebook">
                </div>
                <div class="col-4">
                    <input type="text" v-model="author.tw" placeholder="Twitter">
                </div>
                <div class="col-4">
                    <input type="text" v-model="author.in" placeholder="Instagram">
                </div>
                
                <div class="col-12">
                    <button @click="close" class="danger">Bekor qilish</button>
                    <button @click="add" v-show="isToggle" class="primary">Qo'shish</button>
                    <button @click="save" v-show="!isToggle" class="primary">Saqla</button>
                    <div class="inform" v-show="isSuccess">
                        Yangi muallif qo'shildi
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <div class="row sb">
                <div class="col-3">
                    <select></select>
                </div>
                <div class="col-3 fe">
                    <button @click="active = !active" class="info">Yangi muallif</button>
                </div>
            </div>
            <table>
                <tr>
                    <th>№</th>
                    <th>Ism-sharifi</th>
                    <th>Kasbi</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-for="(person,index) of authors" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{person.name}}</td>
                    <td>{{person.spec}}</td>
                    <td><img :src="person.url" alt="" width="60"></td>
                    <td>{{person.fb}}</td>
                    <td>{{person.tw}}</td>
                    <td>{{person.in}}</td>
                    <td>
                        <button @click="edit(index)">Tahrirlash</button>

                        <button @click="del(index)">O'chirish</button>
                    </td>
                </tr>
            </table>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            active:false,
            isToggle:true,
            author:{},
            index:0,
            id:0,
            isSuccess:false,
        }
    },
    computed: {
        authors(){
            return this.$store.getters.authors
        }
    },
    methods: {
        add(){
            this.$store.dispatch('addAuthor',this.author)
            this.author={}
            this.active = false
            
        },
        edit(index){

        },
        del(index){

        },
        save(){

        },
        close(){
            this.active = false
            this.authors = {}
        }
    }
}
</script>

<style>

</style>