import { store } from "../store/store";
import axios from "axios";
import { API_KEY } from "../store/config";
import { backupData } from "../store/backup";
import { newApiData } from "../store/nutritionSlice";

// function to get data from the api
export const getData = async (input) => {
  // only a backup data
  store.dispatch(newApiData(backupData));

  // try {
  //   const { data } = await axios.get(
  //     `https://api.api-ninjas.com/v1/nutrition?query=${input}`,
  //     {
  //       headers: {
  //         "X-Api-Key": API_KEY,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );

  //   store.dispatch(newApiData(data));
  // } catch (error) {
  //   console.log(error);
  // }
};
