import React from "react";
import { connect } from "react-redux";
import Header from "../components/Header/Header";
import Search from "./../components/Search/Search";
import Notification from "./../components/Notification/Notification";
import TotalBalance from "./../components/TotalBalance/TotalBalance";
import HomePageWrapper from "../components/HomePageWrapper/HomePageWrapper";
import CurrencyList from "../components/CurrencyList/CurrencyList";
import { getRateExchange } from "../actions/WalletAcions";

class HomePage extends React.Component {
  componentDidMount() {
    const { todayRateExchange, onGetRateExchange } = this.props;
    onGetRateExchange(todayRateExchange.map(curr => curr.name).join(","));
  }

  render() {
    const { totalBalance, totalProfit, todayRateExchange, myCoins, loading } = this.props;
    return (
      <HomePageWrapper>
        <Header>
          <Search />
          <Notification />
        </Header>
        <TotalBalance balance={totalBalance} profit={totalProfit} />
        <CurrencyList listRateExchange={todayRateExchange} myCoins={myCoins} loading={loading} />
      </HomePageWrapper>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    todayRateExchange: wallet.todayRateExchange,
    myCoins: wallet.myCoins,
    totalBalance: wallet.totalBalance,
    totalProfit: wallet.totalProfit,
    loading: wallet.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetRateExchange: params => dispatch(getRateExchange(params))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
