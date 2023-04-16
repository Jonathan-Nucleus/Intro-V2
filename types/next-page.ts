import { NextPage } from "next";

export interface AppPageProps {
  layout?: "landing" | "main"
}

export type NextPageWithLayout<P = {}> = NextPage<P> & AppPageProps;