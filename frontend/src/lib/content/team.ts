export type TeamMember = {
  name: string;
  credential?: string;
  title: string;
  image: string;
};

export const teamMembers: TeamMember[] = [
  { name: "Jamie James", credential: "LPC", title: "President & Founder", image: "/Jamie James - LPC.jpg" },
  {
    name: "D'Fawn Downs",
    credential: "LPC",
    title: "Corporate Compliance Officer & Clinical Director",
    image: "/D'Fawn Downs - LPC.jpg",
  },
  { name: "Brandon Martin", title: "CFO", image: "/Brandon Martin.jpg" },
  { name: "Stephanie Caldwell", title: "Parent Relations Director", image: "/Stephanie Caldwell.jpg" },
  { name: "Amber Price", title: "Director of Foster Care", image: "/Amber Price.jpg" },
  { name: "Chloe Burke", title: "Lead Admin", image: "/Chloe Burke.jpg" },
  { name: "Destinee Curry", title: "Administrative Assistant", image: "/Destinee Curry.jpg" },
  { name: "Kamryn Bass", title: "Administrative Assistant", image: "/Kamryn-Bass.jpg" },
  { name: "Stephanie Vaughn", title: "Billing & Placement Specialist", image: "/Stephanie Vaughn.jpg" },
  { name: "Henri Jo Ball", credential: "LPC", title: "Therapist", image: "/Henri.jpg" },
  { name: "Emeka Nnaka", credential: "LPC", title: "Therapist", image: "/Emeka Nnaka - LPC.jpg" },
  { name: "Jessena Varghese", credential: "LPC", title: "Clinical Director", image: "/Jessena Varghese - LPC.jpg" },
  { name: "Brenda Mitchell", credential: "LPC", title: "Therapist", image: "/Brenda Mitchell - LPC.jpg" },
  { name: "Karli Burch", credential: "LPC", title: "Therapist", image: "/Karli Burch - LPC.jpg" },
  { name: "Lori Baker", credential: "LMFT-S", title: "Therapist", image: "/lori.jpg" },
  { name: "Breanna White", credential: "LPC", title: "Therapist", image: "/Breanna White - LPC.jpg" },
  { name: "Jamira Alexander", title: "Therapist", image: "/Jamira Alexander.jpg" },
  { name: "Rebekah Thomas", credential: "LPC-C", title: "Therapist", image: "/rebekah.jpg" },
  { name: "Victori Swinford", title: "Therapist", image: "/Victori.jpg" },
  { name: "Mattea Lear", title: "Therapist", image: "/Mattea.jpg" },
];
