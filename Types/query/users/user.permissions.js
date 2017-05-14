permissions: {
  description: 'Authorization permissions granted for user.',
  type: new ObjectType({
    name: 'UserPermissionsObject',
    fields: () => ({
      role: {
        description: 'The authorization role for this user.',
        type: StringType,
      },
    }),
  }),
},
