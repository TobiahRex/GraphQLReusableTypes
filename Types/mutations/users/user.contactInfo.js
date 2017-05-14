contactInfo: {
  description: 'Object: Contanct info for user.',
  type: new NonNull(
    new InputObject({
      name: 'UserInputContactInfoObject',
      fields: () => ({
        email: { type: StringType },
        phone: { type: StringType },
        location: {
          type: new NonNull(
            new InputObject({
              name: 'UserInputGeolocationObject',
              description: 'Object: Geolocation information for user.',
              fields: () => ({
                ipAddress: { type: StringType },
                lat: { type: StringType },
                long: { type: StringType },
                country: { type: StringType },
              }),
            }),
          ),
        },
      }),
    }),
  ),
},
