import { toFixed } from "accounting";

import {
  GET_RATE_EXCHANGE,
  GET_RATE_EXCHANGE_SUCCESS,
  GET_RATE_EXCHANGE_FAIL
} from "./../actions/WalletAcions";

const initialState = {
  todayRateExchange: [
    { fullName: "Bitcoin", name: "BTC", price: { USD: 0 } },
    { fullName: "Ethereum", name: "ETH", price: { USD: 0 } },
    { fullName: "Ripple", name: "XRP", price: { USD: 0 } },
    { fullName: "Litecoin", name: "LTC", price: { USD: 0 } },
    { fullName: "Tron", name: "TRX", price: { USD: 0 } }
  ],
  myCoins: [
    {
      fullName: "Bitcoin",
      name: "BTC",
      purchasePrice: { USD: 9000.0 },
      invest: { USD: 250.0 },
      amount: 0.028,
      profit: 0,
      profitPercent: 0
    },
    {
      fullName: "Ethereum",
      name: "ETH",
      purchasePrice: { USD: 187.72 },
      invest: { USD: 150.0 },
      amount: 0.8,
      profit: 0,
      profitPercent: 0
    },
    {
      fullName: "Ripple",
      name: "XRP",
      purchasePrice: { USD: 0.281 },
      invest: { USD: 100.0 },
      amount: 355.87,
      profit: 0,
      profitPercent: 0
    },
    {
      fullName: "Litecoin",
      name: "LTC",
      purchasePrice: { USD: 57.48 },
      invest: { USD: 100.0 },
      amount: 1.74,
      profit: 0,
      profitPercent: 0
    },
    {
      fullName: "Tron",
      name: "TRX",
      purchasePrice: { USD: 0.01911 },
      invest: { USD: 100.0 },
      amount: 5232.86,
      profit: 0,
      profitPercent: 0
    }
  ],
  totalBalance: 0,
  totalProfit: 0
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

function updatePfofit(data, rateExchange) {
  const myCoins = data.map(c => {
    return {
      ...c,
      profit: toFixed(Number(rateExchange[c.name].USD * c.amount), 2),
      profitPercent: Number(
        toFixed(((rateExchange[c.name].USD - c.purchasePrice.USD) / c.purchasePrice.USD) * 100, 2)
      )
    };
  });

  const totalBalance = toFixed(
    myCoins.reduce((a, b) => {
      return Number(a) + Number(b.profit);
    }, 0),
    2
  );

  const investSum = data.reduce((a, b) => {
    return Number(a) + Number(b.invest.USD);
  }, 0);

  const totalProfit = toFixed(totalBalance - investSum, 2);

  return {
    myCoins,
    totalBalance,
    totalProfit
  };
}

export function walletReducer(state = initialState, action) {
  switch (action.type) {
    case GET_RATE_EXCHANGE:
      return { ...state, loading: true, error: "" };

    case GET_RATE_EXCHANGE_SUCCESS:
      return {
        ...state,
        todayRateExchange: updateTodayRateExhange(state.todayRateExchange, action.payload),
        ...updatePfofit(state.myCoins, action.payload),
        loading: false,
        error: ""
      };

    case GET_RATE_EXCHANGE_FAIL:
      return { ...state, error: action.payload.message, loading: false };

    default:
      return state;
  }
}
