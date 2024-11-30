// routes/friendship.route.js
import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
    sendFriendRequest,
    acceptFriendRequest,
    rejectFriendRequest,
    getFriendRequests,
} from "../controllers/friendship.controller.js";

const router = express.Router();

router.post("/send", protectRoute, sendFriendRequest);
router.post("/accept", protectRoute, acceptFriendRequest);
router.post("/reject", protectRoute, rejectFriendRequest);
router.get("/requests", protectRoute, getFriendRequests);

export default router;
