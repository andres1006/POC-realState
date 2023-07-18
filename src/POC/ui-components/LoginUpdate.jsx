/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  PasswordField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function LoginUpdate(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="32px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LoginUpdate")}
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
        <TextField
          width="352px"
          height="unset"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField")}
        ></TextField>
        <PasswordField
          width="352px"
          height="unset"
          shrink="0"
          label="Label"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          hideShowPassword={false}
          {...getOverrideProps(overrides, "PasswordField")}
        ></PasswordField>
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
        {...getOverrideProps(overrides, "Buttons")}
      >
        <Button
          width="352px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Login"
          {...getOverrideProps(overrides, "Button37737666")}
        ></Button>
        <Button
          width="352px"
          height="unset"
          shrink="0"
          backgroundColor="rgba(255,255,255,1)"
          size="default"
          isDisabled={false}
          variation="link"
          children="Link Button"
          {...getOverrideProps(overrides, "Button37737667")}
        ></Button>
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
        children="Don’t have an account? Sign up for free"
        {...getOverrideProps(
          overrides,
          "Don\u2019t have an account? Sign up for free"
        )}
      ></Text>
    </Flex>
  );
}
