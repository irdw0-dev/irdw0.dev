import SpotlightBackground from '@/components/SpotlightBackground';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Experience from '@/components/Experience';
import Contact from '@/components/Contact';
import { fetchGitHubUser, fetchGitHubRepos, fallbackRepos } from '@/lib/github';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  // Fetch data from GitHub API
  const [user, repos] = await Promise.all([
    fetchGitHubUser(),
    fetchGitHubRepos(),
  ]);

  // Use fallback data if API fails
  const displayRepos = repos.length > 0 ? repos : fallbackRepos;

  return (
    <main className="relative min-h-screen">
      <SpotlightBackground />
      
      <div className="relative z-10">
        <Hero
          name={user?.name || 'Felipe Reis'}
          bio={user?.bio || null}
          avatarUrl={user?.avatar_url || 'https://avatars.githubusercontent.com/u/51302114?v=4'}
          githubUrl={user?.html_url || 'https://github.com/irdw0-dev'}
        />

        <Projects repos={displayRepos} />

        <Experience />

        <Skills />

        <Contact />
      </div>
    </main>
  );
}
