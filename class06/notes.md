React Native Navigation Notes

Introduction to Navigation

In React Native, navigation is essential for moving between different screens in an application. The most common navigation types are:

- Stack Navigation – Screens are stacked on top of each other, like a history of pages.

- Tab Navigation – Users can switch between different sections of an app using bottom tabs.

- Drawer Navigation – A side menu that provides access to different parts of the app.

---
### Folder Structure for Navigation
To keep the project organized, we structure our files as follows:
![image](https://github.com/user-attachments/assets/b39615ac-16c6-408f-9daf-554f8513cd48)

---
### Stack Navigation

Stack Navigation manages screens like a stack of cards. The user can navigate forward and backward between screens.

### Tab Navigation
Tab Navigation is used for quickly switching between different sections of an app.

### Drawer Navigation
Drawer Navigation provides a side menu for navigation, typically used for global options.

---
### Passing Data Between Screens

To pass data between screens, use the route.params object:

Sending Data:
```
navigation.navigate('Profile', { username: 'JohnDoe' });
```

Receiving Data:
```
const { username } = route.params;
<Text>Welcome, {username}!</Text>
```

Navigation Functions
```
navigation.navigate('ScreenName') → Go to a screen.
navigation.goBack() → Return to the previous screen.
navigation.replace('ScreenName') → Replace current screen.
navigation.setOptions({ title: 'New Title' }) → Change screen title dynamically.
```
