import {BASE_URL} from "src/constants";
import {request, Res} from "./request";

export const get = async (requestURL: string): Promise<Res> => {
    try {
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "X-Requested-With": "XMLHttpRequest"
            }
        };
        return await request(`${BASE_URL}${requestURL}`, options);
    } catch (err) {
        console.error(err);
    }
};
