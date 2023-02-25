import Head from "next/head";
import Home from "../components/Home/Home";

export default function Main() {
  return (
    <>
      <Head>
        <title>Booking App</title>
        <meta name="description" content="Full stack Booking App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Home />
      </main>
    </>
  );
}
