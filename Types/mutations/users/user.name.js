name: {
  description: 'Object: The First & Last name for the new user.',
  type: new NonNull(
    new InputObject({
      name: 'NewUserNameObject',
      fields: () => ({
        first: {
          description: 'The first name of the new user.',
          type: StringType,
        },
        last: {
          description: 'The last name of the new user.',
          type: StringType,
        },
        display: {
          description: 'The display name of the new user.',
          type: StringType,
        },
      }),
    }),
  ),
},
