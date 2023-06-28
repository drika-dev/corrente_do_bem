import { View,StyleSheet, TouchableOpacity, Platform} from 'react-native';

import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: "tabPress",
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate({ name: route.name, merge: true });
            }
          };

          const onLongPress = () => {
            navigation.emit({
              type: "tabLongPress",
              target: route.key,
            });
          };

          return (
            <TouchableOpacity
              key={route.key}
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
              style={styles.buttomTab}
            >
              <View style={{ alignItems: 'center', padding: 4}}>
                <View style={{ padding:8, borderRadius: 99}}>
                  <MaterialCommunityIcons
                    name={options.tabBarIcon}
                    size={32}
                    color={ isFocused ? "#B22222" : "#535353"}
                  />
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  content: {
    flexDirection: "row",
    marginBottom: Platform.OS === "ios" ? 38 : 24,
    alignItems: "center",
  },
});