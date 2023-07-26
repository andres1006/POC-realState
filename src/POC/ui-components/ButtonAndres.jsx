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
import NewIcons from "./NewIcons";
import { Flex, Text } from "@aws-amplify/ui-react";
export default function ButtonAndres(props) {
  const {
    buttonAndres,
    label = "Button",
    overrides: overridesProp,
    ...rest
  } = props;
  const variants = [
    {
      variantValues: {
        size: "Medium",
        variant: "Secondary",
        showIcon: "false",
      },
      overrides: {
        NewIcons: {},
        Button: {
          fontSize: "16px",
          color: "rgba(75,128,221,1)",
          lineHeight: "24px",
        },
        ButtonAndres: {
          gap: "10px",
          padding: "10px 22px 10px 22px",
          backgroundColor: "rgba(255,255,255,0)",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Medium", variant: "Secondary", showIcon: "true" },
      overrides: {
        NewIcons: { display: "block" },
        Button: {
          fontSize: "16px",
          color: "rgba(75,128,221,1)",
          lineHeight: "24px",
        },
        ButtonAndres: {
          padding: "10px 22px 10px 22px",
          backgroundColor: "rgba(255,255,255,0)",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Medium", variant: "Primary", showIcon: "false" },
      overrides: {
        NewIcons: {},
        Button: { fontSize: "16px", lineHeight: "24px" },
        ButtonAndres: { gap: "10px", padding: "12px 24px 12px 24px" },
      },
    },
    {
      variantValues: { size: "Medium", variant: "Primary", showIcon: "true" },
      overrides: {
        NewIcons: { display: "block" },
        Button: { fontSize: "16px", lineHeight: "24px" },
        ButtonAndres: { padding: "12px 24px 12px 24px" },
      },
    },
    {
      variantValues: { size: "Large", variant: "Primary", showIcon: "false" },
      overrides: {
        NewIcons: {},
        Button: { fontSize: "16px", lineHeight: "24px" },
        ButtonAndres: {
          gap: "10px",
          padding: "16px 32px 16px 32px",
          overflow: "hidden",
        },
      },
    },
    {
      variantValues: { size: "Large", variant: "Secondary", showIcon: "false" },
      overrides: {
        NewIcons: {},
        Button: {
          fontSize: "16px",
          color: "rgba(75,128,221,1)",
          lineHeight: "24px",
        },
        ButtonAndres: {
          gap: "10px",
          padding: "14px 30px 14px 30px",
          backgroundColor: "rgba(255,255,255,0)",
          overflow: "hidden",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Small", variant: "Primary", showIcon: "true" },
      overrides: {
        NewIcons: {
          width: "24px",
          height: "24px",
          display: "block",
          property1: "Key",
        },
        Button: {},
        ButtonAndres: {},
      },
    },
    {
      variantValues: { size: "Small", variant: "Secondary", showIcon: "false" },
      overrides: {
        NewIcons: {},
        Button: { color: "rgba(75,128,221,1)" },
        ButtonAndres: {
          padding: "8px 14px 8px 14px",
          backgroundColor: "rgba(255,255,255,0)",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Small", variant: "Secondary", showIcon: "true" },
      overrides: {
        NewIcons: { display: "block" },
        Button: { color: "rgba(75,128,221,1)" },
        ButtonAndres: {
          padding: "8px 14px 8px 14px",
          backgroundColor: "rgba(255,255,255,0)",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Large", variant: "Primary", showIcon: "true" },
      overrides: {
        NewIcons: { display: "block" },
        Button: { fontSize: "16px", lineHeight: "24px" },
        ButtonAndres: { padding: "16px 32px 16px 32px", overflow: "hidden" },
      },
    },
    {
      variantValues: { size: "Large", variant: "Secondary", showIcon: "true" },
      overrides: {
        NewIcons: { display: "block" },
        Button: {
          fontSize: "16px",
          color: "rgba(75,128,221,1)",
          lineHeight: "24px",
        },
        ButtonAndres: {
          padding: "14px 30px 14px 30px",
          backgroundColor: "rgba(255,255,255,0)",
          overflow: "hidden",
          border: "2px SOLID rgba(75,128,221,1)",
        },
      },
    },
    {
      variantValues: { size: "Small", variant: "Primary", showIcon: "false" },
      overrides: { NewIcons: {}, Button: {}, ButtonAndres: {} },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Flex
      gap="8px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      borderRadius="8px"
      padding="10px 16px 10px 16px"
      backgroundColor="rgba(75,128,221,1)"
      display="flex"
      {...getOverrideProps(overrides, "ButtonAndres")}
      {...rest}
    >
      <NewIcons
        width="20px"
        height="20px"
        display="none"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        property1="House"
        {...getOverrideProps(overrides, "NewIcons")}
      ></NewIcons>
      <Text
        fontFamily="Plus Jakarta Sans"
        fontSize="14px"
        fontWeight="700"
        color="rgba(255,255,255,1)"
        lineHeight="19.600000381469727px"
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
        children={label}
        {...getOverrideProps(overrides, "Button")}
      ></Text>
    </Flex>
  );
}
