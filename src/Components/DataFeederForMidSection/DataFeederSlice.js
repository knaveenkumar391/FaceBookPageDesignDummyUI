import { createSlice } from "@reduxjs/toolkit";

const initialState={
    dataFeederInfo:[],
};

const DataFeederSlice = createSlice(
    {
        name:'DataFeederSlice',
        initialState,
        reducers:{
            setPersonFeederInfo:(state,action)=>{
                state.dataFeederInfo=[...state.dataFeederInfo,action.payload]
            }
        }
    }
)
export const {setPersonFeederInfo}=DataFeederSlice.actions;
export default DataFeederSlice.reducer;
