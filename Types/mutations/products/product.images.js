images: {
  description: 'Images array for the new Product.',
  type: new NonNull(
    new ListType(
      new InputObject({
        name: 'NewProductImageObject',
        fields: () => ({
          purpose: { type: new NonNull(StringType) },
          url: { type: new NonNull(StringType) },
        }),
      }),
    ),
  ),
},
