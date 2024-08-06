type IAuthState = {
  token: string;
  refresh_token: string;
  user?: User;
};

type ILoginResponse = {
  token: string;
  refresh_token: string;
  name: string;
  reg_no: string;
  uni_name: string;
  logo: string;
};
