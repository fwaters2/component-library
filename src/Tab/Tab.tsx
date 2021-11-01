// Generated with util/create-component.js
import * as React from "react";

import { TabProps } from "./Tab.types";

import "./Tab.scss";

export default function Tab({ active = false, children }: TabProps) {
  return (
    <>
      <div
        data-testid="Tab"
        className={`tab ${active ? "active-tab" : ""}`}
        style={{ position: "relative" }}
      >
        {children}
        {active && (
          <div
            style={{
              position: "absolute",
              bottom: -7,
              left: "calc(50% - 5px)",
              width: 0,
              height: 0,
              borderLeft: "5px solid transparent",
              borderRight: "5px solid transparent",

              borderTop: "5px solid #304ffe",
            }}
          />
        )}
      </div>
    </>
  );
}
