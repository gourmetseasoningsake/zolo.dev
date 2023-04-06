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
    metaTitle: "Web-Entwicklung für kleine Unternehmungen - Jérôme Imfeld",
    metaDescription:
      "Jérôme Imfeld erarbeitet Lösungen für kleine Unternehmungen, die ihre Internetpräsenz verbessern oder Arbeitsflüsse digitalisieren möchten.",
  },
  {
    path: "/work",
    title: "Jüngste Arbeiten",
    text: "Work",
    textLang: "en",
    metaTitle: "Jüngste Arbeiten - Jérôme Imfeld",
    metaDescription: "Auswahl der jüngsten Arbeiten von Jérôme Imfeld.",
  },
  {
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    metaTitle: "Kundenportal - Jérôme Imfeld",
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

// TODO: if there is no matching nav item in the list, it should return a nav item to an error page
export function getNavItemByPath(items: NavItem[], path: string): NavItem {
  const item = items.find((item) => item.path === path);
  return item!;
}

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
