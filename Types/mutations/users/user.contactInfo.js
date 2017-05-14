contactInfo: {
  description: 'Contact info & GeoLocation info for new user.',
  type: new NonNull(
    new InputObject({
      name: 'NewUserContanctInfoObject',
      fields: () => ({
        email: {
          description: 'The email for this new user.',
          type: StringType,
        },
        phone: {
          description: 'The phone number for this new user.',
          type: StringType,
        },
        location: {
          description: 'IP address, lat, long, & country code. for this new user from their current login.',
          type: new NonNull(
            new ObjectType({
              name: 'NewUserGeolocationObject',
              fields: () => ({
                ipAddress: {
                  description: 'IP address for this new user.',
                  type: StringType,
                },
                lat: {
                  description: 'Latitude coord. for this new user.',
                  type: StringType,
                },
                long: {
                  description: 'Longitude coord. for this new user.',
                  type: StringType,
                },
                country: {
                  description: 'Country code for this new user.',
                  type: StringType,
                },
              }),
            }),
          ),
        },
      }),
    }),
  ),
},
