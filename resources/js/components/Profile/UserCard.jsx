import React from "react";

const UserCard = () => (
    <div className="profile_user-card">
    <div className="profile_user-avatar-container">
        <img
            src="/images/IMG_20171020_170022.jpg"
            className="rounded-circle profile_user-avatar"
            alt="user-image"
        />
        <p className="user_card-user-name profile_card-user-name">
            Артём Николаев
        </p>
    </div>
</div>
)

export default UserCard;