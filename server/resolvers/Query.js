//const { mainCards, animals, categories } = require("../db")

const Query = {
    mainCards: () => mainCards,
    animals: ( parent, args, { animals }) => animals,
    animal: (parent, args) => {
      let animal = animals.find((animal) => {
        return animal.slug == args.slug
      })
      return animal
    },
    categories: ( parent, args, { categories } ) => categories,
    category: (parent, args) => {
      let category = categories.find((category) => {
        return category.slug == args.slug
      })
      return category
    },
}

module.exports = Query