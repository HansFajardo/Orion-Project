import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Logo from "../assets/img/logo.svg";
import RoundedBtn from "./RoundedBtn";
import { IconButton } from "@mui/material";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import SearchIcon from "@mui/icons-material/Search";
import header from "./css/Header.module.css";
import { NavLink, Link, useLocation } from "react-router-dom";
import SignInModal from "./signInModal";
import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import defaultPic from "../assets/img/defaultProfPic.png";
import { AuthContext } from "../backend/AuthContext";
import { useContext } from "react";
import { useState, useRef, useEffect } from "react";
import SearchBar from "./SearchBar";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import { CompanyList } from "../backend/files/CompanyList";
import PostAJobModal from "./PostAJobModal";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Collapse from "react-bootstrap/Collapse";
import Slide from "@mui/material/Slide";
import { Bookmark } from "@mui/icons-material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

function Header(props) {
  const [signInModalShow, setSignInModalShow] = React.useState(false);
  const [PostAJobModalShow, setPostAJobModalShow] = React.useState(false);
  const { isLoggedIn, userName, userType } = useContext(AuthContext);
  const [isSearchVisible, setSearchVisible] = React.useState(false);
  const [filteredData, setFilteredData] = useState([]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openCollapse, setOpenCollapse] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const open = Boolean(anchorEl);
  const { logout } = useContext(AuthContext);
  const containerRef = React.useRef(null);

  const location = useLocation();
  const currentPath = location.pathname;

  const toggleSearchVisibility = () => {
    setSearchVisible(!isSearchVisible);
  };

  const handleClick = () => {
    window.location.href = "http://localhost:4200";
  };

  const handleFilter = (event) => {
    const input = event.target.value;
    const newFilter = CompanyList.filter((value) => {
      return value.companyName.toLowerCase().includes(input.toLowerCase());
    });
    if (input === "") {
      setFilteredData([]);
    } else {
      setFilteredData(newFilter);
    }
  };

  const handleProfileClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseProfileClick = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
  };

  const handleCollapse = () => {
    setOpenCollapse((prev) => !prev);
  };

  useEffect(() => {
    if (currentPath === "/client-bookmark") {
      setBookmark(true);
    } else {
      setBookmark(false);
    }
    // Side effect code here (e.g., data fetching)
  });

  return (
    <>
      <Navbar
        data-bs-theme="light"
        fixed="top"
        className="border border-bottom"
        style={{
          backgroundColor: "#FFF",
          fontFamily: "Roboto, sans-serif",
          fontSize: "16px",
          fontWeight: "600",
        }}
      >
        <Container fluid className="m-2">
          <Navbar.Brand className="pointer">
            {isLoggedIn ? (
              <Link to="/" className="link-style">
                <img src={Logo} alt="logo" className="pointer" />
              </Link>
            ) : (
              <Link to="/" className="link-style">
                <img
                  src={Logo}
                  alt="logo"
                  onClick={() => setOpenCollapse(!openCollapse)}
                  aria-expanded={openCollapse}
                  aria-controls="collapse-text"
                />
              </Link>
            )}
          </Navbar.Brand>
          <Nav
            className="me-auto"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "5px",
            }}
          >
            {/* changed visibility if logged in */}
            {isLoggedIn &&
              (userType === "client" ? (
                <Nav.Link as={NavLink} to="/client-dashboard">
                  Dashboard
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/company-dashboard">
                  Dashboard
                </Nav.Link>
              ))}
            {isLoggedIn && userType === "company" && (
              <Nav.Link as={NavLink} to="/find-jobs">
                Find Jobs
              </Nav.Link>
            )}
            {isLoggedIn &&
              (userType === "client" ? (
                <Nav.Link as={NavLink} to="/client-projects">
                  Projects
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/company-projects">
                  Projects
                </Nav.Link>
              ))}
            {isLoggedIn &&
              (userType === "client" ? (
                <Nav.Link as={NavLink} to="/client-messages">
                  Messages
                </Nav.Link>
              ) : (
                <Nav.Link as={NavLink} to="/company-messages">
                  Messages
                </Nav.Link>
              ))}

            {/* about us collapse  */}
            {isLoggedIn ? (
              <Nav.Link onClick={handleClick}>About Us</Nav.Link>
            ) : (
              <Nav.Link onClick={handleClick} ref={containerRef}>
                <Slide
                  direction="right"
                  in={openCollapse}
                  container={containerRef.current}
                  mountOnEnter
                  unmountOnExit
                >
                  <div>About Us</div>
                </Slide>
              </Nav.Link>
            )}

            {isLoggedIn && userType === "client" && (
              <Button
                className="rounded-5 fw-bold"
                onClick={() => setPostAJobModalShow(true)}
              >
                Post a Job
              </Button>
            )}
          </Nav>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="primary">Search</Button>
          </Form> */}
          {/* <Image src={searchIcon} roundedCircle style={{ backgroundColor: '#FFFFFF', boxSizing: 'border-box', padding: '5px' }}></Image> */}
          <div className={header.header}>
            <Search>
              <SearchIconWrapper>
                <SearchIcon sx={{ color: "#7A1CA7" }} />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                inputProps={{ "aria-label": "search" }}
                onChange={handleFilter}
              />
            </Search>
            {/* search results */}
            {filteredData.length != 0 && (
              <div
                className={`shadow-sm ${isLoggedIn ? header.searchResults : header.guestSearchResults
                  }`}
              >
                {filteredData.map((val, key) => {
                  return (
                    <Link to="/company-profile" className="remove-blue-link">
                      <div className="searchContainer">{val.companyName}</div>
                    </Link>
                  );
                })}
              </div>
            )}

            {isLoggedIn && userType === "client" && (
              <Nav.Link as={NavLink} to="/client-bookmark">
                <IconButton
                  aria-label="Bookmarks"
                  style={{ color: "#7A1CA7", backgroundColor: "#FFFFFF" }}
                >
                  {bookmark ? <Bookmark /> : <BookmarkBorderIcon />}
                </IconButton>
              </Nav.Link>
            )}

            {isLoggedIn ? (
              <div className="d-flex gap-2">
                <Col className=" justify-content-center align-content-center">
                  <div className="fw-light">{userName}</div>
                </Col>

                <div onClick={handleProfileClick}>
                  <Image
                    src={defaultPic}
                    roundedCircle
                    fluid
                    className="pointer"
                    style={{
                      width: "40px",
                      height: "40px",
                      border: "2px solid #7A1CA7",
                    }}
                  />
                </div>
              </div>
            ) : (
              <Button
                variant="outline-primary"
                className="fw-bold"
                onClick={() => setSignInModalShow(true)}
              >
                Sign-in
              </Button>
            )}
          </div>
        </Container>
      </Navbar>

      <SignInModal
        show={signInModalShow}
        onHide={() => setSignInModalShow(false)}
      />
      <PostAJobModal
        show={PostAJobModalShow}
        onHide={() => setPostAJobModalShow(false)}
      />

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseProfileClick}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {userType === "client" ? (
          <Nav.Link as={NavLink} to="/client-profile">
            <MenuItem onClick={handleCloseProfileClick}>Profile</MenuItem>
          </Nav.Link>
        ) : (
          <Nav.Link as={NavLink} to="/company-profile">
            <MenuItem onClick={handleCloseProfileClick}>Profile</MenuItem>
          </Nav.Link>
        )}
        {userType === "client" ? (
          <Link to="/client-transactions" className="link-style">
            <MenuItem onClick={handleCloseProfileClick}>
              My Transactions
            </MenuItem>
          </Link>
        ) : (
          <Link to="/company-transactions" className="link-style">
            <MenuItem onClick={handleCloseProfileClick}>My Transactions</MenuItem>
          </Link>
        )}
        <Link to="/" className="remove-blue-link">
          <MenuItem
            onClick={() => {
              handleLogout();
              handleCloseProfileClick();
            }}
          >
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </>
  );
}

export default Header;
