// Generated with util/create-component.js
import * as React from "react";

import { ContentTransitionWrapperProps } from "./ContentTransitionWrapper.types";

import "./ContentTransitionWrapper.scss";

export default function ContentTransitionWrapper({
  visible = false,
  children,
}: ContentTransitionWrapperProps) {
  return <div data-testid="ContentTransitionWrapper">{children}</div>;
}
