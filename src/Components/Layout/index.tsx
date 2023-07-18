import React from "react";

import { TopBarProp } from "../../POC/ui-components";
import { View } from "@aws-amplify/ui-react";
import Search from "../Search";
import Map from "../Map";

const Layout = () => {
  const profileOverrides = {
    Base: {
      backgroundColor: "transparent",
      height: "10%",
    },
  };

  return (
    <View>
      <TopBarProp overrides={{ ...profileOverrides }} />
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
          <Map />
        </View>
        <View style={{ padding: "10px" }}>
          <Search />
        </View>
      </View>
    </View>
  );
};

export default Layout;
