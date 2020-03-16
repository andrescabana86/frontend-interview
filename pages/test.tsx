import Head from "next/head";
import { Test1, Test2 } from "../components/test";

const Test = () => (
  <div className="container">
    <Head>
      <title>Frontend Interview</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <h1 className="title">Test Components</h1>

      {
        //<Test1 />
      }

      {<Test2 onlyNumber={"3"} />}
    </main>
  </div>
);

export default Test;
