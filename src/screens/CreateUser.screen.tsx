import { Alert, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Container, Input, Navbar, ScrollWrapper } from "../components";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AppNavigationType } from "../types/Navigation";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useUser } from "../context/User.context";

const CreateUserScreen = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<AppNavigationType>>();
  const insets = useSafeAreaInsets();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [imgUrl, setImgUrl] = useState<string>("");

  const { CreateNewUser } = useUser();

  const handleCreate = () => {
    if (imgUrl.length < 6) {
      Alert.alert("Upss", "Please enter a correct IMG url.");
      return;
    }
    const result = CreateNewUser(firstName, lastName, age, imgUrl);
    if (result) {
      Alert.alert("Success", "User created!", [
        { text: "Go Back", onPress: () => navigation.goBack() },
      ]);
      return;
    }
    Alert.alert("Error", "An error occured when creating new user.");
  };

  return (
    <Container>
      <Navbar
        title="Create New User"
        leftButtonVisible={navigation.canGoBack()}
        leftButtonOnPress={() => navigation.goBack()}
      />
      <ScrollWrapper px={0}>
        <View style={styles.container}>
          <Input
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            fullWidth
            title="First Name:"
          />
          <View style={{ height: 16 }} />
          <Input
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            fullWidth
            title="Last Name:"
          />
          <View style={{ height: 16 }} />
          <Input
            value={age}
            onChangeText={(text) => setAge(text)}
            fullWidth
            title="Age:"
          />
          <View style={{ height: 16 }} />
          <Input
            value={imgUrl}
            onChangeText={(text) => setImgUrl(text)}
            fullWidth
            title="Image URL:"
          />
        </View>
      </ScrollWrapper>
      <View style={[styles.buttonWrapper, { bottom: insets.bottom + 8 }]}>
        <Button
          text="Create"
          disabled={imgUrl.length < 1}
          onPress={handleCreate}
        />
      </View>
    </Container>
  );
};

export default CreateUserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },
  buttonWrapper: {
    width: "100%",
    position: "absolute",
    paddingHorizontal: 24,
  },
});
