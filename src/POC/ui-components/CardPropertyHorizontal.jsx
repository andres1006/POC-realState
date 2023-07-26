/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
import NewIcons from "./NewIcons";
export default function CardPropertyHorizontal(props) {
  const { property, overrides, ...rest } = props;
  return (
    <View
      width="506px"
      height="180px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CardPropertyHorizontal")}
      {...rest}
    >
      <Flex
        gap="6px"
        direction="column"
        width="271px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="22px"
        left="235px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 864")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Price")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="16px"
            fontWeight="800"
            color="rgba(112,101,240,1)"
            lineHeight="24px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            letterSpacing="-0.85px"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={`${"$ "}${property?.price}`}
            {...getOverrideProps(overrides, "$45.89")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="500"
            color="rgba(0,9,41,1)"
            lineHeight="19.600000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="46px"
            height="20px"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children="/month"
            {...getOverrideProps(overrides, "/month")}
          ></Text>
        </Flex>
        <Flex
          gap="0"
          direction="column"
          width="271px"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 8px 0px"
          {...getOverrideProps(overrides, "Title ")}
        >
          <Text
            fontFamily="Roboto"
            fontSize="20px"
            fontWeight="800"
            color="rgba(0,9,41,1)"
            lineHeight="28px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="271px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={property?.streetName}
            {...getOverrideProps(overrides, "St. Crystal")}
          ></Text>
          <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="500"
            color="rgba(0,9,41,1)"
            lineHeight="19.600000381469727px"
            textAlign="left"
            display="block"
            direction="column"
            justifyContent="unset"
            width="unset"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={property?.addressName}
            {...getOverrideProps(
              overrides,
              "210 US Highway, Highland Lake, FL"
            )}
          ></Text>
        </Flex>
        <Icon
          width="240.87px"
          height="0px"
          viewBox={{ minX: 0, minY: 0, width: 240.8662109375, height: 1 }}
          paths={[
            {
              d: "M0 1.5L240.866 1.5L240.866 -1.5L0 -1.5L0 1.5Z",
              stroke: "rgba(240,239,251,1)",
              fillRule: "nonzero",
              strokeWidth: 3,
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Line")}
        ></Icon>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="10px 0px 0px 0px"
          {...getOverrideProps(overrides, "Facilities")}
        >
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Beds")}
          >
            <NewIcons
              width="16px"
              height="16px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Bed"
              {...getOverrideProps(overrides, "NewIcons38723157")}
            ></NewIcons>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="500"
              color="rgba(0,9,41,1)"
              lineHeight="19.600000381469727px"
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
              children={property?.numbersBed}
              {...getOverrideProps(overrides, "4")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Bath")}
          >
            <NewIcons
              width="16px"
              height="16px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Bath"
              {...getOverrideProps(overrides, "NewIcons38723160")}
            ></NewIcons>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="500"
              color="rgba(0,9,41,1)"
              lineHeight="19.600000381469727px"
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
              children={property?.numberBathroos}
              {...getOverrideProps(overrides, "2")}
            ></Text>
          </Flex>
          <Flex
            gap="8px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="center"
            alignItems="center"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Dimension")}
          >
            <NewIcons
              width="16px"
              height="16px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              property1="Income to rent"
              {...getOverrideProps(overrides, "NewIcons38723163")}
            ></NewIcons>
            <Text
              fontFamily="Roboto"
              fontSize="14px"
              fontWeight="500"
              color="rgba(0,9,41,1)"
              lineHeight="19.600000381469727px"
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
              children={`${property?.dimension}${" m2"}`}
              {...getOverrideProps(overrides, "6x8 m\u00B2")}
            ></Text>
          </Flex>
        </Flex>
      </Flex>
      <View
        padding="0px 0px 0px 0px"
        width="222.24px"
        height="180px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0px"
        left="0px"
        {...getOverrideProps(overrides, "Mask Group")}
      >
        <View
          width="222.24px"
          height="180px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="8px 0px 0px 8px"
          padding="0px 0px 0px 0px"
          backgroundColor="rgba(19,15,38,1)"
          {...getOverrideProps(overrides, "Rectangle 395")}
        ></View>
        <Image
          width="100%"
          height="100%"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0%"
          bottom="0%"
          left="0%"
          right="0%"
          borderRadius="8px 0px 0px 8px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src={property?.urlImage}
          {...getOverrideProps(overrides, "pexels-binyamin-mellish-1396122 1")}
        ></Image>
      </View>
    </View>
  );
}
