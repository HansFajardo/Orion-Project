import React, { Component } from "react";
import { Button } from "react-bootstrap";
import SearchBar from "../SearchBar";
import FilterTags from "../FilterTags";

export default class Step1 extends Component {
  state = {
    filterTags: ["Mobile App Development", "Web Development"],
    newFilterTag: "",
  };

  handleFilterTagRemove = (indexToRemove) => {
    this.setState((prevState) => ({
      filterTags: prevState.filterTags.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  handleSearchChange = (event) => {
    this.setState({ newFilterTag: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    const { newFilterTag, filterTags } = this.state;

    if (newFilterTag.trim() !== "" && !filterTags.includes(newFilterTag)) {
      this.setState((prevState) => ({
        filterTags: [...prevState.filterTags, newFilterTag],
        newFilterTag: "",
      }));
    }
  };

  handleContinue = () => {
    if (this.props.onNext) {
      this.props.onNext();
    }
  };

  render() {
    const { filterTags, newFilterTag } = this.state;

    return (
      
        <div className="container rounded-3 border-3 shadow-lg p-5 w-50">
          <div className="fw-bolder fs-2">
            What services are you looking for?{" "}
          </div>
          <div className="text-black-50">
            This helps us match you with the right service provider to meet your
            needs &#40;select up to 5&#41;.
          </div>
          <form onSubmit={this.handleSearchSubmit} className="mt-4">
            <p className="mt-3 mb-2 fs-6 fw-bold">Search for services</p>
            <SearchBar
              value={newFilterTag}
              onChange={this.handleSearchChange}
              placeholder="Search for web development, troubleshooting..."
            />
          </form>
          <div className="mt-2">
            {filterTags.map((tag, index) => (
              <FilterTags
                key={index}
                text={tag}
                onRemove={() => this.handleFilterTagRemove(index)}
              />
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center mt-5">
            <span>
              <b>STEP 1/5</b>
            </span>
            <Button
              variant="primary"
              className="rounded-5 px-3"
              onClick={this.handleContinue}
            >
              Continue <i class="bi bi-chevron-right"></i>
            </Button>
          </div>
        </div>
      
    );
  }
}
