dates: {
  description: 'Important clerical dates regarding the product.',
  type: new ObjectType({
    name: 'ProductDateObject',
    fields: () => ({
      added_to_store: {
        description: 'The Date the product was first added to the store.',
        type: StringType,
      },
      removed_from_store: {
        description: 'The Date the product was removed from the store.',
        type: StringType,
      },
    }),
  }),
},
