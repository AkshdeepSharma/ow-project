import { takeLatest } from "redux-saga/effects";
import { handleGetProfile } from "./handlers/profile";
import { getProfile } from "../ducks/profile";

export function* watcherSaga() {
  yield takeLatest(getProfile.type, handleGetProfile);
}
