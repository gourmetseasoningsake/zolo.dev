export const navPrimaryItems = [
  { href: "/", title: "Ahoi", text: "Ahoi" },
  { href: "/work", title: "Work", text: "Work" }
]


export const navSecondaryItems = [
  { href: "/legal", title: "Rechtliches", text: "Rechtliches" }
]


export const copyLicense = `CC BY-NC-ND 2017-${(new Date()).getFullYear()}`


export const workPosts = [
  {
    title: "Appointment Scheduler",
    description: "Offene Terminplaner-API zum selber hosten.",
    meta: [
      { key: "Features", value: "Servicepositionen und -gruppen. Multiple Serviceanbieter (Mitarbeiter). Arbeitspläne. Automatische Terminbelegung und E-Mail-Benachrichtigungen." },
      { key: "Front", value: "JSON" },
      { key: "Back", value: "hono, sqlite, bun" },
      { key: "Specs", value: "frei" },
      { key: "Status", value: "WIP" }
    ],
    media: []
  },
  {
    title: "Internet Radio Station",
    description: "Komplettes Setup und Frontend einer privaten Hobbyradiostation. Selbstgehostetes Backend auf einem gebrauchten ThinkCentre M900 Tiny. Schutz und Frontend über Cloudflare.",
    meta: [
      { key: "Front", value: "astro, vue, tailwind" },
      { key: "Back", value: "azuracast, docker, self-hosted, cloudflare" },
      { key: "Specs", value: "frei" },
      { key: "Status", value: "WIP" }
    ]
  },
  {
    title: "Customer Map",
    description: "Geschlossene Web-Applikation, um bestimmte Arbeitsschritte bei der Kundengewinnung zu erleichtern.",
    meta: [
      { key: "Features", value: "Selektive Anzeige von Kundengruppen. Selektive Suche nach Neukunden mittels einstellbarer Schlüsselwörter und Ortschaft. Suchfunktion für Ortschaften und automatische Anzeige aktueller Kennzahlen des Gemeindeportraits. Shortcuts für Telefon, Website und Reiseroute. Ablagefunktion für neue Adressen. Einstellbares Karten-Theme. Dark- und Light-UI." },
      { key: "Front", value: "hybrids, tailwind" },
      { key: "Back", value: "slim, dbdb, gcp, cyon" },
      { key: "Specs", value: "UIS frei, FS teilweise gegeben" },
      { key: "Status", value: "Done" }
    ],
    media: [
      {
        type: "image",
        sourceSet: [
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/800 800w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/600 600w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/2400 2400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/1000 1000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/2000 2000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/1200 1200w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/1400 1400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/d20753c5-a6a9-4041-3810-289675666b00/1600 1600w'
        ],
        alt: "Customer Map in dark mode with reduced default map theme.",
        width: 3,
        height: 2,
        classes: "object-cover object-right-top"
      },
      {
        type: "image",
        sourceSet: [
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/800 800w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/600 600w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/2400 2400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/1000 1000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/2000 2000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/1200 1200w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/1400 1400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/dfbfdc08-a154-4435-f68a-82c3efd29800/1600 1600w'
        ],
        alt: "Customer Map in dark mode with night map theme.",
        width: 3,
        height: 2,
        classes: "object-cover object-right-top"
      },
      {
        type: "image",
        sourceSet: [
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/800 800w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/600 600w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/2400 2400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/1000 1000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/2000 2000w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/1200 1200w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/1400 1400w',
          'https://imagedelivery.net/klp-jTetJGIJ9S2pnnAsDQ/4bf66684-2a41-4b80-90f9-066c0b67ac00/1600 1600w'
        ],
        alt: "Customer Map in light mode with reduced default map theme.",
        width: 3,
        height: 2,
        classes: "object-cover object-right-top"
      }
    ]
  },
]