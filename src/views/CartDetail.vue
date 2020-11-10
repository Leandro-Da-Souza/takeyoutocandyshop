<template>
  <div class="cart-detail">
    <header>
      <div class="back-arrow"><img class="left-arrow" src="@/assets/icons/left-arrow.png" alt="left-arrow"></div>
      <div class="right-side">
        <h4>Your cart is ready to go</h4>
        <a href="/">4 Menu</a>
      </div>
    </header>
    <section class="sent-to-location">
      <div class="sent">
        <div class="sent-to">
          <p>Sent To</p>
        </div>
        <div class="arrow">
          <img class="right-arrow" src="@/assets/icons/right-arrow.png" alt="right-arrow">
        </div>
      </div>
      <div class="location-map">
        <img src="@/assets/map.png" alt="" />
      </div>
      <p class="location-address">Drottninggatan 69</p>
    </section>
    <section class="cart">
      <h4 class="order">Your Order</h4>
      <a class="plus">+</a>
    </section>
    <section class="cart-container">
      <div class="cart-item-1">
        <p class="quantity-box">1x</p>
        <!-- <img class="cart-item-img" src="@/assets/blueberry.jpeg" /> -->
        <img class="cart-item-img" src="https://images.pexels.com/photos/8882/love-heart-purple-dessert.jpg?auto=compress&cs=tinysrgb&dpr=2&w=50" />
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
        <img class="cart-item-img" src="https://images.pexels.com/photos/1407346/pexels-photo-1407346.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <div class="cart-item-info">
          <h5 class="cart-item-title">Tripple Donut</h5>
          <p id="cart-item-price" class="cart-item-price">129 SEK</p>
        </div>
        <div class="edit-item">
          <a class="edit">Edit</a>
        </div>
      </div>
      <div class="cart-item-3" id="cart-item-with-quantity">
        <p class="quantity-box">2x</p>
        <img class="cart-item-img" src="https://images.pexels.com/photos/2062883/pexels-photo-2062883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <div class="cart-item-info">
          <h5 class="cart-item-title">Pink Sparkle Cake</h5>
          <p class="cart-item-price">200 SEK</p>
        </div>
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
    <section class="cart-total">
      <p class="cart-delivery-fee-title">
        Delivery Fee <span class="cart-delivery-fee">20 SEK</span>
      </p>
      <div class="cart-sum">
        <p class="cart-total-title">Total Cost</p>
        <p class="cart-total-price">388 SEK</p>
      </div>
    </section>
    <button class="continue-pay">Continue Pay - 388 SEK</button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="sass" scoped>
@use '@/styles/base.sass'
p
    // color: #333
    // font-weight: 700
    // font-size: 14px
h5
  // margin-top: 15px 0 0 10px
  // font-size: 1rem
  // color: #000

h4
    color: #000
a
    color: base.$light-blue
header
  display: flex
  margin: 24px

  .left-arrow
    width: 25px
    color: #0e0e
  .right-side
    margin: 5px 0 0 24px
    a
      font-size: 0.75rem
      text-decoration: none

.sent-to-location
  display: flex
  min-width: 327px
  min-height: 98px
  border-radius: 20px
  border: solid 1px #dedede
  margin: 12px 24px 10px 24px
  .sent
      min-width: 327px
      height: 30px
      display: flex
      position: absolute

      .sent-to
        margin: 11px 0 0 20px
        p
          color: base.$paragraph-grey
          font-size: 0.75rem
          line-height: 19px

      .arrow
        margin: 11px 0 0 240px
        .right-arrow
          width: 10px

  .location-map
    margin: 30px 0 0 10px
    img
      width: 50px
      height: 50px
      border-radius: 8px
      margin: 5px 0 10px 10px
    
  .location-address
    margin: 40px 0 0 15px
    font-size: 0.875rem
    color: base.$dark-grey
    font-weight: bold

.cart
  width: 375px
  height: 66px
  display: flex
  .order
    margin: 24px 0 0 24px
  .plus
    font-size: 1.375rem
    margin: 24px 10px 0 230px

.cart-container
  margin: 0 24px 0 24px
  .cart-item-1, .cart-item-2, .cart-item-3
    border: none
    min-width: 327px
    min-height: 95px
    border-radius: 8px
    padding: 10px
    margin: 10px 20px 0 0
    display: flex
    // box-shadow: 5px 10px base.$box-shadow
    box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)
    .quantity-box
      width: 20px
      height: 20px
      color: base.$paragraph-grey
      font-size: 10px
      text-align: center
      margin: 8px 0 0 11px
      border: solid 1px #dedede
      border-radius: 4px
      padding-top: 2px
    .cart-item-img
      width: 52px
      height: 52px
      margin: 5px
      border-radius: 8px
    .cart-item-info
      min-width: 210px
      height: 50px
      display: flex
      .cart-item-title
        margin: 15px 0 0 10px
        font-size: 1rem
        color: base.$black
      .cart-item-price
        margin: 17px 0 0 14px
        font-size: 0.875rem
        color: base.$black
      #cart-item-price
        margin-left: 45px
    .edit-item
      margin: 47px -90px 0 100px
      position: absolute
      .edit
        text-decoration: none
        font-size: 14px
  .cart-item-3
    min-height: 133px
    flex-wrap: wrap
    .quantity
        display: flex
        justify-content: space-between
        align-items: start
        position: absolute
        margin: 50px 0 0 90px
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
          color: base.$dark-grey
          font-weight: bold
    .save-item
      margin-left: 270px
      display: flex

.cart-total
  min-width: 375px
  min-height: 80px
  background-color: #fafafa
  margin: 16px 0 18px 0

  .cart-delivery-fee-title
    height: 19px
    margin-left: 235px
    padding-top: 20px
    font-size: 0.75rem
    line-height: 19px
    letter-spacing: 0.5px
    color: #747474

    .cart-delivery-fee
      text-align: right
      font-size: 0.75rem
      letter-spacing: 0.5px
      color: base.$dark-grey
      font-weight: bold
      margin-right: 24px
      

  .cart-sum
    display: flex
    justify-content: space-between
    .cart-total-title
      font-size: 1rem
      font-weight: bold
      color: base.$dark-grey
      line-height: 26px
      letter-spacing: 0.5px
      margin: 25px 0 0 24px

    .cart-total-price
      font-size: 16px
      color: #54A5DA
      margin: 25px 24px 0 0

.continue-pay
  min-width: 327px
  min-height: 50px
  border-radius: 25px
  font-size: 18px
  background-color: base.$button-blue
  color: #fff
  border: none
  margin: 0 24px 26px 24px

.continue-pay:hover
  background: base.$light-blue
  box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.68)

@media(min-width: 700px)
  header
    margin-left: 210px
    margin-right: 210px
    
    .left-arrow
      width: 50px
    .right-side
      margin-left: 91px
      h4
        font-size: 1.5rem
      a
        font-size: 1rem
  .sent-to-location
    min-width: 823px
    min-height: 160px
    margin: 17px 210px 10px 210px
  
    .sent
      width: 923px
      height: 50px

      .sent-to
        margin: 20px 0 10px 40px
        
        p
          font-size: 1.5rem
      .arrow
        margin: 10px    

        .right-arrow
          margin: 20px 0 0 700px
          width: 25px

        p
          font-size: 1.375rem
          margin-top: 25px

    .location-map
      margin: 48px 0 16px 30px
      img
        width: 130px
        height: 100px

    .location-address
      font-size: 1.25rem
      margin: 74px 0 0 38px

  .cart
    width: 823px
    height: 80px
    margin: 17px 190px 10px 190px
    
    .order
      font-size: 1.5rem
      margin-left: 25px
      position: absolute
    .plus
      font-size: 2rem
      margin-left: 900px
      
  .cart-container
    margin: 40px 200px 40px 200px
    
    .cart-item-1, .cart-item-2, .cart-item-3
      min-width: 823px
      min-height: 160px
      border-radius: 0.875rem

      .quantity-box
        width: 40px
        height: 40px
        font-size: 1.125rem
        margin: 1.25rem 0 0 2rem
        padding-top: 5px

      .cart-item-img
        width: 130px
        height: 112px
        margin: 15px 0px 5px 28px
        border-radius: 8px

      .cart-item-info
        min-width: 600px
        height: 80px
        margin-left: 30px

        .cart-item-title
          margin: 26px 0 0 21px
          font-size: 1.25rem
          color: base.$black

        .cart-item-price
          margin: 28px 0 0 350px
          font-size: 1.125rem
          color: base.$black
        #cart-item-price
          margin-left: 390px

      .edit-item
        margin: 100px 0 0 280px

        .edit
            font-size: 1.125rem

    .cart-item-3
      min-height: 245px

      .cart-item-title
        margin-left: 50px
        
      .quantity
        margin: 100px 0 0 260px
        button
          min-width: 52px
          min-height: 52px
          font-size: 2rem
          margin: 20px 10px 0 10px
        p
          margin-top: 25px
          font-size: 1.75rem
          color: base.$dark-grey
          font-weight: bold
      .save-item
        margin: 0 0 70px 810px
        .save
          font-size: 1.25rem

  .cart-total
    min-width: 823px
    min-height: 100px
    margin: 50px 200px 50px 200px
    padding: 5px 0

    .cart-delivery-fee-title
      margin-left: 750px
      font-size: 1.125rem

      .cart-delivery-fee
        font-size: 1.125rem

    .cart-sum

      .cart-total-title
        font-size: 1.5rem
        margin-left: 73px

      .cart-total-price
        font-size: 1.25rem
        margin-right: 1.875rem

  .continue-pay
    min-width: 600px
    min-height: 70px
    border-radius: 50px
    font-size: 1.5rem
    margin: 0 470px 55px 400px

// ANIMATION FOR BUTTONS

.cart-detail
  @include base.animation('slide-down 1s ease-in')
</style>
