import {createSlice} from "@reduxjs/toolkit"

let token = null;

try {
  const tokenString = localStorage.getItem("token");
  if (tokenString) {
    token = JSON.parse(tokenString);
  }
} catch (error) {
  console.error("Error parsing JSON:", error);
}

const initialState = {
  token: token,
};


const authSlice = createSlice({
    name: "auth",
    initialState : initialState,
    reducers:{
        setToken(state , value){
            state.token = value.payload
        },
    },
});

export const {setToken} = authSlice.actions;
export default authSlice.reducer