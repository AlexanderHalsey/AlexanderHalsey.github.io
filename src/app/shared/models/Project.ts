export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  links?: { label: string; url: string }[];
  images?: string[];
}
