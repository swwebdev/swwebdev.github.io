Vue.createApp({
  data() {
    return {
      toggle: false,
      galaxyName: 'null',
      adoptions: [
        {
          id: 1,
          image: 'cosmue.png',
          name: 'Cosmue',
          species: 'Gnarpulus Felidae',
          description: 'Cosmue is an easy-going cat-thing looking for a new home. She\'s nervous around new people and might take some time getting used to you.'
        },
        {
          id: 2,
          image: 'grady.png',
          name: 'Grady',
          species: 'Mega Tardigrade',
          description: 'Grady\'s former owners abandoned him because they couldn\'t afford the cost of feeding him. He\'s friendly, but only if he\'s been fed.'
        },
        {
          id: 2,
          image: 'glitch.png',
          name: 'Voidus Infinitum',
          species: '????',
          description: "ö̷͙̥h̶̛̤ ̵̲͂g̷̻̕o̴̩͘d̴̦͖͆ ̸̥̪̽ĩ̵̝͌ͅt̵̼͉̅͘'̶̪̝̔̒s̵̞̕ ̷̞̬̐͠b̴̨̃ŗ̷̉e̴̜͊͝ac̵̱̉̈ͅh̶͍̹̄͝ê̵͓̹d̵̥̊͗ ̴̢̃͝c̸̓̅͜ơ̵͙̕ͅǹ̶͕̼t̴̤̬̀a̵̢̲͑̾ḯ̴̱͚n̵̜̲̂m̴͍͆̒e̸̘̣͠ñ̷̙̝̎t̴̺͈͆S̸̢̹̔͒̀̑͝A̶̭̤̹̰̩̬͚̳̪̫̱̲̥̍͆̌̓͊͑̚͜͠V̷̯̞̻͖̻̥͙̳̲͉͊́̉̕E̶̤͇̞̭͎̭̠͎̘͐͗̐̐̃̊̇͗̽̌̀́͠͝ ̴̡͕͖̟̤͎̩̺̻̯̺̘̣͉̥̆̒͛̈̎͗́Y̵̢͔̥̟̹̙̖̤̺̗̱̯̰̲̙̪͕̑͒̐͊Ơ̷̧̧̤͖̳̟̙̭̻̝̠̐̄͒̊́͂̀͑̅̐͋͆̊͘U̸͎͍̦̺͙̦̯̱̤̠̪͚̦̒̂͗̀͌̔̐̂̋́͝R̵̻̳̻̝̐̏̊̾́͒̉͗͑̎̌̉̅͘͘̚S̸̨̧̼͎͎͇͍̺͍̯̪̾́̿̎̉ͅĔ̵̢̳̞̲̮̺͙̖̝̤̤̯̥͚́͊̃̔́̾͝ͅĽ̶̢͍͚̪͍̱̗̯̯̣̞̉̈́͗̿̽̇̕F̴͇̟̝̏̆̔̾̆͂͆͒̉̊̂<"
        }
      ]
    }
    
  },
  methods: {
   
  }
}).mount('#adoptions')