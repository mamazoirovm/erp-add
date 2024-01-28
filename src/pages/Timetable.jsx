import { Select } from "antd";
import React from "react";
import useTimetable from "../hooks/useTimetable";

const Timetable = () => {
  const { loading, classes } = useTimetable();
  return (
    <div>
      <h1>TimeTable</h1>
      <Select
        size="middle"
        options={classes.map((sing) => ({ value: sing.name, label: sing.id }))}
        placeholder="Sinf tanlang"
        loading={loading}
      />
    </div>
  );
};

export default Timetable;
