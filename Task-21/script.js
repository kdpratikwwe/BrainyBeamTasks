let cart = {
  items: [],
  prices: 0,
  discounts: 0,
  totalPrice: 0,

  addItem(name, price, quantity) {
    const item = {
      name: name,
      price: price,
      quantity: quantity
    };

    this.items.push(item);
    this.prices += price * quantity;
    this.updateTotalPrice();
    this.displayCart();
  },

  
  removeItem(name) {
    this.items = this.items.filter(item => item.name !== name);
    this.prices = this.items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    this.updateTotalPrice();
    this.displayCart();
  },

 
  applyDiscount(discount) {
    this.discounts = discount;
    this.updateTotalPrice();
    this.displayCart();
  },

  updateTotalPrice() {
    this.totalPrice = this.prices - (this.prices * this.discounts) / 100;
  },


  displayCart() {
    console.log("Cart Details");
    console.log(this.items);
    console.log("Subtotal:", this.prices);
    console.log("Discount:", this.discounts + "%");
    console.log("Total Price:", this.totalPrice);
    console.log("-------------------------");
  }
};

cart.addItem("Book", 200, 2);
cart.addItem("Pen", 10, 5);
cart.applyDiscount(10);
cart.removeItem("Pen");

