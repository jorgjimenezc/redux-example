import { useState } from "react";

export default function CurrencyExchangeComponent() {
  const [exchangeRate, setExchangeRate] = useState(3);

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
