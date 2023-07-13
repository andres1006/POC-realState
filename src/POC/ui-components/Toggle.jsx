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
import { Icon } from "@aws-amplify/ui-react";
export default function Toggle(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    { variantValues: { property1: "OFF" }, overrides: { Toggle: {} } },
    {
      variantValues: { property1: "ON" },
      overrides: {
        Toggle: {
          backgroundColor: "rgba(112,101,240,1)",
          paths: [
            {
              d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
              fill: "rgba(255,255,255,1)",
              fillRule: "nonzero",
              style: { transform: "translate(18px, 2px)" },
            },
          ],
        },
      },
    },
  ];
  const overrides = mergeVariantsAndOverrides(
    getOverridesFromVariants(variants, props),
    overridesProp || {}
  );
  return (
    <Icon
      width="40px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="40px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(224,222,247,1)"
      viewBox={{ minX: 0, minY: 0, width: 40, height: 24 }}
      paths={[
        {
          d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(2px, 2px)" },
        },
      ]}
      {...getOverrideProps(overrides, "Toggle")}
      {...rest}
    ></Icon>
  );
}
