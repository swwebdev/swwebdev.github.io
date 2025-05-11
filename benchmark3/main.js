Vue.createApp({
  data() {
    return {
      cars: [
          { id: 1, 
            name: '1967 Beep Beep Speedster GX',
            newOrUsed: 'Used',
            mileage: 180000,
            price: 17500,
            image: 'images/car-8245437_640.jpg'
          },
          { id: 2, 
            name: '1963 Beep Beep Speedster Sport',
            newOrUsed: 'Used',
            mileage: 185000,
            price: 17000,
            image: 'images/car-8245437_640.jpg'
          },
          { id: 3, 
            name: '1972 Beep Beep Speedster',
            newOrUsed: 'Used',
            mileage: 160000,
            price: 15000,
            image: 'images/car-8245437_640.jpg'
          }
        ]
    }
  },
}).mount('#inventory')