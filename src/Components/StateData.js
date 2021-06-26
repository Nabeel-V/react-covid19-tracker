import React, { Component } from "react";
import Axios from "axios";
import { Card, Button, Accordion } from "react-bootstrap";
import "./Static/StateData.css";

export default class StateData extends Component {
  constructor() {
    super();
    this.state = {
      stateData: {},
    };
  }
  componentDidMount() {
    Axios.get("https://api.covid19india.org/state_district_wise.json").then(
      (response) => {
        this.setState({ stateData: response.data });
        console.log(this.state.stateData);
      }
    );
  }
  render() {
    let keys = Object.keys(this.state.stateData);

    return (
      <div className="row">
        <div className="col-md-12">
          <Accordion className="acrdn">
            {keys.map((itm, k) => {
              let district = this.state.stateData[itm].districtData;
              //let city = Object.keys(district);

              let total_active = 0;
              let total_confirmed = 0;
              let total_deaths = 0;
              let total_recover = 0;

              let districtList = [];

              for (let x in district) {
                total_active += district[x].active;
                total_confirmed += district[x].confirmed;
                total_deaths += district[x].deceased;
                total_recover += district[x].recovered;
                let ob = district[x];
                ob["district_name"] = x;
                districtList.push(ob);
              }

              return (
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey={k}>
                      {itm}
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey={k}>
                    <Card.Body>
                      <table className="table table-striped table-bordered text-center ">
                        <thead>
                          <tr>
                            <td>
                              <h3>District</h3>
                            </td>
                            <td>
                              <h3 className="head-cs">Confirmed Cases</h3> Total{" "}
                              {total_confirmed}
                            </td>
                            <td>
                              <h3 className="head-av">Active</h3> Total Active{" "}
                              {total_active}
                            </td>
                            <td>
                              <h3 className="head-tr">Recoverd </h3> Total
                              Recoverd {total_recover}{" "}
                            </td>
                            <td>
                              <h3 className="head-td">Deaths</h3> Total Death{" "}
                              {total_deaths}
                            </td>
                          </tr>
                        </thead>
                        <tbody>
                          {districtList.map((itm, k) => {
                            return (
                              <tr>
                                <td>{itm.district_name}</td>
                                <td>{itm.confirmed}</td>
                                <td>{itm.active}</td>
                                <td>{itm.recovered}</td>
                                <td>{itm.deceased}</td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              );
            })}
          </Accordion>
        </div>
      </div>
    );
  }
}
