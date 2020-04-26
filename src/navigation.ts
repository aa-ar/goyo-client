import { Navigation } from "react-native-navigation";

import {
  LandingScreen
} from "./modules";
import colors from "./colors";
import fonts from "./fonts";

export const Screens = {
  LandingScreen: "Screens.LandingScreen"
};

const setupNavigation = () => {
  Navigation.registerComponent(Screens.LandingScreen, () => LandingScreen);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      statusBar: {
        style: "light"
      },
      topBar: {
        title: {
          fontFamily: fonts.Inter.Regular
        },
        background: {
          color: colors.tintedWhite
        },
        noBorder: true,
        elevation: 0,
      },
      layout: {
        backgroundColor: colors.tintedWhite
      }
    });

    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: Screens.LandingScreen
              }
            }
          ]
        }
      }
    });
  });
};

export default setupNavigation;
