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
import { Flex, Text } from "@aws-amplify/ui-react";
export default function Select(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Amenities", property2: "True" },
      overrides: { Amenities: {}, Select: {} },
    },
    {
      variantValues: { property1: "Amenities", property2: "False" },
      overrides: {
        Amenities: { color: "rgba(0,9,41,1)" },
        Select: {
          border: "1.5px SOLID rgba(224,222,247,1)",
          backgroundColor: "rgba(255,255,255,1)",
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      border="1.5px SOLID rgba(112,101,240,1)"
      borderRadius="8px"
      padding="6.5px 14.5px 6.5px 14.5px"
      backgroundColor="rgba(232,230,249,1)"
      display="flex"
      {...getOverrideProps(overrides, "Select")}
      {...rest}
    >
      <Text
        fontFamily="Plus Jakarta Sans"
        fontSize="16px"
        fontWeight="400"
        color="rgba(112,101,240,1)"
        lineHeight="24px"
        textAlign="center"
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
        children="Amenities"
        {...getOverrideProps(overrides, "Amenities")}
      ></Text>
    </Flex>
  );
}
