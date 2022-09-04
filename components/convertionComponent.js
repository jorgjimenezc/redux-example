import { Input } from "@mui/material";
import { useEffect, useState } from "react";

export function ConvertionComponent(props) {
  let exchangeRate = props.exchangeRate;

  const [amountToConvert, setAmountToConvert] = useState(0);

  const [convertedAmount, setConvertedAmount] = useState(0);

  useEffect(() => {
    calculateConvertedAmount();
  }, [amountToConvert, props.exchangeRate]);

  const calculateConvertedAmount = () => {
    if (exchangeRate) {
      let amountInDollars = amountToConvert / exchangeRate;
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
