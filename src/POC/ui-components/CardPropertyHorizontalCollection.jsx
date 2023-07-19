/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Property } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import CardPropertyHorizontal from "./CardPropertyHorizontal";
import { Collection } from "@aws-amplify/ui-react";
export default function CardPropertyHorizontalCollection(props) {
  const { items: itemsProp, overrideItems, overrides, ...rest } = props;
  const [items, setItems] = React.useState(undefined);
  const itemsDataStore = useDataStoreBinding({
    type: "collection",
    model: Property,
  }).items;
  React.useEffect(() => {
    if (itemsProp !== undefined) {
      setItems(itemsProp);
      return;
    }
    setItems(itemsDataStore);
  }, [itemsProp, itemsDataStore]);
  return (
    <Collection
      type="list"
      isSearchable={true}
      isPaginated={true}
      searchPlaceholder="Search..."
      itemsPerPage={4}
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "CardPropertyHorizontalCollection")}
      {...rest}
    >
      {(item, index) => (
        <CardPropertyHorizontal
          property={item}
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></CardPropertyHorizontal>
      )}
    </Collection>
  );
}
