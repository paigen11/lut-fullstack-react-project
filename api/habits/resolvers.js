export const habitsResolvers = {
  Query: {
    async habits() {
      console.log('habits');
      return [
        {
          _id: 'somefunkyarray',
          name: 'make my bed',
        },
      ];
    },
  },
};
