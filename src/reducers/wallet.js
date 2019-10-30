import {
  GET_RATE_EXCHANGE,
  GET_RATE_EXCHANGE_SUCCESS,
  GET_RATE_EXCHANGE_FAIL
} from "./../actions/WalletAcions";

const initialState = {
  todayRateExchange: [
    { fullName: "Bitcoin", name: "BTC", price: { USD: 0 } },
    { fullName: "Ethereum", name: "ETH", price: { USD: 0 } },
    { fullName: "Ripple", name: "XRP", price: { USD: 0 } }
  ],
};

function updateTodayRateExhange(data, rateExchange) {
  return data.map(c => {
    return {
      ...c,
      price: {
        USD: rateExchange[c.name].USD
      }
    };
  });
}

export function walletReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RATE_EXCHANGE:
      return { ...state, loading: true, error: "" };

    case GET_RATE_EXCHANGE_SUCCESS:
      return {
        ...state,
        todayRateExchange: updateTodayRateExhange(state.todayRateExchange, action.payload),
        loading: false,
        error: ""
      };

    case GET_RATE_EXCHANGE_FAIL:
      return { ...state, error: action.payload.message, loading: false };

    default:
      return state;
  }
}
