import React from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<DocumentContext> {
  render() {
    return (
      <Html>
        <Head>
          <title>Todo List App</title>
        </Head>
        <body>
          <Main/>
          <NextScript/>
        </body>
      </Html>
    );
  }
}
