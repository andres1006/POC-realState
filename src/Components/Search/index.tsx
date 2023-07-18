import React from "react";

import { View } from "@aws-amplify/ui-react";

import {
  SearchProperties,
  CardPropertyHorizontal,
  PropertyCreateForm,
} from "../../POC/ui-components";

function Search() {
  return (
    <View
      style={{
        width: "100%",
        height: "85vh",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          height: "auto",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <PropertyCreateForm /> */}
        <SearchProperties />
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
          marginTop: "10px",
        }}
      >
        {/* <PropertyCreateForm /> */}
        <CardPropertyHorizontal />
      </View>
    </View>
  );
}

export default Search;
