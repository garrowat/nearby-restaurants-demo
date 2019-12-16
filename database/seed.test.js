const { Restaurant } = require('./datamocker.js');

const testaurant = new Restaurant();

describe('Seed Script - Restaurant', () => {
  it('Generates a valid retaurant name in three parts', () => {
    const nameParts = testaurant.name.split(' ');
    expect(nameParts[0]).toMatch(/[a-zA-Z].+'s/);
  });
});
