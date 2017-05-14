authentication: {
  type: new ObjectType({
    name: 'UserAuthenticationObject',
    description: 'Authentication information for user.',
    fields: () => ({
      lastLogin: { type: StringType },
      signedUp: { type: StringType },
      registered: { type: StringType },
      password: { type: StringType },
      avatar: { type: StringType },
    }),
  }),
},
