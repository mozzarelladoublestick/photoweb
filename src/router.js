// src/router.js
import { createRouter, createWebHistory } from "vue-router";

import Header from "./components/Header.vue";
import About from "./components/About.vue";
import People from "./components/People.vue";
import Outdoor from "./components/Outdoor.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Header,
    meta: {
      title: "Sarah Wechselberger",
      metaTags: [
        {
          name: "Sarah Wechselberger Fotografie",
          content:
            "Porträtfotografie und Landschaftsfotografie in Linz Oberösterreich und Vorarlberg. Paarfotografie, Familien, Verlobungen, Hochzeiten.",
        },
      ],
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "Sarah Wechselberger",
      metaTags: [
        {
          name: "Sarah Wechselberger Fotografie",
          content:
            "Ich bin eine Studentin mit viel Freude an der Fotografie und der Möglichkeit, bedeutende Momente für immer festzuhalten.",
        },
      ],
    },
  },
  {
    path: "/people",
    name: "People",
    component: People,
    meta: {
      title: "Sarah Wechselberger",
      metaTags: [
        {
          name: "Sarah Wechselberger Fotografie",
          content:
            "Porträtfotografie in Linz Oberösterreich und Vorarlberg. Paarfotografie, Familienshooting, Verlobunsshooting, Hochzeitsfotografie.",
        },
      ],
    },
  },
  {
    path: "/outdoor",
    name: "Outdoor",
    component: Outdoor,
    meta: {
      title: "Sarah Wechselberger",
      metaTags: [
        {
          name: "Sarah Wechselberger Fotografie",
          content:
            "Outdoor- und Landschaftsfotografie mit hoher Qualität und viel Freude an Natur, Bergen und Sport wie Wandern, Klettern oder Skifahren. Zuhause in Vorarlberg und Oberösterreich.",
        },
      ],
    },
  },
];

// ...

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// ...

// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));

  next();
});

// ...

export default router;
