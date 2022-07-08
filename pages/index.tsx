import type { NextPage } from "next";
import Head from "next/head";
import { useScrollIntoView } from "@mantine/hooks";

import Hero from "@sextival/modules/home/Hero";
import Info from "@sextival/modules/home/Info";

const Home: NextPage = () => {
  const { scrollIntoView: scrollToInfo, targetRef: infoRef } =
    useScrollIntoView<HTMLDivElement>();

  const { scrollIntoView: scrollToContent, targetRef: contentRef } =
    useScrollIntoView<HTMLDivElement>();

  return (
    <>
      <Head>
        <title>Sextival V2</title>
        <meta
          name="description"
          content="Il Festival della Salute Sessuale, 25 e 26 Giugno!"
        />
        <link rel="icon" href="/logo-ico.ico" />
      </Head>

      <Hero scrollAction={() => scrollToInfo()} />
      <Info scrollAction={() => scrollToContent()} scrollRef={infoRef} />
    </>
  );
};

export default Home;
