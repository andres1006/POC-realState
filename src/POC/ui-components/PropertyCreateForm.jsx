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
    streetName: "",
    addressName: "",
    price: "",
    numbersBed: "",
    numberBathroos: "",
    dimension: "",
    longitud: "",
    latitude: "",
    urlImage: "",
  };
  const [streetName, setStreetName] = React.useState(initialValues.streetName);
  const [addressName, setAddressName] = React.useState(
    initialValues.addressName
  );
  const [price, setPrice] = React.useState(initialValues.price);
  const [numbersBed, setNumbersBed] = React.useState(initialValues.numbersBed);
  const [numberBathroos, setNumberBathroos] = React.useState(
    initialValues.numberBathroos
  );
  const [dimension, setDimension] = React.useState(initialValues.dimension);
  const [longitud, setLongitud] = React.useState(initialValues.longitud);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [urlImage, setUrlImage] = React.useState(initialValues.urlImage);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setStreetName(initialValues.streetName);
    setAddressName(initialValues.addressName);
    setPrice(initialValues.price);
    setNumbersBed(initialValues.numbersBed);
    setNumberBathroos(initialValues.numberBathroos);
    setDimension(initialValues.dimension);
    setLongitud(initialValues.longitud);
    setLatitude(initialValues.latitude);
    setUrlImage(initialValues.urlImage);
    setErrors({});
  };
  const validations = {
    streetName: [{ type: "Required" }],
    addressName: [{ type: "Required" }],
    price: [{ type: "Required" }],
    numbersBed: [],
    numberBathroos: [],
    dimension: [],
    longitud: [],
    latitude: [],
    urlImage: [{ type: "URL" }],
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
          streetName,
          addressName,
          price,
          numbersBed,
          numberBathroos,
          dimension,
          longitud,
          latitude,
          urlImage,
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
        label="Street name"
        isRequired={true}
        isReadOnly={false}
        value={streetName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName: value,
              addressName,
              price,
              numbersBed,
              numberBathroos,
              dimension,
              longitud,
              latitude,
              urlImage,
            };
            const result = onChange(modelFields);
            value = result?.streetName ?? value;
          }
          if (errors.streetName?.hasError) {
            runValidationTasks("streetName", value);
          }
          setStreetName(value);
        }}
        onBlur={() => runValidationTasks("streetName", streetName)}
        errorMessage={errors.streetName?.errorMessage}
        hasError={errors.streetName?.hasError}
        {...getOverrideProps(overrides, "streetName")}
      ></TextField>
      <TextField
        label="Address name"
        isRequired={true}
        isReadOnly={false}
        value={addressName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              addressName: value,
              price,
              numbersBed,
              numberBathroos,
              dimension,
              longitud,
              latitude,
              urlImage,
            };
            const result = onChange(modelFields);
            value = result?.addressName ?? value;
          }
          if (errors.addressName?.hasError) {
            runValidationTasks("addressName", value);
          }
          setAddressName(value);
        }}
        onBlur={() => runValidationTasks("addressName", addressName)}
        errorMessage={errors.addressName?.errorMessage}
        hasError={errors.addressName?.hasError}
        {...getOverrideProps(overrides, "addressName")}
      ></TextField>
      <TextField
        label="Price"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={price}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price: value,
              numbersBed,
              numberBathroos,
              dimension,
              longitud,
              latitude,
              urlImage,
            };
            const result = onChange(modelFields);
            value = result?.price ?? value;
          }
          if (errors.price?.hasError) {
            runValidationTasks("price", value);
          }
          setPrice(value);
        }}
        onBlur={() => runValidationTasks("price", price)}
        errorMessage={errors.price?.errorMessage}
        hasError={errors.price?.hasError}
        {...getOverrideProps(overrides, "price")}
      ></TextField>
      <TextField
        label="Numbers bed"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numbersBed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price,
              numbersBed: value,
              numberBathroos,
              dimension,
              longitud,
              latitude,
              urlImage,
            };
            const result = onChange(modelFields);
            value = result?.numbersBed ?? value;
          }
          if (errors.numbersBed?.hasError) {
            runValidationTasks("numbersBed", value);
          }
          setNumbersBed(value);
        }}
        onBlur={() => runValidationTasks("numbersBed", numbersBed)}
        errorMessage={errors.numbersBed?.errorMessage}
        hasError={errors.numbersBed?.hasError}
        {...getOverrideProps(overrides, "numbersBed")}
      ></TextField>
      <TextField
        label="Number bathroos"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={numberBathroos}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price,
              numbersBed,
              numberBathroos: value,
              dimension,
              longitud,
              latitude,
              urlImage,
            };
            const result = onChange(modelFields);
            value = result?.numberBathroos ?? value;
          }
          if (errors.numberBathroos?.hasError) {
            runValidationTasks("numberBathroos", value);
          }
          setNumberBathroos(value);
        }}
        onBlur={() => runValidationTasks("numberBathroos", numberBathroos)}
        errorMessage={errors.numberBathroos?.errorMessage}
        hasError={errors.numberBathroos?.hasError}
        {...getOverrideProps(overrides, "numberBathroos")}
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
              streetName,
              addressName,
              price,
              numbersBed,
              numberBathroos,
              dimension: value,
              longitud,
              latitude,
              urlImage,
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
        label="Longitud"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={longitud}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price,
              numbersBed,
              numberBathroos,
              dimension,
              longitud: value,
              latitude,
              urlImage,
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
        type="number"
        step="any"
        value={latitude}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price,
              numbersBed,
              numberBathroos,
              dimension,
              longitud,
              latitude: value,
              urlImage,
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
        label="Url image"
        isRequired={false}
        isReadOnly={false}
        value={urlImage}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              addressName,
              price,
              numbersBed,
              numberBathroos,
              dimension,
              longitud,
              latitude,
              urlImage: value,
            };
            const result = onChange(modelFields);
            value = result?.urlImage ?? value;
          }
          if (errors.urlImage?.hasError) {
            runValidationTasks("urlImage", value);
          }
          setUrlImage(value);
        }}
        onBlur={() => runValidationTasks("urlImage", urlImage)}
        errorMessage={errors.urlImage?.errorMessage}
        hasError={errors.urlImage?.hasError}
        {...getOverrideProps(overrides, "urlImage")}
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
