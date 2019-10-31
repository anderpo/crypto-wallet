import moment from "moment";
import periods from './../constants/timePeriods';

import {
  SET_CURRENCY,
  GET_HISTORICAL_RATE,
  GET_HISTORICAL_RATE_SUCCESS,
  GET_HISTORICAL_RATE_FAIL
} from "./../actions/UIActions";

const initialState = {
  selectedCurrency: null,
  selectedPeriod: periods.DAY,
  historicalData: {
    data: [],
    loading: false
  }
};

const formattingIncomingData = ({ payload, period }) => {
  const { Data } = payload;
  const { Data: historicalRate } = Data;

  if (period === periods.DAY) {
    return historicalRate.map(d => ({
      ...d,
      time: moment.unix(d.time).format("HH[h]mm"),
    }));
  }

  if (period === periods.WEEK) {
    return historicalRate.map(d => ({
      ...d,
      time: moment.unix(d.time).format("ddd"),
    }));
  }

  if (period === periods.MONTH) {
    return historicalRate.map(d => ({
      ...d,
      time: moment.unix(d.time).format("DD"),
    }));
  }

  return historicalRate;
};

export function uiReducer(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENCY:
      return { ...state, selectedCurrency: action.payload };

    case GET_HISTORICAL_RATE:
      return { ...state, historicalData: { ...state.historicalData, loading: true }, error: "" };

    case GET_HISTORICAL_RATE_SUCCESS:
      return {
        ...state,
        historicalData: {
          ...state.historicalData,
          data: formattingIncomingData(action),
          loading: false
        },
        error: ""
      };

    default:
      return state;
  }
}
