import "@sass/main.scss";
import Head from "next/head";
import { AppProps } from "next/app";
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import { ApolloProvider } from "@apollo/client";
import { client } from "../services/graphql";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import GeneralMenu from "@shared/Menu/GeneralMenu/GeneralMenu";
import AccountMenu from "@shared/Menu/AccountMenu/AccountMenu";
// import Info from '@shared/BottomSheet/Info';
import ToastNotification from "@shared/ToastNotification/ToastNotification";
import QR from "@shared/Sliders/HeroSlider/HelperComps/QR";
import Share from "@shared/Sliders/HeroSlider/HelperComps/Share";
import AuthProvider from "@auth/SecureRoute/AuthProvider";
import { store } from "@redux/store/store";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>VReel</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <CookiesProvider>
        <ApolloProvider client={client}>
          <Provider store={store}>
            <AuthProvider>
              <GeneralMenu />
              <AccountMenu />
              <ToastNotification />
              <QR />
              <Share />
              {/* <Info /> */}
              <Component {...pageProps} />
            </AuthProvider>
          </Provider>
        </ApolloProvider>
      </CookiesProvider>
    </>
  );
}

export default MyApp;
