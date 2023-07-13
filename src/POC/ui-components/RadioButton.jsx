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
export default function RadioButton(props) {
  const { overrides: overridesProp, ...rest } = props;
  const variants = [
    {
      variantValues: { property1: "Unselected" },
      overrides: { RadioButton: {} },
    },
    {
      variantValues: { property1: "Selected" },
      overrides: {
        RadioButton: {
          paths: [
            {
              d: "M19 10C19 14.9706 14.9706 19 10 19L10 21C16.0751 21 21 16.0751 21 10L19 10ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM1 10C1 5.02944 5.02944 1 10 1L10 -1C3.92487 -1 -1 3.92487 -1 10L1 10ZM10 1C14.9706 1 19 5.02944 19 10L21 10C21 3.92487 16.0751 -1 10 -1L10 1Z",
              stroke: "rgba(112,101,240,1)",
              fillRule: "nonzero",
              strokeWidth: 1,
              style: { transform: "translate(2px, 2px)" },
            },
            {
              d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
              fill: "rgba(112,101,240,1)",
              fillRule: "nonzero",
              style: { transform: "translate(6px, 6px)" },
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
      width="24px"
      height="24px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
      paths={[
        {
          d: "M18.5 10C18.5 14.6944 14.6944 18.5 10 18.5L10 21.5C16.3513 21.5 21.5 16.3513 21.5 10L18.5 10ZM10 18.5C5.30558 18.5 1.5 14.6944 1.5 10L-1.5 10C-1.5 16.3513 3.64873 21.5 10 21.5L10 18.5ZM1.5 10C1.5 5.30558 5.30558 1.5 10 1.5L10 -1.5C3.64873 -1.5 -1.5 3.64873 -1.5 10L1.5 10ZM10 1.5C14.6944 1.5 18.5 5.30558 18.5 10L21.5 10C21.5 3.64873 16.3513 -1.5 10 -1.5L10 1.5Z",
          stroke: "rgba(224,222,247,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(2px, 2px)" },
        },
        {
          d: "M12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6Z",
          fill: "rgba(211,213,218,1)",
          fillRule: "nonzero",
          style: { transform: "translate(6px, 6px)" },
        },
      ]}
      {...getOverrideProps(overrides, "RadioButton")}
      {...rest}
    ></Icon>
  );
}
