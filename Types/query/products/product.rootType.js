rootType: new ObjectType({
    name: 'Product',
    description: 'A store product.',
    fields: {
      product: {
        description: 'Object: All the important details for the product.',
        type: new ObjectType({
          name: 'ProductObject',
          fields: () => ({ /* INSERT FIELDS HERE */ }),
        }),
      },
    },
  }),
