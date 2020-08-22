import React from "react";
import App from "next/app";
import globals from "../styles/globals.css";


class Main extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
          <style jsx global>
            {globals}
          </style>
          <Component {...pageProps} style={{ position: "relative" }} />

        </>
    );
  }
}

export default Main;
