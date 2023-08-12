export type UserPreferences = {
  music: boolean;
  sound_effects: boolean;
  lang_code: string;
};

export type User = {
  id: number;
  username: string;
  email: string;
  exp: number;
  preferences: UserPreferences;
};

export type UserState = {
  user: User;
  loading: boolean;
  error: string | null;
};

export type Authorization = {
  refresh: string;
  access: string;
};

export type AuthenticationResult = {
  auth: Authorization;
  user: User;
};
