import { SessionProvider } from "next-auth/react";
import "../styles/globals.css";
import Layout from "../components/Layout";
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient();

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </QueryClientProvider>
    </SessionProvider>
  );
}
