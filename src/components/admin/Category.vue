<template>
    <div>
        <h6>Bo'limlar</h6>
        <hr>
        <div v-if="active">
            <h4>Yangi bo`lim</h4>
            <div class="row">
                <div class="col-6">
                    <input type="text" v-model="title" placeholder="Bo`lim nomi">
                </div>
                <div class="col-6">
                    <input type="text" v-model="link" placeholder="Bo`lim linki">
                </div>
                <div class="col-4">
                    <select v-model="group">
                        <option :value="i" v-for="(gr,i) of groups" :key="i">
                            {{gr}}
                        </option>
                    </select>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="menu"> Bosh menuga qo'shilsinmi?
                    </label>
                </div>
                <div class="col-12">
                    <button @click="close" class="danger">Bekor qilish</button>
                    <button @click="add" v-show="isToggle" class="primary">Qo'shish</button>
                    <button @click="save" v-show="!isToggle" class="primary">Saqla</button>
                    <div class="inform" v-show="isSuccess">
                        Yangi bo'lim qo'shildi
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
                    <button @click="active = !active" class="info">Yangi bo'lim</button>
                </div>
            </div>
            <table>
                <tr>
                    <th>№</th>
                    <th>Bo'lim nomi</th>
                    <th>Linki</th>
                    <th>Guruh nomi</th>
                    <th></th>
                    <th></th>
                </tr>
                <tr v-for="(cat,index) of category" :key="index">
                    <td>{{index+1}}</td>
                    <td>{{cat.title}}</td>
                    <td>{{cat.link}}</td>
                    <td>{{groups[cat.group]}}</td>
                    <td><button @click="edit(index)">Tahrirlash</button></td>
                    <td>
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
            title: '',
            group:'',
            menu: false,
            isToggle:true,
            editIndex:-1,
            active: false,
            isSuccess: false,
            id:0,
            
        }
    },
    methods:{
        close(){
            this.active = false
            this.title= ''
            this.group =''
            this.link = ''
        },
        add(){
            this.$store.dispatch('addCategory',{
                title: this.title,
                link: this.link,
                group: this.group,
                menu:this.menu
            })
            this.isSuccess = true
            this.active = false
            this.menu = false
            this.title= ''
            this.group =''
            this.link = ''
        },
        edit(index){
            this.active = true
            this.editIndex = index
            this.isToggle = false
            console.log(this.category[index])
            this.id = this.category[index].id
            this.title = this.category[index].title
            this.link = this.category[index].link
            this.group = this.category[index].group
            this.menu = this.category[index].menu
        },
        save(){
            const obj = {
                index: this.editIndex,
                id: this.id,
                obj: {
                    title: this.title,
                    link: this.link,
                    group: this.group,
                    menu:this.menu
                }
            }
            this.$store.dispatch('editCategory',obj)
            this.isToggle = true
            this.active = false
            this.title= ''
            this.group =''
            this.link = ''
            this.menu= false
        },
        del(index){
            const obj = {
                index: index,
                obj: this.category[index]
            }
            this.$store.dispatch('delCategory',obj)
        },
    },
    computed: {
        
        category(){
            return this.$store.getters.category
        },
        groups(){
            return this.$store.getters.groups
        },
        link(){
            return this.title.toLowerCase().split(' ').join('-')
        }
    }
}
</script>

<style>

</style>