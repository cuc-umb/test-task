<template>
    <div class="articles">
      <articles-item v-for="(item, index) in articlesArr" 
                    :key="index" 
                    :articles-item="item"
                    :articles-index="index"
                    v-on:addToArticles="updateArr()" />
    </div>
    
</template>

<script>
import ArticlesItem from './ArticlesItem.vue';
export default {
    props: ['articlesArr'],
    components: { ArticlesItem }
}
</script>

<style lang="scss" scoped>
.articles{
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>