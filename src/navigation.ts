import { Navigation } from "react-native-navigation";

import {
  LandingScreen
} from "./modules";

export const Screens = {
  LandingScreen: "Screens.LandingScreen"
};

const setupNavigation = () => {
  Navigation.registerComponent(Screens.LandingScreen, () => LandingScreen);

  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
      statusBar: {
        style: "light"
      }
    });

    Navigation.setRoot({
      root: {
        bottomTabs: {
          children: [
            {
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
          ]
        }
      }
    });
  });
};

export default setupNavigation;
