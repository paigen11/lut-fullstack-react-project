import Habits from './habits';

export const habitsMutations = {
  Mutation: {
    async addHabit(_, { habit }) {
      try {
        const newHabit = await Habits.create({
          ...habit,
        });
        return newHabit;
      } catch (err) {
        console.log(err);
      }
    },

    async addEvent(_, { habitId, date }) {
      try {
        date.setHours(0, 0, 0, 0);
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
            // this is what prevents multiple instances of the same event being logged and saved into the db
            'events.date': {
              $ne: date,
            },
          },
          {
            $addToSet: {
              events: {
                date,
              },
            },
          },
        );
        return habit;
      } catch (e) {
        console.log('e', e);
      }
    },

    async removeEvent(_, { habitId, eventId }) {
      try {
        const habit = await Habits.findOneAndUpdate(
          {
            _id: habitId,
          },
          {
            $pull: {
              events: {
                _id: eventId,
              },
            },
          },
        );
        return habit;
      } catch (e) {
        console.log('e', e);
      }
    },
  },
};
