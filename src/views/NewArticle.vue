<template>
    <form @submit.prevent>
        <input type="text" placeholder="Название статьи" v-model="articleTitle" required>
        <textarea name="" id="" cols="30" rows="10" v-model="articleBody" placeholder="Напишите вашу статью" required></textarea>
        <input type="submit" value="Создать статью" @click="pushParams()">
    </form>
</template>

<script>

export default {
    data(){
        return{
            articleTitle: '',
            articleBody: '',
            article: {
                title: '',
                body: '',
                dateTime: ''
            }
        }
    },
    methods:{
        pushParams(){
            this.article.title = this.articleTitle
            this.article.body = this.articleBody
            this.article.dateTime = new Date().toLocaleString()

            this.$store.commit('pushParams', this.article)

            this.$router.push({name: 'Articles'})
        }
    }
}
</script>
