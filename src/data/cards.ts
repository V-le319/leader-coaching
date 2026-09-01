 export interface ResourceGuide {
    title: string;
    description: string;
    href: string;
    image: string;
    labelBg: string;
 }

 export const resourceGuides : ResourceGuide[] = [
    {
    title: "The First-Time Manager's Guide",
    description: "Everything you need to lead your first team with confidence.",
    href: "/resources/first-time-manager-guide",
    image: "/img/walls-io-3AC5V5lZQeI-unsplash.jpg",
    labelBg: "bg-navy"
  },
  {
    title: "8-Day Leadership Mini-Course",
    description: "One short lesson a day to build your management basics.",
    href: "/resources/mini-course",
    image: "/img/sable-flow-o-6GhmpELnw-unsplash.jpg",
    labelBg: "bg-turquoise"
  },
  {
    title: "Strengths Assessment",
    description: "Find the strengths you'll lead best with.",
    href: "/resources/strengths-assessment",
    image: "/img/christina-wocintechchat-com-m-lFntEHwQvi4-unsplash.jpg",
    labelBg: "bg-coral"
  },
  {
    title: "Feedback Scripts Guide",
    description: "What to say in your toughest team conversations.",
    href: "/resources/feedback-scripts",
    image: "/img/christina-wocintechchat-com-m-PlikkWB79qs-unsplash.jpg",
    labelBg: "bg-yellow"
  },
];

export interface CoachingProgram {
  title: string;
  description: string;
  href: string;
  accentColor: string;
}

export const coachingPrograms: CoachingProgram[] = [
  {
    title: "New Manager Bootcamp",
    description: "The essentials for your first 90 days leading a team.",
    href: "/coaching/bootcamp",
    accentColor: "bg-red-500",
  },
  {
    title: "Signature Coaching",
    description: "Ongoing 1:1 coaching built around your goals.",
    href: "/coaching/signature",
    accentColor: "bg-amber-400",
  },
  {
    title: "Executive Coaching",
    description: "For leaders managing managers.",
    href: "/coaching/executive",
    accentColor: "bg-slate-900",
  },
   {
    title: "Team Workshops",
    description: "Group sessions to build shared management language across your team.",
    href: "/coaching/team-workshops",
    accentColor: "bg-turquoise",
  },
];