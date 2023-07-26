import React, { useEffect, useState } from "react";

import {
  CardPropertyVertical,
  SearchProperties,
} from "../../POC/ui-components";
import { View, SelectField, TextField } from "@aws-amplify/ui-react";

const UrlAPI = process.env.REACT_APP_BASE_URL_REST;

type Props = {
  setLocations: (locations: any) => void;
};

function SearchRest({ setLocations }: Props) {
  const [loading, setLoading] = useState(false);
  const [properties, setProperties] = useState([]);
  const [filter, setFilter] = useState("");
  const [filterBeds, setFilterBeds] = useState(0);
  const [filterBathrooms, setFilterBathrooms] = useState(0);
  const [filterPrice, setFilterPrice] = useState(0);
  const [showMoreFilters, setShowMoreFilters] = useState(false);

  const getProperties = async () => {
    setLoading(true);
    const properties = await fetch(`${UrlAPI}/properties`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        setProperties([]);
        setLoading(false);
      });
    const responseProperties = properties?.data?.Items || [];
    setProperties(properties?.data?.Items || []);
    setLocations(
      responseProperties.length > 0
        ? responseProperties.map((property: any, index: number) => ({
            id: index,
            name: property.streetName,
            position: {
              lat: Number(property.latitude),
              lng: Number(property.longitud),
            },
          }))
        : []
    );
    setLoading(false);
  };
  useEffect(() => {
    if (properties.length !== 0) return;
    getProperties();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const propertiesFilters = () => {
    let tempProperties: any[] = properties;
    if (filter)
      tempProperties = tempProperties.filter((propertyTofilter) =>
        propertyTofilter.streetName.toLowerCase().includes(filter.toLowerCase())
      );
    if (filterBeds)
      tempProperties = tempProperties.filter(
        (propertyTofilter) => propertyTofilter.numbersBed === Number(filterBeds)
      );
    if (filterBathrooms)
      tempProperties = tempProperties.filter(
        (propertyTofilter) =>
          propertyTofilter.numberBathroos === Number(filterBathrooms)
      );
    if (filterPrice && filterPrice !== 0)
      tempProperties = tempProperties.filter(
        (propertyTofilter) => propertyTofilter.price <= filterPrice
      );
    return tempProperties;
  };

  const profileOverrides = {
    SearchField: {
      onChange: (target: any) => {
        setFilter(target?.target?.value || "");
      },
    },
    Button: {
      onClick: () => setShowMoreFilters(!showMoreFilters),
    },
  };

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
        <SearchProperties overrides={{ ...profileOverrides }} height="200px" />
        {showMoreFilters ? (
          <View display="flex">
            <SelectField
              label=""
              margin="5px"
              placeholder="Camas"
              labelHidden={false}
              options={["1", "2", "3"]}
              onChange={(target: any) =>
                setFilterBeds(target.target.value || 0)
              }
            />
            <SelectField
              margin="5px"
              label=""
              placeholder="Baños"
              labelHidden={false}
              options={["1", "2", "3"]}
              onChange={(target: any) =>
                setFilterBathrooms(target.target.value || 0)
              }
            />
            <TextField
              label=""
              type="number"
              margin="5px"
              placeholder="Precio"
              labelHidden={false}
              onChange={(target) =>
                setFilterPrice(Number(target.target.value || 0))
              }
            />
          </View>
        ) : null}
      </View>
      <View
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          overflow: "auto",
        }}
      >
        {loading ? <>Cargando</> : null}
        {!loading && properties && properties.length === 0 ? (
          <>No hay propiedades para mostrar</>
        ) : null}
        {propertiesFilters().map((property, index) => (
          <View
            style={{
              marginTop: "10px",
            }}
          >
            <CardPropertyVertical
              key={`card-${index}`}
              property={property}
              height="350px"
              margin="2px"
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default SearchRest;
