import React from "react";
import { Redirect } from "react-router-dom";

export default class PlayerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      battletag: "",
      region: "us",
      platform: "pc",
    };

    this.battletagChange = (event) => {
      var battletag = event.target.value;
      this.setState({
        battletag: battletag,
      });
    };

    this.platformChange = (event) => {
      var platform = event.target.value;
      this.setState({
        platform: platform,
      });
    };

    this.regionChange = (event) => {
      var region = event.target.value;
      this.setState({
        region: region,
      });
    };

    this.handleSubmit = (event) => {
      event.preventDefault();
      this.setState({
        redirect: true,
      });
    };
  }

  render() {
    const { redirect } = this.state;

    if (redirect)
      return (
        <Redirect
          to={{
            pathname: "/profile",
            state: { referrer: this.state },
          }}
        />
      );

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Battletag
          <input
            type="text"
            value={this.state.battletag}
            onChange={this.battletagChange}
          ></input>
        </label>
        <label>
          Platform
          <select value={this.state.platform} onChange={this.platformChange}>
            <option value="pc">pc</option>
            <option value="xbox">xbox</option>
            <option value="playstation">playstation</option>
          </select>
        </label>
        <label>
          Region
          <select value={this.state.region} onChange={this.regionChange}>
            <option value="us">us</option>
            <option value="eu">eu</option>
            <option value="asia">asia</option>
          </select>
        </label>
        <input type="submit" value="submit"></input>
      </form>
    );
  }
}
