import { ApiResponse } from "../utils/api-response.js";

const healthcheck = (req, res) => {
    try {
        return res.status(200).json(
            new ApiResponse(200, "OK", "API is healthy") 
        );
    } catch (error) {
        // Always send a response even in catch
        return res.status(500).json({ success: false, message: error.message });
    }
};

export { healthcheck };