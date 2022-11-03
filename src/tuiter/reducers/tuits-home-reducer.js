import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from '../tuits/tuits.json';

const tuitsSlice = createSlice({
    name: 'tuitsHome',
    initialState: tuitsArray
});

export default tuitsSlice.reducer;