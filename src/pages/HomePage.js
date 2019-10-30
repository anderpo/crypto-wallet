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
    const { todayRateExchange, loading } = this.props;
    return (
      <HomePageWrapper>
        <Header>
          <Search />
          <Notification />
        </Header>
        <TotalBalance />
        <CurrencyList list={todayRateExchange} loading={loading} />
      </HomePageWrapper>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    todayRateExchange: wallet.todayRateExchange,
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
