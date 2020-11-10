<template>
  <main>
    <div class="cart-detail">
      <h1>Which sweets do you fancy today?</h1>
      <!-- <button>Search</button> -->



<div class="info-box">
      <img src="@/assets/icons/LOVE.svg" alt="map icon" />

      <div>
        <p class="info-title">Popular</p>
        <p>Let's choose and enjoy the food</p>
      </div>

      <div><img class="info-arrow" src="@/assets/icons/arrow-right.svg" alt="Arrow to the right" /></div>
    </div>
      <div class="popular-items">
        <img class="img" src="https://images.pexels.com/photos/8882/love-heart-purple-dessert.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <div class="popular-item-info">
          <h5 class="popular-item-title">Blueberry Cupcake</h5>
          <div class="flavor-tag"><h5 class="tag-title">Fruits</h5></div>

          <div class="location-price">
            <h5 class="location">Mr Cupcake</h5>
            <p class="popular-item-price">59 SEK</p>
          </div>
        </div>
      </div>

      <div class="popular-items">
        <img class="img" src="https://images.pexels.com/photos/1407346/pexels-photo-1407346.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <div class="popular-item-info">
          <h5 class="popular-item-title">Tripple Donut</h5>
          <div class="flavor-tag"><h5 class="tag-title">Sweets</h5></div>

          <div class="location-price">
           <!-- <span><img class="map-pin" src="@/assets/icons/map-pin.svg" /> </span> -->
           
           <h5 class="location">Donut Queen</h5> 
            <p class="popular-item-price">59 SEK</p>
          </div>
        </div>
      </div>

      <div class="popular-items">
        <img class="img" src="https://images.pexels.com/photos/2062883/pexels-photo-2062883.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
        <div class="popular-item-info">
          <h5 class="popular-item-title">Pink Sparkle Cake</h5>
          <div class="flavor-tag"><h5 class="tag-title">Fruits</h5></div>

          <div class="location-price">
            <h5 class="location">Mr Cupcake</h5>
            <p class="popular-item-price">59 SEK</p>
          </div>
        </div>
      </div>
    </div>

    <div class="info-box">
      <img src="@/assets/icons/map-icon.svg" alt="map icon" />

      <div>
        <p class="info-title">Near You</p>
        <p>Stockholm, Sweden</p>
      </div>

      <div><img class="info-arrow" src="@/assets/icons/arrow-right.svg" alt="Arrow to the right" /></div>
    </div>

    <div class="wrapper-cafes">
      <div>
        <img
          src="https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Cosy cafe"
        />
        <p class="cafe-title">Mr Cupcake</p>
        <p class="cafe-subtitle">Location</p>
        <p class="cafe-distance">1.2km</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/2277653/pexels-photo-2277653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Cosy cafe"
        />
        <p class="cafe-title">Donut Queen</p>
        <p class="cafe-subtitle">Nort Surabaya</p>
        <p>1.2km</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Cosy cafe"
        />
        <p class="cafe-title">Mr Cupcake</p>
        <p class="cafe-subtitle">Location</p>
        <p class="cafe-distance">1.2km</p>
      </div>
      <div>
        <img
          src="https://images.pexels.com/photos/1402407/pexels-photo-1402407.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt="Cosy cafe"
        />
        <p class="cafe-title">Sweet Sugar Café</p>
        <p class="cafe-subtitle">Location</p>
        <p class="cafe-distance">1.2km</p>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  data: () => ({
    title: "Which sweets do you fancy today?",
  }),
  components: {},
};
</script>


<style lang="sass" scoped>
@use '@/styles/base.sass'

h1
  padding: .7em

.popular-items
  display: flex
  border-radius: 15px
  padding: .7em
  box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.3)

.location-price
  display: flex
  justify-content: space-between
  margin-top: 2em

.popular-item-price
  margin-left: 150px
  
.popular-items
  img
    width: 89px
    height: 89px
    margin: 5px
    border-radius: 8px


.flavor-tag
  font-size: .8em
  background-color: rgb(242,153,74,0.2)
  text-align: center
  border-radius: 50px
  width: 50px
  font-weight: 200

  .tag-title
    color: base.$orange

h1
  color: #000
  max-width: 380px
h4
  color: #000




.wrapper-cafes
  display: grid
  height: 20vh
  grid-gap: 1rem
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr))

.wrapper-cafes
  div
    display: grid
    // place-items: center
    box-shadow: 2px 5px 10px -4px rgba(0,0,0,0.3)
    border-radius: 1em
    padding: 4%

.wrapper-cafes
  img
    width: 100%
    border-radius: 2em

.cafe-title, .info-title
  font-weight: bold
  color: #222
  font-size: 1.2em

// .cafe-subtitle

.info-box
  max-width: 400px
  display: flex
  justify-content: space-between
  padding:2%


.info-title
  margin-top:10px

.info-arrow
  margin-top:30px


.info-box
  p
  font-weight: bold


@media (min-width: 700px)
    .popular-items
      display:flex
      max-width: 1000px
      // flex-direction: column

    .popular-item-price
      margin-left:500px

      .location-price
        display: flex
        justify-content: space-between
        margin-top: 2em

    .popular-items
      img
        width: 200px
        height: 200px
        margin: 5px
        border-radius: 8px

 










</style>
