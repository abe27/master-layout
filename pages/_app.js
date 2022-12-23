import "../styles/globals.css";
import { Noto_Sans } from "@next/font/google";

const fonts = Noto_Sans({
  weight: "400",
});

// 1. import `ChakraProvider` component
import { ChakraProvider } from "@chakra-ui/react";

const MyApp = ({ Component, pageProps }) => {
  return (
    <ChakraProvider>
      <section className={fonts.className}>
        <Component {...pageProps} />
      </section>
    </ChakraProvider>
  );
};

export default MyApp;
