contactInfo: {
  type: new ObjectType({
    name: 'UserContanctInfoObject',
    description: 'Geolocation information for user.',
    fields: () => ({
      email: { type: StringType },
      phone: { type: StringType },
      location: {
        type: new ObjectType({
          name: 'UserGeolocationObject',
          fields: {
            ipAddress: { type: StringType },
            lat: { type: StringType },
            long: { type: StringType },
            country: { type: StringType },
          },
        }),
      },
    }),
  }),
},
