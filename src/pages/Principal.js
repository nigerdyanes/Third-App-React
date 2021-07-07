import React, { Component } from "react";

import Navbar from "../components/Navbar";
import Main from "../components/Main";
import Loading from "../components/Loading";
import "./styles/Principal.css";
import { getLocations } from "../services/ApiRickMorty";

class Principal extends Component {
  state = {
    loading: false,
    error: null,
    data: undefined,
    nextPage: 1,
  };

  componentDidMount() {
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });
    try {
      const { data } = await getLocations();
      this.setState({ loading: false, data:data.results, nextPage: this.state.nextPage + 1 });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  moreData = async (e) => {
    this.setState({
      loading: true,
      error: null,
      nextPage: this.state.nextPage + 1,
    });
    console.log(this.state.nextPage);
    try {
      const { data } = await getLocations(this.state.nextPage);
      this.setState({ loading: false, data: this.state.data.concat(data.results) });
    } catch (error) {
      this.setState({ loading: false, error });
    }
  };

  render() {
    console.log(this.state.data);
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        <Navbar />
        <Main data={this.state.data} />
        <div className="container Btn__Load__More">
          <button
            type="button"
            onClick={this.moreData}
            className="btn btn-success btn-lg"
          >
            Load More
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default Principal;
