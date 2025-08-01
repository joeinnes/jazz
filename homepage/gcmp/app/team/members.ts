export interface TeamMember {
  name: string;
  slug: string;
  titles: string[];
  image: string;
  location: string;
  x?: string;
  github?: string;
  website?: string;
  linkedin?: string;
  bluesky?: string;
}

export const team: Array<TeamMember> = [
  {
    name: "Anselm Eickhoff",
    slug: "anselm",
    titles: ["Founder"],
    image: "anselm.jpg",
    location: "London, UK ",
    x: "anselm_io",
    github: "aeplay",
    website: "http://anselm.io",
    bluesky: "anselm.io",
    linkedin: "anselm-eickhoff",
  },
  {
    name: "Guido D'Orsi",
    slug: "guido",
    titles: ["Lead Engineer", "React Performance"],
    image: "guido.jpeg",
    location: "Piano di Sorrento, Italy ",
    github: "gdorsi",
  },
  {
    name: "Giordano Ricci",
    slug: "gio",
    titles: ["Full-Stack Dev", "Observability Expert"],
    location: "Lisbon, Portugal ",
    github: "Elfo404",
    website: "https://giordanoricci.com",
    linkedin: "giordanoricci",
    image: "gio.jpg",
  },
  {
    name: "Meg Culotta",
    slug: "meg",
    titles: ["Technical Project Manager", "QA"],
    location: "Minneapolis, Minnesota, US",
    github: "mculotta120",
    image: "meg.jpg",
  },
  {
    name: "Nikita Voloboev",
    slug: "nikita",
    location: "Barcelona, Spain",
    titles: ["Full-Stack Dev"],
    x: "nikitavoloboev",
    github: "nikitavoloboev",
    website: "https://nikiv.dev",
    image: "nikita.jpg",
  },
  {
    name: "Sammii Kellow",
    slug: "sammii",
    location: "London, UK",
    titles: ["Frontend & Design Engineer", "Marketing"],
    x: "SammiiHaylock",
    github: "sammii-hk",
    website: "https://sammii.dev",
    linkedin: "sammii",
    image: "sammii.jpg",
  },
  {
    name: "Brad Anderson",
    slug: "brad",
    location: "Atlanta, Georgia, US",
    titles: ["React Native Specialist"],
    x: "boorad",
    github: "boorad",
    bluesky: "boorad.bsky.social",
    linkedin: "boorad",
    image: "brad.png",
  },
  {
    name: "Divya S",
    slug: "div",
    location: "New York, US",
    titles: ["Platform Engineer"],
    x: "shortdiv",
    github: "shortdiv",
    website: "https://shortdiv.com",
    bluesky: "shortdiv.bsky.social",
    linkedin: "shortdiv",
    image: "div.jpg",
  },
  {
    name: "Nico Rainhart",
    slug: "nico",
    location: "Buenos Aires, Argentina",
    titles: ["Full-Stack Dev", "Framework Engineer"],
    image: "nico.jpeg",
    github: "nrainhart",
    linkedin: "nicolás-rainhart",
  },
];
