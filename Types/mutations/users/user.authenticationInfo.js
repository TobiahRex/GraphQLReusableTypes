authentication: {
  description: 'Authentication information for new user.',
  type: new NonNull(
    new InputObject({
      name: 'NewUserAuthenticationObject',
      fields: () => ({
        lastLogin: {
          description: 'The last time this new user logged in.',
          type: StringType,
        },
        signedUp: {
          description: 'The date this new user first signed up for newsletters - Typically coincides with users first purchase.',
          type: StringType,
        },
        registered: {
          description: 'The date this new user first became a member.',
          type: new NonNull(StringType),
        },
        password: {
          description: 'This new user\'s password if using email signup.',
          type: StringType,
        },
        avatar: {
          description: 'This new user\'s profile avatar.',
          type: StringType,
        },
      }),
    }),
  ),
},
