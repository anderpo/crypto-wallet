import React from "react";
import { connect } from "react-redux";
import Header from "./../components/Header/Header";
import GoBackButton from "./../components/GoBackButton/GoBackButton";
import CurrencyCarousel from "./../components/CurrencyCarousel/CurrencyCarousel";
import { getRateExchange } from "../actions/WalletAcions";
import { setCurrency } from "../actions/UIActions";
import Loader from "./../components/Loader/Loader.js";

class CurrencyRatePage extends React.Component {
  componentDidMount() {
    const { todayRateExchange, onGetRateExchange, onSetCurrency, match } = this.props;
    const { selected } = match.params;
    onGetRateExchange(todayRateExchange.map(curr => curr.name).join(","));
    onSetCurrency(selected);
  }

  render() {
    const { myCoins, loading, match} = this.props;
    const { selected } = match.params;
    const filteredCoins = myCoins.sort((a, b) =>
      a.name === selected ? -1 : b.name === selected ? 1 : 0
    );

    return (
      <>
        <Header>
          <GoBackButton />
        </Header>
        {loading ? <Loader /> : <CurrencyCarousel coins={filteredCoins} />}
      </>
    );
  }
}

const mapStateToProps = ({ wallet }) => {
  return {
    todayRateExchange: wallet.todayRateExchange,
    myCoins: wallet.myCoins,
    loading: wallet.loading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetRateExchange: params => dispatch(getRateExchange(params)),
    onSetCurrency: selected => dispatch(setCurrency(selected))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CurrencyRatePage);
