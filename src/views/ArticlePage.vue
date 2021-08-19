<template>
  <div class="article">
    <div class="article__title">
      <h2>{{article.title}} <span>{{article.dateTime}}</span></h2>
    </div>
    <div class="article__body">
      <p>{{article.body}}</p>&nbsp;
      <button class="change" @click="$router.replace({name: 'EditArticle', params:{ id: $route.params.id}})">
        Изменить
      </button>
    </div>
  </div>
</template>

<script>

export default {
  data(){
    return{
      article: null
    }
  },
  computed:{
    articlesArr(){
      return this.$store.state.articlesArr
    }
  },
  created(){
    this.article = this.articlesArr.find((item, index) => index == this.$route.params.id)
  }
}
</script>