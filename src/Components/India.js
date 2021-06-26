import React, { Component } from "react";
import { Card } from "react-bootstrap";
import "./Style.css";
import StateData from "./StateData";
import axios from 'axios'

export default class India extends Component {
  constructor() {
    super();
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get("https://corona.lmao.ninja/v2/countries/india")
      .then(response => {
      this.setState({data: response.data})
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <img
            src="https://cdn.iconscout.com/icon/free/png-64/india-flag-country-nation-union-empire-32988.png"
            alt="india flag"
          />
          <h3>India</h3>
        </div>
        <div className="col-md-12 ">
          <div className="row text-center">
            <div className="col-md-3 mb-5 ">
              <Card className="badge badge-primary" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Total Case</Card.Title>
                  <h3>{this.state.data.cases}</h3>
                  <Card.Text>Today : {this.state.data.todayCases}</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5">
              <Card className="badge badge-warning" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Active Case</Card.Title>
                  <h3>{this.state.data.active}</h3>
                  <Card.Text>Today : It's will available shortly</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5">
              <Card className="badge badge-success" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Total Recovery</Card.Title>
                  <h3>{this.state.data.recovered}</h3>
                  <Card.Text>Today : It's will available shortly</Card.Text>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-3 mb-5">
              <Card className="badge badge-danger" style={{ width: "18rem" }}>
                <Card.Body className="text-center">
                  <Card.Title>Total Death</Card.Title>
                  <h3>{this.state.data.deaths}</h3>
                  <Card.Text>Today : {this.state.data.todayDeaths}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-md-12 list-data">
          <StateData />
        </div>
      </div>
    );
  }
}
