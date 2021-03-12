import axios from "axios";

export const defaultApiCall = (request) => {
  let remoteData;
  return axios
    .get("https://httpbin.org/json")
    .then((resp) => {
      //   console.log("response", resp);
      remoteData = request.val;
      return remoteData;
    })
    .catch((err) => {
      return err;
    });
};
