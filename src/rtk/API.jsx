import {createAsyncThunk} from '@reduxjs/toolkit';
import AxiosHelper from '../helpers/AxiosHelper';

export const login = createAsyncThunk(
  '/user/login',
  async (data, {rejectWithValue}) => {
    try {
      const response = await AxiosHelper().post('/user/login', data);
      console.log(response);
      if (response.status == true) {
        return response.user;
      } else {
        console.log(response);
        return response.message;
      }
    } catch (error) {
      console.log(error.response.data);
      return rejectWithValue(error);
    }
  },
);

export const register = createAsyncThunk(
  '/user/register',
  async (data, {rejectWithValue}) => {
    try {
      const response = await AxiosHelper().post('/user/register', data);
      console.log(response);
      if (response.status == true) {
        return response.user;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getProduct = createAsyncThunk(
  '/product/get-all-product',
  async rejectWithValue => {
    try {
      const res = await AxiosHelper().get('/product/get-all-product');
      if (res) {
        console.log(res);
        return res;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getDetail = createAsyncThunk(
  '/product/get-productDetail',
  async (id, {rejectWithValue}) => {
    try {
      const response = await AxiosHelper().get(
        '/product/get-productDetail/' + id,
      );
      if (response) {
        console.log(response);
        return response.product;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);

export const getProfile = createAsyncThunk(
  '/user/get-profile',
  async rejectWithValue => {
    try {
      const response = await AxiosHelper().get('/user/get-profile');
      if (response) {
        return response.user; // Adjust based on the actual response structure
      } else {
        console.log(response);
        return rejectWithValue(response.message);
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error.message);
    }
  },
);

export const editProfile = createAsyncThunk(
  '/user/edit-profile',
  async (data, {rejectWithValue}) => {
    try {
      const response = await AxiosHelper().post('/user/edit-profile', data);
      if (response.status == true) {
        console.log(response.userEdit);
        return response.userEdit;
      }
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  },
);
