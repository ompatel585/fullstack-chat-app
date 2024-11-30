import { useEffect, useState } from "react";
import { axiosInstance } from "../lib/axios.js";
import { useAuthStore } from "../store/useAuthStore";

const FriendsSidebar = () => {
  const { authUser } = useAuthStore();
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    if (authUser) {
      // Fetch friends of the authenticated user
      const fetchFriends = async () => {
        try {
          const res = await axiosInstance.get("/message/users");
          setFriends(res.data);
        } catch (error) {
          console.log("Error fetching friends:", error);
        }
      };

      fetchFriends();
    }
  }, [authUser]);

  return (
    <div className="friends-sidebar">
      {friends.length > 0 ? (
        friends.map((friend) => (
          <div key={friend._id} className="friend-item">
            <img
              src={friend.profilePic || "/avatar.png"}
              alt={friend.fullName}
              className="friend-avatar"
            />
            <span>{friend.fullName}</span>
          </div>
        ))
      ) : (
        <p>No friends found</p>
      )}
    </div>
  );
};

export default FriendsSidebar;
