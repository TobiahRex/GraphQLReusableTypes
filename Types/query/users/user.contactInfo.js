contactInfo: {
  description: 'Contact info & GeoLocation info for user.',
  type: new ObjectType({
    name: 'UserContanctInfoObject',
    fields: () => ({
      email: {
        description: 'The email for this user.',
        type: StringType,
      },
      phone: {
        description: 'The phone number for this user.',
        type: StringType,
      },
      location: {
        description: 'IP address, lat, long, & country code. for this user from their last login.',
        type: new ObjectType({
          name: 'UserGeolocationObject',
          fields: () => ({
            ipAddress: {
              description: 'IP address this user last used.',
              type: StringType,
            },
            lat: {
              description: 'Latitude coord. this user last logged in from.',
              type: StringType,
            },
            long: {
              description: 'Longitude coord. this user last logged in from.',
              type: StringType,
            },
            country: {
              description: 'Country code this user last logged in from.',
              type: StringType,
            },
          }),
        }),
      },
    }),
  }),
},
