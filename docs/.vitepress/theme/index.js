import DefaultTheme from "vitepress/theme";
import queryHack from "../custom_scripts/search_query_hack";
import "./custom.scss";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    queryHack();
  },
};
