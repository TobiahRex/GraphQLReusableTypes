permissions: {
  description: 'Object: Permissions granted for user.',
  type: new NonNull(
    new InputObject({
      name: 'UserInputPermissionsObject',
      fields: () => ({
        role: { type: StringType },
      }),
    }),
  ),
},
