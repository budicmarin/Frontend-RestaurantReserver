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
                <input
                  type="text"
                  class="form-control"
                  id="inputName"
                  v-model="name"
                  placeholder="Enter name"
                  required
                />
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="inputSureName">Prezime</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputSureName"
                  v-model="surname"
                  placeholder="Enter surname"
                  required
                />
              </div>
            </div>
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              v-model="email"
              placeholder="Enter email"
              required
            />
          </div>
          <div class="form-group">
            <label for="examplePhone">Broj Mobitela</label>
            <input
              type="tel"
              class="form-control"
              id="examplePhoneNumber"
              v-model="phoneNumber"
              placeholder="Enter phone number"
              required
            />
          </div>
          <div class="form-group">
            <label for="examplePersonNumber">Broj Osoba</label>
            <input
              type="number"
              class="form-control"
              id="examplePersonNumber"
              v-model="numberOfPeople"
              placeholder="Enter number of people"
              required
            />
          </div>
          <div></div>
          <button type="submit" class="btn btn-primary mt-3">Rezerviraj</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { rezervacija } from "@/store";
import api from "@/connection";
export default {
  data() {
    return {
      name: "",
      surname: "",
      email: "",
      phoneNumber: "",
      numberOfPeople: 0,
    };
  },
  methods: {
    onSubmit() {
      const newRezervation = {
        name: this.name,
        surname: this.surname,
        email: this.email,
        phoneNumber: this.phoneNumber,
        numberOfPeople: this.numberOfPeople,
      };

      /* rezervacija.push(newRezervation);
      console.log(rezervacija);1
      */
    },
  },
};
</script>
