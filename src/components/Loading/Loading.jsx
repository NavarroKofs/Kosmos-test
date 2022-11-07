import React from "react";
import { LoadingStyles } from "./styles.css";
import Dialog from "../Dialog";

const Loading = ({ children, visible }) => {
  const component = visible ? (
    <Dialog>
      <div css={LoadingStyles}>{children}</div>
    </Dialog>
  ) : null;

  return component;
};

export default Loading;
