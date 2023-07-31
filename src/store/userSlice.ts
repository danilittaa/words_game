import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { axiosWithAuth, axiosWithoutAuth } from "../axiosConfig";

export function deleteLocalStorage() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
}

export function addLocalStorage(data: any) {
  localStorage.setItem("accessToken", data.access);
  localStorage.setItem("refreshToken", data.refresh);
}

function updateLocalStorage(data: any) {
  deleteLocalStorage();
  addLocalStorage(data);
}

export const createAnonymousUser = createAsyncThunk<
  AuthenticationResult,
  undefined,
  {}
>("users/createAnonymousUser", async function (_, thunkAPI) {
  try {
    const response = await axiosWithoutAuth.post("users/");
    const data = response.data as AuthenticationResult;
    addLocalStorage(data.auth);
    return data;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const createUser = createAsyncThunk<
  AuthenticationResult,
  SignUpFormType,
  {}
>("users/createUser", async function (values: SignUpFormType, thunkAPI) {
  try {
    const bodyValues = {
      ...values,
      refresh_token: localStorage.getItem("refreshToken"),
    };
    const response = await axiosWithAuth.post("/users/register/", bodyValues);
    updateLocalStorage(response.data.auth);
    return response.data as AuthenticationResult;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const fetchMe = createAsyncThunk<User | undefined, undefined, {}>(
  "users/fetchMe",
  async function (_, thunkAPI) {
    if (!localStorage.getItem("accessToken")) {
      return emptyUser as User;
    }
    try {
      const response = await axiosWithAuth.get("users/me/");
      return response.data as User;
    } catch (error: any) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateSoundEffects = createAsyncThunk<
  UserPreferences,
  boolean,
  {}
>("users/updateSounds", async function (sound: boolean, thunkAPI) {
  try {
    const response = await axiosWithAuth.put("users/me/preferences/", {
      sound_effects: sound,
    });
    return response.data as UserPreferences;
  } catch (error) {
    console.log(error);
    return thunkAPI.rejectWithValue(error);
  }
});

export const emptyUser: User = {
  id: 0,
  username: "Player",
  email: "",
  exp: 0,
  preferences: { music: true, sound_effects: true, lang_code: "uk" },
};
const initialState: UserState = {
  user: emptyUser,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logOut(state) {
      state.user = emptyUser;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAnonymousUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.loading = false;
      })
      .addCase(fetchMe.fulfilled, (state, action) => {
        if (action.payload) state.user = action.payload;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
      })
      .addCase(updateSoundEffects.fulfilled, (state, action) => {
        state.user.preferences = action.payload;
      });
  },
});

export const { logOut } = userSlice.actions;
export default userSlice.reducer;
