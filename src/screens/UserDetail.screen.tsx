import { Image, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNavigationType } from "../types/Navigation";
import { Container, Navbar, Paragraph, Title } from "../components";
import { UserType } from "../types/User";
import { useUser } from "../context/User.context";
import { Colors } from "../constants";

const UserDetailScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigationType>>();
  const route = useRoute<RouteProp<AppNavigationType, "UserDetailScreen">>();
  const { userId } = route.params;
  const { GetUser } = useUser();
  const [user, setUser] = useState<UserType>();

  useEffect(() => {
    const user = GetUser(userId);
    setUser(user);
  }, [userId]);

  return (
    <Container>
      <Navbar
        title="User Detail"
        leftButtonVisible={navigation.canGoBack()}
        leftButtonOnPress={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={{ height: 32 }} />
        {user ? (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: Colors.Gray,
              paddingVertical: 16,
              borderRadius: 10,
            }}
          >
            <Image
              source={{ uri: user.image }}
              style={{ width: 120, height: 120, borderRadius: 60 }}
            />
            <View style={{ width: 16 }} />
            <View>
              <Title>
                {user.firstName} {user.lastName}, {user.age.toString()}
              </Title>
              <Paragraph>
                {user.company.address}, {user.company.state}
              </Paragraph>
            </View>
          </View>
        ) : (
          <Title>User can not found.</Title>
        )}
      </View>
    </Container>
  );
};

export default UserDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
});
