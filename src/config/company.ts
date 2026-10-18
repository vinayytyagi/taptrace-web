export type Company = {
  legalName: string;
  productName: string;
  city: string;
  email: string;
  website: string;
  registeredAddress: string | null;
  llpin: string | null;
  gstin: string | null;
  grievanceOfficer: { name: string; designation: string } | null;
};

export const COMPANY: Company = {
  legalName: "Valentir Technologies LLP",
  productName: "Taptrace",
  city: "Noida, Uttar Pradesh, India",
  email: "hello@valentir.in",
  website: "https://valentir.in",
  registeredAddress: "Ground Floor, Graphix Tower 2, A-13, Sector 62, Noida, UP - 201301",
  llpin: null,
  gstin: null,
  grievanceOfficer: null,
};
