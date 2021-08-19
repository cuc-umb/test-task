<template>
    <div class="article__edit">
        <form @submit.prevent>
            <input type="text" placeholder="Название статьи" v-model="articleTitle" required>
            <textarea cols="30" rows="10" v-model="articleBody" placeholder="Напишите вашу статью" required></textarea>
            <div class="type-submit">
                <button class="delete" @click="$router.replace({name: 'ArticlePage'})">Отменить</button>&nbsp;
                <input type="submit" value="Сохранить" @click="EditArticle()">
            </div>
        </form>
    </div>
</template>

<script>
export default {
    data(){
        return{
            article: null,
            articleTitle: '',
            articleBody: ''
        }
    },
    computed:{
        articlesArr(){
            return this.$store.state.articlesArr
        }
    },
    created(){
        this.article = this.articlesArr.find((item, index) => index == this.$route.params.id)
        this.articleTitle = this.article.title
        this.articleBody = this.article.body
    },
    methods:{
        EditArticle(){
            this.$store.commit('EditArticle', {
                articleTitle: this.articleTitle,
                articleBody: this.articleBody,
                articleId: this.$route.params.id
            })
            this.$router.push({name: 'ArticlePage'})
        }
    }
}
</script>

<style lang="scss" scoped>
.type-submit{
    display: flex;
    justify-content: space-evenly;
}
</style>