<template>
    <div>
        <h6>Maqolalar</h6>
        <hr>
        
        <div v-if="active">
            <h4>Yangi maqolalar</h4>
            <div class="row">
                <div class="col-6">
                    <input type="text" v-model="post.title" placeholder="Sarlavha">
                </div>
                <div class="col-6">
                    <select id="category" v-model="post.category_id">
                        <option value="none">Bo`limni tanlang</option>
                        <option v-for="(cat,index) of category" :key="index" :value="cat.id">
                            {{cat.title}}
                        </option>
                    </select>
                </div>
                <div class="col-4">
                    <select id="category" v-model="post.author_id">
                        <option value="none">Muallifni tanlang</option>
                        <option v-for="(aut,index) of authors" :key="index" :value="aut.id">
                            {{aut.name}} 
                            <strong>{{aut.spec}}</strong>
                        </option>
                    </select>
                </div>
                <div class="col-4">
                    <input type="date" v-model="post.date" placeholder="Sana">
                </div>
                <div class="col-4">
                    <input type="text" v-model="post.url" placeholder="Rasm url">
                </div>
                <div class="col-12">
                    <textarea v-model="post.desc" placeholder="Qisqa matn"></textarea>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.top"> Tepa qism
                    </label>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.slider"> Slider qism
                    </label>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.big"> Katta qism
                    </label>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.pop"> Popular qism
                    </label>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.photo"> Photo qism
                    </label>
                </div>
                <div class="col-4">
                    <label>
                        <input type="checkbox" v-model="post.mini"> Mini qism
                    </label>
                </div>
                <div class="col-12">
                    <vue-editor v-model="post.content" />
                </div>
            </div>
            <button @click="active = !active" class="danger">Bekor qilish</button>
            <button @click="add" class="primary">Qo'shish</button>
        </div>
        <div v-else>
            <button class="primary" @click="show">Yangi maqolar</button>
        <table>
            <tr>
                <th>№</th>
                <th>Sarlavha</th>
                <th>Bo'lim</th>
                <th>Link</th>
                <th></th>
                <th></th>
            </tr>
            <tr v-for="(post,index) of posts" :key="index">
                <td>{{index+1}}</td>
                <td>{{post.title}}</td>
                <td>{{getTitleCategory(post.category_id)}}</td>
                <td>
                    <router-link :to="'/category/'+getLinkCategory(post.category_id)+'/'+post.id">Batafsil</router-link>
                </td>
                <td><button class="success">Edit</button></td>
                <td>
                    <button class="danger" @click="del(index)">Delete</button>
                </td>
            </tr>
        </table>
        </div>
    </div>
</template>

<script>
import { VueEditor } from "vue2-editor";
export default {
    components:{
        VueEditor 
    },
    data(){
        return {
            active:false,
            post: {
                category_id: 'none',
            },
        }
    },
    computed: {
        posts(){
            return this.$store.getters.posts
        },
        category(){
            return this.$store.getters.category
        },
        authors(){
            return this.$store.getters.authors
        }
    },
    methods:{
        show(){
            this.active = true
            let d = new Date()
            let str = ''
            if (d.getMonth()<10)
                str = '0'+(d.getMonth()+1)
            else
                str =  d.getMonth()+1
                
            this.post.date = d.getFullYear()+'-'+str+'-'+d.getDate()
        },
        add(){
            this.$store.dispatch('addPost',this.post)
            this.post = {
                category_id: 'none'
            }
        },
        getTitleCategory(id){
            let cat = this.$store.getters.getById(id)
            return cat.title
        },
        getLinkCategory(id){
            let cat = this.$store.getters.getById(id)
            return cat.link
        },
        del(index){
            let post = {
                index:index,
                id: this.posts[index].id
            }
            this.$store.dispatch('delPost',post)
        }
    }
}
</script>

<style>

</style>