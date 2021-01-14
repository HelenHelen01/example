'use strict';

const x = '23';

if (x === 23) console.log(23);
const calcAge = (birthYear) => 2037 - birthYear;

const jonas = {
  firstName: 'Jonas',
  lastName: 'Zach',
  birthYeah: 1987,
  job: 'teacher',
  friends: ['[Micchael]', 'Peter', 'Steven'],
  hasDriversLicense: true,

  getSummery: function () {
    console.log(this);
  },
};

console.log(jonas.getSummery());
