import Head from "next/head";
import { HorribleHook } from "../components/horrible-hook";

const Optimize = () => (
  <div className="container">
    <Head>
      <title>Frontend Interview</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Optimize this horrible hook</h1>

      <HorribleHook />
    </main>
  </div>
);

export default Optimize;
