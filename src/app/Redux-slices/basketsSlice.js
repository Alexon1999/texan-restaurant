import { createSlice } from "@reduxjs/toolkit";

// *  Writing the Slices

//+ createSlice returns a "slice" object that contains the generated reducer function as a field named reducer,
//+ and the generated action creators inside an object called actions.
export const basketsSlice = createSlice({
  name: "baskets",
  initialState: [],
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    addProduct: (state, action) => {
      state.push(action.payload);
    },
  },
});

//+ generated action creator functions :return an object with payload and type
export const {
  increment,
  incrementByAmount,
  addProduct,
} = basketsSlice.actions;

// useSelector(state => state.baskets) :returns the state for baskets
export const selectBaskets = (state) => state.baskets;

// + the generated reducer function
export default basketsSlice.reducer;
