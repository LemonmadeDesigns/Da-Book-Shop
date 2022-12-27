import React from "react";
import { Container, Row, Col } from "reactstrap";

// styles
import "./profile.css";

import Loading from "../Body/Loading/Loading";
import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";

export const Profile = () => {
  const { user } = useAuth0();

  return (
    <Container className="mb-5">
      <Row id="profile-image" className="align-items-left profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={user.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md={2}>
          <h2>{user.name}</h2>
          <p className="lead text-muted">{user.email}</p>
        </Col>
      </Row>

      {/* <Row>
        <h1 className="h-1">
          About Us
        </h1>
      </Row> */}

      <Row>
        <div>
        <h1 className="h-1">
          Thank you, {user.name}
        </h1>
          <p className="para para-1">
            “Books are the main thing you purchase that makes you more kowledgeable. We, at <span className="logo-2"> Da' Book Stop </span>, swear by this and put stock in satisfying virtual dreams that make you perpetually rich constantly.
          </p>

          <p className="para para-2">  We have been moving excellent encounters for a considerable length of time through our cutting-edge planned occasion bundles and other fundamental virtual administrations. We rouse our clients to carry on with a rich life, brimming with extraordinary encounters.
          </p>

          <p className="para para-3"> Through our exceptionally curated occasion bundles, we need to take you on an adventure where you personally enjoy the stunning magnificence of America and far-off terrains. We need you to observe sensational scenes that are a long way past your creative ability, through a book.
          </p>

          <p className="para para-4">  The powerful inclination of American voyagers to read more nowadays is something that keeps us inspired to satisfy our educational necessities. Our vision to give you a consistent occasion encounter makes us one of the main visit administrators in the regularly extending Book industry.
          </p>

          <p className="para para-5">  To guarantee that you have a satisfying occasion and healthy encounters, all our Book Stores are available to your no matter what. On your universal occasion, we guarantee that you are very much outfitted with the right books to entertain you all the way.
          </p>

        </div>
      </Row>

      {/* <Row>
        <div className="profile">{JSON.stringify(user, null, 2)}</div>
      </Row> */}
    </Container>
  );
};

export default withAuthenticationRequired(Profile, {
  onRedirecting: () => <Loading />,
});