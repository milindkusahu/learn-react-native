# React Native Code Snippets

Quick revision notes for common React Native components, layout helpers, styling patterns, and responsive design APIs.

## Table of Contents

- [Basic Components and State](#basic-components-and-state)
- [ScrollView, Button, and Switch](#scrollview-button-and-switch)
- [FlatList](#flatlist)
- [KeyboardAvoidingView](#keyboardavoidingview)
- [SafeAreaView](#safeareaview)
- [useSafeAreaInsets](#usesafeareainsets)
- [StyleSheets](#stylesheets)
- [StyleSheet.compose](#stylesheetcompose)
- [StyleSheet.flatten](#stylesheetflatten)
- [Responsive Design](#responsive-design)
- [useWindowDimensions](#usewindowdimensions)
- [useColorScheme](#usecolorscheme)

## Basic Components and State

This snippet combines core building blocks such as `Text`, `Image`, `TextInput`, `Pressable`, and `useState`. Revise how props control rendering, input state, local/remote images, and press feedback.

```javascript
import { Text } from "@react-navigation/elements";
import { useState } from "react";
import { Image, Pressable, TextInput, View } from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");

  return (
    <View>
      <Text numberOfLines={2}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita odit
        eveniet corrupti provident vero architecto tempore atque aspernatur
        laborum repudiandae nostrum error eaque nesciunt.
      </Text>

      {/* Remote image from internet */}
      <Image
        source={{
          uri: "https://media.licdn.com/dms/image/v2/D4D03AQEzufNGeryQlw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729949713011?e=1779926400&v=beta&t=uVet-6Dhb_wX4jx2hIvSz8uJhyJK4s5tjltfL2jFgq8",
        }}
        width={200}
        height={200}
      />

      {/* Local image */}
      <Image
        source={require("@/assets/images/icon.png")}
        style={{
          height: 100,
          width: 100,
          marginTop: 10,
          marginBottom: 10,
        }}
        blurRadius={20}
      />

      <TextInput
        placeholder="Enter your Name"
        value={name}
        onChangeText={setName}
        placeholderTextColor={"blue"}
        style={{
          borderWidth: 1,
          borderColor: "#ddd",
          margin: 10,
          fontSize: 24,
        }}
      />

      <Pressable
        onPress={() => alert("Button Pressed")}
        style={({ pressed }) => ({
          backgroundColor: pressed ? "#4a42d4" : "#6C63FF",
        })}
      >
        {({ pressed }) =>
          pressed ? <Text>Pressing....</Text> : <Text>Press Me</Text>
        }
      </Pressable>
    </View>
  );
}
```

## ScrollView, Button, and Switch

Use this section to revise vertically scrollable content, basic button handling, and boolean UI state with `Switch`. `ScrollView` is useful for smaller lists or forms where all children render at once.

```javascript
import {
  Button,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";

// Shortcut boilerplate "rnfes"
const HomeScreen = () => {
  const items = Array.from({ length: 5 }, (_, i) => `Item ${i + 1}`);

  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ScrollView
      style={{ flex: 1 }}
      contentContainerStyle={{ padding: 16, alignItems: "center" }}
    >
      {items.map((item) => (
        <View
          key={item}
          style={{
            backgroundColor: "white",
            padding: 16,
            borderRadius: 10,
            marginBottom: 10,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 4,
            elevation: 2,
          }}
        >
          <Text>{item}</Text>
        </View>
      ))}

      <Button
        title="Hello i am button"
        color={"green"}
        onPress={() => alert("Hello World")}
      />

      <Switch
        value={isDarkMode}
        onValueChange={setIsDarkMode}
        trackColor={{ false: "#ddd", true: "#6c63ff" }}
        thumbColor={"yellow"}
      />
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## FlatList

`FlatList` is the preferred component for rendering larger or dynamic lists because it efficiently renders only the visible rows. Remember the important props: `data`, `keyExtractor`, `renderItem`, and optional separators.

```javascript
import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";

const USERS = [
  { id: "1", name: "Alice Johnson", role: "Designer" },
  { id: "2", name: "Bob Smith", role: "Developer" },
  { id: "3", name: "Carol White", role: "Manager" },
  { id: "4", name: "David Brown", role: "Developer" },
  { id: "5", name: "Eve Davis", role: "Designer" },
];

const HomeScreen = () => {
  return (
    <FlatList
      data={USERS}
      keyExtractor={(item) => item.id}
      contentContainerStyle={{ padding: 16 }}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      ItemSeparatorComponent={() => (
        <View style={{ height: 1, backgroundColor: "black" }} />
      )}
    />
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## KeyboardAvoidingView

This layout pattern keeps form inputs visible when the keyboard opens. It is especially useful for login and signup screens, and the `behavior` often changes between iOS and Android.

```javascript
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Platform,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={{ flex: 1, justifyContent: "flex-end", padding: 24 }}>
          <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 24 }}>
            Login
          </Text>

          <TextInput
            placeholder="Email"
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 10,
              padding: 14,
              fontSize: 16,
              marginBottom: 12,
            }}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            style={{
              borderWidth: 1,
              borderColor: "#ddd",
              borderRadius: 10,
              padding: 14,
              fontSize: 16,
              marginBottom: 20,
            }}
          />

          <Pressable
            style={{
              backgroundColor: "#6C63FF",
              padding: 16,
              borderRadius: 12,
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold", fontSize: 16 }}>
              Sign In
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## SafeAreaView

`SafeAreaView` prevents content from being hidden behind notches, rounded screen corners, home indicators, and status bars. Use `edges` when you only want safe spacing on specific sides.

```javascript
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

function UnsafeScreen() {
  return (
    <View style={{ flex: 1, backgroundColor: "#1c1c1e" }}>
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </View>
  );
}

function SafeScreen() {
  return (
    <SafeAreaView
      edges={["top", "bottom"]}
      style={{ flex: 1, backgroundColor: "#1c1c1e" }}
    >
      <Text style={{ color: "#fff", fontSize: 18, padding: 16 }}>
        Header (bleeds under notch!)
      </Text>
      <Text style={{ color: "#aaa", padding: 16 }}>
        This content might be hidden behind the status bar in dark mode.
      </Text>
    </SafeAreaView>
  );
}

const HomeScreen = () => {
  return (
    <>
      <SafeScreen />
      {/* <UnsafeScreen /> */}
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## useSafeAreaInsets

`useSafeAreaInsets` gives direct access to safe-area values so you can manually apply padding or spacing. This is useful when a full `SafeAreaView` is too broad and you need precise control.

```javascript
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <StatusBar barStyle={"dark-content"} />
      <Text>HomeScreen</Text>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

## StyleSheets

`StyleSheet.create` keeps styles organized outside JSX and makes repeated style usage easier to read. It is the standard pattern for defining reusable React Native style objects.

```javascript
import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle={"dark-content"} />
      <View style={styles.card}>
        <Text style={styles.title}>HomeScreen</Text>
        <Text style={styles.subtitle}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 16,
    padding: 20,
    margin: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
  },
  subtitle: {
    fontSize: 14,
    color: "#888",
    marginTop: 4,
  },
});
```

### StyleSheet.compose

`StyleSheet.compose` combines two style objects and is useful for conditionally applying styles. Revise it when you need a base style plus an optional active, disabled, or selected style.

```javascript
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const HomeScreen = () => {
  const isActive = false;

  const buttonStyle = StyleSheet.compose(
    styles.button,
    isActive ? styles.activeButton : null,
  );

  return (
    <View style={styles.container}>
      {/* @ts-ignore */}
      <View style={buttonStyle}>
        <Text style={styles.buttonText}>Composed Style</Text>
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    backgroundColor: "#ccc",
  },
  activeButton: {
    backgroundColor: "#6C63FF",
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
```

### StyleSheet.flatten

`StyleSheet.flatten` converts an array of styles into one plain style object. It helps when you need to inspect, merge, or pass computed styles in a single object format.

```javascript
import { StyleSheet, Text, View } from "react-native";
import React from "react";

const styleA = StyleSheet.create({ text: { color: "red", fontSize: 16 } });
const styleB = StyleSheet.create({
  text: { fontSize: 24, fontWeight: "bold" },
});

const flat = StyleSheet.flatten([styleA.text, styleB.text]);

const HomeScreen = () => {
  return <Text style={flat}>Flattened Style!</Text>;
};

export default HomeScreen;
```

## Responsive Design

Responsive design in React Native means adapting layout, spacing, sizing, and theme behavior to different screen sizes, orientations, and system settings.

### useWindowDimensions

`useWindowDimensions` returns the current screen width and height and updates automatically when the device rotates or resizes. It is useful for tablet layouts, orientation checks, and size-based UI decisions.

```javascript
import {
  Pressable,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import React from "react";
import * as ScreenOrientation from "expo-screen-orientation";
import { SafeAreaView } from "react-native-safe-area-context";

const HomeScreen = () => {
  const { height, width } = useWindowDimensions();

  const isTablet = width >= 768;
  const isLandscape = width > height;

  const lockLandscape = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE,
    );
  };

  const lockPortrait = async () => {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.PORTRAIT,
    );
  };

  return (
    <SafeAreaView style={{ flex: 1, padding: 16 }}>
      <Text style={{ fontSize: width * 0.06 }}>Responsive Text 📱</Text>

      <View
        style={{
          flexDirection: isTablet ? "row" : "column",
        }}
      >
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#6C63FF",
            padding: 20,
            borderRadius: 12,
            marginBottom: isTablet ? 0 : 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 1</Text>
        </View>
        <View
          style={{
            width: isTablet ? width / 2 : width - 32,
            backgroundColor: "#FF6584",
            padding: 20,
            borderRadius: 12,
          }}
        >
          <Text style={{ color: "white" }}>Card 2</Text>
        </View>
      </View>

      <Text style={{ color: "#888", marginTop: 16 }}>
        Screen: {Math.round(width)} × {Math.round(height)}
        {isLandscape ? " (Landscape)" : " (Portrait)"}
      </Text>

      {/* Orientation Buttons */}
      <View style={{ flexDirection: "row", gap: 12, marginTop: 24 }}>
        <Pressable
          onPress={lockLandscape}
          style={{
            flex: 1,
            backgroundColor: "#6C63FF",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Landscape 🔄</Text>
        </Pressable>

        <Pressable
          onPress={lockPortrait}
          style={{
            flex: 1,
            backgroundColor: "#FF6584",
            padding: 12,
            borderRadius: 8,
            alignItems: "center",
          }}
        >
          <Text style={{ color: "white" }}>Force Portrait 📱</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
```

### useColorScheme

`useColorScheme` reads the device theme preference, usually `light` or `dark`. Use it to choose colors dynamically and keep the app aligned with the user's system appearance.

```javascript
import { StyleSheet, Switch, Text, View, useColorScheme } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

const themes = {
  light: {
    background: "#FFFFFF",
    card: "#F5F5F5",
    text: "#1A1A1A",
    subtext: "#666666",
    accent: "#6C63FF",
  },
  dark: {
    background: "#121212",
    card: "#1E1E1E",
    text: "#FFFFFF",
    subtext: "#AAAAAA",
    accent: "#9D97FF",
  },
};

const HomeScreen = () => {
  const systemScheme = useColorScheme(); // light or dark
  const [manualDark, setManualDark] = (useState < boolean) | (null > null);

  const isDark = manualDark !== null ? manualDark : systemScheme === "dark";

  const theme = isDark ? themes.dark : themes.light;

  return (
    <SafeAreaView
      style={[styles.container, { backgroundColor: theme.background }]}
    >
      <StatusBar style={manualDark ? "light" : "dark"} />
      {/* Header */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          {isDark ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          System preference: {systemScheme ?? "unknown"}
        </Text>
      </View>

      {/* Toggle Row */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <View style={styles.row}>
          <Text style={[styles.label, { color: theme.text }]}>
            Override system theme
          </Text>
          <Switch
            value={manualDark ?? systemScheme === "dark"}
            onValueChange={setManualDark}
            trackColor={{ false: "#ddd", true: theme.accent }}
            thumbColor="white"
          />
        </View>
      </View>

      {/* Content Card */}
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.accent }]}>
          Themed Card 🎨
        </Text>
        <Text style={[styles.subtitle, { color: theme.subtext }]}>
          Colors adapt to dark/light mode automatically
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, gap: 12 },
  card: { padding: 20, borderRadius: 16 },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: { fontSize: 20, fontWeight: "bold" },
  subtitle: { fontSize: 14, marginTop: 4 },
  label: { fontSize: 16 },
});
```
