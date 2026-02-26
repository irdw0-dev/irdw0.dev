export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  bio: string | null;
  avatar_url: string;
  html_url: string;
  public_repos: number;
  followers: number;
  following: number;
  location: string | null;
  company: string | null;
  blog: string | null;
  hireable: boolean | null;
  created_at: string;
}

export interface Project {
  id: number;
  name: string;
  description: string;
  language: string;
  url: string;
  stars: number;
  forks: number;
}

export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'database' | 'tool';
}
