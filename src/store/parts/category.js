import axios from "axios"

export default {
    state: {
        category:[],
        groups: ['News','Arts','Travel','Sports','Tech','Moneys']
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
        },
        saveCategory(state,payload){
            console.log('old',state.category[payload.index])
            console.log('new',payload)
            state.category[payload.index] = payload.obj
        }
    },
    actions: {
        editCategory(context,payload){
            axios.put('http://localhost:3000/category/'+payload.id,payload.obj).then(response => {
                console.log(response)
                context.commit('saveCategory',payload)
            })
        },
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
        getActiveCategory(state){
            return state.category.filter(i => {
                return i.menu
            })
        },
        groups(state){
            return state.groups
        },
        getByLink(state){
            return byLink => {
                return state.category.find(i => i.link == byLink)
            }
        },
        getById(state){
            return byId => {
                return state.category.find(i => i.id == byId)
            }
        }
    }
}