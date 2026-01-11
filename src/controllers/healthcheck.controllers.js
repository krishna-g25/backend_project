import { ApiResponse } from "../utils/api-response"; 
const healthcheck = (req, res) => {
    try {
        res.status(200).json(
        new ApiResponse(200, {message:"API is healthy"}));
    } catch (error) {
    }};
    export {healthcheck};