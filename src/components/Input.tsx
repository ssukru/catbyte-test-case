import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import React from "react";
import { Colors } from "../constants";
import { Title } from "./Typography";

interface Props extends TextInputProps {
  title?: string;
  fullWidth?: boolean;
}

const Input: React.FC<Props> = (props) => {
  return (
    <View style={props.fullWidth && { width: "100%" }}>
      {props.title && (
        <View style={{ marginLeft: 8 }}>
          <Title fontSize={14}>{props.title}</Title>
          <View style={{ height: 4 }} />
        </View>
      )}
      <View style={styles.wrapper}>
        <TextInput {...props} style={[styles.input, props.style]} />
      </View>
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    paddingVertical: 2,
    paddingHorizontal: 16,
    backgroundColor: Colors.Gray,
    borderRadius: 10,
    height: 36,
    position: "relative",
    justifyContent: "center",
  },
  input: {
    fontSize: 16,
    fontFamily: "Nunito400",
  },
  eyeWrapper: {
    position: "absolute",
    right: 10,
  },
});
