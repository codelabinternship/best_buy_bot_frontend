import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

interface OrderState {
  loading: boolean;
  success: boolean;
  error: string | null;
}

const initialState: OrderState = {
  loading: false,
  success: false,
  error: null,
};

// Async action
export const submitOrder = createAsyncThunk(
  "order/submitOrder",
  async (orderData: any, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/order", orderData);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    resetOrderState: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitOrder.pending, (state) => {
        state.loading = true;
        state.success = false;
        state.error = null;
      })
      .addCase(submitOrder.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
      })
      .addCase(submitOrder.rejected, (state, action) => {
        state.loading = false;
        state.success = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetOrderState } = orderSlice.actions;
export default orderSlice.reducer;
