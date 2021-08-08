import { Typography } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const roundToTwo = (num1, num2) => {
    return +(Math.round((num1 / num2) * 100 + "e+2") + "e-2");
  };

  const playerProfile = useSelector((state) => state.profile.profile);
  const { username, level, competitive, games, portrait, message } =
    playerProfile;
  const { quickplay: quickplayGames, competitive: competitiveGames } =
    games || {};
  const { damage, support, tank } = competitive || {};
  const { won: quickplayWon, played: quickplayPlayed } = quickplayGames || {};
  const {
    won: competitiveWon,
    lost: competitiveLost,
    draw: competitiveDraw,
    played: competitivePlayed,
  } = competitiveGames || {};
  const quickplayLost = quickplayPlayed - quickplayWon;
  const quickplayWinRate = roundToTwo(quickplayWon, quickplayPlayed);
  const competitiveWinRate = roundToTwo(competitiveWon, competitivePlayed);

  return (
    <div>
      {!message ? (
        <div>
          <div>
            <img src={portrait} alt="player profile" />
            <Typography>{username}</Typography>
            <Typography>Level: {level} </Typography>
            <Typography>DPS rank: {damage.rank || "-"}</Typography>
            <Typography>Support rank: {support.rank || "-"}</Typography>
            <Typography>Tank rank: {tank.rank || "-"}</Typography>
          </div>
          <div>
            <Typography>Quickplay stats</Typography>
            Won: {quickplayWon} Lost: {quickplayLost} Played: {quickplayPlayed}{" "}
            Win Rate: {quickplayWinRate}%
          </div>
          <div>
            <Typography>Competitive stats</Typography>
            Won: {competitiveWon} Lost: {competitiveLost} Draw:{" "}
            {competitiveDraw} Played: {competitivePlayed} Win Rate:{" "}
            {competitiveWinRate}%
          </div>
        </div>
      ) : (
        <Typography>Profile Not Found</Typography>
      )}
    </div>
  );
};

export default Profile;
