export type Customer = {
  id: string;
  firstName: string;
  lastName: string;
  email: string | null;
  phone: string | null;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  } | null;
  status: "active" | "inactive";
};
