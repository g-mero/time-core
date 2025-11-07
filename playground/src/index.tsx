/* @refresh reload */

import { JigeProvider } from "jige-ui";
import { render } from "solid-js/web";
import { App } from "./app";

import "uno.css";

const root = document.querySelector("#root");

render(
  () => (
    <JigeProvider>
      <App />
    </JigeProvider>
  ),
  root as HTMLElement
);
