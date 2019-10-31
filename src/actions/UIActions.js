export const SET_CURRENCY = "SET_CURRENCY";
export const GET_HISTORICAL_RATE = "GET_HISTORICAL_RATE";
export const GET_HISTORICAL_RATE_SUCCESS = "GET_HISTORICAL_RATE_SUCCESS";
export const GET_HISTORICAL_RATE_FAIL = "GET_HISTORICAL_RATE_FAIL";
import constants from "./../constants/constants";
import periods from "./../constants/timePeriods";

const path = `${constants.apiHOST}${constants.apiPATH}/v2`;

export function setCurrency(selected) {
  return dispatch => {
    dispatch({
      type: SET_CURRENCY,
      payload: selected
    });
  };
}

const getRequestParams = (curr, period) => {
  if (period === periods.WEEK) {
    return `/histoday?fsym=${curr}&tsym=USD&limit=7`;
  }

  if (period === periods.MONTH) {
    return `/histoday?fsym=${curr}&tsym=USD`;
  }

  return `/histohour?fsym=${curr}&tsym=USD&limit=24`;
};

export function getHisoricalRateExchange(selectedCurr, period) {
  return dispatch => {
    dispatch({
      type: GET_HISTORICAL_RATE
    });

    fetch(`${path}${getRequestParams(selectedCurr, period)}`).then(res =>
      res.json().then(data => {
        dispatch({
          type: GET_HISTORICAL_RATE_SUCCESS,
          payload: data,
          period
        });
      })
    );
  };
}
