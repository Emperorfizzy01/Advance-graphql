// const { animals } = require("../db")

const Category = {
    animals: (parent, args, { animals }) => {
      let animal = animals.filter(animal => {
        // console.log(animal.category);
        return animal.category === parent.id
        
      })
      return animal
    }
  }

module.exports = Category