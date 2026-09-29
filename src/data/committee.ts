export type CommitteeCategory = "Leadership" | "Secretaries" | "Sports" | "Cultural" | "Executive Committee";

export interface CommitteeMember {
  id: string;
  name: string;
  role: string;
  category: CommitteeCategory;
}

export const committeeMembers: CommitteeMember[] = [
  { id: "1", name: "Shri Samir Kumar Mandal", role: "President", category: "Leadership" },
  { id: "2", name: "Shobhan Chakraborty", role: "Vice President", category: "Leadership" },
  { id: "3", name: "Ranjan Dey", role: "Vice President", category: "Leadership" },
  { id: "4", name: "Tapas Baral", role: "Vice President", category: "Leadership" },
  { id: "5", name: "Mridul Paul", role: "Vice President", category: "Leadership" },
  { id: "6", name: "Shri Abhijit Chakraborty", role: "General Secretary", category: "Secretaries" },
  { id: "7", name: "Subhra Bose", role: "Assistant Secretary", category: "Secretaries" },
  { id: "8", name: "Bikash Ghosh", role: "Assistant Secretary", category: "Secretaries" },
  { id: "9", name: "Haradhan Sarkar", role: "Assistant Secretary", category: "Secretaries" },
  { id: "10", name: "Debabrata Paul", role: "Assistant Secretary", category: "Secretaries" },
  { id: "11", name: "Samir Guha", role: "Office Secretary", category: "Secretaries" },
  { id: "12", name: "Samparna Sarkar", role: "Club Spokesperson", category: "Leadership" },
  { id: "13", name: "Goutam Paul", role: "Treasurer", category: "Leadership" },
  { id: "14", name: "Sanjoy Dutta", role: "Sponsorship/Accountant", category: "Leadership" },
  { id: "15", name: "Kaushik Ray", role: "Sports Secretary — Outdoor", category: "Sports" },
  { id: "16", name: "Malay Dey", role: "Sports Secretary — Outdoor", category: "Sports" },
  { id: "17", name: "Tamal Chanda", role: "Sports Secretary — Outdoor", category: "Sports" },
  { id: "18", name: "Sairat Ray", role: "Sports Secretary — Indoor", category: "Sports" },
  { id: "19", name: "Saurav Kar", role: "Sports Secretary — Indoor", category: "Sports" },
  { id: "20", name: "Nirmal Sen", role: "Sports Secretary — Indoor", category: "Sports" },
  { id: "21", name: "Reshma Dhir Chowdhury", role: "Cultural Secretary", category: "Cultural" },
  { id: "22", name: "Prakash Ghosh", role: "Cultural Secretary", category: "Cultural" },
  { id: "23", name: "Utpal Bhowmick", role: "Executive Committee Member", category: "Executive Committee" },
  { id: "24", name: "Litton Kar", role: "Executive Committee Member", category: "Executive Committee" },
  { id: "25", name: "Kingshuk Chowdhury", role: "Executive Committee Member", category: "Executive Committee" },
  { id: "26", name: "Rajesh Das", role: "Executive Committee Member", category: "Executive Committee" },
  { id: "27", name: "Debatosh Chatterjee", role: "Executive Committee Member", category: "Executive Committee" },
];
