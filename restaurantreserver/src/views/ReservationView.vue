<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1>Odabir stola</h1>
        <form @submit.prevent="onSubmit">
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
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" v-model="formData.email" placeholder="Enter email" required>
          </div>
          <div class="form-group">
            <label for="examplePhone">Broj Mobitela</label>
            <input type="tel" class="form-control" id="examplePhoneNumber" v-model="formData.phoneNumber" placeholder="Enter phone number" required>
          </div>
          <div class="form-group">
            <label for="examplePersonNumber">Broj Osoba</label>
            <input type="number" class="form-control" id="examplePersonNumber" v-model="formData.numberOfPeople" placeholder="Enter number of people" required>
          </div>
          <div>
            <!-- Include the DatePickermodel component and pass any necessary props -->
            <!-- <DatePickermodel /> -->
          </div>
          <button type="submit" class="btn btn-primary mt-3">Rezerviraj</button>
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
        numberOfPeople: 0,
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
