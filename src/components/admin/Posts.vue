<template>
    <div>
        <h6>Maqolalar</h6>
        <hr>
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
            <div class="col-12">
                <vue-editor v-model="post.content" />
            </div>
        </div>
        <button @click="add" class="primary">Qo'shish</button>
        <hr>
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
                    <button class="danger">Delete</button>
                </td>
            </tr>
        </table>
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
            post: {
                category_id: 'none'
            },
        }
    },
    computed: {
        posts(){
            return this.$store.getters.posts
        },
        category(){
            return this.$store.getters.category
        }
    },
    methods:{
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
        }
    }
}
</script>

<style>

</style>