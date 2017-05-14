images: {
  description: 'Images array for the new Product.',
  type: new ListType(
    new ObjectType({
      name: 'ProductImageObject',
      fields: () => ({
        purpose: { type: StringType },
        url: { type: StringType },
      }),
    }),
  ),
},
