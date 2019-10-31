import React from "react";
import { connect } from "react-redux";
import Chart from "./Chart";
import styled from "styled-components";
import { getHisoricalRateExchange } from "../../actions/UIActions";
import Loader from "./../Loader/Loader";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  max-height: 400px;
  margin-top: 25px;
`;

class ChartContainer extends React.Component {
  componentDidMount() {
    const { selectedPeriod, selectedCurrency, onGetHistoricalRateExchange } = this.props;
    onGetHistoricalRateExchange(selectedCurrency, selectedPeriod);
  }

  componentDidUpdate(prev) {
    const { selectedCurrency, selectedPeriod, onGetHistoricalRateExchange } = this.props;

    if (selectedCurrency !== prev.selectedCurrency) {
      onGetHistoricalRateExchange(selectedCurrency, selectedPeriod);
    }

    if (selectedPeriod !== prev.selectedPeriod) {
      onGetHistoricalRateExchange(selectedCurrency, selectedPeriod);
    }
  }

  render() {
    const { loading, data } = this.props;
    return <Wrapper>{loading ? <Loader /> : <Chart data={data} />}</Wrapper>;
  }
}

const mapStateToProps = ({ ui }) => {
  return {
    selectedPeriod: ui.selectedPeriod,
    selectedCurrency: ui.selectedCurrency,
    data: ui.historicalData,
    loading: ui.historicalData.loading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetHistoricalRateExchange: (selected, period) =>
      dispatch(getHisoricalRateExchange(selected, period))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChartContainer);
