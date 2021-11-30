import { Themes, Theme, ThemeDefault, ThemeCamping } from "../lib/theme";

interface ThemeAction {
  type: Themes;
  payload: string;
}

interface ThemeState {
  theme: string;
}

const ThemeReducer = (state: ThemeState, action: ThemeAction) => {
  const { type, payload } = action;
  let themes: Theme = ThemeDefault;

  switch (type) {
    case Themes.ThemeDefault:
      themes = ThemeDefault;
      return {
        ...state,
        value: payload,
      };
    case Themes.ThemeCamping:
      themes = ThemeCamping;
      return {
        ...state,
        value: payload,
      };
    default:
      return state;
  }

  document.documentElement.style.setProperty("--accentClr", themes.accentClr);
  document.documentElement.style.setProperty(
    "--appHeaderclr",
    themes.appHeaderClr
  );
  document.documentElement.style.setProperty("--bkgClr", themes.bkgClr);
  document.documentElement.style.setProperty("--cardBkgClr", themes.cardBkgClr);
  document.documentElement.style.setProperty("--contentClr", themes.contentClr);
  document.documentElement.style.setProperty(
    "--extLinkActiveClr",
    themes.extLinkActiveClr
  );
  document.documentElement.style.setProperty("--extLinkClr", themes.extLinkClr);
  document.documentElement.style.setProperty(
    "--inputBkgClr",
    themes.inputBkgClr
  );
  document.documentElement.style.setProperty(
    "--inputBorderClr",
    themes.inputBorderClr
  );
  document.documentElement.style.setProperty(
    "--navbarActiveclr",
    themes.navbarActiveClr
  );
  document.documentElement.style.setProperty(
    "--navbarBkgclr",
    themes.navbarBkgClr
  );
  document.documentElement.style.setProperty("--neutralClr", themes.neutralClr);
  document.documentElement.style.setProperty(
    "--scndHeaderClr",
    themes.scndHeaderClr
  );
  document.documentElement.style.setProperty(
    "--scndHeaderClrDark",
    themes.scndHeaderClrDark
  );
  document.documentElement.style.setProperty(
    "--scndHeaderClrLight",
    themes.scndHeaderClrLight
  );
};

export default ThemeReducer;
