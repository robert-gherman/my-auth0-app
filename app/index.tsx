// app/index.tsx
import React, { useState } from "react";
import { View, Button, Text } from "react-native";
import auth0 from "../services/auth";
import { Credentials } from "react-native-auth0";
import { useRouter } from "expo-router";

const HomeScreen = () => {
  const [user, setUser] = useState<Credentials | null>(null);
  const router = useRouter();

  const onLogin = async () => {
    try {
      const response: Credentials = await auth0.webAuth.authorize({
        scope: "openid profile email",
      });
      setUser(response);
    } catch (error) {
      console.log(error);
    }
  };

  const onLogout = async () => {
    try {
      await auth0.webAuth.clearSession({});
      setUser(null);
      router.replace("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {user ? (
        <>
          <Text>Welcome! Your access token: {user.accessToken}</Text>
          <Button title="Logout" onPress={onLogout} />
        </>
      ) : (
        <Button title="Login" onPress={onLogin} />
      )}
    </View>
  );
};

export default HomeScreen;
