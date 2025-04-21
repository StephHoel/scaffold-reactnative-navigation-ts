import { ActivityIndicator } from "react-native";

export default function Loading() {
  return (
    <ActivityIndicator color="#22c55e"
      className="flex-1 bg-gray-900 justify-center items-center" />
  )
}