const users = [
  { firstName: "Jan", lastName: "Kowalski", age: 15 },
  { firstName: "Anna", lastName: "Nowak", age: 25 },
  { firstName: "Marek", lastName: "Zieliński", age: 18 },
];

interface User {
  firstName: string;
  lastName: string;
  age: number;
}

interface NewUser {
  fullName: string;
  isAdult: boolean;
}

const showNameAndAge = (users: User[]): NewUser[] => {
  return users.map((user) => {
    return {
      fullName: user.firstName + " " + user.lastName,
      isAdult: user.age >= 18,
    };
  });
};
