import axios from "axios";
import { API_URL } from "../../../Constants/constants";

export function requestGetProfile(platform, region, battleTag) {
  if (battleTag.includes("#")) {
    return axios.request({
      method: "get",
      url:
        API_URL +
        `${platform}/${region}/${battleTag.split("#")[0]}-${
          battleTag.split("#")[1]
        }`,
    });
  } else {
    return axios
      .get(API_URL + `${platform}/${region}/${battleTag}`)
      .then((res) => {
        const responseData = res.data;
        if (responseData.message) {
          let platform = "psn";
          return axios.get(API_URL + `${platform}/${region}/${battleTag}`);
        } else {
          return res;
        }
      });
  }
}
