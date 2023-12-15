const { currentAgeForBirthYear } = require('../utils');

test('returns the age of a person based on the year of birth', () => {
  const birthYear = 1984;
  const ageOfPerson = currentAgeForBirthYear(birthYear);
  expect(ageOfPerson).toBe(39);
});