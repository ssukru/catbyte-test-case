import { StyleSheet, Text, View } from "react-native";
import React, { ReactNode, useMemo } from "react";
import { Colors } from "../constants";

type TypographyProps = {
  children?: JSX.Element | JSX.Element[] | string | ReactNode | undefined;
  fontSize?: number;
  align?: "center" | "left" | "right";
  color?: string;
  family?: string;
  NOL?: number;
};

const GenerateStyle = ({
  fontSize,
  color,
  align,
  family,
}: TypographyProps): Object => {
  return {
    ...(fontSize !== undefined && { fontSize: fontSize }),
    ...(color !== undefined && { color: color }),
    ...(align !== undefined && { textAlign: align }),
    ...(family !== undefined && { fontFamily: family }),
  };
};

export const Title = ({
  children,
  fontSize,
  align,
  color,
  family,
  NOL = 1,
}: TypographyProps) => {
  const textStyle = useMemo(
    () => GenerateStyle({ color, fontSize, align, family }),
    [align, color, fontSize, family]
  );

  return (
    <Text
      style={[styles.baseStyle, styles.titleStyle, textStyle]}
      numberOfLines={NOL}
    >
      {children}
    </Text>
  );
};

export const Paragraph = ({
  children,
  fontSize,
  align,
  color,
  family,
  NOL = 1,
}: TypographyProps) => {
  const textStyle = useMemo(
    () => GenerateStyle({ color, fontSize, align, family }),
    [align, color, fontSize, family]
  );

  return (
    <Text style={[styles.baseStyle, textStyle]} numberOfLines={NOL}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  baseStyle: {
    fontFamily: "Nunito500",
    color: Colors.SecondaryBlack,
    fontSize: 14,
  },
  titleStyle: {
    fontFamily: "Nunito700",
    fontSize: 18,
    color: Colors.Black,
  },
});
