import React, { useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Property } from "../../POC/models";

import { View } from "@aws-amplify/ui-react";

import { CardPropertyHorizontalCollection } from "../../POC/ui-components";

type props = {
  setLocations: (locations: any) => void;
};
function SearchGql({ setLocations }: props) {
  const getProperties = async () => {
    const models = await DataStore.query(Property);
    setLocations(
      models.length > 0
        ? models.map((property: any, index: number) => ({
            id: index,
            name: property.streetName,
            position: {
              lat: Number(property.latitude),
              lng: Number(property.longitud),
            },
          }))
        : []
    );
  };

  useEffect(() => {
    getProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
          marginTop: "10px",
        }}
      >
        <CardPropertyHorizontalCollection />
      </View>
    </View>
  );
}

export default SearchGql;
