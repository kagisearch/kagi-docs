# Familiar Dark Theme

User 🅻uci shared a Familiar Dark Theme in the  [Kagi Discord](https://kagi.com/discord) server **\#appearance** channel. 

![Familiar Dark Theme Applied](media/familiar-dark-theme-applied.PNG)

The following only works when you have applied the Dark Theme in your appearance.

![Dark Theme Settings](media/dark-theme-settings.png)

You will also need to make sure the Default Dark Theme is set to "Moon Dark".

![Default_Dark_Theme_Moon](media/default_dark_theme_moon.PNG)

To use this theme apply the following custom CSS in your [Appearance settings](https://kagi.com/settings?p=custom_css).

```css
body, html, * {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.theme_moon_dark {
  --background-color: #202124;
  --header-bg: var(--background-color);
  --control-center-bg: var(--background-color);
  --filter-dd-bg: var(--background-color);
  --result-item-title-border: var(--background-color);
  --result-item-title-visited-border: var(--background-color);
  --result-item-title-border_hover: var(--search-result-title);
  --search-result-date-bg: rgba(255, 255, 255, 0.15);
  --search-result-date-new-bg: rgba(255, 255, 255, 0.15);
  --cheatsh_background: rgba(255, 255, 255, 0.1);
  --kagi-accent: rgba(255, 255, 255, 0.1);
  --tabs-round-bg: rgba(255, 255, 255, 0.1);
  --dd-hover-bg: rgba(255, 255, 255, 0.1);
  --inline-widget-bg: var(--color-secondary-dim_6);
  --dd-list-input-bg: rgba(255, 255, 255, 0.1);
  --control-center-dd-list-bg_hover: rgba(255, 255, 255, 0.1);
  --related-item-bg: rgba(255, 255, 255, 0.1);
  --btn-group-bg: rgba(255, 255, 255, 0.1);
  --video-item-bg: rgba(255, 255, 255, 0.1);
  --search-result-title: #8ab4f8;
  --color_link: var(--search-result-title);
  --color-primary_visited: #c58af9;
  --search-result-title-hover: var(--search-result-title);
  --color-primary_hover: var(--search-result-title-hover);
  --footer-bg: #171717;
  --m_sri_gap_color: var(--background-color);
  --site_info_bottom_bg: transparent;
  --site_info_bg: var(--background-color);
  --search-result-gap: 32px;
}
.theme_moon_dark ._0_more_search_box {
  border-radius: inherit;
}
.theme_moon_dark ._0_more_search_user_bangs_list {
  padding-bottom: 0;
}
.theme_moon_dark ._0_more_search_box_share_button {
  margin-bottom: 0;
}
.theme_moon_dark .k_ui_dropdown_data_list {
  padding: 0;
  border-radius: 12px;
  top: 28px !important;
}
.theme_moon_dark .k_ui_dropdown_data_list .list_items {
  border-radius: 12px;
  margin-bottom: 0;
}
.theme_moon_dark .k_ui_dropdown_data_list .list_items > a {
  padding: 6px 25px !important;
  border-radius: 0;
}
.theme_moon_dark .k_ui_dropdown_data_list .list_items > a:hover {
  border-radius: unset !important;
}
.theme_moon_dark .k_ui_dropdown_data_list hr {
  margin: 0;
}
.theme_moon_dark .box:hover {
  outline: 2px solid var(--color-primary_hover);
}
.theme_moon_dark .videoResultItem, .theme_moon_dark ._0_img-results .item, .theme_moon_dark .newsResultItem .newsResultBody .newsResultImage img {
  border-radius: 12px;
}
.theme_moon_dark ._0_img-results .item .imageInfo > div.b {
  background: linear-gradient(360deg, rgba(0, 0, 0, 0.6) 0, rgba(0, 0, 0, 0) 100%);
}
.theme_moon_dark ._0_img-results .item .imageInfo > div.t {
  background: linear-gradient(360deg, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0.6) 100%);
}
.theme_moon_dark .clipboardCopy ._0_copied_tooltip {
  background-color: rgba(13, 13, 14, 0.9);
}
.theme_moon_dark .sri-group .__dl {
  padding-bottom: 0;
}
.theme_moon_dark ._0_img-results .item img {
  object-fit: cover;
}
.theme_moon_dark .main-footer {
  padding-bottom: 2rem;
}
.theme_moon_dark ._0_queryInfo {
  padding: 0;
}
.theme_moon_dark .__sri-title .__sri_title_link, .theme_moon_dark .__srgi-title {
  font-weight: 600;
}
.theme_moon_dark .__sri-title .__sri_title_link b, .theme_moon_dark .__srgi-title b {
  font-weight: 800;
}
.theme_moon_dark ._0_page-seperator {
  border-bottom: 1px dashed var(--color-primary-dim_1);
}
.theme_moon_dark .related-searches:empty {
  margin-top: 30px;
}
.theme_moon_dark .mob .auto_item {
  padding: 6px 10px;
}
.theme_moon_dark .mob #m_wiki {
  color: var(--color-secondary-dim_6);
}
.theme_moon_dark .mob #m_wiki .collapse-icon {
  color: var(--color-primary);
}
.theme_moon_dark .mob #m_wiki .wiki-content a {
  text-decoration: underline;
}
.theme_moon_dark .auto_suggestions .auto_suggestions_lenses {
  border-top: none;
}
