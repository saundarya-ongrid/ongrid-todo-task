import { Col, Row } from "antd";
import React from "react";
import { PieChart } from "../../../../components/Charts/Pie/Index";

export const TaskStatus = () => {
  const dummySeries = [
    [44, 15],
    [44, 15],
    [44, 10],
  ];

  const dummyOptions = [
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
            <PieChart series={value} options={dummyOptions[index]} />
          </Col>
        );
      })}
    </Row>
  );
};
