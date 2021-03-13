import { Button } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const OutputComponent = (props) => {
  const customAsyncData = useSelector((state) => state.customAsyncData.data);
  //   console.log('output data', customAsyncData)
  const { author, date, title } =
    customAsyncData &&
    customAsyncData.slideshow &&
    customAsyncData.slideshow.author
      ? customAsyncData.slideshow
      : { author: "", date: "", title: "" };
  return (
    <div>
      <Button type='primary' onClick={()=>props.history.goBack()}>Back</Button> <br/>
      Output
      <div>
        <p>
          {author}
          <br />
          {title}
          <br />
          {date}
          <br />
        </p>
      </div>
    </div>
  );
};
export default OutputComponent;
