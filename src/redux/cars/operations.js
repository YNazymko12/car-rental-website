import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global';

export const fetchAllCars = createAsyncThunk(
  'fetchCars',
  async (page, thunkAPI) => {
    try {
      const pageNumber = Number(page);
      if (!Number.isInteger(pageNumber) || pageNumber < 1) {
        throw new Error('Invalid page number');
      }
      const { data } = await axios.get(`/cars?page=${pageNumber}&limit=12`);
      return { cars: data.cars, totalPages: data.totalPages };
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || 'Failed to fetch cars'
      );
    }
  }
);
