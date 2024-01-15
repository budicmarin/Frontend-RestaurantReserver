<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-5">This is a register page</h1>
        <form @submit.prevent="onSubmit" class="form-row">

          <div class="row">
            <div class="col-md-6">
              <div class="form-group">
                <label for="inputName">Ime</label>
                <input type="text" class="form-control" id="inputName" v-model="formData.name" placeholder="Enter name" required>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="inputSureName">Prezime</label>
                <input type="text" class="form-control" id="inputSureName" v-model="formData.surname" placeholder="Enter surname" required>
              </div>
            </div>
          </div>

          <div class="form-group col-md-12">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="formData.email" placeholder="Enter email" required>
          </div>

          <div class="form-group col-md-12">
            <label for="examplePhone">Broj Mobitela</label>
            <input type="tel" class="form-control" id="examplePhoneNumber" v-model="formData.phoneNumber" placeholder="Enter Broj Telefona" required>
          </div>

          <div class="form-group col-md-12">
            <!-- Include the DatePickermodel component and pass any necessary props -->
            <!-- <DatePickermodel /> -->
          </div>

          <div class="form-group col-md-12">
            <label for="exampleInputPassword1">Lozinka</label>
            <input type="password" class="form-control" id="exampleInputPassword1" v-model="formData.password" placeholder="Password" required>
          </div>

          <div class="form-group col-md-12">
            <label for="exampleInputPassword2">Ponovi Lozinku</label>
            <input type="password" class="form-control" id="exampleInputPassword2" v-model="formData.confirmPassword" placeholder="Password" required>
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
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      formData: {
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
      },
    };
  },
  methods: {
    onSubmit() {
      console.log('Registriran', this.formData);
      // You can perform additional actions here, such as sending the form data to a server.
    },
  },
});
</script>
