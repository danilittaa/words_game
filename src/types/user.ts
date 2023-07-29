type UserPreferences = {
  music: boolean;
  sound_effects: boolean;
  lang_code: string;
};

type User = {
  id: number;
  username: string;
  email: string;
  exp: number;
  preferences: UserPreferences;
};

type UserState = {
  user: User;
  loading: boolean;
  error: string | null;
};

type Authorization = {
  refresh: string;
  access: string;
};

type AuthenticationResult = {
  auth: Authorization;
  user: User;
};
