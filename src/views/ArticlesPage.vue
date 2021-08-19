<template>
  <div class="app__articles">
    <button @click="$router.push({name: 'NewArticle'})">Создать статью</button>
    <articles-list v-if="articlesArr.length!=0" :articlesArr="articlesArr" />
    <h2 v-else>Статей нет</h2>
  </div>
</template>

<script>
import ArticlesList from '../components/ArticlesList.vue'

export default {
  components:{ ArticlesList },
  computed:{
    articlesArr(){
      return this.$store.state.articlesArr
    }
  },
}
</script>
