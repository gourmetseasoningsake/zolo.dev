type NavGroupName = "header" | "footer" | "portal";
type NavGroups = {
  [key in NavGroupName]?: NavItem[];
};

export interface NavItem {
  navGroups: NavGroupName[];
  slug?: string | undefined;
  path: string;
  title?: string;
  text?: string;
  textLang?: string;
  metaTitle: string;
  metaDescription: string;
}

export const navItems: NavItem[] = [
  {
    navGroups: ["header"],
    path: "/",
    title: "Startseite",
    text: "Ahoi",
    metaTitle: "Web-Entwicklung für kleine Unternehmungen - Jérôme Imfeld",
    metaDescription:
      "Jérôme Imfeld erarbeitet Lösungen für kleine Unternehmungen, die ihre Internetpräsenz verbessern oder Arbeitsflüsse digitalisieren möchten.",
  },
  // {
  //   navGroups: ["header"],
  //   path: "/work",
  //   title: "Jüngste Arbeiten",
  //   text: "Work",
  //   textLang: "en",
  //   metaTitle: "Jüngste Arbeiten - Jérôme Imfeld",
  //   metaDescription: "Auswahl der jüngsten Arbeiten von Jérôme Imfeld.",
  // },
  {
    navGroups: ["header"],
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    metaTitle: "Kundenportal - Jérôme Imfeld",
    metaDescription: "Kundenportal",
  },
  {
    navGroups: ["footer"],
    path: "/legal",
    title: "Rechtliche Informationen",
    text: "Rechtliches",
    metaTitle: "Rechtliche Informationen",
    metaDescription: "Rechtliche Informationen",
  },
  {
    navGroups: ["portal"],
    slug: undefined,
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    metaTitle: "Kundenportal - Jérôme Imfeld",
    metaDescription: "Kundenportal",
  },
  {
    navGroups: ["portal"],
    slug: "finances",
    path: "/portal/finances",
    title: "Kundenportal - Finanzen",
    text: "Finanzen",
    metaTitle: "Kundenportal - Finanzen",
    metaDescription: "Kundenportal - Finanzen",
  },
  {
    navGroups: ["portal"],
    slug: "collaborators",
    path: "/portal/collaborators",
    title: "Kundenportal - Beteiligte",
    text: "Beteiligte",
    metaTitle: "Kundenportal - Beteiligte",
    metaDescription: "Kundenportal - Beteiligte",
  },
];

export const navGroups = navItems.reduce((a: NavGroups, b) => {
  b.navGroups.forEach((group) => {
    if (!a[group]) {
      a[group] = [b];
    } else {
      a[group]!.push(b);
    }
  });
  return a;
}, {});

// TODO: if there is no matching nav item in the list, it should return a nav item to an error page
export function getNavItemByPath(items: NavItem[], path: string): NavItem {
  const item = items.find((item) => item.path === path);
  return item!;
}

export function makeStaticPathsFn(navItems: NavItem[]) {
  const staticPaths = navItems.map((navItem) => {
    return {
      params: {slug: navItem.slug},
      props: navItem,
    };
  });
  return function () {
    return staticPaths;
  };
}
