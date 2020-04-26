import React from "react";
import { Text as RNText, TextProps as RNTextProps, StyleSheet } from "react-native";

import fonts from "../fonts";
import colors from "../colors";

type FontWeight =
  | "THIN"
  | "EXTRA_LIGHT"
  | "LIGHT"
  | "REGULAR"
  | "MEDIUM"
  | "SEMI_BOLD"
  | "BOLD"
  | "EXTRA_BOLD"
  | "BLACK";

export const FontWeight: { [weight in FontWeight]: FontWeight } = {
  THIN: fonts.Inter.Thin as FontWeight,
  EXTRA_LIGHT: fonts.Inter.ExtraLight as FontWeight,
  LIGHT: fonts.Inter.Light as FontWeight,
  REGULAR: fonts.Inter.Regular as FontWeight,
  MEDIUM: fonts.Inter.Medium as FontWeight,
  SEMI_BOLD: fonts.Inter.SemiBold as FontWeight,
  BOLD: fonts.Inter.Bold as FontWeight,
  EXTRA_BOLD: fonts.Inter.ExtraBold as FontWeight,
  BLACK: fonts.Inter.Black as FontWeight
};

interface ITextOwnProps {
  weight?: FontWeight;
}

type TextProps = ITextOwnProps & RNTextProps;

export const Text: React.FC<TextProps> = ({ weight = FontWeight.REGULAR, ...props }) =>
  <RNText style={styles(weight).text} {...props} />;

const styles = (fontWeight: FontWeight) => StyleSheet.create({
  text: {
    color: colors.darkGray,
    fontFamily: fontWeight
  }
});
