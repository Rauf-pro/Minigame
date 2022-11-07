import { View, Text } from "react-native";      // Creating Custom button

function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default PrimaryButton;
