import Head from "next/head";
import Home from "../components/Home/Home";
import Navbar from "../components/Navbar/Navbar";

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
        <Navbar />
        <Home />
      </main>
    </>
  );
}
