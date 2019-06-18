import React, { Component } from "react";
import { Pie } from "react-chartjs-2";
function Gender(props) {
  console.log("props", props);
  const renderList = () => {
    let countMale = props.value.filter(item => item.Gender === "Male").length;
    let countFemale = props.value.filter(item => item.Gender === "Female")
      .length;

    console.log(countMale, countFemale);
    return (
      <div>
        <h2>Gender ratios</h2>
        <Pie
          data={{
            labels: ["Male", "Female"],
            datasets: [
              {
                data: [countMale, countFemale],
                backgroundColor: ["red", "blue"]
              }
            ]
          }}
          height="50%"
        />
        <p>
          In the Uploaded CSV File there are {countMale} Males and Females are{" "}
          {countFemale}
        </p>
        <hr />
      </div>
    );
  };

  return (
    <div>
      {props.value.length > 0 ? (
        renderList()
      ) : (
        <h2>No Data Selected Yet To Represent</h2>
      )}
    </div>
  );
}

export default Gender;
