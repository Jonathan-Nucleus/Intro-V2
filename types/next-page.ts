import { NextPage } from "next";

export interface AppPageProps {
  layout?: "auth" | "main"
  background?: "default" | "radial";
}

export type NextPageWithLayout<P = {}> = NextPage<P> & AppPageProps;