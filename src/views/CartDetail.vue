<template>
  <div class="cart-detail">
    <header>
      <router-link to="/" tag="h3">&lt;</router-link>
      <div class="right-side">
        <h4>Your cart is ready to go</h4>
        <a href="/">4 Menu</a>
      </div>
    </header>
    <main>
      <section class="sent-to-location">
        <div class="sent">
          <div class="sent-to">
            <p>Sent To</p>
          </div>
          <div class="right-arrow">
            <p>&gt;</p>
          </div>
        </div>
        <div class="location-map">
          <img src="https://via.placeholder.com/52x52" alt="" />
        </div>
        <!-- <div class="address"> -->
        <p class="location-address">Drottninggatan 69</p>
        <!-- </div> -->
      </section>
      <section class="cart">
        <h4 class="order">Your Order</h4>
        <a class="plus">+</a>
      </section>
      <section class="cart-container">
        <div class="cart-item-1">
          <p class="quantity-box">1x</p>
          <img class="img" src="@/assets/blueberry.jpeg" />
          <div class="cart-item-info">
            <h5 class="cart-item-title">Blueberry Cupcake</h5>
            <p class="cart-item-price">59 SEK</p>
          </div>
          <div class="edit-item">
            <a class="edit">Edit</a>
          </div>
        </div>
        <div class="cart-item-2">
          <p class="quantity-box">2x</p>
          <img class="img" src="@/assets/2nut.jpg" />
          <h5 class="cart-item-title">Tripple Donut</h5>
          <p id="cart-item-price" class="cart-item-price">129 SEK</p>
          <div class="edit-item">
            <a class="edit">Edit</a>
          </div>
        </div>
        <div class="cart-item-3" id="cart-item-with-quantity">
          <p class="quantity-box">2x</p>
          <img class="img" src="@/assets/cupcake.jpg" />
          <h5 class="cart-item-title">Pink Sparkle Cake</h5>
          <p class="cart-item-price">200 SEK</p>
          <div class="quantity">
            <button>-</button>
            <p>2</p>
            <button>+</button>
          </div>
          <div class="save-item">
            <a class="save">Save</a>
          </div>
        </div>
      </section>
    </main>
    <footer>
      <section class="cart-total">
        <p class="cart-delivery-fee-title">
          Delivery Fee <span class="cart-delivery-fee">20 SEK</span>
        </p>
        <!-- <span class="cart-delivery-fee-title">Delivery Fee</span> -->
        <div class="cart-sum">
          <p class="cart-total-title">Total Cost</p>
          <p class="cart-total-price">388 SEK</p>
        </div>
      </section>
      <button class="continue-pay">Continue Pay - 388 SEK</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: "CartDetail"
};
</script>

<style lang="sass" scoped>
@use '@/styles/base.sass'




p
    // color: #333
    // font-weight: 700
    // font-size: 14px

h4
    color: #000
a
    color: base.$light-blue
header
    display: flex
    margin-left: 24px
    .right-side
        margin-left: 24px
        margin-top: 5px
        a
            font-size: 12px
            text-decoration: none

.sent-to-location
    display: flex
    min-width: 327px
    min-height: 98px
    border-radius: 20px
    // background: #efef
    border: solid 1px #dedede
    margin: 12px 24px 10px 24px
    .sent
      min-width: 327px
      height: 30px
      display: flex
      position: absolute
      // background: #7efe0e
    .sent-to
      margin-top: 11px
      margin-left: 11px
    p
      color: #747474
      font-size: 12px
      line-height: 19px

    .right-arrow
      text-align: right
      margin-left: 250px
      // margin-right: 11px
      p
        font-size: 1.125rem
        padding-right: 10px
        color: base.$light-blue
        margin-top: 11px

    .location-map
        margin-top: 30px
        margin-left: 5px

    .location-address
      margin-top: 40px
      font-size: 0.875rem
      margin-left: 15px
      color: #333
      font-weight: bold

.cart
  // background: #0000ee
  width: 375px
  height: 66px
  display: flex
  .order
    margin-left: 24px
    margin-top: 24px
    // position: absolute
  .plus
    font-size: 1.375rem
    margin-top: 24px
    margin-right: 10px
    margin-left: 230px

// .cart-container
//     display: grid
//     grid-template-columns: 2fr 2fr 2fr
//     grid-template-rows: 50px 50px
//     text-align: center
//     padding: 20px 0
//     margin-left: 50px
//     // max-width: 327px
//     background: base.$light-blue
// display: flex
//   flex-direction: row
//   justify-content: space-around
.cart-container
  margin: 0 24px 0 24px
  // background: #0f0


.quantity-box
    width: 20px
    height: 20px
    color: #747474
    font-size: 10px
    text-align: center
    margin-top: 8px
    margin-left: 11px
    border: solid 1px #dedede
    border-radius: 4px
    padding-top: 2px

.cart-item-1, .cart-item-2
    // background-color: #ff0
    // background-color: #fff
    border: none
    min-width: 327px
    min-height: 95px
    border-radius: 8px
    padding: 10px
    margin: 10px
    display: flex
    // justify-content: space-between
    // align-items: center
    // flex-wrap: wrap
    // box-shadow: 5px 10px base.$box-shadow
    box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)

.cart-item-info
  // background: #00e
  min-width: 210px
  height: 50px
  display: flex
  flex-wrap: wrap

.edit-item
  margin-top: 47px
  margin-left: 100px
  margin-right: -90px
  position: absolute

  .edit
    text-decoration: none
    font-size: 14px

.cart-item-3
    box-shadow: 5px 10px base.$box-shadow
    box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)
    border: none
    min-width: 327px
    min-height: 133px
    border-radius: 8px
    padding: 10px
    margin: 10px
    display: flex
    flex-wrap: wrap
    .quantity
        // background-color: rgba(74,74,74,0.1)
        display: flex
        justify-content: space-between
        align-items: start
        position: absolute
        margin-left: 90px
        margin-top: 50px
        min-width: 140px
        button
            min-width: 36px
            min-height: 36px
            border: dotted black 2px
            border-radius: 50%
            background-color: #fff
            font-size: 18px
            margin: 20px 10px 0 10px
        p
            margin-top: 25px
            font-size: 18px
            color: #333
            font-weight: bold
    .save-item
      // background: #000
      margin-top: 0px
      margin-left: 270px
      display: flex

.cart-item-title
    margin-top: 15px
    margin-left: 10px
    font-size: 1rem
    color: #000

.cart-item-price
    margin-top: 17px
    margin-left: 14px
    font-size: 0.875rem
    color: #000

#cart-item-price
  margin-left: 45px    

img
        width: 52px
        height: 52px
        margin: 5px
        border-radius: 8px

.cart-total
    min-width: 375px
    min-height: 80px
    background-color: #fafafa
    // background: #0e0e
    margin-top: 16px
    margin-bottom: 18px
    // display: block
    // display: flex
    // justify-content: center

.cart-delivery-fee-title
    height: 19px
    margin-left: 235px
    // margin-right: 300px
    // margin-bottom: 100px
    padding-top: 20px
    font-size: 12px
    line-height: 19px
    letter-spacing: 0.5px
    color: #747474

.cart-delivery-fee
    // height: 19px
    // margin-left: 24px
    // margin-top: 50px
    // margin-right: 950px
    text-align: right
    font-size: 12px
    // line-height: 19px
    letter-spacing: 0.5px
    color: #333333
    font-weight: bold
    margin-right: 24px
    // background: #000

.cart-sum
  display: flex
  justify-content: space-between
.cart-total-title
    font-size: 1rem
    font-weight: bold
    color: #333
    line-height: 26px
    letter-spacing: 0.5px
    margin-left: 24px
    margin-top: 25px
    // margin-button: 14px
    // padding-bottom: 20px
    // background: #000

.cart-total-price
    font-size: 16px
    // line-height: 26px
    // letter-spacing: 0.5px
    color: #54A5DA
    // background: #000
    margin-top: 25px
    margin-right: 24px
    // display: block

.continue-pay
        min-width: 327px
        min-height: 50px
        border-radius: 25px
        font-size: 18px
        background-color: base.$button-blue
        color: #fff
        border: none
        margin-left: 24px
        margin-right: 24px
        margin-bottom: 26px




</style>
