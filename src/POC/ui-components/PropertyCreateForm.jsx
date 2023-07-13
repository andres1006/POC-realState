/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Property } from "../models";
import { fetchByPath, validateField } from "./utils";
import { DataStore } from "aws-amplify";
export default function PropertyCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    nameStreet: "",
    bedsQuantity: "",
    bathroomsQuantity: "",
    dimension: "",
    priceXMonth: "",
    longitud: "",
    latitude: "",
    image: "",
    address: "",
  };
  const [nameStreet, setNameStreet] = React.useState(initialValues.nameStreet);
  const [bedsQuantity, setBedsQuantity] = React.useState(
    initialValues.bedsQuantity
  );
  const [bathroomsQuantity, setBathroomsQuantity] = React.useState(
    initialValues.bathroomsQuantity
  );
  const [dimension, setDimension] = React.useState(initialValues.dimension);
  const [priceXMonth, setPriceXMonth] = React.useState(
    initialValues.priceXMonth
  );
  const [longitud, setLongitud] = React.useState(initialValues.longitud);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [image, setImage] = React.useState(initialValues.image);
  const [address, setAddress] = React.useState(initialValues.address);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setNameStreet(initialValues.nameStreet);
    setBedsQuantity(initialValues.bedsQuantity);
    setBathroomsQuantity(initialValues.bathroomsQuantity);
    setDimension(initialValues.dimension);
    setPriceXMonth(initialValues.priceXMonth);
    setLongitud(initialValues.longitud);
    setLatitude(initialValues.latitude);
    setImage(initialValues.image);
    setAddress(initialValues.address);
    setErrors({});
  };
  const validations = {
    nameStreet: [],
    bedsQuantity: [],
    bathroomsQuantity: [],
    dimension: [],
    priceXMonth: [],
    longitud: [],
    latitude: [],
    image: [],
    address: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          nameStreet,
          bedsQuantity,
          bathroomsQuantity,
          dimension,
          priceXMonth,
          longitud,
          latitude,
          image,
          address,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value.trim() === "") {
              modelFields[key] = undefined;
            }
          });
          await DataStore.save(new Property(modelFields));
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyCreateForm")}
      {...rest}
    >
      <TextField
        label="Name street"
        isRequired={false}
        isReadOnly={false}
        value={nameStreet}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet: value,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.nameStreet ?? value;
          }
          if (errors.nameStreet?.hasError) {
            runValidationTasks("nameStreet", value);
          }
          setNameStreet(value);
        }}
        onBlur={() => runValidationTasks("nameStreet", nameStreet)}
        errorMessage={errors.nameStreet?.errorMessage}
        hasError={errors.nameStreet?.hasError}
        {...getOverrideProps(overrides, "nameStreet")}
      ></TextField>
      <TextField
        label="Beds quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bedsQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity: value,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.bedsQuantity ?? value;
          }
          if (errors.bedsQuantity?.hasError) {
            runValidationTasks("bedsQuantity", value);
          }
          setBedsQuantity(value);
        }}
        onBlur={() => runValidationTasks("bedsQuantity", bedsQuantity)}
        errorMessage={errors.bedsQuantity?.errorMessage}
        hasError={errors.bedsQuantity?.hasError}
        {...getOverrideProps(overrides, "bedsQuantity")}
      ></TextField>
      <TextField
        label="Bathrooms quantity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bathroomsQuantity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity: value,
              dimension,
              priceXMonth,
              longitud,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.bathroomsQuantity ?? value;
          }
          if (errors.bathroomsQuantity?.hasError) {
            runValidationTasks("bathroomsQuantity", value);
          }
          setBathroomsQuantity(value);
        }}
        onBlur={() =>
          runValidationTasks("bathroomsQuantity", bathroomsQuantity)
        }
        errorMessage={errors.bathroomsQuantity?.errorMessage}
        hasError={errors.bathroomsQuantity?.hasError}
        {...getOverrideProps(overrides, "bathroomsQuantity")}
      ></TextField>
      <TextField
        label="Dimension"
        isRequired={false}
        isReadOnly={false}
        value={dimension}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension: value,
              priceXMonth,
              longitud,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.dimension ?? value;
          }
          if (errors.dimension?.hasError) {
            runValidationTasks("dimension", value);
          }
          setDimension(value);
        }}
        onBlur={() => runValidationTasks("dimension", dimension)}
        errorMessage={errors.dimension?.errorMessage}
        hasError={errors.dimension?.hasError}
        {...getOverrideProps(overrides, "dimension")}
      ></TextField>
      <TextField
        label="Price x month"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={priceXMonth}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth: value,
              longitud,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.priceXMonth ?? value;
          }
          if (errors.priceXMonth?.hasError) {
            runValidationTasks("priceXMonth", value);
          }
          setPriceXMonth(value);
        }}
        onBlur={() => runValidationTasks("priceXMonth", priceXMonth)}
        errorMessage={errors.priceXMonth?.errorMessage}
        hasError={errors.priceXMonth?.hasError}
        {...getOverrideProps(overrides, "priceXMonth")}
      ></TextField>
      <TextField
        label="Longitud"
        isRequired={false}
        isReadOnly={false}
        value={longitud}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud: value,
              latitude,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.longitud ?? value;
          }
          if (errors.longitud?.hasError) {
            runValidationTasks("longitud", value);
          }
          setLongitud(value);
        }}
        onBlur={() => runValidationTasks("longitud", longitud)}
        errorMessage={errors.longitud?.errorMessage}
        hasError={errors.longitud?.hasError}
        {...getOverrideProps(overrides, "longitud")}
      ></TextField>
      <TextField
        label="Latitude"
        isRequired={false}
        isReadOnly={false}
        value={latitude}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud,
              latitude: value,
              image,
              address,
            };
            const result = onChange(modelFields);
            value = result?.latitude ?? value;
          }
          if (errors.latitude?.hasError) {
            runValidationTasks("latitude", value);
          }
          setLatitude(value);
        }}
        onBlur={() => runValidationTasks("latitude", latitude)}
        errorMessage={errors.latitude?.errorMessage}
        hasError={errors.latitude?.hasError}
        {...getOverrideProps(overrides, "latitude")}
      ></TextField>
      <TextField
        label="Image"
        isRequired={false}
        isReadOnly={false}
        value={image}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud,
              latitude,
              image: value,
              address,
            };
            const result = onChange(modelFields);
            value = result?.image ?? value;
          }
          if (errors.image?.hasError) {
            runValidationTasks("image", value);
          }
          setImage(value);
        }}
        onBlur={() => runValidationTasks("image", image)}
        errorMessage={errors.image?.errorMessage}
        hasError={errors.image?.hasError}
        {...getOverrideProps(overrides, "image")}
      ></TextField>
      <TextField
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              nameStreet,
              bedsQuantity,
              bathroomsQuantity,
              dimension,
              priceXMonth,
              longitud,
              latitude,
              image,
              address: value,
            };
            const result = onChange(modelFields);
            value = result?.address ?? value;
          }
          if (errors.address?.hasError) {
            runValidationTasks("address", value);
          }
          setAddress(value);
        }}
        onBlur={() => runValidationTasks("address", address)}
        errorMessage={errors.address?.errorMessage}
        hasError={errors.address?.hasError}
        {...getOverrideProps(overrides, "address")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
