import React, { Component } from "react";
import Axios from "axios";

export default class World extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    Axios.get("https://corona.lmao.ninja/v2/countries").then((response) => {
      this.setState({ data: response.data });
      console.log(this.state.data);
    });
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <table className="table table-striped table-bordered  overflow-x:auto">
            <thead>
              <tr>
                            <td>Country </td>
                            <td>Continent</td>
                            <td>Total Case</td>
                            <td>Active</td>
                <td>Recoverd</td>
                <td>Deaths</td>
              </tr>
            </thead>
            <tbody>
              {this.state.data.map((itm, key) => {
                return (
                  <tr>
                    <td>
                      {itm.country}
                      <img
                        style={{ width: "64px", marginLeft: "10px" }}
                                src={itm.countryInfo.flag}
                                alt="true"
                      />
                    </td>
                    <td>{itm.continent}</td>

                    <td>{itm.cases}</td>
                    <td>{itm.active}</td>
                    <td>{itm.recovered}</td>
                    <td>{itm.deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
