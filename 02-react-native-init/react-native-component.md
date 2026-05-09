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
