<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-5">This is a register page</h1>
        <form @submit.prevent="onSubmit" class="form-row">
         
          <div class="form-group col-md-6">
            <label for="inputName">Ime</label>
            <input type="name" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name">
          </div>

          <div class="form-group col-md-6">
            <label for="inputSureName">Prezime</label>
            <input type="surename" class="form-control" id="inputSureName" aria-describedby="surenameHelp" placeholder="Enter surename">
          </div>
       
          <div class="form-group col-md-12">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>

          <div class="form-group col-md-12">
            <label for="examplePhone">Broj Mobitela</label>
            <input type="phone" class="form-control" id="examplePhoneNumber" aria-describedby="phoneHelp" placeholder="Enter Broj Telefona">
          </div>

          <div class="form-group col-md-12">
            <DatePickermodel />
          </div>

          <div class="form-group col-md-12">
            <label for="exampleInputPassword1">Lozinka</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>

          <div class="form-group col-md-12">
            <label for="exampleInputPassword2">Ponovi Lozinku</label>
            <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password">
          </div>

          <div class="form-group col-md-12">
            <button type="submit" class="btn btn-primary mt-3">Registriraj</button>
          </div>

        </form>
      </div>
    </div>
  </div>
</template>



<script>
import DatePicker from 'vue-datepicker';

export default {
  components: {
    DatePicker,
  },
  data() {
    return {
      yourDateModel: null, // or your initial date value
    };
  },
};
</script>