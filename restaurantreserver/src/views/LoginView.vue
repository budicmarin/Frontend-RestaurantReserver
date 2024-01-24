<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <h1 class="text-center mb-5">This is a login page</h1>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input v-model="username" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary mt-3">Login</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { user } from "@/store";
import { curentUser } from "@/store"


export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      console.log("Login", this.username);
      
      const foundUser = user.find(user => user.email === this.username);

      if (foundUser && foundUser.password === this.password) {
        curentUser.authenticated = true;
        curentUser.email = foundUser.email;
        curentUser.id = foundUser.id;
        curentUser.phoneNumber = foundUser.phoneNumber;
        curentUser.name = foundUser.name;
        curentUser.surname = foundUser.surname;

        
        
        console.log(curentUser);
        console.log(user);
        this.$router.replace({ name: "userview" });
      } else {
        
        console.log("Invalid username or password");
        
      }
    },
  },
};
</script>
