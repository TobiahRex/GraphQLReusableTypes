permissions: {
  type: new ObjectType({
    name: 'UserPermissionsObject',
    description: 'Permissions granted for user.',
    fields: () => ({
      role: { type: StringType },
    }),
  }),
},
