// .vitepress/config.js
export default {
  title: "apomap partnerAPI",
  description:
    "The official apomap partnerAPI documentation built by apomap GmbH",
  themeConfig: {
    logo: "/logo.png",
    siteTitle: "apomap partnerAPI",
    nav: [
      {
        text: "Changelog",
        items: [{ text: "v0.0.1", link: "/index" }],
      },
    ],
    // socialLinks: [
    //   { icon: "github", link: "https://github.com/Evavic44/adocs" },
    //   { icon: "twitter", link: "https://twitter.com/victorekea" },
    //   { icon: "discord", link: "..." },
    // ],
    sidebar: [
      {
        text: "",
        collapsible: true,
        items: [
          { text: "Introduction", link: "/introduction" },
          { text: "Getting Started", link: "/getting-started" },
        ],
      },
      {
        text: "Types",
        collapsible: true,
        items: [
          { text: "Task (t)", link: "/type-task" },
          { text: "Tour (t)", link: "/type-tour" },
          { text: "Location (t)", link: "/type-location" },
          { text: "Driver (t)", link: "/type-driver" },
        ],
      },
      {
        text: "Requests",
        collapsible: true,
        items: [
          { text: "Authorization", link: "/authorization" },
          { text: "Queries", link: "/queries" },
          { text: "Mutations", link: "/mutations" },
        ],
      },
      {
        text: "Queries",
        collapsible: true,
        items: [
          { text: "Tasks (q)", link: "/query-tasks" },
          { text: "Task (q)", link: "/query-task" },
          { text: "Tours (q)", link: "/query-tours" },
          { text: "Tour (q)", link: "/query-tour" },
          { text: "Drivers (q)", link: "/query-drivers" },
          { text: "Driver (q)", link: "/query-driver" },
          { text: "Locations (q)", link: "/query-locations" },
          { text: "Location (q)", link: "/query-location" },
        ],
      },
      {
        text: "Mutations",
        collapsible: true,
        items: [
          { text: "Task (m)", link: "/mutate-task" },
          { text: "Tour (m)", link: "/mutate-tour" },
          { text: "Driver (m)", link: "/mutate-driver" },
          { text: "Location (m)", link: "/mutate-location" },
        ],
      },
    ],
  },
};
