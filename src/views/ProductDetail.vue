<template>
  <div class="product-detail">
      <header>
          <router-link to="/" tag="h3">&lt;</router-link>
          <div class="right">
              <h1 class="logo">Candy Shop</h1>
            <h5>Mr Cupcake</h5>
            <a href="/">Go To Cafe</a>
          </div>
      </header>
      <section class="img-container">
          <img src="https://via.placeholder.com/302x369" alt="">
          <img src="https://via.placeholder.com/302x369" alt="">
      </section>
      <section class="about">
          <div class="top">
              <h3>Blueberry Cupcake</h3>
              <img src="https://via.placeholder.com/52x16" alt="">
          </div>
          <h4 class="price">59 SEK</h4>
          <p>Try this tasty, delicious, marbelous blueberry cupcake. This cupcake is the most tasty cupcake you will ever try. </p>
          <input type="text" name="" id="" placeholder="leave a note for the café">
      </section>
      <section class="proceed">
          <div class="quantity">
              <button>-</button>
              <p>2</p>
              <button>+</button>
          </div>
          <button class="continue">Continue</button>
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
    transition: fade-in 2s ease-in 

h1
    display: none

h5 
    color: #000

a
    color: base.$light-blue

header 
    display: flex
    margin-left: 24px
    h3
        cursor: pointer
    .right
        margin-left: 24px
        margin-top: 5px
        a 
            font-size: 12px
            text-decoration: none
        a:hover 
            text-decoration: underline

.img-container 
    max-width: 120vw
    display: flex
    overflow: scroll
    margin: 12px 0 0 12px
    img
        max-width: 302px
        max-height: 369px
        margin: 5px
        border-radius: 16px

.about
    margin: 16px
    .top
        max-width: 100vw
        display: flex
        justify-content: space-between
    .price
        color: base.$light-green
        // font-size: 14px
    input
        background-color: rgba(74,74,74,0.1)
        border: none
        min-width: 327px
        min-height: 54px
        border-radius: 8px
        padding: 10px
        margin-top: 12px

.proceed 
    display: flex
    justify-content: space-between
    max-width: 330px
    margin-left: 16px
    margin-bottom: 20px
    .quantity
        display: flex
        min-width: 140px
        button
            min-width: 50px
            min-height: 50px
            border: dotted black 2px
            border-radius: 50%
            background-color: #fff
            font-size: 18px
            margin: 0 10px 0 10px
        p 
            margin-top: 12px
            font-size: 18px
    .continue
        min-width: 174px
        min-height: 50px
        border-radius: 25px
        font-size: 18px
        background-color: base.$button-blue
        color: #fff
        border: none
        
    .continue:hover 
        background: base.$light-blue
        box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)

// MEDIA QUERIES
@media(min-width: 700px)
    .product-detail 
        // margin: 0 auto
        header 
            .right 
                display: flex
                justify-content: center
                align-items: center
                flex-direction: column 
                width: 100%
                h1
                    display: block
                    font-family: base.$logo-font
                    color: base.$logo-color
                    font-size: 3rem
                h5
                    font-size: 2rem
                a
                    margin: 0px 0 0 2px
        .img-container 
            justify-content: center
        .about 
            display: flex
            flex-direction: column
            justify-content: flex-start 
            align-items: center
            width: 100%
            .top
                width: 1800px
                justify-content: space-evenly
            .price
                margin-right: 570px
            p
                margin-left: 160px
            input 
                width: 43%    
        .proceed
            flex-direction: column
            margin-left: 28%
            .quantity
                width: 100%
                margin-bottom: 15px
                margin-left: 10px
            .continue
                // width: 620px
                margin-left: 15px
                



// ANIMATION STUFF


.product-detail 
    @include base.animation('slide-down 1s ease-in')

</style>