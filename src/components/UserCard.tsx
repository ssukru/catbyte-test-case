import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Colors } from "../constants";
import { UserType } from "../types/User";
import { Title } from "./Typography";
import { LinearGradient } from "expo-linear-gradient";

const WindowWidth = Dimensions.get("window").width;
const paddingX = 24;

type Props = {
  user: UserType;
  onDelete: () => void;
};

const UserCard = ({ user, onDelete }: Props) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: user.image }}
        style={{ height: 300, width: "100%" }}
      />
      <LinearGradient
        colors={["transparent", "transparent", Colors.Black]}
        style={styles.overlay}
      >
        <Title fontSize={12} color={Colors.White}>
          {user.firstName} {user.lastName}, {user.age.toString()}
        </Title>
      </LinearGradient>
      <TouchableOpacity onPress={onDelete} style={styles.removeButton}>
        <Title
          family="Nunito900"
          fontSize={14}
          align="center"
          color={Colors.White}
        >
          X
        </Title>
      </TouchableOpacity>
    </View>
  );
};

export default UserCard;

const styles = StyleSheet.create({
  card: {
    width: (WindowWidth - paddingX * 2) / 2,
    height: 300,
    borderRadius: 10,
    backgroundColor: Colors.Gray,
    position: "relative",
    shadowColor: Colors.SecondaryBlack,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.2,
    shadowRadius: 12,
    elevation: 12,
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "flex-end",
    padding: 8,
  },
  removeButton: {
    position: "absolute",
    top: 8,
    right: 8,
    width: 30,
    height: 30,
    backgroundColor: Colors.Black,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 100,
  },
});
