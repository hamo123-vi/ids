import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: 'root',
    initialState: {
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        text: "",
        cv: ""
    },

    reducers: {
        enterFirstName: (state, action) => {state.firstName = action.payload},
        enterLastName: (state, action) => {state.lastName = action.payload},
        enterEmail: (state, action) => {state.email = action.payload},
        enterPhone: (state, action) => {state.phone = action.payload},
        enterText: (state, action) => {state.text = action.payload},
        enterCv: (state, action) => {state.cv = action.payload}
    }
});

export const reducer = rootSlice.reducer;

export const {enterFirstName, enterLastName, enterEmail, enterPhone, enterText, enterCv} = rootSlice.actions