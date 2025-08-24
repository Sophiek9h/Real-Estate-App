import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      className="flex-1 items-center justify-center bg-white">

      <Text className="font-rubik-light text-xl mb-4">Welcome to the app!</Text>

      <Link href="./explore">  Explore </Link>
      <Link href="./profile">  Profile </Link>
      <Link href="/sign-in">  Sign In </Link>
      <Link href="/properties/123">  Property </Link>
    </View>
  );
}
