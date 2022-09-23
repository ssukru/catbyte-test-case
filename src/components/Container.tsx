import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type ContainerProps = {
  topInset?: boolean;
  bottomInset?: boolean;
  children: React.ReactNode;
};

type DismissKeyboardType = {
  children: React.ReactNode;
};

export const DismissKeyboard: React.FC<DismissKeyboardType> = ({
  children,
}) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export const Container = ({
  topInset = false,
  bottomInset = false,
  children,
}: ContainerProps) => {
  const insets = useSafeAreaInsets();
  return (
    <DismissKeyboard>
      <View
        style={[
          styles.background,
          {
            paddingTop: topInset ? insets.top : 0,
            paddingBottom: bottomInset ? insets.bottom : 0,
          },
        ]}
      >
        {children}
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.White,
    width: "100%",
    height: "100%",
  },
});
