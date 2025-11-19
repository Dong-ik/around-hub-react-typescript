import { Dispatch, SetStateAction } from "react";
import { jsonPlaceholderRequest } from "../../utils/api";
import { ENDPOINTS } from "../../utils/endpoints";
import { HTTP_METHOD } from "../../utils/constants";
import { Photo } from "./index";

export const getPhotoList = async (
  setPhotos: Dispatch<SetStateAction<readonly Photo[]>>,
) => {
  try {
    const response = await jsonPlaceholderRequest({
      url: ENDPOINTS.GET_PHOTO_LIST,
      method: HTTP_METHOD.GET,
    });

    setPhotos(response.data);
  } catch (error) {
    console.error(error);
  }
};
