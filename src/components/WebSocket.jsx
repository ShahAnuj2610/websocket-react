import React, { Component } from "react";
import PropTypes from "prop-types";
import moment from "moment";
import Websocket from "react-websocket";
import { Chart } from "react-charts";
import { cloneDeep, get } from "lodash-es";
import { connect } from "react-redux";
import { UPDATE_GLOBAL_DATA } from "../action";

class WebSocket extends Component {
  state = { data: [] };
  sendMessage(message) {
    console.log("time", moment.unix(1557052784).format("h:mm:ss a"));
    console.log("refdff", this.refWebSocket);
    this.refWebSocket.sendMessage(message);
  }
  handleData = data => {
    console.log(JSON.parse(data));
    this.setState(prevState => {
      const filteredBTCData = this.getFilteredBTC(JSON.parse(data).x.out);
      const currentTimeStamp = JSON.parse(data).x.time;
      const currentDataLength = filteredBTCData.length;
      const amtToAddFromPrevious = 10 - currentDataLength;
      if (amtToAddFromPrevious <= 0) {
        this.props.dispatch({
          type: UPDATE_GLOBAL_DATA,
          payload: filteredBTCData
        });
        return {
          data: filteredBTCData
        };
      } else {
        const newData = cloneDeep(filteredBTCData);
        for (let i = 0; i < amtToAddFromPrevious; i++) {
          if (get(prevState, ["data", i]))
            newData.push(get(prevState, ["data", i]));
        }
        this.props.dispatch({
          type: UPDATE_GLOBAL_DATA,
          payload: newData
        });
        return { data: newData };
      }
    });
  };
  getFilteredBTC = (data = []) => {
    return data.filter(item => item.value / 100000000 > 1);
  };
  getChartData = (data = []) => {
    console.log({ data });
    return data.map((dataItem, index) => {
      return [index + 1, dataItem.value];
    });
  };
  render() {
    console.log("ref", this.refWebSocket);
    return (
      <div>
        <Websocket
          url="wss://ws.blockchain.info/inv"
          onMessage={this.handleData}
          onOpen={() => {
            this.sendMessage(JSON.stringify({ op: "unconfirmed_sub" }));
          }}
          ref={Websocket => {
            this.refWebSocket = Websocket;
          }}
          reconnect
          debug
        />
        <div
          style={{
            width: "400px",
            height: "300px"
          }}
        >
          <Chart
            data={[
              {
                label: "Series 1",
                data: this.getChartData(this.state.data)
              }
            ]}
            axes={[
              { primary: true, type: "linear", position: "bottom" },
              { type: "linear", position: "left" }
            ]}
          />
        </div>
      </div>
    );
  }
}

WebSocket.propTypes = {};

export default connect()(WebSocket);
