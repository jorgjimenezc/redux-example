import { useEffect, useState } from "react";

export default function CurrencyExchangeComponent(props) {
  const [exchangeRate, setExchangeRate] = useState(props.exchangeRate);

  useEffect(() => {
    props.updateExchangeRate(exchangeRate);
  }, [exchangeRate]);

  return (
    <>
      <input
        value={exchangeRate}
        type="number"
        placeholder=" Current exchange rate"
        onChange={() => {
          setExchangeRate(event.target.value);
        }}
      />
    </>
  );
}
