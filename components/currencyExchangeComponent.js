//import { Input } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { updateExchangeRate } from "../redux/slices/exchangeRateSlice";

export default function CurrencyExchangeComponent() {
  const reduxDispatch = useDispatch();
  const reduxExchangeRate = useSelector(
    (state) => state.exchangeRateReducer.exchangeRate
  );
  const reduxUpdateExchangeRate = (newExchangeRate) => {
    reduxDispatch(updateExchangeRate(newExchangeRate));
  };

  return (
    <>
      <input
        value={reduxExchangeRate}
        type="number"
        placeholder=" Current exchange rate"
        onChange={() => {
          reduxUpdateExchangeRate(event.target.value);
        }}
      />
    </>
  );
}
