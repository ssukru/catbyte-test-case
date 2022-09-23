import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { Container, FAB, ScrollWrapper, UserCard } from "../components";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNavigationType } from "../types/Navigation";
import { useUser } from "../context/User.context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigationType>>();

  const { users, DeleteUser, loading } = useUser();

  return (
    <Container bottomInset topInset>
      <ScrollWrapper px={0}>
        <View style={styles.mainContentWrapper}>
          {loading ? (
            <ActivityIndicator />
          ) : (
            users.map((user) => (
              <TouchableOpacity
                key={`usr[${user.id}]`}
                style={{ padding: 8 }}
                onPress={() =>
                  navigation.navigate("UserDetailScreen", { userId: user.id })
                }
              >
                <UserCard user={user} onDelete={() => DeleteUser(user.id)} />
              </TouchableOpacity>
            ))
          )}
        </View>
      </ScrollWrapper>
      <View style={[styles.fabWrapper, { bottom: insets.bottom + 16 }]}>
        <FAB
          text="Create New User"
          onPress={() => navigation.navigate("CreateUserScreen")}
        />
      </View>
    </Container>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  fabWrapper: {
    position: "absolute",
    right: 24,
  },
  mainContentWrapper: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
