export interface NavItemApp {
  slug: string | undefined;
  href: string;
  title?: string;
  text?: string;
  description?: string;
}

export const navPrimaryItems = [
  {href: "/", title: "Startseite", text: "Ahoi"},
  {href: "/work", title: "Jüngste Arbeiten", text: "Work", textLang: "en"},
  {href: "/portal", title: "Kundenportal", text: "Portal"},
];

export const navSecondaryItems = [
  {href: "/legal", title: "Rechtliche Informationen", text: "Rechtliches"},
];

export const navPortalItems: NavItemApp[] = [
  {
    slug: undefined,
    href: "/portal",
    title: "Kundenportal",
    text: "Portal",
    description: "Kundenportal",
  },
  {
    slug: "finances",
    href: "/portal/finances",
    title: "Kundenportal - Finanzen",
    text: "Finanzen",
    description: "Kundenportal - Finanzen",
  },
  {
    slug: "collaborators",
    href: "/portal/collaborators",
    title: "Kundenportal - Beteiligte",
    text: "Beteiligte",
    description: "Kundenportal - Beteiligte",
  },
];
