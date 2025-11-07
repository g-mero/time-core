import routes from "virtual:pages";
import { Router, useCurrentMatches } from "@solidjs/router";
import { Scrollbar } from "jige-ui";
import type { JSX } from "solid-js";
import { createMemo, Suspense } from "solid-js";
import { Aside } from "./parts/aside";
import { Header } from "./parts/header";

function RouteWrapper(props: { children: JSX.Element }) {
  const matches = useCurrentMatches();
  const info = createMemo(() => {
    const m = matches();
    if (m.length === 0) {
      return {};
    }
    return m.at(-1)?.route.info || {};
  });
  return (
    <div class="p-2">
      <div class="fw-bold text-2xl">{info().title}</div>
      <div class="p-2">{props.children}</div>
    </div>
  );
}

export function App() {
  return (
    <Router
      root={(props) => (
        <div class="flex h-screen w-screen overflow-hidden flex-col bg-t-bg3">
          <div class="h-45px w-full ">
            <Header />
          </div>
          <div class="flex h-[calc(100%-45px)] w-full">
            <div class="h-full w-185px overflow-auto">
              <Aside />
            </div>
            <Suspense>
              <div class="b-rd-tl-2xl b b-t-border h-full bg-t-bg1 w-[calc(100%-185px)]">
                <Scrollbar>
                  <RouteWrapper>{props.children}</RouteWrapper>
                </Scrollbar>
              </div>
            </Suspense>
          </div>
        </div>
      )}
    >
      {routes}
    </Router>
  );
}
