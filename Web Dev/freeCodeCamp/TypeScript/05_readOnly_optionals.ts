type User = {
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  cardDetails?: cardDetails;
};

type cardNumber = {
  num: number;
};
type cardDate = {
  date: string;
};

type cardDetails = cardNumber & cardDate & { cvv: number };

let myUser: User = {
  _id: "12020",
  name: "anmol",
  email: "huihui@hue.com",
  isActive: true,
  cardDetails: { num: 9292, date: "today", cvv: 998 },
};

export {};
