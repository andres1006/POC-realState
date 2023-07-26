/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Button, Flex, SearchField, Text } from "@aws-amplify/ui-react";
import NewIcons from "./NewIcons";
export default function SearchProperties(props) {
  const { value, overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="column"
      width="669px"
      height="171px"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="20px 9px 20px 9px"
      {...getOverrideProps(overrides, "SearchProperties")}
      {...rest}
    >
      <Flex
        gap="4px"
        direction="row"
        width="657.95px"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="3px 0px 3px 0px"
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
        <NewIcons
          width="20px"
          height="20px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          opacity="0.5"
          property1="Chevron-right"
          {...getOverrideProps(overrides, "NewIcons")}
        ></NewIcons>
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
          padding="8px 0px 8px 0px"
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
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Search")}
      >
        <SearchField
          width="459px"
          height="unset"
          placeholder="Buscar..."
          shrink="0"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Button
          width="173px"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Más filtros"
          {...getOverrideProps(overrides, "Button")}
        ></Button>
      </Flex>
    </Flex>
  );
}
