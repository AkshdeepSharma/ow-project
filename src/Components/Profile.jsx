import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const playerProfile = useSelector((state) => state.data.profile);
  const { username, level, competitive } = playerProfile;
  const { damage, support, tank } = competitive;
  return (
    <div>
      <p>{username}</p>
      <p>Level: {level} </p>
      <p>DPS rank: {damage.rank || 0}</p>
      <p>Support rank: {support.rank || 0}</p>
      <p>Tank rank: {tank.rank || 0}</p>
    </div>
  );
};

export default Profile;
