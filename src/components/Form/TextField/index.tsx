import { FC } from "react";
import { Box, BoxProps, TextField, TextFieldProps } from "@mui/material";
import { Small } from "components/Typography";

type Props = TextFieldProps & BoxProps;

const MyTextField: FC<Props> = ({ label, InputProps, ...props }) => {
  const boxProps: BoxProps = {};
  const textFieldProps: TextFieldProps = {};

  for (const key in props) {
    if (spacePropList.includes(key)) {
      boxProps[key] = props[key];
    } else textFieldProps[key] = props[key];
  }

  return (
    <Box {...boxProps}>
      {label && (
        <Small
          display="block"
          mb={1}
          textAlign="left"
          fontWeight="600"
          color="grey.700"
        >
          {label}
        </Small>
      )}

      <TextField
        InputProps={{
          ...InputProps,
          style: { ...InputProps?.style, height: 44 },
        }}
        {...textFieldProps}
      />
    </Box>
  );
};

const spacePropList = [
  "m",
  "mt",
  "mr",
  "mb",
  "ml",
  "mx",
  "my",
  "p",
  "pt",
  "pr",
  "pb",
  "pl",
  "px",
  "py",
  "margin",
  "marginTop",
  "marginRight",
  "marginBottom",
  "marginLeft",
  "marginX",
  "marginY",
  "padding",
  "paddingTop",
  "paddingRight",
  "paddingBottom",
  "paddingLeft",
  "paddingX",
  "paddingY",
];

export default MyTextField;
