import { configureStore, createSlice } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./authSaga";

const sagaMiddleware = createSagaMiddleware();

const authSlice = createSlice({
    name: "auth",
    initialState: {
        isLoggedIn: false,
        username: "",
        isLoading: false,
    },
    reducers: {
        login: (state, action) => {
            state.isLoggedIn = true;
            state.username = action.payload;
            state.isLoading = false;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.username = "";
            state.isLoading = false;
        },
        loginRequest: (state) => {
            state.isLoading = true;
        },
    },
});

export const { login, logout, loginRequest } = authSlice.actions;

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});