import React, { Component } from "react";
import Gender from "./Gender";
import AgeGroups from "./AgeGroups.js";
import "bootstrap/dist/css/bootstrap.css";
import Papa from "papaparse";

class UploadFile extends Component {
  constructor() {
    super();
    this.state = {
      file: undefined,
      data: []
    };
  }

  handleChange = event => {
    this.setState({
      file: event.target.files[0]
    });
  };

  importCSV = () => {
    const { file } = this.state;
    console.log("file", file);
    if (file.name.split(".")[1] != "csv") {
      //return <h2>Invalid file type</h2>;
      alert("wrong File Type");
    } else {
      Papa.parse(file, {
        complete: this.updateData,
        header: true
      });
    }
  };

  updateData = result => {
    const data = result.data;
    this.setState({
      data: data
    });
  };

  render() {
    console.log("data", this.state.data);
    return (
      <div>
        <div className="jumbotron text-center">
          <h1>React App To Analyze Data</h1>
          <p>
            Displaying CSV file data in Pie And Bar Charts For useful
            Reresentation
          </p>
        </div>
        <div className="container m-8">
          <div className="row">
            <div className="col-sm-4">
              <h2>Import Csv File</h2>
              <hr />
              <input
                type="file"
                ref={input => {
                  this.filesInput = input;
                }}
                name="file"
                accept=".csv"
                placeholder="Select CSV file"
                onChange={this.handleChange}
              />
              <p />
              {this.state.file ? (
                <button
                  className="btn btn-success m-2"
                  onClick={this.importCSV}
                >
                  Upload now!
                </button>
              ) : (
                <button
                  disabled
                  className="btn btn-success m-2"
                  onClick={this.importCSV}
                >
                  Upload now!
                </button>
              )}
              {/* <button
                className="btn btn-success m-2"
                onClick={this.importCSV}
              >
                Upload now!
              </button>*/}
              <hr className="d-sm-none" />
            </div>
            <div className="col-sm-8">
              <Gender value={this.state.data} />
              <AgeGroups value={this.state.data} />
            </div>
          </div>
        </div>
        <div className="text-center fixed-bottom m-0">
          <p>Developed By Amritpal Singh </p>
        </div>
      </div>
    );
  }
}

export default UploadFile;
