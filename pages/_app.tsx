import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      {/* Provider attribute="class" 빠져서 다크모드 안됐던거임*/}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
