import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCar = createAsyncThunk('fetchCar', async (id, thunkAPI) => {
  try {
    const { data } = await axios.get(`/cars/${id}`);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
