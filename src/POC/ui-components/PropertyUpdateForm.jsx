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
export default function PropertyUpdateForm(props) {
  const {
    id: idProp,
    property: propertyModelProp,
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
    address: "",
    bedsQuality: "",
    bathroomsQuelity: "",
    urlImage: "",
    longitud: "",
    latitude: "",
    price: "",
  };
  const [streetName, setStreetName] = React.useState(initialValues.streetName);
  const [address, setAddress] = React.useState(initialValues.address);
  const [bedsQuality, setBedsQuality] = React.useState(
    initialValues.bedsQuality
  );
  const [bathroomsQuelity, setBathroomsQuelity] = React.useState(
    initialValues.bathroomsQuelity
  );
  const [urlImage, setUrlImage] = React.useState(initialValues.urlImage);
  const [longitud, setLongitud] = React.useState(initialValues.longitud);
  const [latitude, setLatitude] = React.useState(initialValues.latitude);
  const [price, setPrice] = React.useState(initialValues.price);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = propertyRecord
      ? { ...initialValues, ...propertyRecord }
      : initialValues;
    setStreetName(cleanValues.streetName);
    setAddress(cleanValues.address);
    setBedsQuality(cleanValues.bedsQuality);
    setBathroomsQuelity(cleanValues.bathroomsQuelity);
    setUrlImage(cleanValues.urlImage);
    setLongitud(cleanValues.longitud);
    setLatitude(cleanValues.latitude);
    setPrice(cleanValues.price);
    setErrors({});
  };
  const [propertyRecord, setPropertyRecord] = React.useState(propertyModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? await DataStore.query(Property, idProp)
        : propertyModelProp;
      setPropertyRecord(record);
    };
    queryData();
  }, [idProp, propertyModelProp]);
  React.useEffect(resetStateValues, [propertyRecord]);
  const validations = {
    streetName: [],
    address: [],
    bedsQuality: [],
    bathroomsQuelity: [],
    urlImage: [{ type: "URL" }],
    longitud: [],
    latitude: [],
    price: [],
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
          address,
          bedsQuality,
          bathroomsQuelity,
          urlImage,
          longitud,
          latitude,
          price,
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
          await DataStore.save(
            Property.copyOf(propertyRecord, (updated) => {
              Object.assign(updated, modelFields);
            })
          );
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            onError(modelFields, err.message);
          }
        }
      }}
      {...getOverrideProps(overrides, "PropertyUpdateForm")}
      {...rest}
    >
      <TextField
        label="Street name"
        isRequired={false}
        isReadOnly={false}
        value={streetName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName: value,
              address,
              bedsQuality,
              bathroomsQuelity,
              urlImage,
              longitud,
              latitude,
              price,
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
        label="Address"
        isRequired={false}
        isReadOnly={false}
        value={address}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              streetName,
              address: value,
              bedsQuality,
              bathroomsQuelity,
              urlImage,
              longitud,
              latitude,
              price,
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
      <TextField
        label="Beds quality"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bedsQuality}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              address,
              bedsQuality: value,
              bathroomsQuelity,
              urlImage,
              longitud,
              latitude,
              price,
            };
            const result = onChange(modelFields);
            value = result?.bedsQuality ?? value;
          }
          if (errors.bedsQuality?.hasError) {
            runValidationTasks("bedsQuality", value);
          }
          setBedsQuality(value);
        }}
        onBlur={() => runValidationTasks("bedsQuality", bedsQuality)}
        errorMessage={errors.bedsQuality?.errorMessage}
        hasError={errors.bedsQuality?.hasError}
        {...getOverrideProps(overrides, "bedsQuality")}
      ></TextField>
      <TextField
        label="Bathrooms quelity"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={bathroomsQuelity}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              streetName,
              address,
              bedsQuality,
              bathroomsQuelity: value,
              urlImage,
              longitud,
              latitude,
              price,
            };
            const result = onChange(modelFields);
            value = result?.bathroomsQuelity ?? value;
          }
          if (errors.bathroomsQuelity?.hasError) {
            runValidationTasks("bathroomsQuelity", value);
          }
          setBathroomsQuelity(value);
        }}
        onBlur={() => runValidationTasks("bathroomsQuelity", bathroomsQuelity)}
        errorMessage={errors.bathroomsQuelity?.errorMessage}
        hasError={errors.bathroomsQuelity?.hasError}
        {...getOverrideProps(overrides, "bathroomsQuelity")}
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
              address,
              bedsQuality,
              bathroomsQuelity,
              urlImage: value,
              longitud,
              latitude,
              price,
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
              address,
              bedsQuality,
              bathroomsQuelity,
              urlImage,
              longitud: value,
              latitude,
              price,
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
              address,
              bedsQuality,
              bathroomsQuelity,
              urlImage,
              longitud,
              latitude: value,
              price,
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
        label="Price"
        isRequired={false}
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
              address,
              bedsQuality,
              bathroomsQuelity,
              urlImage,
              longitud,
              latitude,
              price: value,
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
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || propertyModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || propertyModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
