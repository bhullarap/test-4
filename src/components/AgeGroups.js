import React, { Component } from "react";
import { Bar } from "react-chartjs-2";
function AgeGroups(props) {
  console.log("props", props);
  const renderList = () => {
    let group1 = props.value.filter(item => item.Age <= 25).length;
    let group2 = props.value.filter(item => item.Age > 25 && item.Age < 45)
      .length;
    let group3 = props.value.filter(item => item.Age >= 45).length;
    console.log(group1, group2, group3);
    return (
      <div>
        <h2>Age Groups</h2>
        <Bar
          data={{
            labels: ["Age of 25 Or Less", "26 to 45", "More than 45"],
            datasets: [
              {
                label: "Age Groups",
                data: [group1, group2, group3],
                backgroundColor: ["red", "blue", "green"]
              }
            ]
          }}
          height="50%"
        />
        <p>
          In the Uploaded CSV File people under Age 25 years old are {group1},
          Between Age 25-45 are {group2} and Age more than 45 are
          {group3}.
        </p>
        <hr />
        <br />
        <br />

        <br />
        <br />

        <br />
        <br />
      </div>
    );
  };

  return <div>{props.value.length > 0 ? renderList() : <div />}</div>;
}

export default AgeGroups;
