import React from "react";
import { useDispatch } from "react-redux";
import allActions from "../actions/allActions";

export const ActionComponent = () => {
  const dispatch = useDispatch();
  const pullAsyncDataFunc = () => {
    dispatch(allActions.getAsyncData());
  };
  return (
    <div>
      <div>
        <button onClick={pullAsyncDataFunc}>Pull Async Data</button>
      </div>
    </div>
  );
};
