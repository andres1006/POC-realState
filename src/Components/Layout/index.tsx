import React from "react";

import { /*  TopBarProp, */ ItemTopBar } from "../../POC/ui-components";
import { View } from "@aws-amplify/ui-react";
import SearchGql from "../SearchGql";
import SearchRest from "../SearchRest";
import Map from "../Map";

const Layout = () => {
  const [typeSearch, setTypeSearch] = React.useState(1);
  const [locations, setLocations] = React.useState([]);

  /*   const profileOverrides = {
    Base: {
      backgroundColor: "transparent",
      height: "10%",
    },
    Line: {
      height: "1px",
    },
    Label37884341: {
      hover: {
        color: "blue",
      },
      onClick: () => setTypeSearch(1),
      color: typeSearch === 1 ? "blue" : "",
      style: {
        cursor: "pointer",
      },
    },
    Label37884343: {
      text: "afasf",
      onClick: () => setTypeSearch(2),
      color: typeSearch !== 1 ? "blue" : "",
      style: {
        cursor: "pointer",
      },
    },
    "Rectangle 2553": {
      backgroundColor: "transparent",
    },
    "Menu Item / Default37884344": {
      display: "none",
    },
    "Header menu / Default37884346": {
      display: "none",
    },
    "Header menu / Default37884349": {
      display: "none",
    },
  }; */

  return (
    <View>
      {/* <TopBarProp overrides={{ ...(profileOverrides as any) }} /> */}
      <View
        style={{
          height: "90px",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          overflow: "auto",
          padding: "30px",
        }}
      >
        <ItemTopBar
          active={typeSearch === 1 ? "true" : "false"}
          overrides={{
            ItemTopBar: {
              height: "50px",
              style: {
                cursor: "pointer",
              },
              onClick: () => setTypeSearch(1),
            },
          }}
          label="API Gql"
        />
        <ItemTopBar
          active={typeSearch !== 1 ? "true" : "false"}
          overrides={{
            ItemTopBar: {
              height: "50px",
              style: {
                cursor: "pointer",
              },
              onClick: () => setTypeSearch(2),
            },
          }}
          label="API Rest"
        />
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
      >
        <View style={{ width: "50%", padding: "10px" }}>
          <Map locations={locations} />
        </View>
        <View style={{ padding: "10px", width: "50%" }}>
          {typeSearch === 1 ? <SearchGql setLocations={setLocations} /> : null}
          {typeSearch === 2 ? <SearchRest setLocations={setLocations} /> : null}
        </View>
      </View>
    </View>
  );
};

export default Layout;
