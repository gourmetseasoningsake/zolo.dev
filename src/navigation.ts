export interface NavItem {
  slug?: string | undefined;
  path: string;
  title?: string;
  text?: string;
  textLang?: string;
  metaTitle: string;
  metaDescription: string;
}

export const navItemsHeader: NavItem[] = [
  {
    path: "/",
    title: "Startseite",
    text: "Ahoi",
    metaTitle: "Startseite",
    metaDescription: "Startseite",
  },
  {
    path: "/work",
    title: "Jüngste Arbeiten",
    text: "Work",
    textLang: "en",
    metaTitle: "Jüngste Arbeiter",
    metaDescription: "Jüngste Arbeiter",
  },
  {
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    metaTitle: "Kundenportal",
    metaDescription: "Kundenportal",
  },
];

export const navItemsFooter: NavItem[] = [
  {
    path: "/legal",
    title: "Rechtliche Informationen",
    text: "Rechtliches",
    metaTitle: "Rechtliche Informationen",
    metaDescription: "Rechtliche Informationen",
  },
];

export const navItemsPortal: NavItem[] = [
  {
    slug: undefined,
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    metaTitle: "Kundenportal",
    metaDescription: "Kundenportal",
  },
  {
    slug: "finances",
    path: "/portal/finances",
    title: "Kundenportal - Finanzen",
    text: "Finanzen",
    metaTitle: "Kundenportal - Finanzen",
    metaDescription: "Kundenportal - Finanzen",
  },
  {
    slug: "collaborators",
    path: "/portal/collaborators",
    title: "Kundenportal - Beteiligte",
    text: "Beteiligte",
    metaTitle: "Kundenportal - Beteiligte",
    metaDescription: "Kundenportal - Beteiligte",
  },
];

export function makeStaticPathsFn(items: NavItem[]) {
  const staticPaths = items.map(
    ({slug, path, title, text, textLang, metaTitle, metaDescription}) => {
      return {
        params: {slug},
        props: {path, title, text, textLang, metaTitle, metaDescription},
      };
    },
  );
  return function () {
    return staticPaths;
  };
}
