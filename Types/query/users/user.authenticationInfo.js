authentication: {
  description: 'Authentication information for user.',
  type: new ObjectType({
    name: 'UserAuthenticationObject',
    fields: () => ({
      lastLogin: {
        description: 'The last time this user logged in.',
        type: StringType,
      },
      signedUp: {
        description: 'The date this user first signed up for newsletters - Typically coincides with users first purchase.',
        type: StringType,
      },
      registered: {
        description: 'The date this user first became a member.',
        type: StringType,
      },
      password: {
        description: 'This user\'s password if using email signup.',
        type: StringType,
      },
      avatar: {
        description: 'This user\'s profile avatar.',
        type: StringType,
      },
    }),
  }),
},
