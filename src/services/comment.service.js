import {axiosService} from "./axios.service";
import {urls} from "../configs/urls";

export const commentService = {
    getAllById: (id) => axiosService.get(`${urls.posts}/${id}${urls.comments}`).then(value => value.data)
}