import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";
import { Colors } from "../constants";
import { Title } from "./Typography";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type RightButton = {
  id: string;
  icon: React.ReactNode;
  onPress: () => void;
};

type Props = {
  bgColor?: string;
  titleColor?: string;
  leftButtonVisible?: boolean;
  leftButtonOnPress?: () => void;
  LeftButtonIcon?: React.ReactNode;
  title?: string;
  rightButtonsVisible?: boolean;
  rightButtons?: Array<RightButton>;
  topInset?: boolean;
};

const Navbar = ({
  bgColor = Colors.White,
  titleColor = Colors.Black,
  LeftButtonIcon = <Entypo name="chevron-left" size={28} color={titleColor} />,
  leftButtonOnPress,
  leftButtonVisible = true,
  title = "",
  rightButtons = [],
  rightButtonsVisible = false,
  topInset = true,
}: Props) => {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.wrapper,
        bgColor ? { backgroundColor: bgColor } : {},
        topInset ? { height: insets.top + 52 } : { height: 52 },
      ]}
    >
      <TouchableOpacity
        style={{
          paddingVertical: 12,
          paddingLeft: 24,
          paddingRight: 8,
          zIndex: 100,
        }}
        onPress={leftButtonOnPress}
      >
        {typeof leftButtonOnPress !== "undefined" &&
          leftButtonVisible &&
          LeftButtonIcon}
      </TouchableOpacity>
      <View
        style={{
          paddingVertical: 12,
          position: "absolute",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Title align="center" color={titleColor}>{title}</Title>
      </View>
      <View style={{ minWidth: 36, paddingRight: 24, zIndex: 100 }}>
        {rightButtonsVisible &&
          rightButtons.map((item) => (
            <TouchableOpacity
              style={{
                paddingVertical: 12,
                paddingLeft: 4,
              }}
              key={item.id}
              onPress={item.onPress}
            >
              {item.icon}
            </TouchableOpacity>
          ))}
      </View>
    </View>
  );
};

export default Navbar;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "flex-end",
    flexDirection: "row",
    justifyContent: "space-between",
    position: "relative",
    borderBottomWidth: 0.4,
    borderBottomColor: Colors.Gray,
    shadowColor: Colors.Gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.4,
    shadowRadius: 6.0,

    elevation: 12,
    zIndex: 100,
  },
});
