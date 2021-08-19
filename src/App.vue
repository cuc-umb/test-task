<template>
  <div id="app">
    <h1 class="logo" @click="$router.push('/')">CRUD статьи</h1>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container{
  width: 70%;
  margin: 0 auto;
}

input, textarea, button, a{
  &:focus{
    outline: none;
  }
}

button{
  border: none;
  border-bottom: 2px solid lightsalmon;
  border-radius: 8px;
  padding: 10px 15px;
  cursor: pointer;
  &.delete{
    background-color: crimson;
    color: white;
  }
  &.change{
    background-color: khaki;
  }
}

form{
    max-width: 400px;
    display: flex;
    flex-direction: column;
    width: 100%;
    input, textarea, button{
        margin: 10px 0;
        padding: 10px 15px;
        border: none;
        border-bottom: 2px solid lightsalmon;
        border-radius: 8px;
    }
}

.logo{
  cursor: pointer;
}
</style>
