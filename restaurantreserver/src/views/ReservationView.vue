<template>
  <div class="reservation">
    <h1>Odabir stola</h1>
    <form @submit.prevent="onSubmit">
          <div>
          <div class="form-group">
            <label for="inputName">Ime</label>
            <input type="name" class="form-control" id="inputName" aria-describedby="nameHelp" placeholder="Enter name">
          </div>
        
          <div class="form-group">
            <label for="inputSureName">Prezime</label>
            <input type="surename" class="form-control" id="inputSureName" aria-describedby="surenameHelp" placeholder="Enter surename">
          </div>
        </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="examplePhone">Broj Mobitela</label>
            <input type="phone" class="form-control" id="examplePhoneNumber" aria-describedby="phoneHelp" placeholder="Enter Broj Telefona">
          </div>
          <div class="form-group">
            <label for="examplePersonNumber">Broj Osoba</label>
            <input type="phone" class="form-control" id="examplePersonNumber" aria-describedby="personNumberHelp" placeholder="Enter Broj Osoba">
          </div>
          <div>
            <DatePickermodel  />
           
          </div>
         


          <button type="submit" class="btn btn-primary mt-3">Rezerviraj</button>
        </form>
  </div>
</template>
