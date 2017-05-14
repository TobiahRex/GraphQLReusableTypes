images: {
  name: 'NewProductImages',
  description: 'Images array for the new Product.',
  type: new ListType(
    new InputObject({
      name: 'NewProductImageObject',
      description: 'Product image information',
      fields: {
        purpose: { type: StringType },
        url: { type: StringType },
      },
    }),
  ),
},
