permissions: {
  description: 'Authorization permissions for this new user.',
  type: new NonNull(
    new InputObject({
      name: 'NewUserInputPermissionsObject',
      fields: () => ({
        role: {
          description: 'Authorization role for this new user.',
          type: StringType,
        },
      }),
    }),
  ),
},
