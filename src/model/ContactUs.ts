export interface SocialItem {
  name: string;
  icon: string;
  link: string;
}

export interface IContactItem {
  icon: string;
  title: string;
  value?: string;
  link?: string;
  socials?: SocialItem[];
}
