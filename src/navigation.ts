export interface NavItemApp {
  slug?: string | undefined;
  path: string;
  title?: string;
  text?: string;
  description?: string;
}

export const navPrimaryItems = [
  {path: "/", title: "Startseite", text: "Ahoi"},
  {path: "/work", title: "Jüngste Arbeiten", text: "Work", textLang: "en"},
  {path: "/portal", title: "Kundenportal", text: "Portal"},
];

export const navSecondaryItems = [
  {path: "/legal", title: "Rechtliche Informationen", text: "Rechtliches"},
];

export const navPortalItems: NavItemApp[] = [
  {
    slug: undefined,
    path: "/portal",
    title: "Kundenportal",
    text: "Portal",
    description: "Kundenportal",
  },
  {
    slug: "finances",
    path: "/portal/finances",
    title: "Kundenportal - Finanzen",
    text: "Finanzen",
    description: "Kundenportal - Finanzen",
  },
  {
    slug: "collaborators",
    path: "/portal/collaborators",
    title: "Kundenportal - Beteiligte",
    text: "Beteiligte",
    description: "Kundenportal - Beteiligte",
  },
];
