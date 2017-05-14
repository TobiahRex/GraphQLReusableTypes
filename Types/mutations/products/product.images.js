images: {
  name: 'NewProductImages',
  description: 'Images array for the new Product.',
  type: new NonNull(
    new ListType(
      new InputObject({
        name: 'NewProductImageObject',
        description: 'Product image information',
        fields: {
          purpose: { type: new NonNull(StringType) },
          url: { type: new NonNull(StringType) },
        },
      }),
    ),
  ),
},
