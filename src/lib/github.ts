import { GitHubRepo, GitHubUser } from '@/types';

const GITHUB_USERNAME = 'irdw0-dev';
const GITHUB_API_BASE = 'https://api.github.com';

export async function fetchGitHubUser(): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${GITHUB_USERNAME}`, {
      headers: {
        'Accept': 'application/vnd.github.v3+json',
      },
      next: { revalidate: 3600 }, // Revalidate every hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching GitHub user:', error);
    return null;
  }
}

export async function fetchGitHubRepos(): Promise<GitHubRepo[]> {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
        },
        next: { revalidate: 3600 },
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }

    const repos = await response.json();
    
    // Filter out config repos and forks, prioritize repos with descriptions
    return repos
      .filter((repo: GitHubRepo) => 
        !repo.fork && 
        !repo.name.includes('config') &&
        repo.name !== 'lipecoding'
      )
      .sort((a: GitHubRepo, b: GitHubRepo) => {
        // Prioritize repos with descriptions
        if (a.description && !b.description) return -1;
        if (!a.description && b.description) return 1;
        return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
      });
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    return [];
  }
}

// Fallback data in case API fails
export const fallbackRepos: GitHubRepo[] = [
  {
    id: 1,
    name: 'CoreStore',
    description: 'Projeto final de semestre - Criação de uma loja virtual de Jogos em Java',
    html_url: 'https://github.com/irdw0-dev/CoreStore',
    language: 'Java',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-01-15T20:05:03Z',
    fork: false,
  },
  {
    id: 2,
    name: 'CoreStore-CSharp',
    description: 'Remake do projeto CoreStore em CSharp',
    html_url: 'https://github.com/irdw0-dev/CoreStore-CSharp',
    language: 'C#',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-01-15T20:04:38Z',
    fork: false,
  },
  {
    id: 3,
    name: 'FoodAPI',
    description: 'Api feita para um aplicativo de entrega de comida.',
    html_url: 'https://github.com/irdw0-dev/FoodAPI',
    language: 'C#',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-10-02T23:08:32Z',
    fork: false,
  },
  {
    id: 4,
    name: 'BasicoFacil-API',
    description: 'Api desenvolvida para projeto da faculdade, formulário para coleta e disposição de dados sobre acesso a saneamento básico.',
    html_url: 'https://github.com/irdw0-dev/BasicoFacil-API',
    language: 'C#',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-11-08T09:09:36Z',
    fork: false,
  },
  {
    id: 5,
    name: 'BAC-BankAccountControl',
    description: 'Sistema de controle de contas bancárias desenvolvido em C#',
    html_url: 'https://github.com/irdw0-dev/BAC-BankAccountControl',
    language: 'C#',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-03-18T19:02:42Z',
    fork: false,
  },
  {
    id: 6,
    name: 'ProjectBot',
    description: 'Bot desenvolvido em JavaScript para automação de tarefas',
    html_url: 'https://github.com/irdw0-dev/ProjectBot',
    language: 'JavaScript',
    stargazers_count: 0,
    forks_count: 0,
    updated_at: '2023-01-15T20:05:53Z',
    fork: false,
  },
];
