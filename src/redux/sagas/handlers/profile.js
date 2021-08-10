import { call, put } from "redux-saga/effects";
import { setProfile } from "../../ducks/profile";
import { requestGetProfile } from "../requests/profile";

export function* handleGetProfile(action) {
  try {
    const { payload } = action;
    const { region, platform, battleTag } = payload;
    const response = yield call(requestGetProfile, platform, region, battleTag);
    const { data } = response;
    yield put(setProfile({ ...data }));
  } catch (error) {
    console.log(error);
  }
}
