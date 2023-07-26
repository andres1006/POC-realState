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
export default function ItemTopBar(props) {
  const { label = "label", overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { active: "true" },
      overrides: { Label: {}, ItemTopBar: {} },
    },
    {
      variantValues: { active: "false" },
      overrides: {
        Label: { color: "rgba(16,49,106,1)" },
        ItemTopBar: { backgroundColor: "rgba(0,0,0,0)" },
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
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="4px"
      padding="9px 9px 9px 9px"
      backgroundColor="rgba(230,238,254,1)"
      display="flex"
      {...getOverrideProps(overrides, "ItemTopBar")}
      {...rest}
    >
      <Text
        fontFamily="Roboto"
        fontSize="16px"
        fontWeight="700"
        color="rgba(32,98,213,1)"
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
        children={label}
        {...getOverrideProps(overrides, "Label")}
      ></Text>
    </Flex>
  );
}
