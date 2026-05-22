# React Navigation

Revision notes for React Navigation examples using Expo, React Native, stack navigation, drawer navigation, and bottom tabs.

## Table of Contents

- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [NavigationContainer](#navigationcontainer)
- [Stack Navigation](#stack-navigation)
- [Drawer Navigation](#drawer-navigation)
- [Tab Navigation](#tab-navigation)
- [Nested Navigation](#nested-navigation)
- [Navigation Hooks](#navigation-hooks)
- [Navigation Methods](#navigation-methods)
- [Route Params](#route-params)
- [Active Example](#active-example)
- [Run Commands](#run-commands)

## Project Setup

This project uses React Navigation with Expo and TypeScript.

Main navigation packages used:

- `@react-navigation/native`
- `@react-navigation/native-stack`
- `@react-navigation/drawer`
- `@react-navigation/bottom-tabs`
- `@react-navigation/material-top-tabs`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-gesture-handler`
- `react-native-reanimated`

## Folder Structure

```text
03-react-navigation/
+-- App.tsx
+-- package.json
+-- src/
    +-- navigator/
    |   +-- drawer/
    |   |   +-- DynamicDrawer.tsx
    |   |   +-- StaticDrawer.tsx
    |   +-- stack/
    |   |   +-- DynamicStackNavigator.tsx
    |   |   +-- StaticStackNavigator.tsx
    |   +-- tabs/
    |       +-- DynamicTabNavigator.tsx
    +-- screens/
        +-- DetailScreen.tsx
        +-- HomeScreen.tsx
        +-- ProfileScreen.tsx
        +-- SearchScreen.tsx
```

## NavigationContainer

`NavigationContainer` wraps the navigation tree and manages navigation state.

Used in:

- `DynamicStackNavigator.tsx`
- `DynamicDrawer.tsx`
- `DynamicTabNavigator.tsx`

Static navigation examples use `createStaticNavigation` instead.

## Stack Navigation

Stack navigation moves between screens like pages in a stack.

Files:

- `src/navigator/stack/DynamicStackNavigator.tsx`
- `src/navigator/stack/StaticStackNavigator.tsx`

Screens:

- `Home`
- `Details`
- `Profile`

Important points:

- `createNativeStackNavigator()` creates a stack navigator.
- `Stack.Navigator` wraps stack screens.
- `Stack.Screen` registers each route.
- `screenOptions` applies common header styles.
- `options` customizes one screen.

## Drawer Navigation

Drawer navigation creates a side menu for switching screens.

Files:

- `src/navigator/drawer/DynamicDrawer.tsx`
- `src/navigator/drawer/StaticDrawer.tsx`

Screens:

- `Home`
- `Profile`

Important points:

- `createDrawerNavigator()` creates a drawer navigator.
- `Drawer.Navigator` wraps drawer screens.
- `Drawer.Screen` registers each drawer route.
- `useNavigation()` can navigate between drawer screens.

## Tab Navigation

Tab navigation creates bottom tabs for main app sections.

File:

- `src/navigator/tabs/DynamicTabNavigator.tsx`

Tabs:

- `Overview`
- `Search`
- `Profile`

Important points:

- `createBottomTabNavigator()` creates bottom tabs.
- `Tab.Navigator` wraps tab screens.
- `Tab.Screen` registers each tab.
- `headerShown: false` hides the tab header when a nested stack already has its own header.

## Nested Navigation

Nested navigation means placing one navigator inside another.

In this project, `Overview` tab contains a stack navigator:

- `Overview`
  - `Home`
  - `Details`

This pattern is useful when each tab needs its own screen history.

## Navigation Hooks

`useNavigation()` gives access to navigation actions inside a screen component.

Used in:

- `HomeScreen.tsx`
- `DetailScreen.tsx`
- `ProfileScreen.tsx`
- Drawer example screens

Common use:

```tsx
const navigation = useNavigation<any>();
```

## Navigation Methods

Common methods from the project notes:

- `navigate("ScreenName")`: go to a screen by name.
- `goBack()`: go back to the previous screen.
- `push("ScreenName")`: add a new instance of a screen.
- `replace("ScreenName")`: replace the current screen.
- `popToTop()`: go back to the first screen in the stack.
- `popTo("ScreenName")`: go back to a specific screen.

## Route Params

Route params are values passed while navigating to another screen.

Example from `DetailScreen.tsx`:

```tsx
const { username } = route.params;
```

Useful pattern:

```tsx
navigation.navigate("Details", { username: "Milind" });
```

## Active Example

`App.tsx` currently renders:

```tsx
<DynamicDrawer />
```

To test another navigator, import it in `App.tsx` and render it instead.

## Run Commands

```bash
bun install
bun start
```

Other scripts:

```bash
bun android
bun ios
bun web
```
