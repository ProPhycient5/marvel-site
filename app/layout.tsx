"use client";

import "./globals.css";
import App from "./App";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "@/redux/store";

export default function RootLayout() {
  return (
    <html lang="en">
      <body className="bg-binary-blue text-gray-200 font-sans">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
