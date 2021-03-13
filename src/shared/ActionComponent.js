import React from 'react';
import { useDispatch } from "react-redux";
import allActions from "../actions/allActions";

export const ActionComponent = (props) => {
  // console.log('props are', props)
  // const history = useHistory()
  const dispatch = useDispatch();
  const pullAsyncDataFunc = () => {
    dispatch(allActions.getAsyncData());
    props.history.push('/output')
   
  };
  return (
    <div>
      <div>
        <button onClick={pullAsyncDataFunc}>Pull Async Data</button>
      </div>
    </div>
  );
};
