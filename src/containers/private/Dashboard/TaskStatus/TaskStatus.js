import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import { PieChart } from "../../../../shared/Charts/Pie/Index";


export const TaskStatus = () => {
  const storedTodo = useSelector(state=>state.todoReducer.todoData)
  storedTodo.map(val=>val.startDateTime=new Date(val.startDateTime))

  const totalTask = storedTodo.length
  const totalTodo = storedTodo.filter(val=>val.classes==='todo').length
  const totalInprogress = storedTodo.filter(val=>val.classes==='inProgress').length
  const totalDone = storedTodo.filter(val=>val.classes==='done').length


  const dummySeries = [
    [totalTask, totalDone],
    [totalTask, totalInprogress],
    [totalTask, totalTodo],
  ];

  const Options = [
    {
      chart: {
        width: 200,
        type: "pie",
      },
      labels: ["Total Task", "Completed"],
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
    },

    {
      chart: {
        width: 200,
        type: "pie",
      },
      labels: ["Total Task", "Undergoing"],
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
    },

    {
      chart: {
        width: 200,
        type: "pie",
      },
      labels: ["Total Task", "Todo"],
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
              background: "white",
            }}
          >
            <PieChart series={value} options={Options[index]} />
          </Col>
        );
      })}
    </Row>
  );
};
