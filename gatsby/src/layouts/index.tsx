import React from "react";
// import Link from "gatsby-link";
import { Helmet } from "react-helmet";
import classnames from "classnames";

import { Project as ShelleyDefault } from "@actionishope/shelley/styles/default";
import { Project as GatsbyStarter, Light, Dark } from "../styles/gatsbyStarter";
import Footer from "../components/Footer/Footer";

const DefaultLayout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Helmet
      title="Gatsby Default Starter"
      meta={[
        { name: "description", content: "Sample" },
        { name: "keywords", content: "sample, something" }
      ]}
      htmlAttributes={{
        lang: "en",
        class: classnames(ShelleyDefault, GatsbyStarter, Dark)
      }}
    />
    {children}
    <Footer>Footer</Footer>
  </>
);

export default DefaultLayout;
