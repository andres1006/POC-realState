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
import { View } from "@aws-amplify/ui-react";
export default function Checkbox(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Checked", property2: "True" },
      overrides: {
        "Rectangle 15": {},
        "Rectangle 16": { backgroundColor: "rgba(112,101,240,1)" },
        Icon: {},
        "Group 5": {},
        Checkbox: {},
      },
    },
    {
      variantValues: { property1: "Checked", property2: "False" },
      overrides: {
        "Rectangle 15": {},
        "Rectangle 16": {},
        Icon: {},
        "Group 5": {},
        Checkbox: {},
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <View
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Checkbox")}
      {...rest}
    >
      <View
        width="24px"
        height="24px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Rectangle 15")}
      ></View>
      <View
        padding="0px 0px 0px 0px"
        width="20px"
        height="20px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="8.33%"
        left="8.33%"
        right="8.33%"
        {...getOverrideProps(overrides, "Group 5")}
      >
        <View
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          border="1.5px SOLID rgba(224,222,247,1)"
          borderRadius="4px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Rectangle 16")}
        ></View>
        <View
          width="12px"
          height="12px"
          {...getOverrideProps(overrides, "Icon")}
        ></View>
      </View>
    </View>
  );
}
