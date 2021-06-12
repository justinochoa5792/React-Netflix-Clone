import React, { Component } from "react";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgMac from "../images/tab-macbook.png";
import Button from "./Button";
import styled from "styled-components";

class TabContentTwo extends Component {
  render() {
    return (
      <TabContainer>
        <div className="tab-content">
          <div className="tab-top-content">
            <span style={{ fontSize: "1.5rem" }}>
              Watch TV shows and movies, anytime,anywhere - personalized for
              you.
            </span>
            <br />
            <Button className="btn">Try it now</Button>
          </div>
          <div className="tab-bottom-content">
            <div>
              <img src={ImgTv} alt="" style={{ width: "18.75rem" }} />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, Playstation,Xbox,Chromecast,Apple TV, Blue-ray
                players and more.
              </p>
            </div>
            <div>
              <img
                src={ImgTablet}
                alt=""
                style={{ width: "18.75rem", padding: "0.625rem" }}
              />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, Playstation,Xbox,Chromecast,Apple TV, Blue-ray
                players and more.
              </p>
            </div>
            <div>
              <img
                src={ImgMac}
                alt=""
                style={{
                  width: "18.75rem",
                  paddingTop: "0.625rem",
                  paddingBottom: "0.625rem",
                }}
              />
              <h3>Watch on your TV</h3>
              <p>
                Smart TVs, Playstation,Xbox,Chromecast,Apple TV, Blue-ray
                players and more.
              </p>
            </div>
          </div>
        </div>
      </TabContainer>
    );
  }
}

export default TabContentTwo;

// Main Tab Content
const TabContainer = styled.div`
  background: var(--main-deep-dark);

  .tab-content {
    margin: 0 15%;
  }

  .tab-top-content {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    justify-content: center;
    align-items: center;
    padding: 2.5rem 0;
  }
  span {
    grid-column: 1 /8;
  }

  .btn {
    grid-column: 10/12;
    margin: 0 1.25rem 1.25rem;
  }

  .tab-bottom-content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    text-align: center;
    margin-top: 2rem;
  }

  h3 {
    margin: 0.5rem 0;
  }

  p {
    color: var(--main-deep-grey);
  }
`;
