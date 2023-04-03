import React, { Component } from "react";
import { render } from "react-dom";

import { Table, Icon, Segment, Grid } from "semantic-ui-react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      data: [
        {
          date: "2014-04-18",
          total: 121.0,
          status: "Shipped",
          name: "A",
          points: 5,
          percent: 50,
          description:
            "sd sdff af asdggasd g asg  fasgadfadfg gafdsdfg sdfg sdfg sdfgdfsgs ",
          score: 44
        },
        {
          date: "2014-04-21",
          total: 121.0,
          status: "Not Shipped",
          name: "B",
          points: 10,
          percent: 60,
          description: "sd sdff af asdggasd g asg  fasgadfadfg gafdsdfg ",
          score: 87
        },
        {
          date: "2014-08-09",
          total: 121.0,
          status: "Not Shipped",
          name: "C",
          points: 15,
          percent: 70,
          description: "sd sdff af asdggasd ",
          score: 3
        },
        {
          date: "2014-04-24",
          total: 121.0,
          status: "Shipped",
          name: "D",
          points: 20,
          percent: 80,
          description:
            "sd sdff af asdggasd g asg  fasgadfadfg gafdsdfg sdfg sdfg sdfgdfsgs asdf  asf ggg",
          score: 993
        },
        {
          date: "2014-04-26",
          total: 121.0,
          status: "Shipped",
          name: "E",
          points: 25,
          percent: 90,
          description:
            "sd sdff af asdggasd g asg  fasgadfadfg gafdsdfg sdfg sdfg  ",
          score: 9
        }
      ]
    };
  }

  renderItem(item, index) {
    const itemRows = [
      <Table.Row>
        <Table.Cell width={1}>{item.date}</Table.Cell>
        <Table.Cell width={1}>{item.total}</Table.Cell>
        <Table.Cell width={1}>{item.status}</Table.Cell>
        <Table.Cell width={3}>{item.description}</Table.Cell>
        <Table.Cell width={1}>{item.score}</Table.Cell>
      </Table.Row>
    ];

    return itemRows;
  }

  render() {
    let allItemRows = [];

    this.state.data.forEach((item, index) => {
      const perItemRows = this.renderItem(item, index);
      allItemRows = allItemRows.concat(perItemRows);
    });

    return (
      <Table selectable>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Date</Table.HeaderCell>
            <Table.HeaderCell>Total</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Description</Table.HeaderCell>
            <Table.HeaderCell>Score</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>{allItemRows}</Table.Body>
      </Table>
    );
  }
}

render(<App />, document.getElementById("root"));
