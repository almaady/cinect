import React from "react";
import App from "next/app";


class Main extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
        <>
          <Component {...pageProps} style={{ position: "relative" }} />
        </>
    );
  }
}

export default Main;
