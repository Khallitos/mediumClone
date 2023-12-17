import Link from "next/link";
import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Height } from "@mui/icons-material";
import SettingsIcon from "@mui/icons-material/Settings";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Typography, Button } from "@mui/material";
import styles from "./Navbar.module.css";

const navbarMainBody = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginTop: "15px",
  marginInline: "100px",
  padding: "10px",
  backgroundColor: "#FFC017",

};


const Navbar = () => {
  return (
    <div style={{ backgroundColor: "#FFC017", marginTop: "-20px", position: "sticky" }}>
      <div style={navbarMainBody}>
        <Typography
          variant="h4"
          color="initial"
          style={{ fontFamily: "BebasNeue", fontSize: "40px" }}
        >
          Meduim
        </Typography>
        <div
          style={{ display: "flex", flexDirection: "row", marginTop: "20px" }}
        >
          <Typography
            variant="h4"
            color="initial"
            style={{ fontSize: "16px", marginLeft: "20px" }}
          >
            Our story
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            style={{ fontSize: "16px", marginLeft: "20px" }}
          >
            Membership
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            style={{ fontSize: "16px", marginLeft: "20px" }}
          >
            Write
          </Typography>
          <Typography
            variant="h4"
            color="initial"
            style={{ fontSize: "16px", marginLeft: "20px" }}
          >
            Sign in
          </Typography>
          <button
            style={{
              borderRadius: "10px",
              backgroundColor: "black",
              color: "white",
              marginLeft: "20px",
              marginTop: "-5px",
              width: "100px",
            }}
          >
            Get started
          </button>
        </div>
      </div>
      <Divider />
    </div>
  );
};

export default Navbar;
