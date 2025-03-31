export type CodeRequest = {
  email: string;
};

export type CodeResponse = void;

export type SignInRequest = {
  email: string;
  code: string;
};

export type Token = {
  accessToken: string;
};

export type SignInResponse = Token;

export type SignInRequestAdmin = {
  email: string;
  password: string;
};

export type SignInResponseAdmin = Token;
