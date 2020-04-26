import React from "react";
import { View, TouchableOpacity, StyleSheet, GestureResponderEvent } from "react-native";

import { Text } from "../../../components";

export interface IService {
  id: string;
  name: string;
  displayName: string;
}

interface IServiceOptionProps {
  service: IService;
  noBorder?: boolean;
  onPress?: (service: IService, event: GestureResponderEvent) => void;
}

export const ServiceOption: React.FC<IServiceOptionProps> = ({ service, noBorder, onPress }) => (
  <View style={styles(noBorder).container}>
    <TouchableOpacity
      style={styles(noBorder).wrapper}
      onPress={(evt) => onPress?.(service, evt)}
    >
      <Text>{service.displayName}</Text>
    </TouchableOpacity>
  </View>
);

const styles = (noBorder: boolean = false) => StyleSheet.create({
  container: {
    flex: 1,
    borderBottomWidth: noBorder ? 0 : 1,
    borderBottomColor: "rgba(0, 0, 0, 0.1)"
  },
  wrapper: {
    flex: 1,
    paddingVertical: 15,
    paddingHorizontal: 20,
  }
});
