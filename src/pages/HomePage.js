import React from "react";
import NewHot from "../component/New/NewHot";
import RecentlyAdded from "../component/Recently/RecentlyAdded";
import "./HomePage.scss"
import NewArtist from "../component/Artist";
import CoArtist from "../component/CoArtists";
import SelectedSongType from "../component/Type";
import MoodMix from "../component/MoodMix";
import MusicMix from "../component/MMix";
import Suggest from "../component/ToSuggest";
import HighlightImg from "../component/HeaderImg";
const HomePage = () => {
  return (
    <div className="home-page">
      <main className="main-content">
      <HighlightImg/>
        <NewHot />
        <RecentlyAdded />
        <NewArtist/>
        <CoArtist/>
        <MoodMix/>
        <Suggest/>
        <SelectedSongType/>
        <MusicMix/>
      </main>
    </div>
  );
};

export default HomePage;
