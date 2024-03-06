import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "../component/Header";
// import { Amplify } from "aws-amplify";
// import config from "@/amplifyconfiguration.json";
import TransitHeader from "./component/transit/TransitHeader";
import PageHeader from "./component/PageHeader";
// import getInitialRiocAlerts from "../actions/getInitialRiocAlerts";
// import { AppContextHOC } from "../component/ContextHOCs/AppContext";
// import { RIOCAlert } from "../utils/global-types";

// Amplify.configure(config, {
//   ssr: true,
// });

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Citizen Project",
  description: "Generated by create next app",
};

export default async function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const { riocAlerts: RIOCData } = await getInitialRiocAlerts();
  
  return (
    <>
    {/* <AppContextHOC appData={{ alerts: RIOCData?.data?.listRIOCAlertData?.items as RIOCAlert[]}}> */}
      <Header />
      {/* <PageHeader/>
      <TransitHeader/> */}
      <div id="top-page-alert"/>
      {children}
    {/* </AppContextHOC> */}
    </>
  );
}
