export interface IJoinOurTeam {
  title: string
  salary: string
  status: 'Open' | 'Closed'
}
export interface JobDescription {
  icon: string;
  label: string;
}

export interface IJobDetail {
  jobTitle: string;
  salaryRange: string;
  description: string;
  jobRequirement: string[];
  jobResponsible: string[];
}
