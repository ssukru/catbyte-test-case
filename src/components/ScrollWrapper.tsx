import {
  RefreshControl,
  ScrollView,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

type Props = {
  py?: number;
  px?: number;
  children?: React.ReactElement | React.ReactElement[];
  onRefresh?: () => void;
  refreshing?: boolean;
};

const ScrollWrapper = ({
  px = 24,
  py = 16,
  children,
  refreshing = false,
  onRefresh,
}: Props) => {
  return (
    <KeyboardAwareScrollView
      enableResetScrollToCoords
      extraScrollHeight={72}
      refreshControl={
        onRefresh ? (
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        ) : undefined
      }
      style={{ flex: 1 }}
      contentContainerStyle={{ flexGrow: 1 }}
    >
      <TouchableWithoutFeedback>
        <View
          style={[
            styles.container,
            py ? { paddingVertical: py } : {},
            px ? { paddingHorizontal: px } : {},
          ]}
        >
          {children}
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  );
};

export default ScrollWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
