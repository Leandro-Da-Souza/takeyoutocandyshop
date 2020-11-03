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
      <section class="about">
          <div class="top">
              <h2>Mr Cupcake</h2>
              <img src="https://via.placeholder.com/52x16" alt="" class="ratings">
          </div>
          <p>Jawi, Pasuruan</p>
          <div class="rewards">
              <div class="left">
                  <p>Check the rewards for this cafe!</p>
                  <a href="/">16 Rewards</a>
              </div>
              <div class="right">
                  <p>&gt;</p>
              </div>
          </div>
      </section>
      <section class="selections">

      </section>
      <section class="cards">
          <div class="card"></div>
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
        // color: #000
        padding-top: 8px
    p:first-of-type
        margin: 0 50px 0 10px
    p:nth-of-type(2)
        margin-top: -10px
        font-size: 2rem
        color: #000

.about
    max-width: 320px
    margin-top: 10px
    .top 
        display: flex
        justify-content: space-between
        .ratings
            width: 52px
            height: 16px
            margin: 5px
        h2
            color: #000

    .rewards
        width: 327px
        height: 58px
        background-color: #fafafa
        display: flex
        justify-content: space-between
        border-radius: 10px
        .left 
            p
                color: #000
                font-size: 0.9rem
            a
                color: base.$light-blue
                text-decoration: none
                font-size: 0.8rem
        .right
            p
                font-size: 1.5rem
                color: #000
                padding-right: 10px
        .right, .left 
            padding-top: 10px


</style>