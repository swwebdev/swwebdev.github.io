Vue.createApp({
  data() {
    return {
      merch: [
        {
          id: 1,
          image: 'plush.png',
          name: 'Rocket Plush',
          description: 'Keep Rocket by your side at all times! This 10" plush will keep you safe from alien invaders!',
          price: '30',
          section: 'plush',
        },
        {
          id: 2,
          image: 'mug.png',
          name: 'RocketQuest Mug',
          description: 'Fuel your morning routine with RocketQuest! Dishwasher safe and perfect for your drink of choice.',
          price: '15',
          section: 'drinkware',
        },
        {
          id: 3,
          image: 'shirt.png',
          name: 'Rocket T-Shirt',
          description: 'Show your love for RocketQuest in this comfy 100% cotton t-shirt.',
          price: '35',
          section: 'apparel',
        },
        {
          id: 4,
          image: 'tank.png',
          name: 'Rocket Tank Top',
          description: 'Show your love for RocketQuest in this comfy 100% cotton tank.',
          price: '25',
        },
        {
          id: 5,
          image: 'keychain.png',
          name: 'Rocket Key Chain',
          description: 'Take Rocket with you on the go with this cute vinyl keychain!',
          price: '15',
          section: 'keychains',
        }
      ],
      cart: [
        // {
        //   id: 1,
        //   image: 'plush.png',
        //   name: 'Rocket Plush',
        //   description: 'Keep Rocket by your side at all times! This 10" plush will keep you safe from alien invaders!',
        //   price: '30',
        //   section: 'plush',
        // }
      ],
    };
  },
  methods: {
    addMerch(id) {
      const purchase = this.merch.find((purchase) => purchase.id == id);
      const index = this.cart.findIndex((purchase) => purchase.id == id);

      if (index != -1) {
        this.cart[index].quantity++;
      } else {
        this.cart.push({...purchase, quantity: 1});
      }
    },

    getTotal() {
      var total = 0;
      this.cart.forEach((item) => {
        total += item.price * item.quantity;
      });

      return total.toFixed(2);
    },

    reduceItem(id) {
      var item = this.cart.find((item) => item.id == id);
      
      if (item.quantity > 1){
        item.quantity--;
      } else {
        this.cart = this.cart.filter((item) => item.id != id);
      }
    },

    addItem(id) {
      var item = this.cart.find((item) => item.id == id);
      item.quantity++;
    },
  }
}).mount('#merch-shop');