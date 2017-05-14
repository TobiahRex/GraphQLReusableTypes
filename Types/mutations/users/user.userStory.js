userStory: {
  description: 'Object: Bio information for new user.',
  type: new NonNull(
    new InputObject({
      name: 'NewUserInputStoryObject',
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
  ),
},
