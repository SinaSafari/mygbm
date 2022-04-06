import type { ReactElement, ReactNode } from "react";
import type { AppProps } from "next/app";
import type { NextPage } from "next";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraUIThemeProvider } from "../styles/theme";
import "../styles/globals.css";

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraUIThemeProvider>
        {Component.getLayout ? (
          Component.getLayout(<Component {...pageProps} />)
        ) : (
          <>
            <Component {...pageProps} />
          </>
        )}
      </ChakraUIThemeProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
