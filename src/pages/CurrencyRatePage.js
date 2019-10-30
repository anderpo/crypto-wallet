import React from "react";
import { connect } from "react-redux";
import Header from "./../components/Header/Header";
import GoBackButton from "./../components/GoBackButton/GoBackButton";
import CurrencyCarousel from "./../components/CurrencyCarousel/CurrencyCarousel";
import { getRateExchange } from "../actions/WalletAcions";
import Loader from "./../components/Loader/Loader.js";

class CurrencyRatePage extends React.Component {
  componentDidMount() {
    const { todayRateExchange, onGetRateExchange } = this.props;
    onGetRateExchange(todayRateExchange.map(curr => curr.name).join(","));
  }

  render() {
    const { myCoins, loading } = this.props;
    return (
      <>
        <Header>
          <GoBackButton />
        </Header>
        {loading ? <Loader /> : <CurrencyCarousel coins={myCoins} />}
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    todayRateExchange: wallet.todayRateExchange,
    myCoins: wallet.myCoins,
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
)(CurrencyRatePage);
