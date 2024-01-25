<template>
  <nav>
    <router-link to="/">Home</router-link> |

    <router-link to="/about">About</router-link> |

    <router-link to="/login" v-if="curentUser">Login</router-link> |

    <router-link to="/register" v-if="curentUser">Register</router-link>

    <a v-else href="/" @click.prevent="logout()">Logout</a>
  </nav>
  <router-view />
</template>
<script>
import { curentUser } from "@/store";
export default {
  data() {
    return {
      curentUser,
    };
  },
  methods: {
    logout() {},
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000203;
  height: 100vh; /* Set the height to the full viewport height */
  background-image: url("../src/assets/pozadina.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0.9;

  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #000000;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
