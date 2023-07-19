/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, SearchField, Text, View } from "@aws-amplify/ui-react";
export default function SearchProperties(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="648px"
      height="258px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "SearchProperties")}
      {...rest}
    >
      <View
        padding="0px 0px 0px 0px"
        width="648px"
        height="40px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="53.49%"
        bottom="31.01%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Search")}
      >
        <SearchField
          width="459px"
          height="unset"
          placeholder="Buscar..."
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="29.17%"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="173px"
          height="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="73.3%"
          right="0%"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Más filtros"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </View>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="15.5%"
        bottom="55.81%"
        left="0.39%"
        right="57.95%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="32px"
          fontWeight="700"
          color="rgba(16,10,85,1)"
          lineHeight="40px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="-0.17px"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Search properties"
          {...getOverrideProps(overrides, "Search properties")}
        ></Text>
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
          {...getOverrideProps(overrides, "Frame 866")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(16,10,85,1)"
            lineHeight="25.600000381469727px"
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
            children="sdas22e2"
            {...getOverrideProps(overrides, "213232")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="500"
            color="rgba(16,10,85,1)"
            lineHeight="25.600000381469727px"
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
            children="properties available to rent"
            {...getOverrideProps(overrides, "properties available to rent")}
          ></Text>
        </Flex>
      </Flex>
      <Flex
        gap="4px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="0%"
        bottom="90.7%"
        left="0%"
        right="79.48%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Breadcrumb")}
      >
        <Text
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
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
          fontFamily="Roboto"
          fontSize="16px"
          fontWeight="500"
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
          children="Searcrth"
          {...getOverrideProps(overrides, "Searcrth")}
        ></Text>
      </Flex>
    </View>
  );
}
