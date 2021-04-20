import axios from "axios"

export default {
    state: {
        category:[]
    },
    mutations: {
        toCategory(state,payload){
            state.category = payload
        },
        newCategory(state,payload){
            state.category.push(payload)
        },
        remCategory(state,payload){
            state.category.splice(payload,1)
        }
    },
    actions: {
        allCategory(context){
            axios.get('http://localhost:3000/category').then(response => {
                context.commit('toCategory',response.data)
            })
        },
        addCategory(context,payload){
            axios.post('http://localhost:3000/category',payload).then(response => {
                context.commit('newCategory',response.data)
            })
        },
        delCategory(context,payload){
            axios.delete('http://localhost:3000/category/'+payload.obj.id).then(response => {
                console.log(response.data)
                context.commit('remCategory',payload.index)
            })
        }
    },
    getters: {
        category(state){
            return state.category
        },
        getByLink(state){
            return byLink => {
                return state.category.find(i => i.link == byLink)
            }
        }
    }
}