import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";

export const getAllData=createAsyncThunk("gituser",async()=>{
    const response=await fetch("https://api.github.com/users")
    const result=response.json()
    return result
})
const gituser=createSlice({
    name:'gituser',
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers:{
       [getAllData.pending]:(state)=>{
        state.loading=true;
       },
       [getAllData.fulfilled]:(state,action)=>{
        state.loading=false;
        state.users=action.payload
       },
       [getAllData.rejected]:(state,action)=>{
        state.loading=false
        state.error=action.payload
       }
    }
})

export default  gituser.reducer