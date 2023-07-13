/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Text } from "@aws-amplify/ui-react";
import Checkbox from "./Checkbox";
export default function Signup(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Signup")}
      {...rest}
    >
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Headline")}
      >
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="32px"
          fontWeight="700"
          color="rgba(0,9,41,1)"
          lineHeight="40px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.17px"
          width="352px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome back"
          {...getOverrideProps(overrides, "Welcome back")}
        ></Text>
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="16px"
          fontWeight="400"
          color="rgba(0,9,41,1)"
          lineHeight="24px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="352px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Welcome back! Please enter your details."
          {...getOverrideProps(
            overrides,
            "Welcome back! Please enter your details."
          )}
        ></Text>
      </Flex>
      <Flex
        gap="16px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Input Field")}
      >
        <Flex
          width="352px"
          height="76px"
          {...getOverrideProps(overrides, "Input2444830")}
        ></Flex>
        <Flex
          width="352px"
          height="76px"
          {...getOverrideProps(overrides, "Input2444768")}
        ></Flex>
        <Flex
          width="unset"
          height="104px"
          {...getOverrideProps(overrides, "Input2444769")}
        ></Flex>
      </Flex>
      <Flex
        gap="8px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame")}
      >
        <Checkbox
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          property1="Checked"
          property2="False"
          {...getOverrideProps(overrides, "Checkbox")}
        ></Checkbox>
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(0,9,41,1)"
          lineHeight="19.600000381469727px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="295px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="I am a property manager"
          {...getOverrideProps(overrides, "I am a property manager")}
        ></Text>
      </Flex>
      <Flex
        gap="32px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Buttons3116445")}
      >
        <Flex
          gap="16px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Buttons2444770")}
        >
          <Flex
            width="352px"
            height="unset"
            {...getOverrideProps(overrides, "Button2444771")}
          ></Flex>
          <Flex
            width="352px"
            height="unset"
            {...getOverrideProps(overrides, "Button2444772")}
          ></Flex>
        </Flex>
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="14px"
          fontWeight="400"
          color="rgba(108,114,127,1)"
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
          children="Already have an account? Login"
          {...getOverrideProps(overrides, "Already have an account? Login")}
        ></Text>
      </Flex>
    </Flex>
  );
}
