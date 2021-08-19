import Vue from 'vue'
import VueRouter from 'vue-router'

import Articles from '../views/ArticlesPage.vue'
import Article from '../views/ArticlePage.vue'
import NewArticle from '../views/NewArticle.vue'
import EditArticle from '../views/EditArticle.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Articles', component: Articles, alias: '/articles' },
  { path: '/articles/:id', name: 'ArticlePage', component: Article },
  { path: '/new', name: 'NewArticle', component: NewArticle },
  { path: '/edit/:id', name: 'EditArticle', component: EditArticle }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
