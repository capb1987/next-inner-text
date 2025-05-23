"use client";

import { AppStore, store } from "@/redux/store";
import { useRef } from "react";
import { Provider } from "react-redux";

export default function ProviderRedux({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>(null);
  if (!storeRef.current) {
    storeRef.current = store;
  }

  return <Provider store={store}>{children}</Provider>;
}
