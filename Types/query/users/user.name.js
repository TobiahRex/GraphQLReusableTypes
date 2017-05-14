name: {
  description: 'Object: The First & Last name for the User.',
  type: new ObjectType({
    name: 'UserNameObject',
    fields: () => ({
      first: {
        description: 'The first name of the user.',
        type: StringType,
      },
      last: {
        description: 'The last name of the user.',
        type: StringType,
      },
      display: {
        description: 'The display name of the user.',
        type: StringType,
      },
    }),
  }),
},
