import emoji from "remark-emoji"
export default {
  title: "React Content Loader",
  mdPlugins: [emoji],
  codeSandbox: false,
  htmlContext: {
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "https://codemirror.net/theme/dracula.css"
        }
      ]
    }
  },
  themeConfig: {
    codemirrorTheme: "dracula",
    colors: {
      primary: "#673ab7",
      sidebarBg: "#f3f3f3"
    }
  }
}
