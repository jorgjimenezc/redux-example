import Head from "next/head";
import ConvertionComponent from "../components/convertionComponent";
import CurrencyExchangeComponent from "../components/currencyExchangeComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Currency exchange house</h1>
        <hr />

        <br />

        <ConvertionComponent />
        <CurrencyExchangeComponent />
      </main>
    </div>
  );
}
