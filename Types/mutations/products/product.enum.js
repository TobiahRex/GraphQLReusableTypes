sizes: { type: new NonNull(
  new EnumType({
    name: 'NewProductSize',
    /* eslint-disable quote-props */
    values: {
      '30': {
        value: '30',
        description: '30 milliter bottle.',
      },
      '60': {
        value: '60',
        description: '60 milliliter bottle.',
      },
      '120': {
        value: '120',
        description: '120 milliliter bottle',
      },
    },
    /* eslint-enable quote-props */
  }),
)},
