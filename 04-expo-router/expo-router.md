# Expo Router

Revision notes for Expo Router using file-based routing, route groups, layouts, protected routes, tabs, drawers, and app icons.

## Table of Contents

- [Project Setup](#project-setup)
- [Folder Structure](#folder-structure)
- [File-Based Routing](#file-based-routing)
- [Static Routes](#static-routes)
- [Dynamic Routes](#dynamic-routes)
- [Route Groups](#route-groups)
- [Layouts](#layouts)
- [Protected Routes](#protected-routes)
- [Drawer Navigation](#drawer-navigation)
- [Tabs](#tabs)
- [Link Navigation](#link-navigation)
- [Not Found Route](#not-found-route)
- [App Icons](#app-icons)
- [Run Commands](#run-commands)

## Project Setup

This project uses Expo Router with Expo, React Native, TypeScript, drawer navigation, and tab navigation.

Main packages:

- `expo-router`
- `@react-navigation/native`
- `@react-navigation/drawer`
- `@react-navigation/bottom-tabs`
- `react-native-screens`
- `react-native-safe-area-context`
- `react-native-gesture-handler`
- `react-native-reanimated`

Important setup points:

- `package.json` uses `"main": "expo-router/entry"`.
- `app.json` includes the `expo-router` plugin.
- `typedRoutes` is enabled in `app.json`.
- App files live inside `src/app`.

## Folder Structure

```text
04-expo-router/
+-- app.json
+-- package.json
+-- expo-router.md
+-- src/
    +-- app/
    |   +-- _layout.tsx
    |   +-- (auth)/
    |   |   +-- _layout.tsx
    |   |   +-- login.tsx
    |   |   +-- register.tsx
    |   +-- (drawer)/
    |   |   +-- _layout.tsx
    |   |   +-- index.tsx
    |   |   +-- explore.tsx
    |   |   +-- settings.tsx
    |   +-- (tabs)/
    |       +-- _layout.tsx
    +-- components/
        +-- home.tsx
```

## File-Based Routing

Expo Router creates routes from files inside the `app` folder.

Examples from this project:

- `src/app/(drawer)/index.tsx` becomes the home route.
- `src/app/(drawer)/explore.tsx` becomes the explore route.
- `src/app/(drawer)/settings.tsx` becomes the settings route.
- `src/app/(auth)/login.tsx` becomes the login route.
- `src/app/(auth)/register.tsx` becomes the register route.

## Static Routes

Static routes use fixed file names.

Examples:

- `login.tsx`
- `register.tsx`
- `explore.tsx`
- `settings.tsx`

Use static routes when the screen path does not need a changing value.

## Dynamic Routes

Dynamic routes use square brackets in the file name.

Example patterns:

- `app/user/[id].tsx`
- `app/username/[name].tsx`
- `app/docs/[...slug].tsx`

Current project note:

- `src/components/home.tsx` has links for `/user/1234`, `/username/suraj`, and `/docs/suraj/kumar/jha`.
- The matching dynamic route files are not currently present in this folder.

## Route Groups

Route groups organize routes without adding the group name to the URL.

Groups used here:

- `(auth)` for login and register screens.
- `(drawer)` for drawer screens.
- `(tabs)` for tab screens.

Example:

`src/app/(auth)/login.tsx` is reached as `/login`, not `/(auth)/login`.

## Layouts

`_layout.tsx` files wrap routes and define navigation structure.

Layouts in this project:

- `src/app/_layout.tsx`: root stack and protected routes.
- `src/app/(auth)/_layout.tsx`: auth stack.
- `src/app/(drawer)/_layout.tsx`: drawer navigator.
- `src/app/(tabs)/_layout.tsx`: custom tab navigator.

Layout rule:

- A layout applies to the folder it is inside and all child routes.

## Protected Routes

Protected routes control which screens are available based on a condition.

In `src/app/_layout.tsx`:

- `isLoggedIn = true`
- Auth routes are guarded with `guard={!isLoggedIn}`.
- Drawer routes are guarded with `guard={isLoggedIn}`.

Current active protected route:

```tsx
<Stack.Screen name="(drawer)" options={{ headerShown: false }} />
```

## Drawer Navigation

Drawer navigation is configured in `src/app/(drawer)/_layout.tsx`.

Drawer screens:

- `index`: Home
- `explore`: Explore
- `settings`: Setting

Important points:

- `Drawer` comes from `expo-router/drawer`.
- `Drawer.Screen` registers each drawer screen.
- `drawerIcon` adds icons from `@expo/vector-icons`.
- `drawerActiveTintColor` controls the active item color.

## Tabs

Tabs are configured in `src/app/(tabs)/_layout.tsx`.

Tab screens:

- `index`: Home
- `explore`: Explore
- `settings`: Settings

Important points:

- `Tabs` comes from `expo-router`.
- A custom `tabBar` is used instead of the default tab bar.
- `expo-symbols` is used for tab icons.
- `expo-glass-effect` is used for iOS glass styling when available.
- `react-native-reanimated` is used for press animation.

## Link Navigation

`Link` is used for navigation through paths.

Examples from this project:

```tsx
<Link href="/login">Login</Link>
```

```tsx
<Link href="/user/1234">Go to userId page</Link>
```

Use `Link` when you want simple route-based navigation in JSX.

## Not Found Route

Expo Router supports a `+not-found.tsx` file for unmatched routes.

Example file:

```text
src/app/+not-found.tsx
```

Current project note:

- `+not-found.tsx` is listed in the Day 6 outline.
- It is not currently present in this folder.

## App Icons

App icon settings are in `app.json`.

Important icon paths:

- Main icon: `./assets/images/icon.png`
- iOS icon: `./assets/expo.icon`
- Android foreground: `./assets/images/android-icon-foreground.png`
- Android background: `./assets/images/android-icon-background.png`
- Android monochrome: `./assets/images/android-icon-monochrome.png`
- Web favicon: `./assets/images/favicon.png`

Splash screen:

- Uses `./assets/images/splash-icon.png`.
- Background color is `#208AEF`.

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
bun lint
```
