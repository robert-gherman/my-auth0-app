// app/login.tsx
import React from "react";
import { View, Text, Button } from "react-native";
import { useRouter } from "expo-router";

const LoginScreen = () => {
  const router = useRouter();

  const onLogin = () => {
    router.replace("/");
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

export default LoginScreen;
