import '../styling/globals.css'
import type { Metadata } from 'next'
import "allotment/dist/style.css";
import 'simplebar/dist/simplebar.css';
import "react-lazy-load-image-component/src/effects/blur.css";
import "react-lazy-load-image-component/src/effects/opacity.css";
import "react-lazy-load-image-component/src/effects/black-and-white.css";
import {ReactElement, ReactNode} from "react";
import {NextPage} from "next";
import Head from "next/head";
import {AppProps} from "next/app";
import {Provider as ReduxProvider} from "react-redux";
import {store} from "@/state/redux/store";
import ProgressBar from "../components/progress-bar";
import MotionLazyContainer from "../components/animate/MotionLazyContainer";

// ----------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'CharlieArmstrongDev Portfolio',
  description: 'CharlieArmstrongDev Portfolio',
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

export default function MyApp(props: MyAppProps) {
  const {Component, pageProps} = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ReduxProvider store={store}>
        <MotionLazyContainer>
          <ProgressBar />
          {getLayout(<Component {...pageProps} />)}
        </MotionLazyContainer>
      </ReduxProvider>
    </>
  );
}

// ----------------------------------------------------------------------
