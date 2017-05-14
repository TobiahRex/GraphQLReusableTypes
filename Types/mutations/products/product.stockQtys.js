quantities: {
  description: 'Availability stats for this new product.',
  type: new InputObject({
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
