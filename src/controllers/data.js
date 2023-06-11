import { store } from "../main";
import axios from "axios";
import { NEW_API_DATA } from "../store/types";
import { API_KEY } from "../store/config";
import { backupData } from "../store/backup";

// function to get data from the api
export const getData = async (userInput) => {
  // only a backup data
  store.dispatch({ type: NEW_API_DATA, payload: backupData });

  //   try {
  //     const { data } = await axios.get(
  //       `https://api.api-ninjas.com/v1/nutrition?query=${userInput}`,
  //       {
  //         headers: {
  //           "X-Api-Key": API_KEY,
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );

  //     store.dispatch({ type: NEW_API_DATA, payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
};
