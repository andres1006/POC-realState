/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text, View } from "@aws-amplify/ui-react";
export default function Breadcrumb(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="4px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Breadcrumb")}
      {...rest}
    >
      <Text
        fontFamily="Plus Jakarta Sans"
        fontSize="16px"
        fontWeight="400"
        color="rgba(16,10,85,1)"
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
        children="Home"
        {...getOverrideProps(overrides, "Home")}
      ></Text>
      <View
        width="20px"
        height="20px"
        {...getOverrideProps(overrides, "Icon")}
      ></View>
      <Text
        fontFamily="Plus Jakarta Sans"
        fontSize="16px"
        fontWeight="400"
        color="rgba(16,10,85,1)"
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
        children="Search"
        {...getOverrideProps(overrides, "Search")}
      ></Text>
    </Flex>
  );
}
