import { VEREFICATION_USER } from "../const";

export const verificationUser = user => {
    return {
        type: VEREFICATION_USER,
        user,
    }
};