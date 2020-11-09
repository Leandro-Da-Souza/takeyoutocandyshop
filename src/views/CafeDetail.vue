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
              <h3>Mr Cupcake</h3>
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
          <p>Ice Creams</p>
          <p>Snacks</p>
          <p>Coffee</p>
          <p>Sweet Cakes</p>
      </section>
      <section class="cards">
          <div class="card">
              <img src="https://via.placeholder.com/52" alt="">
              <div class="info">
                  <h5 class="name">Ice Cream Yellow</h5>
                  <p class="old-price">$ 10,99</p>
                  <p class="new-price">$ 5,99</p>
              </div>
              <p class="heart">
                  &#9825;
              </p>
          </div>
          <div class="card">
              <img src="https://via.placeholder.com/52" alt="">
              <div class="info">
                  <h5 class="name">Pink Ice</h5>
                  <p class="old-price">$ 12,99</p>
                  <p class="new-price">$ 6,99</p>
              </div>
              <p class="heart-red">&hearts;</p>
          </div>
          <div class="card">
              <img src="https://via.placeholder.com/52" alt="">
              <div class="info">
                  <h5 class="name">Blue Ice</h5>
                  <p class="new-price">$ 8,99</p>
              </div>
              <p class="heart">&#9825;</p>
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


.product-detail 
    margin-left: 15px
.img-container
    background-image: url('https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260')
    background-repeat: no-repeat
    background-position: center
    background-size: cover
    position: relative 
    width: 327px
    height: 327px
    border-radius: 16px
    padding-top: 8px

.location
    background-color: #fff
    position: absolute
    width: 290px
    height: 54px
    display: flex
    border-radius: 27px
    margin: 10px 0 0 10px
    padding-top: 7px
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
        h3
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
    
.selections
    display: flex
    overflow: scroll
    margin-top: 10px
    p
        background-color: base.$button-blue
        opacity: 0.9
        width: 100px
        height: 30px
        color: #fff
        font-size: 0.7rem
        text-align: center
        padding-top: 7px
        border-radius: 25px
        margin-right: 10px
        cursor: pointer
        margin-bottom: 10px
    p:hover
        background-color: base.$light-blue
        box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)
    
.cards
    background-color: #fafafa
    margin-top: 20px
    margin-bottom: 20px
    .card
        background-color: #fff
        display: flex
        justify-content: space-between
        padding: 10px
        max-width: 327px
        min-height: 70px
        margin-top: 20px
        box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)
        border-radius: 10px
        img
            width: 52px
            height: 52px
            margin-top: 20px
        p
            margin-top: 10px
            margin-left: -50px
        .heart
            margin-right: 10px
        .heart-red
            color: base.$red
            margin-right: 10px
        .info
            width: 200px
            height: 100px
            h5
                color: #000
                text-align: left
                margin
                
            .old-price
                text-decoration: line-through
                margin-top: 10px
                margin-left: 5px
            .new-price
                color: base.$light-blue
                margin-top: 2px
                margin-left: 5px

// MEDIA QUERIES 

@media (min-width: 700px)
    .img-container
        width: 910px
        height: 288px
        margin: 0 auto
    .about 
        margin: 10px auto
        min-width: 909px
        height: 120px
        // border: 1px black solid
        .rewards
            width: 100%
            padding-left: 10px
            height: 160px
            margin-top: 10px
            box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)
            align-items: center
    .selections
            justify-content: center
            margin-top: 120px
            p
                width: 243.5px
                height: 30px
    .cards
        width: 912px
        margin: 0 auto
        margin-bottom: 20px
        .card
            min-width: 438px
            height: 114px
            margin-left: 10px
        .card:nth-child(even)
            margin-left: auto
            margin-right: 10px




.product-detail 
  @include base.animation('slide-down 1s ease-in')
</style>