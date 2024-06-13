import { configureStore } from "@reduxjs/toolkit";
import cart from "./CreateSlice";

//The store makes us to use the initialValue of the slice we had created like initialValue in useState
export const store = configureStore({
    reducer : cart
})