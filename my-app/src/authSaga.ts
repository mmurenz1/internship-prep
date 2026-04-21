import { takeLatest, put, call } from "redux-saga/effects";
import { login } from "./store";

function* watchLogin(action: any): Generator {
    try {
        // Simulating a server call that takes 2 seconds
        yield call(() => new Promise((resolve) => setTimeout(resolve, 2000)));
        // After the "server call", dispatch the login action
        yield put(login(action.payload));
    } catch (error) {
        console.log("Login failed!");
    }
}

export function* rootSaga(): Generator {
    yield takeLatest("auth/loginRequest", watchLogin);
}