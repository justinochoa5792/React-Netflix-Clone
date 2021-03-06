import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";

class Footer extends Component {
  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };

  render() {
    return (
      <FooterContainer>
        <span style={{ marginLeft: "15%", fontSize: "1.125rem" }}>
          Questions? <Link>Call 1-877-742-1355</Link>
        </span>
        <div className="footer-columns">
          <ul>
            <li>
              <Link to="#">FAQ</Link>
            </li>
            <li>
              <Link to="#">Investor Relations</Link>
            </li>
            <li>
              <Link to="#">Ways to Watch</Link>
            </li>
            <li>
              <Link to="#">Corporate Information</Link>
            </li>
            <li>
              <Link to="#">Netflix Originals</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Help Center</Link>
            </li>
            <li>
              <Link to="#">Jobs</Link>
            </li>
            <li>
              <Link to="#">Terms of Use</Link>
            </li>
            <li>
              <Link to="#">Contact us</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Account</Link>
            </li>
            <li>
              <Link to="#">Redeem Gift Cards</Link>
            </li>
            <li>
              <Link to="#">Privacy</Link>
            </li>
            <li>
              <Link to="#">Speed Test</Link>
            </li>
          </ul>
          <ul>
            <li>
              <Link to="#">Media Center</Link>
            </li>
            <li>
              <Link to="#">Buy Gift Cards</Link>
            </li>
            <li>
              <Link to="#">Cookie Preferences</Link>
            </li>
            <li>
              <Link to="#">Legal Notices</Link>
            </li>
          </ul>
          <div className="lang-btn" onClick={this.handleToggle}>
            <Icon icon={iosWorld} size={20} />
            &nbsp;&nbsp;English&nbsp;&nbsp;
            <Icon icon={arrowSortedDown} />
          </div>
        </div>
        {this.state.langContent && (
          <div className="lang-toggle">
            <ul>
              <li>English</li>
            </ul>
            <ul>
              <li>Spanish</li>
            </ul>
          </div>
        )}
        <span style={{ marginLeft: "15%", fontSize: "0.9rem" }}>Netflix </span>
      </FooterContainer>
    );
  }
}

export default Footer;

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-columns {
    width: 70%;
    margin: 1rem auto 0;
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }

  ul li {
    list-style-type: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  .lang-btn {
    background: transparent;
    border: 0.9 solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin: 2rem 0 2rem;
    cursor: pointer;
  }

  .lang-toggle {
    margin-left: 15%;
    position: absolute;
    margin-top: -2rem;
  }

  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px soild #333;
    text-align: center;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
