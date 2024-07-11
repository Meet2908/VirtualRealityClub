import Link from "next/link";
import { useEffect } from "react";
import { connect } from "react-redux";
import { navigationToggle, walletToggle } from "../redux/actions/siteSettings";
import { stickyNav } from "../utilits"; // Assuming this utility function is correctly imported and used

const Header = ({ walletToggle, navigationToggle }) => {
  useEffect(() => {
    stickyNav(); // Assuming this function handles sticky navigation behavior
  }, []);

  const handleJoinNowClick = (e) => {
    e.preventDefault();
    walletToggle(false);
  };

  return (
    <header id="header">
      <div className="header">
        <div className="header_in">
          <div className="trigger_logo">
            <div className="logo">
              <Link href="/">
                <a>
                  <img src="/img/logo.png" alt="Logo" width={200} />
                </a>
              </Link>
            </div>
          </div>
          <nav className="nav">
            <ul>
              <li>
                <Link href="/#home">
                  <a className="creative_link">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/#about">
                  <a className="creative_link">About</a>
                </Link>
              </li>
              <li>
                <Link href="/#events">
                  <a className="creative_link">Events</a>
                </Link>
              </li>
              <li>
                <Link href="/#collection">
                  <a className="creative_link">Team Members</a>
                </Link>
              </li>
              <li>
                <Link href="/#contact">
                  <a className="creative_link">Contact</a>
                </Link>
              </li>
            </ul>
          </nav>
          <div className="wallet">
            <a
              href="#"
              onClick={handleJoinNowClick}
              className="metaportal_fn_button wallet_opener"
            >
              <span>Join Now</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, { walletToggle, navigationToggle })(
  Header
);
