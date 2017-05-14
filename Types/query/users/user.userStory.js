userStory: {
  description: 'Object: Bio information for new user.',
  type: new ObjectType({
    name: 'UserInputStoryObject',
    fields: () => ({
      age: {
        description: 'The age of this new user.',
        type: IntType,
      },
      birthday: {
        description: 'The birthday of this new user.',
        type: StringType,
      },
      bio: {
        description: 'The biography of this new user.',
        type: StringType,
      },
    }),
  }),
},
