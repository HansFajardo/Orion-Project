import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import PlaceholderProviderCard from "../PlaceholderProviderCard/PlaceholderProviderCard";
import ProviderCard from "../ProviderCard";

class RecommendedCompanyContainer extends Component {
  constructor(props) {
    super(props);
  }
  state = {
    providers: [],
    loading: true,
    error: null,
  };

  componentDidMount() {
    this.fetchProviders();
  }

  // Function to fetch providers from the API
  fetchProviders = async () => {
    try {
      const response = await fetch("/api/providers");
      const providers = await response.json();

      if (response.ok) {
        // Update state with fetched providers
        console.log(providers);
        this.setState({ providers, loading: false });
      } else {
        throw new Error(`Failed to fetch providers: ${providers.message}`);
      }
    } catch (error) {
      // Update state if there's an error
      this.setState({ error: error.message, loading: false });
    }
  };

  render() {
    const { providers, loading, error } = this.state;
    return (
      <Container fluid className="rounded-2 bg-white p-5 my-3">
        <Row>
          <Col>
            <div className="fw-bold fs-4 text-center">
              Here are some of our recommendations that might suit your needs.
            </div>

            {loading && (
              <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">
                {[...Array(3)].map((_, index) => (
                  <div className="col-lg-3" key={index}>
                    <PlaceholderProviderCard />
                  </div>
                ))}
              </div>
            )}
            {error && (
              <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">
                {[...Array(3)].map((_, index) => (
                  <div className="col-lg-3" key={index}>
                    <PlaceholderProviderCard />
                  </div>
                ))}
              </div>
            )}
            {providers.length > 0 && (
              <div className="d-flex flex-wrap gap-5 pt-5 pb-5 justify-content-center">
                {providers.map((provider) => (
                  <div className="col-lg-3" key={provider._id}>
                    <ProviderCard
                      companyName={provider.companyName}
                      rating={provider.ratings}
                      reviews={provider.reviews}
                      sales={provider.sales}
                      time={provider.time}
                      employees={provider.employees}
                      location={provider.location}
                      tags={provider.tags}
                    />
                  </div>
                ))}
              </div>
            )}
            {providers.length === 0 && !loading && !error && (
              <PlaceholderProviderCard message="No providers found." /> // Customize message
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default RecommendedCompanyContainer;
