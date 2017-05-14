dates: {
  name: 'NewProductImportantDateInformation',
  description: 'Important dates regarding the product.',
  type: new NonNull(
    new InputObject({
      name: 'NewProductDateObject',
      fields: {
        added_to_store: {
          description: 'The Date the product was first added to the store.',
          type: new NonNull(StringType),
        },
        removed_from_store: {
          description: 'The Date the product was removed from the store.',
          type: StringType,
        },
      },
    }),
  ),
},
