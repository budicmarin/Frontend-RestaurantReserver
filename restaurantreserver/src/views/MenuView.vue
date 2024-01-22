<template>
  <div class="menu">
    <h2>{{ restaurantName }} Menu</h2>

    <!-- Tab buttons -->
    <div class="tab-buttons">
      <button @click="selectCategory('pizzas')" :class="{ active: selectedCategory === 'pizzas' }">Pizzas</button>
      <button @click="selectCategory('sides')" :class="{ active: selectedCategory === 'sides' }">Sides</button>
      <button @click="selectCategory('desserts')" :class="{ active: selectedCategory === 'desserts' }">Desserts</button>
    </div>

    <!-- Display selected category items -->
    <div v-if="selectedCategoryItems.length > 0" class="menu-items">
      <div v-for="(item, index) in selectedCategoryItems" :key="index" class="menu-item">
        <h3>{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <p class="price">{{ item.price }}€</p>
      </div>
    </div>
    <div v-else>
      <p>No items available in this category.</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      restaurantName: "My Restaurant",
      menuItems: [
      { category: "pizzas", name: "Margherita",  price: 8.5 },
        { category: "pizzas", name: "Pepperoni", price: 9.5 },
        { category: "pizzas", name: "Vegetarian", price: 10.0 },
        
        { category: "sides", name: "French Fries",  price: 3.5 },
        { category: "sides", name: "Onion Rings",  price: 4.0 },
        
        { category: "desserts", name: "Chocolate Cake", price: 5.0 },
        { category: "desserts", name: "Cheesecake", price: 6.0 },

      ],
      selectedCategory: "pizzas",
    };
  },
  computed: {
    selectedCategoryItems() {
      return this.menuItems.filter(item => item.category === this.selectedCategory);
    },
  },
  methods: {
    selectCategory(category) {
      this.selectedCategory = category;
    },
  },
};
</script>

<style scoped>
.menu {
  max-width: 600px;
  margin: auto;
}

.tab-buttons {
  margin-bottom: 10px;
}

.tab-buttons button {
  margin-right: 10px;
  cursor: pointer;
  padding: 8px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.tab-buttons button.active {
  background-color: #ccc;
}

.menu-items {
  display: flex;
  flex-wrap: wrap;
}

.menu-item {
  width: calc(33.33% - 20px);
  margin: 10px;
  border: 1px solid #ccc;
  padding: 10px;
  box-sizing: border-box;
}

.price {
  font-weight: bold;
  color: #333;
}
</style>
