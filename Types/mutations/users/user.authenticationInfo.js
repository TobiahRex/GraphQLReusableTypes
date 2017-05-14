authentication: {
  description: 'Object: Auth info for user.',
  type: new NonNull(
    new InputObject({
      name: 'UserInputAuthenticationObject',
      fields: () => ({
        lastLogin: { type: StringType },
        signedUp: { type: StringType },
        registered: { type: StringType },
        password: { type: StringType },
        avatar: { type: StringType },
      }),
    }),
  ),
},
