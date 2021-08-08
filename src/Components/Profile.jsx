import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const playerProfile = useSelector((state) => state.data.profile);
  const { username, level, competitive, message } = playerProfile;
  const { damage, support, tank } = competitive || {};
  return (
    <div>
      {!message ? (
        <div>
          <Typography>{username}</Typography>
          <Typography>Level: {level} </Typography>
          <Typography>DPS rank: {damage.rank || "unranked"}</Typography>
          <Typography>Support rank: {support.rank || "unranked"}</Typography>
          <Typography>Tank rank: {tank.rank || "unranked"}</Typography>
        </div>
      ) : (
        <Typography>Profile Not Found</Typography>
      )}
    </div>
  );
};

export default Profile;
