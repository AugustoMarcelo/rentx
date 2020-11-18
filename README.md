<h1 align="center">
  <img width="182" alt="RentX" src="./src/images/logo.png">
</h1>

<h1 align="center">
  <img height="500" src="https://res.cloudinary.com/augustomarcelo/image/upload/v1605568293/Rentx-preview.png">
</h1>

## 🚘 RentX | Rocketseat GoStack Rewards

This application offers car rental services to a fictional rental company in the city of Rocketland. The mobile version represents the customer's view (end user).

## 🚀 Index
- ⚙ [Tecnologies](#-tecnologies)
- 💻 [How to run](#-how-to-run)

---

## ⚙ Technologies
  - Expo (fonts, constants)
  - Typescript
  - [@react-navigation](https://reactnavigation.org/)
  - [react-native-swiper](https://github.com/leecade/react-native-swiper) (To create onboarding page)
  - [react-native-calendar-picker](https://github.com/stephy/CalendarPicker)
  - [moment](https://momentjs.com/) (Used by CalendarPicker)
  - [react-native-svg-transformer](https://github.com/kristerkari/react-native-svg-transformer)
  - [rn-range-slider](https://github.com/githuboftigran/rn-range-slider) (To create custom range slider)
  - [react-native-svg](https://github.com/react-native-svg/react-native-svg) (Required by react-native-svg-transformer, see [this gist](https://gist.github.com/AugustoMarcelo/e3b9303ec8eb65ee9d0d0ac6daf73a5b) about how to use svg files in expo projects)
  - [reanimated-bottom-sheet](https://github.com/osdnk/react-native-reanimated-bottom-sheet) (To create bottom sheet filter)
  - [Recoil](https://recoiljs.org/) (Management state library)
---

## 💻 How to run

  > Cloning the repository
  ```bash
    # Cloning repository
    git clone https://github.com/AugustoMarcelo/rentx.git
  ```

  > Some adjustments have been made to the library that provides the calendar. So after running yarn command, access [this gist](https://gist.github.com/AugustoMarcelo/b6b657b71b8f0146e43d17db5b1bdb14), copy and replace the codes in the node_modules folder

  > Running mobile project
  
  > You will need to download the Expo app. When the application starts, scan the qrcode with the Expo you installed.
  ```bash
    # Accessing mobile project
    cd mobile

    # Download dependencies
    yarn

    # Running
    yarn start
  ```
---
