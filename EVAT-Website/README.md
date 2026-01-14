
# EVAT Mobile Application

## Table of Contents

- Introduction
- Features
- Installation
- Running in Development
- Contributing
- Code Quality
- Git Etiquette
- License
- Contact

---

## Introduction

The EVAT mobile application allows users to find the nearest vehicle charging station efficiently and is designed to streamline vehicle management. This repository contains the DevOps codebase for the EVAT web application.

### Project Repo
https://github.com/Chameleon-company/EVAT-Web-Application

---

## Features

- User Registration
- User Login
- Add Vehicle
- View Vehicle Details

Note: The Application is not as 'featureful' as the Website.

---

## Installation

### Clone the Repository and Install Dependencies Using Comman Line
To get started with the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/<yourusername>/EVAT-web-application.git
    ```

2. Navigate to the project directory:
    ```bash
    cd EVAT-web-application
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

### Alternative, Use GitHub Desktop
1. Download and Install GitHub Desktop. https://github.com/apps/desktop. Follow the installation process on the website if you are confused.
2. Sign in to GitHub via GitHub Desktop. Confirm log in by click File > Options > Accounts.
3. Clone the repo by clicking File > Clone Repository...
4. Go to the URL tab and paste the project repository path from above. set the clone directory
5. Open terminal and navigate to the clone directory that you just set.
6. Install dependencies with `npm install`

### Download, Install and Set Up Android Studio to run a Virtual Device
1. Download and install Android Studio. https://developer.android.com/studio.
   - Click 'Next' until the install is complete. The default options should include `Android SDK` and `Android Virtual Device`. These are all you need for now.
2. Install Android 14.0
   - Open Android Studio. It may ask you to install additional components. Accept them and continue.
   - Click on `More Actions` and select `SDK Manager`.
   - Click on `Show Package Details` below the list container. 
   - Go to `Android 14.0 ("UpsideDownCake")` with the API Level of 34. Select `Android SDK Platform 34` and `Sources for Android 34`.
   - Click `Apply`.
3. Install build tools.
   - Click on `More Actions` and select `SDK Manager`.
   - Click on the `SDK Tools` tab.
   - Select `Android Emulator` and `Android SDK Platform-Tools`.
   - Click on `Show Package Details` below the list container.
   - Under `Android SDK Build-Tools`, look for and select `34.0.0`
   - Click `Apply`.
4. Add environment variables
   - Go to the system environment variables.
   - Click `New...` under the System Variables. Fill out the fields:
     - `Variable name: ANDROID_HOME`
     - `Variable value: C:\Users\YourUsername\AppData\Local\Android\Sdk`
   - Click `OK`
   - Double-click on Path. Add the following 3 paths by clicking `New`.
      - `%ANDROID_HOME%\platform-tools`
      - `%ANDROID_HOME%\emulator`
      - `%ANDROID_HOME%\build-tools`
   - Keep clicking `OK` until the environmental variables window is closed.
   - To test that this works, open Command Prompt (not Powershell) and type `echo %ANDROID_HOME%`. It should reply with the path that you just put in.
5. Creating a Virtual Device
   - Open Android Studio. Click on `More Actions` and select `Virtual Device Manager`.
   - Click `Create Virtual Device`.
   - Select a device that supports API 34 (this means anything showing 35+ is not an option). Click `Next`.
   - Name the device and under API select `API 34 "UpsideDownCake"; Android 14.0`.
   - Select a system image and click `Finish`. Note: if the image has not been downloaded before, it will download and might be over 1GB.
   - Click `Finish` once the downlaod is complete.
6. Run the Virtual Device
   - In the Android Studio Device Manager, your new virtual device should appear.
   - Click the play button to start the virtual device.
   - Wait for it to load to the Home screen.
     - If it gets to the Home screen, you can run the Application
     - If not, there is an error
7. Handling an Error
   - Open the terminal to the directory of the repo. Use the following command to find the problem.
   - `npx react-native doctor`
   - Press 'f' or 'e' to fix the issues the remain. Run the doctor line again to check it was successful.
   - If that still does not work, ask an AI to help.

### Backend
For the Application (and Website) to work, you must run the Backend locally. This should change in the future.
Go to https://github.com/Chameleon-company/EVAT-App-BE to follow the steps on how to install and run the backend.

---

## Running in Development

### Backend
If the Backend still needs to be run locally, run the Backend server first. Follow the instructions of the backend README.md to get it running. In short:
- Open a terminal
- Navigate to the local repository clone directory
- Use `npm run server`

### Application
1. Run the Virtual Device in Ardroid Studio.
2. Open a terminal (a second one if running the backend locally).
   - Navigate to the repository directory
   - Use `npm run start`
   - Press `a` for Android or `i` for iOS
3. Wait for Virtual Device to load the Application. It should appear automatically.

### Alternative, use shortcuts
You can use the following commands instead of `npm run start`:
- `npm start` - the same result as `npm run start`
- `npm run android` - skips a step and goes straight to loading the Android app on the virtual device
- `npm run ios` - skips a step and goes straight to loading the iOS app on the virtual device

If you are using Yarn:
- `yarn start`
- `yarn android`
- `yarn ios`

### Important

This can be used by API developers to test their API through POSTMAN.
Development should follow the Feature branch git workflow. Important: Never commit directly to main.
When pulling the latest from GitHub, you may need to run npm install  if any packages were added or removed in past commits. If you are experiencing errors unrelated to the code you are writing (or before writing any), try running npm install.

---

## Contributing

We welcome contributions! Please follow these steps to contribute:

### Creating Branches Using Comman Line

**Fork the repository.** Create a new branch:

```bash
git checkout -b feature/<your-feature>
```

Commit your changes:

```bash
git commit -m 'Add some feature'
```

Push to the branch:

```bash
git push origin feature/<your-feature>
```

### Alternative, Use GitHub Desktop
1. Click the dropdown on the `Current branch`.
2. Click `New branch`.
3. Name the branch `feature/<your-feature>`.
4. Click `Create branch`.

---

## Code Quality

### Linting

Code quality is enforced by ESLint, which is configured as a custom eslint plugin shared across the entire project in `eslintrc.js`. Each package/app requires its own `.eslintrc.js` file.

- Components, component directories, component files, and stories all use PascalCase / UpperCamelCase.
- Variables and functions use camelCase.
- Single quotes for strings.
- Do not use string interpolation for CSS classes.
- Do not use CSS-in-JS, StyledComponents, or Emotion CSS.

---

## Git Etiquette

### Branching

Branches are used for isolated feature development and should always branch from the source they intend to merge into. This means that a branch created from `main` must always end up in `main`.

```bash
Using the example branches of main -> feature-1 -> feature-2…
❌ Do not merge feature-1 into main before feature-2 is merged.
❌ Do not merge feature-2 directly into main, only its parent branch.
✅ Do branch feature-2 from main since it should not depend on feature-1.
Note: If it’s entirely necessary to merge feature-1 before feature-2, ensure that no manual commits are made in feature-2 between the last commit & merge commit to main of feature-1.
```

---

## Commit Messages

There are no hard constraints imposed on commit messaging. Instead, the following guidelines show a best-practice approach to producing consumable commit messaging.
The preferred format for a commit message looks like this. Note that only the body is required:

```bash
# format...
"type?(scope?): body..."

# examples...
"fixed some issue"
"fix: fixed some issue"
"fix(US-123): fixed some issue"
"fix(component): fixed some issue"
```

---

## Commit Types

- **type** refers to what kind of commit is being made. Some example values are:
  - `--build` // related to build processes
  - `--chore` // small cleanup activities or other pedantry
  - `--ci` // related to continuous integration activities
  - `--docs` // documentation work
  - `--feat` // feature work
  - `--fix` // bugfixes or hotfixes
  - `--perf` // performance tuning & optimization
  - `--refactor` // code refactoring
  - `--revert` // reverting previously committed changes
  - `--style` // styling changes
  - `--test` // changes to tests

- **scope** provides context to the commit type, most commonly a MS planner ticket or some project name.
- **body** refers to the bulk of the commit message, which can break up into header and footer sections delimited by newlines.
  - A **header** is the body section on the first line of the commit message.
  - A **footer** is entered a full newline separated from the header and may contain any length of UTF-8 content.

---

## APIs

Here are the APIs that will be used in the EVAT Mobile application:

### User Management

- User Registration API
- User Login API
- User Profile API

### Vehicle Management

- Add Vehicle API
- View Vehicle Details API
- Update Vehicle API
- Delete Vehicle API

### Charging Station

- Find Nearest Charging Station API
- Real-time Charging Station Availability API

### Maps Integration

- Google Maps API (for displaying maps and locations)
- Geolocation API (for getting the user’s current location)

### Backend

- MongoDB API (for database operations)

### License

For the license, the MIT License is a popular choice for open-source projects.
MIT License

Copyright (c) 2024 Chameleon-company

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
 768657f (Readme.md)

---

This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

---

# Getting Started

>**Note**: Make sure you have completed the [React Native - Environment Setup](https://reactnative.dev/docs/environment-setup) instructions till "Creating a new application" step, before proceeding.

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of your React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up _correctly_, you should see your new app running in your _Android Emulator_ or _iOS Simulator_ shortly provided you have set up your emulator/simulator correctly.

This is one way to run your app — you can also run it directly from within Android Studio and Xcode respectively.

## Step 3: Modifying your App

Now that you have successfully run the app, let's modify it.

1. Open `App.tsx` in your text editor of choice and edit some lines.
2. For **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Developer Menu** (<kbd>Ctrl</kbd> + <kbd>M</kbd> (on Window and Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (on macOS)) to see your changes!

   For **iOS**: Hit <kbd>Cmd ⌘</kbd> + <kbd>R</kbd> in your iOS Simulator to reload the app and see your changes!

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [Introduction to React Native](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you can't get this to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
