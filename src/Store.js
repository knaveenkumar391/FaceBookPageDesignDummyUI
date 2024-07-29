
import { configureStore } from '@reduxjs/toolkit'
import DataFeederSlice from '../src/Components/DataFeederForMidSection/DataFeederSlice';

const store = configureStore({
  reducer: {
    dataFeederSlice: DataFeederSlice,
  },
});
export default store;