import React from "react";
import { View, StyleSheet } from "react-native";
import { getBottomSpace } from "react-native-iphone-x-helper";

import colors from "../../../colors";
import { ServiceOption, IService } from "./ServiceOption";

interface IServiceSelect {
  services: IService[];
}

export const ServiceSelect: React.FC<IServiceSelect> = ({ services }) => (
  <View style={styles.container}>
    <View style={styles.wrapper}>
      {services?.map((service, idx) => (
        <ServiceOption
          service={service}
          noBorder={idx === (services.length - 1)}
        />
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    left: "5%",
    right: "5%",
    bottom: 0
  },
  wrapper: {
    paddingBottom: getBottomSpace(),
    backgroundColor: colors.white,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  }
});
