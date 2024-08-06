type User = {
  name: string;
  regNo: string;
  uniName: string;
  logo: string;
  roll_no?: string;
  dp?: string;
  program?: string;
  gender?: string;
  dob?: string;
  section?: string;
  father?: string;
  mother?: string;
  cnic?: string;
  passport?: string;
  email?: string;
  cell?: string;
  home_phone?: string;
  status?: string;
  type?: string;
  religion?: string;
  marital_status?: string;
  next_kin?: string;
  next_kin_mobile?: string;
  website?: string;
  fb?: string;
  linkedin?: string;
  tweeter?: string;
  address?: string;
  city?: string;
  district?: string;
  province?: string;
  country?: string;
  postal_address?: string;
  permit_residency?: string;
};

type IUserState = {
  user?: User;
  currentCourses?: ICourse[];
};
