import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCar = createAsyncThunk('fetchCar', async (id, thunkAPI) => {
  console.log('fetchCar called with ID:', id);
  try {
    const { data } = await axios.get(`/cars/${id}`);
    console.log(data);
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});
