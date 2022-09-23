import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants";
import { Title } from "./Typography";

type ButtonProps = {
  text?: string;
  onPress?: () => void;
  disabledOnPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  secondary?: boolean;
};

export const Button = ({
  text,
  onPress,
  disabled,
  disabledOnPress,
  loading,
  secondary,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={
        disabled ? (disabledOnPress ? disabledOnPress : () => {}) : onPress
      }
    >
      <View
        style={[
          styles.buttonWrapper,
          disabled && styles.disabledButton,
          secondary && styles.secondary,
        ]}
      >
        {loading ? (
          <ActivityIndicator color={Colors.White} />
        ) : (
          <Title color={secondary ? Colors.Black : Colors.White}>{text}</Title>
        )}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    width: "100%",
    borderRadius: 10,
    height: 36,
    backgroundColor: Colors.Black,
    alignItems: "center",
    justifyContent: "center",
  },
  disabledButton: {
    backgroundColor: Colors.SecondaryBlack,
  },
  secondary: {
    backgroundColor: Colors.Gray,
  },
});
