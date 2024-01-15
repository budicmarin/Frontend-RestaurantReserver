<template>
    <h1>Dobrodošli na početnu stranicu Resturant Reserver-a!</h1>
  	<div>
    <a href="/notification">
    <button type="button" class="btn btn-primary mt-3" >Obavijesti</button>
    </a>


    <a href="/menu">
    <button type="button" class="btn btn-primary mt-3" >Menu</button>
    </a>



    <a href="/reservation">
    <button type="button" class="btn btn-primary mt-3" >Rezervacija</button>
    </a>
 
  </div>
    <br>
    <h1>Hvala vam što ste s nama!</h1>
</template>
<style >
.button-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 100%; /* Adjust the gap as needed */
  width: 100%;
  margin-top: 20px;
  position:absolute
}

button {
  
  margin-top: 10px;
}
</style>
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
