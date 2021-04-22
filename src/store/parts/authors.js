import axios from "axios"

export default({
    state:{
        authors:[]
    },
    actions: {
        getAuthors(context){
            axios.get('http://localhost:3000/authors').then(response => {
                context.commit('toAuthors',response.data)
            })
        },
        addAuthor(context,payload){
            axios.post('http://localhost:3000/authors',payload).then(response => {
                context.commit('newAuthors',response.data)
            })
        }
    },
    mutations:{
        toAuthors(state,payload){
            state.authors = payload
        },
        newAuthors(state,payload){
            state.authors.push(payload)
        }
    },
    getters: {
        authors(state){
            return state.authors
        },
        getAuthor(state){
            return id => {
                return state.authors.find(i => i.id == id)
            }
        }
    }
})  