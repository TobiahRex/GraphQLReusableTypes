userStory: {
  type: new ObjectType({
    name: 'UserStoryObject',
    description: 'Bio information for user.',
    fields: () => ({
      age: { type: IntType },
      birthday: { type: StringType },
      bio: { type: StringType },
    }),
  }),
},
