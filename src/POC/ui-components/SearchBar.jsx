/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  getOverridesFromVariants,
  mergeVariantsAndOverrides,
} from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function SearchBar(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { active: "false", disabled: "true" },
      overrides: {
        "Rounded rectangle": {},
        IconA: {},
        placeholder: {},
        Search: {},
        SearchBar: {},
      },
    },
    {
      variantValues: { active: "false", disabled: "false" },
      overrides: {
        "Rounded rectangle": {},
        IconA: {},
        placeholder: {},
        Search: {},
        SearchBar: {},
      },
    },
    {
      variantValues: { active: "true", disabled: "false" },
      overrides: {
        "Rounded rectangle": {
          border: "1.5px SOLID rgba(112,101,240,1)",
          backgroundColor: "rgba(255,255,255,1)",
        },
        IconA: {},
        placeholder: {},
        Search: {},
        SearchBar: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="352px"
      height="64px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchBar")}
      {...rest}
    >
      <View
        width="352px"
        height="64px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="2px SOLID rgba(224,222,247,1)"
        borderRadius="8px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(247,247,253,1)"
        {...getOverrideProps(overrides, "Rounded rectangle")}
      ></View>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        position="absolute"
        top="31.25%"
        bottom="31.25%"
        left="16px"
        padding="0px 0px 0px 0px"
        display="flex"
        {...getOverrideProps(overrides, "Search")}
      >
        <View
          width="24px"
          height="24px"
          {...getOverrideProps(overrides, "IconA")}
        ></View>
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="16px"
          fontWeight="500"
          color="rgba(0,9,41,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search..."
          {...getOverrideProps(overrides, "placeholder")}
        ></Text>
      </Flex>
    </View>
  );
}
