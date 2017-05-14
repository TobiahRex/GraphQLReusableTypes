nicotine_strengths: {
  description: 'The nicotine strength for the new product.',
  type: new NonNull(
    new EnumType({
      name: 'NewProductNicotineStrengthsEnum',
      values: {
        2: {
          value: 2,
          description: '2mg of Nicotine.',
        },
        4: {
          value: 4,
          description: '4mg of Nicotine.',
        },
        6: {
          value: 6,
          description: '6mg of Nicotine',
        },
        8: {
          value: 8,
          description: '8mg of Nicotine.',
        },
        10: {
          value: 10,
          description: '8mg of Nicotine.',
        },
        12: {
          value: 12,
          description: '8mg of Nicotine.',
        },
        14: {
          value: 14,
          description: '8mg of Nicotine.',
        },
        16: {
          value: 16,
          description: '8mg of Nicotine.',
        },
        18: {
          value: 18,
          description: '8mg of Nicotine.',
        },
      },
    }),
  ),
},
