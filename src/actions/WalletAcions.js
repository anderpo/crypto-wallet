export const GET_RATE_EXCHANGE = "GET_RATE_EXCHANGE";
export const GET_RATE_EXCHANGE_SUCCESS = "GET_RATE_EXCHANGE_SUCCESS";
export const GET_RATE_EXCHANGE_FAIL = "GET_RATE_EXCHANGE_FAIL";
import constants from "./../constants/constants";

const path = `${constants.apiHOST}${constants.apiPATH}`;

export function getRateExchange(params) {
  return dispatch => {
    dispatch({
      type: GET_RATE_EXCHANGE
    });

    fetch(`${path}/pricemulti?fsyms=${params}&tsyms=USD`).then(res =>
      res.json().then(data => {
        dispatch({
          type: GET_RATE_EXCHANGE_SUCCESS,
          payload: data
        });
      })
    );
  };
}
