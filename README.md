# BBA Wallet - Android and iOS Wallet Application

This project maintainance for BBA, BTC, BSC, ETH and TRX wallets. Multiple blockchains for cryptocurrency space.

## Installing dependencies

You will need Node, the React Native command line interface, a JDK, and Android Studio.
While you can use any editor of your choice to develop your app, you will need to install Android Studio in order to set up the necessary tooling to build your React Native app for Android.

## Setup Project locally

- Clone BBA Wallet project from github

```
git clone https://github.com/bbachain/bbawallet.git

# install node_modules/
yarn
```

## Start Android

```
# start project
yarn start

# or Android
yarn android
```

## Start iOS

```
# install vendor/
bundle install

# install iOS Pod
npx pod-install ios

# start project
yarn start

# or iOS
yarn ios
```
