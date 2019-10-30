import React from "react";
import Header from "../components/Header/Header";
import Search from "./../components/Search/Search";
import Notification from "./../components/Notification/Notification";
import TotalBalance from "./../components/TotalBalance/TotalBalance";
import HomePageWrapper from "../components/HomePageWrapper/HomePageWrapper";
import CurrencyList from "../components/CurrencyList/CurrencyList";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <Header>
        <Search />
        <Notification />
      </Header>
      <TotalBalance />
      <CurrencyList />
    </HomePageWrapper>
  );
};

export default HomePage;
