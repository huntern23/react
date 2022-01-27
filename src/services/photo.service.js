import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const photoService = {
    getAllById: (id) => axiosService.get(`${urls.albums}/${id}${urls.photos}`).then(value => value.data)
}