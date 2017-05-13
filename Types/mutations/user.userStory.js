userStory: {
  description: 'Object: Bio information for user.',
  type: new NonNull(
    new InputObject({
      name: 'UserInputStoryObject',
      fields: () => ({
        age: { type: IntType },
        birthday: { type: StringType },
        bio: { type: StringType },
      }),
    }),
  ),
},
