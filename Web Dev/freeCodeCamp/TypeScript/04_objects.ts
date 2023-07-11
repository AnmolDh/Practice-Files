const aUser = {
  name: "anmol",
  email: "hello@bello.com",
  isActive: true,
};

function createUser({ name: string, isPaid: boolean }) {}
createUser({ name: "anmol", isPaid: true });

function createCourse(): { name: string; price: number } {
  return { name: "ts", price: 10 };
}

type User = {
  name: string;
  email: string;
  isActive: boolean;
};
function users(user: User): User {
  return { name: "", email: "", isActive: true };
}
users({ name: "", email: "", isActive: true });

export { };