import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        articlesArr: [
            {title: 'Статья', body: 'Это очень длинное1', dateTime: new Date().toLocaleString()},
            {title: 'Статья', body: 'Это очень длинное2', dateTime: new Date().toLocaleString()},
            {title: 'Статья', body: 'Это очень длинное3', dateTime: new Date().toLocaleString()}
        ]
    },
    getters: {
    
    },  
    mutations: {
        pushParams(state, payload){
            state.articlesArr.push(payload)            
        },
        removeArticle(state, payload){
            for(let i in state.articlesArr){
                if (i == payload) {
                    state.articlesArr.splice(i, 1)
                }
            }
        },
        EditArticle(state, payload){
            for(let i in state.articlesArr){
                if (i == payload.articleId) {
                    state.articlesArr[i].title = payload.articleTitle
                    state.articlesArr[i].body = payload.articleBody
                }
            }
        }
    },
})
