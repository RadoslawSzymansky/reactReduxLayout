import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchName } from './nameAPI';
import axios from 'axios';

const initialState = {
  value: null,
  status: 'idle',
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const fectchNameAsync = createAsyncThunk(
  'name/fetchName',
  async () => {
    const response = await fetchName();
    return response.data.name;
  }
);

export const nameSlice = createSlice({
  name: 'name',
  initialState,
  reducers: {
    nameToRadek: (state) => {
      state.value = "Radek"
    },
    nameToPioter: (state) => {
      state.value = "Pioter"
    },
    nameToCustom: (state, { payload }) => {
      state.value = payload
    },
    nameIsLoading: (state) => {
      if (state.status === 'idle') {
        state.status = 'pending'
      }
    },
    nameReceived: (state, action) => {
      state.name = action.payload.name;
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(fectchNameAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fectchNameAsync.fulfilled, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.value = action.payload;
      })
      .addCase(fectchNameAsync.rejected, (state, action) => {
        console.log(action)
        state.status = 'idle';
        state.value = 'Wystąpił błąd pobierania!';
      });
  },
});

export const selectName = (state) => state.userName.value;

// export wlasnych akcji
export const { nameToCustom, nameToPioter, nameToRadek } = nameSlice.actions;

export default nameSlice.reducer;
