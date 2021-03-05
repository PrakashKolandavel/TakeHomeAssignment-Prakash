import { all } from "redux-saga/effects";
import { cartSaga } from "./Cart/action";
import { amSaga } from "./HomePage/action";


export default function* rootSaga() {
  yield all([amSaga(),cartSaga()]);
}
