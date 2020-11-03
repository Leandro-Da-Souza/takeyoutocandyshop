<template>
  <div class="product-detail">
      <header>
          <router-link to="/" tag="h3">&lt;</router-link>
      </header>
      <section class="img-container">
          <div class="location">
              <span class="map-icon"></span>
              <p>See location on map</p>
              <p>&rarr;</p>
          </div>
      </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='sass' scoped>
@use '@/styles/base.sass'

.img-container
    background-image: url('https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    position: relative 
    width: 327px
    height: 327px
    border-radius: 16px

.location
    background-color: #fff
    position: absolute
    width: 290px
    height: 54px
    display: flex
    border-radius: 27px
    margin: 10px 0 0 10px
    padding-top: 5px
    padding-left: 10px
    .map-icon 
        border-radius: 50%
        width: 40px
        height: 40px
        background-color: base.$red
        border: none
    p
        color: #000
        padding-top: 8px
    p:first-of-type
        margin: 0 50px 0 10px
    p:nth-of-type(2)
        margin-top: -10px
        font-size: 2rem




</style>