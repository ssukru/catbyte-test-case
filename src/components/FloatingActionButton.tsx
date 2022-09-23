import { StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { Colors } from "../constants";
import { FontAwesome5 } from "@expo/vector-icons";
import { Title } from "./Typography";

type Props = {
  onPress: () => void;
  text: string;
};

const FloatingActionButton = ({ onPress, text }: Props) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Title color={Colors.Black} fontSize={12}>
        {text}
      </Title>
      <View style={{ width: 8 }} />
      <FontAwesome5 name="plus" size={14} color={Colors.Black} />
    </TouchableOpacity>
  );
};

export default FloatingActionButton;

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: Colors.Green,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    shadowColor: Colors.Gray,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 12,
    elevation: 12,
  },
});
