var user = [
    {
        id: 1,
        name: 'Marin',
        surname: 'Budic',
        email: 'budicmarin@gmail.com',
        phoneNumber: '0123456789',
        password: 'lozinka'

    }



];
var rezervacija = [{
    
}];

var menuItems= [
    { category: "pizzas", name: "Margherita", price: 8.5 },
    { category: "pizzas", name: "Pepperoni", price: 9.5 },
    { category: "pizzas", name: "Vegetarian", price: 10.0 },
      
    { category: "sides", name: "French Fries", price: 3.5 },
    { category: "sides", name: "Onion Rings", price: 4.0 },
      
    { category: "desserts", name: "Chocolate Cake", price: 5.0 },
    { category: "desserts", name: "Cheesecake", price: 6.0 },

];
var curentUser = {
    id: 0,
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    authenticated:'',


}
export {
    
    user,
    rezervacija,
    menuItems,
    curentUser
}