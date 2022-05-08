import React from "react";

function ExpensDate(props: any) {
  const divStyle = {
    color: "white",
  };

  const date = props.date.toDateString();

  return <div style={divStyle}>{date}</div>;
}

export default ExpensDate;
