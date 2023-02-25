import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";

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
        <Header />
      </main>
    </>
  );
}
