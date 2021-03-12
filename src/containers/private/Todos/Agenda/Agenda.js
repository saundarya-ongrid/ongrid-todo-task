import React, { useState } from "react";
import moment from "moment";
import { ReactAgenda, ReactAgendaCtrl, guid, Modal } from "react-agenda";

export const Agenda = () => {
  const now = new Date();
  const colors = {
    todo: "rgba(235, 85, 59, 1)",
    inProgress: "rgba(242, 177, 52, 1)",
    done: "rgba(102, 195, 131 , 1)",
  };

  const [items, setItems] = useState([
    {
      _id: guid(),
      name: "Meeting , dev staff!",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        10,
        0
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        12,
        0
      ),
      classes: "done",
    },
    {
      _id: guid(),
      name: "Working lunch , Holly",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        11,
        0
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        13,
        0
      ),
      classes: "inProgress",
    },
    {
      _id: guid(),
      name: "Conference , plaza",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        11,
        0
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1,
        14,
        30
      ),
      classes: "todo",
    },
    {
      _id: "event-4",
      name: "Customers issues review",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 2,
        10,
        0
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 2,
        15,
        0
      ),
      classes: "todo",
    },
    {
      _id: "event-5",
      name: "Group activity",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 3,
        10,
        0
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 3,
        16,
        30
      ),
      classes: "done",
    },
    {
      _id: "event-6",
      name: "Fun Day !",
      startDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 7,
        9,
        14
      ),
      endDateTime: new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 7,
        17
      ),
      classes: "todo",
    },
  ]);
  const [selected, setSelected] = useState([]);
  const [cellHeight, setcellHeight] = useState(60 / 4);
  const [showModal, setshowModal] = useState(false);
  //   const [rowsPerHour, setrowsPerHour] = useState(4);
  const [numberOfDays, setnumberOfDays] = useState(4);
  const [startDate, setstartDate] = useState(new Date());
  const [endDate, setendDate] = useState(new Date());

  // const [showCtrl, setshowCtrl]= useState(false);

  // console.log('selected', selected)

  // useEffect(()=>{
  //  setItems(items)
  // },[items])

  const handleItemEdit = (item, openModalVal) => {
    if (item && openModalVal === true) {
      setSelected([item]);
      return openModal();
    }
  };
  const handleCellSelection = (item) => {
    if (selected && selected[0] === item) {
      return openModal();
    }
    setSelected([item]);
  };

  const zoomIn = () => {
    const num = cellHeight + 15;
    setcellHeight(num);
  };
  const zoomOut = () => {
    const num = cellHeight - 15;
    setcellHeight(num);
  };

  const handleDateRangeChange = (startDate, endDate) => {
    setstartDate(startDate);
    setendDate(endDate);
  };

  const handleRangeSelection = (selected) => {
    setSelected(selected);
    //   setshowCtrl(true)

    openModal();
  };

  const openModal = () => {
    setshowModal(true);
  };
  const closeModal = (e) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    setshowModal(false);
  };

  const handleItemChange = (items, item) => {
    setItems(items);
    setSelected(item);
  };

  const handleItemSize = (items, item) => {
    setItems(items);
    setSelected(item);
  };

  const removeEvent = (items, item) => {
    setItems(items);
  };

  const addNewEvent = (items, newItems) => {
    setshowModal(false);
    setSelected([]);
    setItems(items);
    closeModal();
  };
  const editEvent = (items, item) => {
    setshowModal(false);
    setSelected([]);
    setItems(items);
    closeModal();
  };

  const changeView = (days) => {
    setnumberOfDays(days);
  };

  return (
    <div className="content-expanded ">
      <div className="control-buttons">
        <button className="button-control" onClick={zoomIn}>
          {" "}
          <i className="zoom-plus-icon"></i>{" "}
        </button>
        <button className="button-control" onClick={zoomOut}>
          {" "}
          <i className="zoom-minus-icon"></i>{" "}
        </button>
        <button className="button-control" onClick={openModal}>
          {" "}
          <i className="schedule-icon"></i>{" "}
        </button>
        <button className="button-control" onClick={() => changeView(7)}>
          {" "}
          {moment.duration(7, "days").humanize()}{" "}
        </button>
        <button className="button-control" onClick={() => changeView(4)}>
          {" "}
          {moment.duration(4, "days").humanize()}{" "}
        </button>
        <button className="button-control" onClick={() => changeView(3)}>
          {" "}
          {moment.duration(3, "days").humanize()}{" "}
        </button>
        <button className="button-control" onClick={() => changeView(1)}>
          {" "}
          {moment.duration(1, "day").humanize()}{" "}
        </button>
      </div>

      <ReactAgenda
        minDate={new Date(now.getFullYear(), now.getMonth() - 3)}
        maxDate={new Date(now.getFullYear(), now.getMonth() + 3)}
        startDate={startDate}
        endDate={endDate}
        startAtTime={8}
        endAtTime={23}
        cellHeight={cellHeight}
        //   locale="fr"
        items={items}
        numberOfDays={numberOfDays}
        headFormat={"ddd DD MMM"}
        rowsPerHour={4}
        itemColors={colors}
        helper={true}
        //itemComponent={AgendaItem}
        view="calendar"
        autoScale={false}
        fixedHeader={true}
        onRangeSelection={handleRangeSelection}
        onChangeEvent={handleItemChange}
        onChangeDuration={handleItemSize}
        onItemEdit={handleItemEdit}
        onCellSelect={handleCellSelection}
        onItemRemove={removeEvent}
        onDateRangeChange={handleDateRangeChange}
      />
      {showModal ? (
        <Modal clickOutside={closeModal}>
          <div className="modal-content">
            <ReactAgendaCtrl
              items={items}
              itemColors={colors}
              selectedCells={selected}
              Addnew={addNewEvent}
              edit={editEvent}
            />
          </div>
          <span
            style={{
              display: "flex",
              fontWeight: "bold",
              justifyContent: "space-around",
            }}
          >
            <span style={{ color: "rgba(235, 85, 59, 1)" }}>*Todo</span>
            <span style={{ color: "rgba(242, 177, 52, 1)" }}>*In Progress</span>
            <span style={{ color: "rgba(102, 195, 131 , 1)" }}>*Done </span>
          </span>
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
};
