<template>
    <div class="articles">
        <div class="article__title"> 
            <h2 class="link" @click="$router.push({name: 'ArticlePage', params:{ id: ArticlesIndex }})">
                {{ArticlesItem.title}}
            </h2>
            <h3>{{ArticlesItem.dateTime}}</h3>
        </div>
        <div class="article__body">
          <span>{{ArticlesItem.body}}</span>
        </div>
        <button class="delete" @click="removeArticle(ArticlesIndex)">Удалить</button>
    </div>
</template>

<script>
export default {
    props: ['ArticlesItem', 'ArticlesIndex'],
    methods:{
        removeArticle(itemId){
            this.$store.commit('removeArticle', itemId)
        }
    }
}
</script>

<style lang="scss">
.articles{
    *{
        margin: 0 10px 10px 0;
    }
}
.article__title, .article__body{
    display: flex;
    justify-content: flex-start;
}
</style>