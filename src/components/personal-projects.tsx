import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { FaGithub, FaExternalLinkAlt, FaStar, FaSpinner } from "react-icons/fa";

interface FeaturedProject {
  title: string;
  purpose: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
  featured: boolean;
  achievement?: string;
}

const topProjects: FeaturedProject[] = [
  {
    title: "Tennis Tournament Website",
    purpose: "Offers compact platform for uploading, visualizing, and sharing tennis match results in small club settings",
    description: "A Flask-based web application for tracking tennis tournaments, matches, and player data. Users can upload match data (single or CSV), view analytics, and selectively share results with other users.",
    techStack: ["Flask", "Bootstrap 5", "jQuery", "SQLite"],
    githubUrl: "https://github.com/ThanhVinhTong/Tennis-Tournament",
    liveUrl: "",
    featured: true
  },
  {
    title: "VACareerMatching Platform",
    purpose: "Built for the 2025 VAIT (Vietnamese Aussies in IT) application building contest, to foster meaningful professional connections within the Vietnamese-Australian tech community",
    description: "A networking platform with an intuitive swipe-based interface that matches users based on shared career goals and interests, enabling mentorship, collaboration, and peer discovery among participants in the contest.",
    techStack: ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
    githubUrl: "https://github.com/ThanhVinhTong/VACareerMatch",
    liveUrl: "",
    featured: true,
    achievement: "Out of the Box for creative frontend/UI design"
  },
  {
    title: "Project Nexus",
    purpose: "Built a lightweight full-stack collaboration platform (like Notion/Trello for researchers). Designed and implemented end-to-end features including project/task management, file uploads, and versioned notes.",
    description: "A full-stack collaboration platform designed to help teams manage projects, tasks, files, and research notes in one place. Built as a 1-day sprint by 2 developers, with each person owning end-to-end features (frontend + backend).",
    techStack: ["Next.js", "TailwindCSS", "ASP.NET Core", "C#", "PostgreSQL"],
    githubUrl: "https://github.com/ThanhVinhTong/project-nexus",
    liveUrl: "",
    featured: true
  }
];

// GitHub repository interface
interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  language: string | null;
  stargazers_count: number;
  topics: string[];
  created_at: string;
  updated_at: string;
  fork: boolean;
}

// Featured project names to exclude from GitHub API
const featuredProjectNames = [
  "Tennis-Tournament",
  "VACareerMatch",
  "project-nexus"
];

export function PersonalProjects() {
  const [otherProjects, setOtherProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch GitHub repositories
  useEffect(() => {
    const fetchRepositories = async () => {
      try {
        setLoading(true);
        const response = await fetch('https://api.github.com/users/ThanhVinhTong/repos?per_page=100&sort=updated');
        
        if (!response.ok) {
          throw new Error(`GitHub API error: ${response.status}`);
        }
        
        const repos: GitHubRepo[] = await response.json();
        
        // Filter out featured projects and sort by stars and update date
        const filteredRepos = repos
          .filter(repo => !featuredProjectNames.includes(repo.name))
          .filter(repo => !repo.fork) // Exclude forked repositories
          .sort((a, b) => {
            // Sort by stars first, then by update date
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count;
            }
            return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
          })
          .slice(0, 12); // Limit to 12 projects
        
        setOtherProjects(filteredRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch repositories');
      } finally {
        setLoading(false);
      }
    };

    fetchRepositories();
  }, []);

  // Helper function to get tech stack from language and topics
  const getTechStack = (repo: GitHubRepo): string[] => {
    const techStack: string[] = [];
    
    if (repo.language) {
      techStack.push(repo.language);
    }
    
    // Add relevant topics as tech stack
    const relevantTopics = repo.topics.filter(topic => 
      !['portfolio', 'resume', 'personal', 'website', 'demo'].includes(topic.toLowerCase())
    );
    
    techStack.push(...relevantTopics.slice(0, 3)); // Limit to 3 additional topics
    
    return techStack;
  };

  return (
    <section className="mb-8">
      <h2 className="mb-6">Personal Projects</h2>
      
      {/* Top 3 Featured Projects */}
      <div className="mb-8">
        <h3 className="mb-4 flex items-center gap-2">
          <span style={{ color: '#eab308' }}>
            <FaStar size={20} />
          </span>
          Featured Projects
        </h3>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary flex flex-col h-full">
              <CardHeader>
                <CardTitle className="flex items-start justify-between">
                  <span>{project.title}</span>
                  <Badge variant="default" className="ml-2">Featured</Badge>
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div>
                  <h4 className="mb-2">Purpose</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.purpose}
                  </p>
                </div>
                
                <div>
                  <h4 className="mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {project.achievement && (
                  <div>
                    <h4 className="mb-2">Achievement</h4>
                    <Badge variant="default" className="text-xs">
                      {project.achievement}
                    </Badge>
                  </div>
                )}
                
                <div className="flex gap-2 pt-2 mt-auto">
                  <Button size="sm" variant="outline" className="flex-1 flex items-center justify-center" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <FaGithub size={16} />
                      <span className="ml-2">Code</span>
                    </a>
                  </Button>
                  <Button size="sm" className="flex-1 flex items-center justify-center" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <FaExternalLinkAlt size={16} />
                      <span className="ml-2">Demo</span>
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      
      {/* Other Projects */}
      <div>
        <h3 className="mb-4">Other Projects</h3>
        
        {loading && (
          <div className="flex items-center justify-center py-8">
            <span style={{ animation: 'spin 1s linear infinite' }}>
              <FaSpinner size={24} />
            </span>
            <span className="ml-2">Loading projects from GitHub...</span>
          </div>
        )}
        
        {error && (
          <div className="text-center py-8">
            <p className="text-red-500 mb-2">Failed to load projects</p>
            <p className="text-sm text-muted-foreground">{error}</p>
          </div>
        )}
        
        {!loading && !error && (
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((project) => {
              const techStack = getTechStack(project);
              return (
                <Card key={project.id} className="hover:shadow-md transition-shadow duration-200 flex flex-col h-full">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-base flex items-center justify-between">
                      <span>{project.name}</span>
                      {project.stargazers_count > 0 && (
                        <div className="flex items-center text-sm text-muted-foreground">
                          <FaStar size={16} />
                          <span className="ml-1">{project.stargazers_count}</span>
                        </div>
                      )}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-3 flex-1 flex flex-col">
                    <p className="text-sm text-muted-foreground">
                      {project.description || 'No description available'}
                    </p>
                    
                    {techStack.length > 0 && (
                      <div className="flex flex-wrap gap-1">
                        {techStack.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <div className="flex gap-2 pt-2 mt-auto">
                      <Button size="sm" variant="outline" className="flex-1 flex items-center justify-center" asChild>
                        <a href={project.html_url} target="_blank" rel="noopener noreferrer">
                          <FaGithub size={16} />
                          <span className="ml-2">Code</span>
                        </a>
                      </Button>
                      {project.homepage && (
                        <Button size="sm" className="flex-1 flex items-center justify-center" asChild>
                          <a href={project.homepage} target="_blank" rel="noopener noreferrer">
                            <FaExternalLinkAlt size={16} />
                            <span className="ml-2">Demo</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
        
        {!loading && !error && otherProjects.length === 0 && (
          <div className="text-center py-8">
            <p className="text-muted-foreground">No additional projects found.</p>
          </div>
        )}
      </div>
    </section>
  );
}