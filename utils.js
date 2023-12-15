function currentAgeForBirthYear(birthYear) {
  const currentYear = new Date().getFullYear();
  const age = currentYear - birthYear;
  return age;
}

module.exports = { currentAgeForBirthYear };