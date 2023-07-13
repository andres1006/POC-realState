/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  getOverrideProps,
  useNavigateAction,
  useStateMutationAction,
} from "@aws-amplify/ui-react/internal";
import {
  Button,
  Flex,
  Icon,
  SearchField,
  Text,
  View,
} from "@aws-amplify/ui-react";
export default function SearchProperties(props) {
  const { property, overrides, ...rest } = props;
  const [anyPriceChildren, setAnyPriceChildren] =
    useStateMutationAction("Any Price");
  const searchFieldOnChange = () => {
    setAnyPriceChildren(property?.dimension);
  };
  const buttonOnClick = useNavigateAction({ type: "reload" });
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
        height="120px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="53.49%"
        bottom="0%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "Search37884243")}
      >
        <SearchField
          width="459px"
          height="unset"
          position="absolute"
          top="0%"
          bottom="66.67%"
          left="0%"
          right="29.17%"
          placeholder="Placeholder"
          size="default"
          isDisabled={false}
          labelHidden={true}
          variation="default"
          onChange={() => {
            searchFieldOnChange();
          }}
          {...getOverrideProps(overrides, "SearchField")}
        ></SearchField>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="60%"
          bottom="0%"
          left="0%"
          right="81.17%"
          border="1.5px SOLID rgba(224,222,247,1)"
          borderRadius="8px"
          padding="12.5px 14.5px 12.5px 14.5px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter37884245")}
        >
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
            {...getOverrideProps(overrides, "Frame37884246")}
          >
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children={anyPriceChildren}
              {...getOverrideProps(overrides, "Any Price")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group37884248")}
            >
              <Icon
                width="20px"
                height="20px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                paths={[
                  {
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                    fill: "rgba(232,230,249,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Ellipse 3137884249")}
              ></Icon>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="3px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884250")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884251")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M-0.53033 1.96967C-0.823223 2.26256 -0.823223 2.73744 -0.53033 3.03033C-0.237437 3.32322 0.237437 3.32322 0.53033 3.03033L-0.53033 1.96967ZM2.5 0L3.03033 -0.53033C2.73744 -0.823223 2.26256 -0.823223 1.96967 -0.53033L2.5 0ZM4.46967 3.03033C4.76256 3.32322 5.23744 3.32322 5.53033 3.03033C5.82322 2.73744 5.82322 2.26256 5.53033 1.96967L4.46967 3.03033ZM0.53033 3.03033L3.03033 0.53033L1.96967 -0.53033L-0.53033 1.96967L0.53033 3.03033ZM1.96967 0.53033L4.46967 3.03033L5.53033 1.96967L3.03033 -0.53033L1.96967 0.53033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="31.25%"
                  bottom="37.5%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884252")}
                ></Icon>
              </View>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="9px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884253")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884254")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM2.5 2.5L1.96967 3.03033C2.26256 3.32322 2.73744 3.32322 3.03033 3.03033L2.5 2.5ZM5.53033 0.53033C5.82322 0.237437 5.82322 -0.237437 5.53033 -0.53033C5.23744 -0.823223 4.76256 -0.823223 4.46967 -0.53033L5.53033 0.53033ZM-0.53033 0.53033L1.96967 3.03033L3.03033 1.96967L0.53033 -0.53033L-0.53033 0.53033ZM3.03033 3.03033L5.53033 0.53033L4.46967 -0.53033L1.96967 1.96967L3.03033 3.03033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="37.5%"
                  bottom="31.25%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884255")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="60%"
          bottom="0%"
          left="40.59%"
          right="41.05%"
          border="1.5px SOLID rgba(224,222,247,1)"
          borderRadius="8px"
          padding="12.5px 14.5px 12.5px 14.5px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter37884256")}
        >
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
            {...getOverrideProps(overrides, "Frame37884257")}
          >
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="All Types"
              {...getOverrideProps(overrides, "All Types")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group37884259")}
            >
              <Icon
                width="20px"
                height="20px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                paths={[
                  {
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                    fill: "rgba(232,230,249,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Ellipse 3137884260")}
              ></Icon>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="3px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884261")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884262")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M-0.53033 1.96967C-0.823223 2.26256 -0.823223 2.73744 -0.53033 3.03033C-0.237437 3.32322 0.237437 3.32322 0.53033 3.03033L-0.53033 1.96967ZM2.5 0L3.03033 -0.53033C2.73744 -0.823223 2.26256 -0.823223 1.96967 -0.53033L2.5 0ZM4.46967 3.03033C4.76256 3.32322 5.23744 3.32322 5.53033 3.03033C5.82322 2.73744 5.82322 2.26256 5.53033 1.96967L4.46967 3.03033ZM0.53033 3.03033L3.03033 0.53033L1.96967 -0.53033L-0.53033 1.96967L0.53033 3.03033ZM1.96967 0.53033L4.46967 3.03033L5.53033 1.96967L3.03033 -0.53033L1.96967 0.53033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="31.25%"
                  bottom="37.5%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884263")}
                ></Icon>
              </View>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="9px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884264")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884265")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM2.5 2.5L1.96967 3.03033C2.26256 3.32322 2.73744 3.32322 3.03033 3.03033L2.5 2.5ZM5.53033 0.53033C5.82322 0.237437 5.82322 -0.237437 5.53033 -0.53033C5.23744 -0.823223 4.76256 -0.823223 4.46967 -0.53033L5.53033 0.53033ZM-0.53033 0.53033L1.96967 3.03033L3.03033 1.96967L0.53033 -0.53033L-0.53033 0.53033ZM3.03033 3.03033L5.53033 0.53033L4.46967 -0.53033L1.96967 1.96967L3.03033 3.03033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="37.5%"
                  bottom="31.25%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884266")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="60%"
          bottom="0%"
          left="60.19%"
          right="22.53%"
          border="1.5px SOLID rgba(224,222,247,1)"
          borderRadius="8px"
          padding="12.5px 14.5px 12.5px 14.5px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter37884267")}
        >
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
            {...getOverrideProps(overrides, "Frame37884268")}
          >
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Newest"
              {...getOverrideProps(overrides, "Newest")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group37884270")}
            >
              <Icon
                width="20px"
                height="20px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                paths={[
                  {
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                    fill: "rgba(232,230,249,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Ellipse 3137884271")}
              ></Icon>
              <View
                width="12px"
                height="12px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="4px"
                left="4px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884272")}
              >
                <Icon
                  width="12px"
                  height="12px"
                  viewBox={{ minX: 0, minY: 0, width: 12, height: 12 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884273")}
                ></Icon>
                <Icon
                  width="7.5px"
                  height="3.75px"
                  viewBox={{ minX: 0, minY: 0, width: 7.5, height: 3.75 }}
                  paths={[
                    {
                      d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM3.75 3.75L3.21967 4.28033C3.51256 4.57322 3.98744 4.57322 4.28033 4.28033L3.75 3.75ZM8.03033 0.53033C8.32322 0.237437 8.32322 -0.237437 8.03033 -0.53033C7.73744 -0.823223 7.26256 -0.823223 6.96967 -0.53033L8.03033 0.53033ZM-0.53033 0.53033L3.21967 4.28033L4.28033 3.21967L0.53033 -0.53033L-0.53033 0.53033ZM4.28033 4.28033L8.03033 0.53033L6.96967 -0.53033L3.21967 3.21967L4.28033 4.28033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="37.5%"
                  bottom="31.25%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884274")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="10px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          position="absolute"
          top="60%"
          bottom="0%"
          left="20.06%"
          right="60.65%"
          border="1.5px SOLID rgba(224,222,247,1)"
          borderRadius="8px"
          padding="12.5px 14.5px 12.5px 14.5px"
          backgroundColor="rgba(255,255,255,1)"
          {...getOverrideProps(overrides, "Filter37884275")}
        >
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
            {...getOverrideProps(overrides, "Frame37884276")}
          >
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="2-4 Beds"
              {...getOverrideProps(overrides, "2-4 Beds")}
            ></Text>
            <Flex
              padding="0px 0px 0px 0px"
              width="20px"
              height="20px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              shrink="0"
              position="relative"
              {...getOverrideProps(overrides, "Group37884278")}
            >
              <Icon
                width="20px"
                height="20px"
                viewBox={{ minX: 0, minY: 0, width: 20, height: 20 }}
                paths={[
                  {
                    d: "M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10Z",
                    fill: "rgba(232,230,249,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0px"
                left="0px"
                {...getOverrideProps(overrides, "Ellipse 3137884279")}
              ></Icon>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="3px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884280")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884281")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M-0.53033 1.96967C-0.823223 2.26256 -0.823223 2.73744 -0.53033 3.03033C-0.237437 3.32322 0.237437 3.32322 0.53033 3.03033L-0.53033 1.96967ZM2.5 0L3.03033 -0.53033C2.73744 -0.823223 2.26256 -0.823223 1.96967 -0.53033L2.5 0ZM4.46967 3.03033C4.76256 3.32322 5.23744 3.32322 5.53033 3.03033C5.82322 2.73744 5.82322 2.26256 5.53033 1.96967L4.46967 3.03033ZM0.53033 3.03033L3.03033 0.53033L1.96967 -0.53033L-0.53033 1.96967L0.53033 3.03033ZM1.96967 0.53033L4.46967 3.03033L5.53033 1.96967L3.03033 -0.53033L1.96967 0.53033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="31.25%"
                  bottom="37.5%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884282")}
                ></Icon>
              </View>
              <View
                width="8px"
                height="8px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                position="absolute"
                top="9px"
                left="6px"
                padding="0px 0px 0px 0px"
                {...getOverrideProps(overrides, "Frame37884283")}
              >
                <Icon
                  width="8px"
                  height="8px"
                  viewBox={{ minX: 0, minY: 0, width: 8, height: 8 }}
                  paths={[]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="0%"
                  bottom="0%"
                  left="0%"
                  right="0%"
                  {...getOverrideProps(overrides, "Vector37884284")}
                ></Icon>
                <Icon
                  width="5px"
                  height="2.5px"
                  viewBox={{ minX: 0, minY: 0, width: 5, height: 2.5 }}
                  paths={[
                    {
                      d: "M0.53033 -0.53033C0.237437 -0.823223 -0.237437 -0.823223 -0.53033 -0.53033C-0.823223 -0.237437 -0.823223 0.237437 -0.53033 0.53033L0.53033 -0.53033ZM2.5 2.5L1.96967 3.03033C2.26256 3.32322 2.73744 3.32322 3.03033 3.03033L2.5 2.5ZM5.53033 0.53033C5.82322 0.237437 5.82322 -0.237437 5.53033 -0.53033C5.23744 -0.823223 4.76256 -0.823223 4.46967 -0.53033L5.53033 0.53033ZM-0.53033 0.53033L1.96967 3.03033L3.03033 1.96967L0.53033 -0.53033L-0.53033 0.53033ZM3.03033 3.03033L5.53033 0.53033L4.46967 -0.53033L1.96967 1.96967L3.03033 3.03033Z",
                      stroke: "rgba(112,101,240,1)",
                      fillRule: "nonzero",
                      strokeLinejoin: "round",
                      strokeWidth: 1,
                    },
                  ]}
                  display="block"
                  gap="unset"
                  alignItems="unset"
                  justifyContent="unset"
                  position="absolute"
                  top="37.5%"
                  bottom="31.25%"
                  left="18.75%"
                  right="18.75%"
                  {...getOverrideProps(overrides, "Vector37884285")}
                ></Icon>
              </View>
            </Flex>
          </Flex>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          position="absolute"
          top="63.33%"
          bottom="3.33%"
          left="85.19%"
          right="0%"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "View")}
        >
          <View
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Grid")}
          >
            <View
              width="40px"
              height="40px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="0%"
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Rectangle 9337884288")}
            ></View>
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="20%"
              bottom="20%"
              left="20%"
              right="20%"
              padding="0px 0px 0px 0px"
              opacity="0.5"
              {...getOverrideProps(overrides, "Icon37884289")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector37884290")}
              ></Icon>
              <Icon
                width="6px"
                height="6px"
                viewBox={{ minX: 0, minY: 0, width: 6, height: 6 }}
                paths={[
                  {
                    d: "M5 0L1 0C0.447715 0 0 0.447715 0 1L0 5C0 5.55228 0.447715 6 1 6L5 6C5.55228 6 6 5.55228 6 5L6 1C6 0.447715 5.55228 0 5 0Z",
                    fill: "rgba(16,10,85,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="20.83%"
                bottom="54.17%"
                left="20.83%"
                right="54.17%"
                {...getOverrideProps(overrides, "Vector37884291")}
              ></Icon>
              <Icon
                width="6px"
                height="6px"
                viewBox={{ minX: 0, minY: 0, width: 6, height: 6 }}
                paths={[
                  {
                    d: "M5 0L1 0C0.447715 0 0 0.447715 0 1L0 5C0 5.55228 0.447715 6 1 6L5 6C5.55228 6 6 5.55228 6 5L6 1C6 0.447715 5.55228 0 5 0Z",
                    fill: "rgba(16,10,85,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="20.83%"
                bottom="54.17%"
                left="54.17%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector37884292")}
              ></Icon>
              <Icon
                width="6px"
                height="6px"
                viewBox={{ minX: 0, minY: 0, width: 6, height: 6 }}
                paths={[
                  {
                    d: "M5 0L1 0C0.447715 0 0 0.447715 0 1L0 5C0 5.55228 0.447715 6 1 6L5 6C5.55228 6 6 5.55228 6 5L6 1C6 0.447715 5.55228 0 5 0Z",
                    fill: "rgba(16,10,85,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="54.17%"
                bottom="20.83%"
                left="20.83%"
                right="54.17%"
                {...getOverrideProps(overrides, "Vector37884293")}
              ></Icon>
              <Icon
                width="6px"
                height="6px"
                viewBox={{ minX: 0, minY: 0, width: 6, height: 6 }}
                paths={[
                  {
                    d: "M5 0L1 0C0.447715 0 0 0.447715 0 1L0 5C0 5.55228 0.447715 6 1 6L5 6C5.55228 6 6 5.55228 6 5L6 1C6 0.447715 5.55228 0 5 0Z",
                    fill: "rgba(16,10,85,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="54.17%"
                bottom="20.83%"
                left="54.17%"
                right="20.83%"
                {...getOverrideProps(overrides, "Vector37884294")}
              ></Icon>
            </View>
          </View>
          <View
            width="40px"
            height="40px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "List")}
          >
            <View
              width="40px"
              height="40px"
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
              borderRadius="8px"
              padding="0px 0px 0px 0px"
              backgroundColor="rgba(255,255,255,1)"
              {...getOverrideProps(overrides, "Rectangle 9337884296")}
            ></View>
            <View
              width="24px"
              height="24px"
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              overflow="hidden"
              position="absolute"
              top="20%"
              bottom="20%"
              left="20%"
              right="20%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Icon37884297")}
            >
              <Icon
                width="24px"
                height="24px"
                viewBox={{ minX: 0, minY: 0, width: 24, height: 24 }}
                paths={[]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="0%"
                bottom="0%"
                left="0%"
                right="0%"
                {...getOverrideProps(overrides, "Vector37884298")}
              ></Icon>
              <Icon
                width="16px"
                height="4px"
                viewBox={{ minX: 0, minY: 0, width: 16, height: 4 }}
                paths={[
                  {
                    d: "M14 0L2 0C0.89543 0 0 0.596954 0 1.33333L0 2.66667C0 3.40305 0.89543 4 2 4L14 4C15.1046 4 16 3.40305 16 2.66667L16 1.33333C16 0.596954 15.1046 0 14 0Z",
                    fill: "rgba(112,101,240,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="25%"
                bottom="58.33%"
                left="16.67%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector37884299")}
              ></Icon>
              <Icon
                width="16px"
                height="4px"
                viewBox={{ minX: 0, minY: 0, width: 16, height: 4 }}
                paths={[
                  {
                    d: "M14 0L2 0C0.89543 0 0 0.596954 0 1.33333L0 2.66667C0 3.40305 0.89543 4 2 4L14 4C15.1046 4 16 3.40305 16 2.66667L16 1.33333C16 0.596954 15.1046 0 14 0Z",
                    fill: "rgba(112,101,240,1)",
                    fillRule: "nonzero",
                  },
                ]}
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                position="absolute"
                top="58.33%"
                bottom="25%"
                left="16.67%"
                right="16.67%"
                {...getOverrideProps(overrides, "Vector37884300")}
              ></Icon>
            </View>
          </View>
        </Flex>
        <Button
          width="173px"
          height="unset"
          position="absolute"
          top="0%"
          bottom="66.67%"
          left="73.3%"
          right="0%"
          size="default"
          isDisabled={false}
          variation="primary"
          children="More filters"
          onClick={() => {
            buttonOnClick();
          }}
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
        left="0%"
        right="57.56%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Title")}
      >
        <Text
          fontFamily="Plus Jakarta Sans"
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
        <Text
          fontFamily="Plus Jakarta Sans"
          fontSize="16px"
          fontWeight="400"
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
          children="10,325 properties available to rent"
          {...getOverrideProps(
            overrides,
            "10,325 properties available to rent"
          )}
        ></Text>
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
        left="0.31%"
        right="79.78%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Breadcrumb")}
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
          {...getOverrideProps(overrides, "Icon37884307")}
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
          {...getOverrideProps(overrides, "Search37884308")}
        ></Text>
      </Flex>
    </View>
  );
}