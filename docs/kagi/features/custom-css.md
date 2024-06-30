# Customizing Kagi CSS

[Cascading Style Sheets](https://en.wikipedia.org/wiki/CSS) (CSS) is a language used to stylize HTML elements in web pages. Using CSS, you can fully customize Kagi's search and landing pages from your [Appearance settings](https://kagi.com/settings?p=custom_css).

> Custom CSS does not apply to Settings pages, and is limited to 10,000 characters.

Use the `no_css` query parameter (for example, `kagi.com/search?q=test&no_css`) to disable your custom CSS if something horribly breaks!

## User Themes

Our users have built and shared many themes. Check out [awesome-kagi-css](https://github.com/kawaiier/awesome-kagi-css/) or themes below.

### Dark Mustard

by [Josh Ellington](https://github.com/joshellington/)  

[**Get it**](https://gist.github.com/joshellington/51765a15d8f780089619b638fc6aea6b)


| ![Dark Mustard Theme](./themes/media/dark_mustard_desktop_1.png){ data-zoomable width="300" style="display: block; margin: 0 auto" } | ![Dark Mustard Theme](./themes/media/dark_mustard_desktop_2.png){ data-zoomable  width="350px" style="display: block; margin: 0 auto"} |
|---:|---:|
| ![Dark Mustard Theme](./themes/media/dark_mustard_mobile_1.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} | ![Dark Mustard Theme](./themes/media/dark_mustard_mobile_2.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} |


<br>

---

<br>

### Kagi Oranginum

by [sefidel](https://gist.github.com/sefidel)  

[**Get it**](https://gist.github.com/sefidel/ffb677da037e4d6951949a110132fe80#file-kagi-precompiled-css)


| ![Kagi Oranginum Theme](./themes/media/kagi_oranginum_desktop_1.png){ data-zoomable width="300" style="display: block; margin: 0 auto" } | ![Kagi Oranginum Theme](./themes/media/kagi_oranginum_desktop_2.png){ data-zoomable  width="350px" style="display: block; margin: 0 auto"} |
|---:|---:|
| ![Kagi Oranginum Theme](./themes/media/kagi_oranginum_mobile_1.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} | ![Kagi Oranginum Theme](./themes/media/kagi_oranginum_mobile_2.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} |


<br>

---

<br>

### Monokai Hack

by [maxpl01t](https://github.com/maxpl01t)  

[**Get it**](https://gist.github.com/maxpl01t/7de6e4716e50d52f4ec14aa01e2047e0)


| ![Monokai Hack Theme](./themes/media/monokai_hack_desktop_1.png){ data-zoomable width="300" style="display: block; margin: 0 auto" } | ![Monokai Hack Theme](./themes/media/monokai_hack_desktop_2.png){ data-zoomable  width="350px" style="display: block; margin: 0 auto"} |
|---:|---:|
| ![Monokai Hack Theme](./themes/media/monokai_hack_mobile_1.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} | ![Monokai Hack Theme](./themes/media/monokai_hack_mobile_2.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} |


<br>

---

<br>

### Nocturnal

by [Kel](https://github.com/Vexz00)  

[**Get it**](https://github.com/Vexz00/kagi-nocturnal-theme/blob/main/kagi-nocturnal-theme.css)


| ![Nocturnal Theme](./themes/media/nocturnal_desktop_1.png){ data-zoomable width="300" style="display: block; margin: 0 auto" } | ![Nocturnal Theme](./themes/media/nocturnal_desktop_2.png){ data-zoomable  width="350px" style="display: block; margin: 0 auto"} |
|---:|---:|
| ![Nocturnal Theme](./themes/media/nocturnal_mobile_1.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} | ![Nocturnal Theme](./themes/media/nocturnal_mobile_2.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} |


<br>

---

<br>

### Minimal Fav Color

by [Matt Rangel](https://github.com/MattRangel)  

[**Get it**](https://github.com/MattRangel/kagi-search-custom-css/blob/main/custom.css)

| ![Minimal Fav Color Theme](./themes/media/minimal_fav_color_desktop_1.png){ data-zoomable width="300" style="display: block; margin: 0 auto" } | ![Minimal Fav Color Theme](./themes/media/minimal_fav_color_desktop_2.png){ data-zoomable  width="350px" style="display: block; margin: 0 auto"} |
|---:|---:|
| ![Minimal Fav Color Theme](./themes/media/minimal_fav_color_mobile_1.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} | ![Minimal Fav Color Theme](./themes/media/minimal_fav_color_mobile_2.png){data-zoomable width="100" height="600" style="display: block; margin: 0 auto"} |


<br>

---

<br>


You can collaborate on themes in the **\#appearance** channel on the [Kagi Discord](https://kagi.com/discord) server or the community-managed [subreddit](https://www.reddit.com/r/KagiUserCSS/).

## Customizations

Apply the following custom CSS in your [Appearance settings](https://kagi.com/settings?p=custom_css).

<details><summary>Remove Underlined Links</summary>

Remove the underline from links from Kagi search results page.

```css

/* Remove bottom border from links */
.__sri_title_link._0_sri_title_link._0_URL {
  border-bottom: none;
}

/* Remove underline with nested links */
.__srgi-title a {
border-bottom: none; var(--result-item-title-border);
}

/* Remove underline with News module */
.newsResultItem .newsResultHeader .newsResultTitle a._0_TITLE {
  border-bottom: none; var(--result-item-title-border);
}

/* Remove underline from links in Wikipedia module */
.wikipediaResult a {
  border-bottom: none; var(--result-item-title-border);
}
```

</details>

<details><summary>Hide Quick Search button</summary>

Hide the floating Quick Search button from Kagi search results page.

```css
.quick-search-btn {
  display: none;
}
```

</details>

## Learn

If you want to learn more about how to customize your Kagi Search CSS, below is a video tutorial. The video features a slightly older design of Kagi Search, but the CSS principles are the same.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/Xpk5TAhGasc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Also, here are some web resources about how to use CSS in general:

- [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps)
- [W3Schools](https://www.w3schools.com/css/css_intro.asp)
- [Khan Academy](https://www.khanacademy.org/computing/computer-programming/html-css/intro-to-css/pt/css-basics)
- [freeCodeCamp](https://www.freecodecamp.org/news/get-started-with-css-in-5-minutes-e0804813fc3e/)
