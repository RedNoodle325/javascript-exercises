const findTheOldest = function (people) {
  let max = 0;
  let age = 0;
  let oldest = -1;

  for (i = 0; i < people.length; i++) {
    if ('yearOfDeath' in people[i]){
      age = people[i].yearOfDeath - people[i].yearOfBirth;
    } else {
      age = 2024 - people[i].yearOfBirth;
    }

    console.log(people[i].name + ": " + age);
    if (age > max) {
      max = age;
      oldest = i;
    }
  }
  return people[oldest];
};

// Do not edit below this line
module.exports = findTheOldest;
