import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { Text } from "../../components";
import colors from "../../colors";
import { ServiceSelect, IService } from "./components";

const services: IService[] = [
  {
    id: "1",
    name: "DRINKING_WATER",
    displayName: "Servicio de agua"
  },
  {
    id: "2",
    name: "GAS",
    displayName: "Servicio de gas"
  }
]

export const LandingScreen: React.FC = () => (
  <SafeAreaView style={styles.container}>
    <Text>LandingScreen</Text>
    <ServiceSelect services={services} />
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderTopWidth: 2,
    borderTopColor: colors.brandOrange,
    backgroundColor: colors.tintedWhite
  }
});

(LandingScreen as any).options = {
  topBar: {
    title: {
      text: "Hello"
    }
  }
};
