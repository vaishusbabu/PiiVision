import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { loginUser, registerUser } from '../../Services/AuthAPI';
import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';


const initialState = {
  user: null,
  accessToken: Cookies.get('accessToken') || null,
  loading: false,
  error: null,
};

export const login = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    return await loginUser(credentials);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

export const register = createAsyncThunk('auth/register', async (details, thunkAPI) => {
  try {
    return await registerUser(details);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data);
  }
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout(state) {
      state.user = null;
      state.accessToken = null;
      Cookies.remove('accessToken');
    },
  },
  extraReducers: (builder) => {
    builder
      // Login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
    .addCase(login.fulfilled, (state, action) => {
  state.loading = false;
  const token = action.payload.accessToken;
  state.accessToken = token;

  // ✅ Save token in cookie
  Cookies.set('accessToken', token, {
    expires: 1,
    secure: true,
    sameSite: 'Strict',
  });

  // ✅ Decode token to get user details
  try {
    const decoded = jwtDecode(token);
    state.user = decoded;

    // ✅ Log decoded user to console
    console.log("Decoded User Info:", decoded);
  } catch (err) {
    state.user = null;
    console.error('Invalid token:', err);
  }
})

      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Login failed';
      })

      // Register
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(register.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.error || 'Registration failed';
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
