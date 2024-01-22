<template>
  <div class="korisnicki-racun">
    <!-- Navigation Links -->
  
    <!-- User Information Box -->
    <div class="user-info-box">
      <img class="user-image" alt="User" src="image.png" />
      <div class="user-details">
        <div class="user-name">{{ clientData.name }}</div>
        <div class="user-type">{{ clientData.type }}</div>
        <div class="user-reservations">{{ clientData.reservations.length }} Reservations</div>
      </div>
      <div class="reservation-box">
        <div class="reservation-header">Nova Rezervacija</div>
        <div class="reservation-form">
          <!-- Your reservation form fields can go here -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KorisnickiRacun",
  data() {
    return {
      clientData: {
        name: "",
        type: "",
        reservations: [],
        // Add other client-related data here
      },
    };
  },
  methods: {
    updateClientData() {
      // Simulate updating client data
      this.clientData = {
        name: "New Name",
        type: "New Type",
        reservations: [],
        // Add other updated data here
      };
    },
  },
  created() {
    // Simulate fetching client data on component creation
    this.updateClientData();
  },
};
</script>

<style>


.nav-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.user-info-box {

  background-position: left;
  background-size: cover;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: left;
  
}

.user-image {
  height: 200px;
  object-fit: cover;
  width: 200px;
  border-radius: 50%;
  margin: 20px auto;
}

.user-details {
  background-color: #d9d9d9;
  border-radius: 10px;
  padding: 20px;
  margin: 0 20px;
  text-align: center;
}

.user-name {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 40px;
  font-weight: 400;
  margin-bottom: 10px;
}

.user-type {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
}

.user-reservations {
  color: #000000;
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
}

.reservation-box {
  background-color: #e01515;
  border-radius: 10px;
  color: #ffffff;
  padding: 20px;
  margin: 20px;
}

.reservation-header {
  font-family: "Inter-Regular", Helvetica;
  font-size: 30px;
  font-weight: 400;
  margin-bottom: 10px;
}

.reservation-form {
  /* Add your styles for the reservation form fields */
}
</style>
