import axios from "axios"

export default{
    state: {
        posts: []
    },
    actions: {
        addPost(context,payload){
            axios.post('http://localhost:3000/posts',payload).then(response => {
                context.commit('newPost',response.data)
            })
        },
        allPosts(context){
            axios.get('http://localhost:3000/posts').then(response => {
                context.commit('allPost',response.data)
            })
        },
        delPost(context,payload){
            axios.delete('http://localhost:3000/posts/'+payload.id).then(response => {
                console.log(response)
                context.commit('removePost',payload.index)
            })
        }
    },
    mutations: {
        newPost(state,payload){
            state.posts.push(payload)
        },
        allPost(state,payload){
            state.posts = payload 
        },
        removePost(state,payload){
            state.posts.splice(payload,1)
        }
    },
    getters: {
        posts(state){
            return state.posts
        },
        post(state){
            return id => {
                return state.posts.find(i => i.id == id)
            }
        },
        postsByCategory(state){
            return id => {
                return state.posts.filter(post => {
                    return post.category_id == id
                })
            }
        },
        getLength(state){
            return authorId => {
                let a = state.posts.filter(i => {
                    return i.author_id == authorId
                })
                return a.length
            }
        }
    },

}