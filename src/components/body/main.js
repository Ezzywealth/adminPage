import React from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";

const mainData = [
  {
    name: "Revenue",
    value: "$2,415",
    pL: "-11.4",
    icon: <ArrowDownwardIcon />,
    info: "compared to last month",
  },
  {
    name: "Sales",
    value: "$4,415",
    pL: "-14",
    icon: <ArrowDownwardIcon />,
    info: "compared to last month",
  },
  {
    name: "Cost",
    value: "$2,225",
    pL: "+2.4",
    icon: <ArrowUpwardIcon />,
    info: "compared to last month",
  },
];

export default mainData;
