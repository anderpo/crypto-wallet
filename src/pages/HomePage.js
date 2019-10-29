import React from "react";
import Header from "../components/Header/Header";
import Search from "./../components/Search/Search";
import Notification from "./../components/Notification/Notification";
import TotalBalance from "./../components/TotalBalance/TotalBalance";
import HomePageWrapper from "../components/HomePageWrapper/HomePageWrapper";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header>
        <Search />
        <Notification />
      </Header>
      <TotalBalance />
    </HomePageWrapper>
  );
};

export default HomePage;
