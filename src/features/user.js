import {createSlice} from '@reduxjs/toolkit';

const initialstate = {value: {name: '', password: ''}};
export const userslice = createSlice({
    name: 'user',
    initialState: initialstate,
    reducers: {
        login: (state, action) => {
            state.value = action.payload
        },
        logout: (state) => {
            state.value = initialstate
        }
    }

})

export const {login , logout} = userslice.actions;
export default userslice.reducer;