<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <!-- <router-link to="/cartdetail">Cart Detail</router-link> | -->
      <!-- <router-link to="/productdetail">Product Detail</router-link> | -->
      <!-- <router-link to="/cafedetail">Cafe Detail</router-link>  -->
    </div>
    <router-view/>
  </div>
</template>

<style lang="sass">
@use './styles/base.sass'


</style>
