import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorDetail = (): JSX.Element => {
  const err: any = useRouteError();
  return (
    <div>
      {" "}
      Invalid url {err.status}: {err.statusText}
    </div>
  );
};
export default ErrorDetail;
