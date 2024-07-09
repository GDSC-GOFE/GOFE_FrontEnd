import React from "react";
import CommunityShowProfileMenu from "./CommunityShowProfileMenu";

import { useLocation, useNavigate } from "react-router-dom";
import { ReactComponent as Back } from "../../../assets/community/Back.svg";

import { ReactComponent as Activesearch } from "../../../assets/community/Activesearch copy.svg";
import { ReactComponent as Search } from "../../../assets/community/Search.svg";
import CommunityShowRecom_Friend from "./CommunityShowRecom_Friend";

const recomfriend = [
  {
    id: 1,
    name: "이상한 은진씨",
  },
  {
    id: 2,
    name: "내가 누구게",
  },
];
const CommunityShowAddFreind = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const path = location.pathname;
  return (
    <div>
      <div className="community-show-profile-follow-header-container-box">
        <div
          className="community-show-profile-follow-header-back-icon"
          onClick={() => navigate("/CommunityHomePage")}
        >
          <Back />
        </div>
        <div className="community-show-profile-follow-header-title">
          친구추가
        </div>
      </div>
      <CommunityShowProfileMenu />
      <div className="community-search-friends-add-box">
        <input
          type="text"
          className="community-search-friend-add-input"
          placeholder="친구를 찾아보아요"
        />
        <div
          className="community-search-friends-add-button"
          onClick={() => navigate("/")}
        >
          {path === "/" ? <Activesearch /> : <Search />}
        </div>
      </div>
      <div className="community-show-recommend-friend-container-box">
        추천 친구
      </div>
      <div>
        {recomfriend &&
          recomfriend.map((recomfriend) => (
            <CommunityShowRecom_Friend
              key={recomfriend}
              recomfriend={recomfriend}
            />
          ))}
      </div>
    </div>
  );
};

export default CommunityShowAddFreind;