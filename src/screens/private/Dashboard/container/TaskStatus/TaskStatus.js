import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "../../../../../shared/Charts/Pie/Index";

export const TaskStatus = () => {
  const storedTodo = useSelector((state) => state.todoReducer.todoData);
  storedTodo.map((val) => (val.startDateTime = new Date(val.startDateTime)));

  const totalTask = storedTodo.length;
  const totalTodo = storedTodo.filter((val) => val.classes === "todo").length;
  const totalInprogress = storedTodo.filter(
    (val) => val.classes === "inProgress"
  ).length;
  const totalDone = storedTodo.filter((val) => val.classes === "done").length;

  const dummySeries = [
    [totalTask, totalDone],
    [totalTask, totalInprogress],
    [totalTask, totalTodo],
  ];

  const commonOptions = {
    chart: {
      width: 200,
      type: "pie",
      foreColor: "white",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const options = [
    {
      ...commonOptions,
      fill: {
        colors: ["#5B9BD5", "rgba(102, 195, 131 , 1)"],
      },
      colors: ["#5B9BD5", "rgba(102, 195, 131 , 1)"],

      labels: ["Total Task", "Completed"],
    },

    {
      ...commonOptions,

      fill: {
        colors: ["#5B9BD5", "rgba(242, 177, 52, 1)"],
      },
      colors: ["#5B9BD5", "rgba(242, 177, 52, 1)"],
      labels: ["Total Task", "Undergoing"],
    },

    {
      ...commonOptions,

      fill: {
        colors: ["#5B9BD5", "rgba(235, 85, 59, 1)"],
      },
      colors: ["#5B9BD5", "rgba(235, 85, 59, 1)"],
      labels: ["Total Task", "Todo"],
    },
  ];

  return (
    <Row type="flex">
      {dummySeries.map((value, index) => {
        return (
          <Col
            key={index}
            lg={{ span: 7, offset: index === 0 ? 0 : 1 }}
            xs={{ span: 20, offset: 2 }}
            style={{
              padding: "12px",
              borderRadius: "5px",
              background: "#1A2022",
              boxShadow: "2px 2px 2px 2px #095775",
              color: "white",
            }}
          >
            <PieChart series={value} options={options[index]} />
          </Col>
        );
      })}
    </Row>
  );
};
