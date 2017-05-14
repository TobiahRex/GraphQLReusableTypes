quantities: {
  name: 'NewProductStockQuantities',
  description: 'Availability stats for this product.',
  type: new ObjectType({
    name: 'NewProductQuantityInfo',
    fields: {
      available: {
        description: 'The available quanitty for this product.',
        type: IntType,
      },
      in_cart: {
        description: 'The quantity for products currently in customers\' carts.',
        type: IntType,
      },
    },
  }),
},
