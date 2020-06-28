<template>
  <section class="container">
    <div>
      <img src="~@/assets/logo.png" class="App-logo" alt="logo" />
      <h1 class="title">
        vue-app-project
      </h1>
      <h2 class="subtitle">
        基于vue创建的SPA项目
      </h2>
      <div class="links">
        <router-link to="/news-all">
          <mt-button type="primary">今日头条-推荐板块</mt-button>
        </router-link>
      </div>
    </div>
  </section>
</template>
<style>
.App-logo{
  margin: 0 auto;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 24px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 22px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
