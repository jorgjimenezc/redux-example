import { Input } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function ConvertionComponent() {
  const [amountToConvert, setAmountToConvert] = useState(0);

  const [convertedAmount, setConvertedAmount] = useState(0);

  const reduxExchangeRate = useSelector(
    (state) => state.exchangeRateReducer.exchangeRate
  );

  useEffect(() => {
    calculateConvertedAmount();
  }, [amountToConvert, reduxExchangeRate]);

  const calculateConvertedAmount = () => {
    if (reduxExchangeRate) {
      let amountInDollars = amountToConvert / reduxExchangeRate;
      setConvertedAmount(amountInDollars);
    }
  };

  return (
    <>
      <h1>${convertedAmount}</h1>

      <Input
        value={amountToConvert}
        type="number"
        placeholder="Enter amount in soles"
        onChange={() => {
          setAmountToConvert(event.target.value);
        }}
      />
    </>
  );
}
