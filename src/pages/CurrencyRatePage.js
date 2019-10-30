import React from "react";
import { connect } from "react-redux";
import Header from "./../components/Header/Header";
import GoBackButton from "./../components/GoBackButton/GoBackButton";
import CurrencyCarousel from "./../components/CurrencyCarousel/CurrencyCarousel";
import { getRateExchange } from "../actions/WalletAcions";
import { setCurrency } from "../actions/UIActions";
import Loader from "./../components/Loader/Loader.js";
import SelectedCurrency from "./../components/SelectedCurrency/SelectedCurrency";

class CurrencyRatePage extends React.Component {
  componentDidMount() {
    const { todayRateExchange, onGetRateExchange, onSetCurrency, match } = this.props;
    const { selected } = match.params;
    onGetRateExchange(todayRateExchange.map(curr => curr.name).join(","));
    onSetCurrency(selected);
  }

  render() {
    const { myCoins, loading, match, selectedCurrency } = this.props;
    const { selected } = match.params;
    const filteredCoins = myCoins.sort((a, b) =>
      a.name === selected ? -1 : b.name === selected ? 1 : 0
    );

    const coin = myCoins.find(c => c.name === selectedCurrency);

    return (
      <>
        <Header>
          <GoBackButton />
        </Header>
        {loading ? <Loader /> : <CurrencyCarousel coins={filteredCoins} />}
        {coin && <SelectedCurrency coin={coin} />}
      </>
    );
  }
}

const mapStateToProps = ({ wallet, ui }) => {
  return {
    todayRateExchange: wallet.todayRateExchange,
    myCoins: wallet.myCoins,
    loading: wallet.loading,
    selectedCurrency: ui.selectedCurrency
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
