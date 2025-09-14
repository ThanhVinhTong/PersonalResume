import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Calendar, MapPin, TrendingUp, Clock, ChevronRight } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
  {
    title: "Intern Software Engineering",
    company: "Lions Eye Institute",
    location: "Perth, Australia",
    period: "July 2025 - Oct 2025",
    type: "Internship",
    color: "from-blue-500 to-indigo-600",
    achievements: [
      "Collaborated with another software engineer to develop ComBat DesktopApplication using C++/Python with Qt for UI, enabling interactive visualization of optical coherence data from Excel files.",
      "Built Project Nexus, a full-stack collaboration platform with features like project/task management, file uploads, and versioned notes using Next.js, TailwindCSS, ASP.NET C#, PostgreSQL."
    ],
    technologies: ["Python", "Next.js", "TailwindCSS", "ASP.NET", "C#", "PostgreSQL"],
    impact: "Developed research tools",
    duration: "4 months"
  },
  {
    title: "Intern AI Software Engineer",
    company: "SAMSUNG DISPLAY VIETNAM",
    location: "Bac Ninh, Vietnam",
    period: "Aug 2023 - Oct 2023",
    type: "Internship",
    color: "from-green-500 to-emerald-600",
    achievements: [
      "Developed custom-trained U-Net model reducing defect inspection time by 40% for screen anomaly detection.",
      "Built WPF desktop app with SQL Server for real-time defect metrics tracking.",
      "Created Wine-Cart Project: AI-based recommender using TypeScript, FastAPI, Next.js for display calibration."
    ],
    technologies: ["Python", "C#", ".Net", "TypeScript", "FastAPI", "Next.js", "Deep Learning"],
    impact: "40% time reduction",
    duration: "3 months"
  },
  {
    title: "Associate Data Engineer",
    company: "VNPT-MEDIA",
    location: "Ha Noi, Vietnam",
    period: "Oct 2022 - Jun 2023",
    type: "Full-time",
    color: "from-purple-500 to-pink-600",
    achievements: [
      "Designed and maintained 3 batch-processing data pipelines using PySpark for customer behavior analysis on 100M+ telecom records, achieving 2x faster performance than Pandas-based systems."
    ],
    technologies: ["PySpark", "Python", "Pandas", "Big Data"],
    impact: "2x performance improvement",
    duration: "10 months"
  },
  {
    title: "Intern Android Developer",
    company: "SAMSUNG VIETNAM MOBILE R&D CENTER",
    location: "Ha Noi, Vietnam",
    period: "Aug 2022 - Sep 2022",
    type: "Internship",
    color: "from-teal-500 to-cyan-600",
    achievements: [
      "Developed Mobile Game with JavaFX: Created a parody of the 'Bounce' game using Java and JavaFX to demonstrate game logic, UI handling, and score persistence."
    ],
    technologies: ["Java", "JavaFX"],
    impact: "Developed game demo",
    duration: "2 months"
  }
];

export function ProfessionalExperience() {
  return (
    <section className="mb-8">
      <div className="text-center mb-12">
        <h2 className="mb-4">Professional Journey</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My early career experiences building real-world applications and developing technical skills through hands-on learning
        </p>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Simplified Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Timeline dot */}
              <div className={`absolute left-4 top-6 w-4 h-4 bg-gradient-to-r ${exp.color} rounded-full border-3 border-background hidden md:block`}></div>
              
              <Card className="md:ml-16 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="flex items-center gap-2">
                        {exp.title}
                        <Badge variant="outline" className="ml-2">{exp.type}</Badge>
                      </CardTitle>
                      <p className="text-primary mt-1">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {exp.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {exp.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-green-600">{exp.impact}</span>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="mb-3">Key Contributions</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <ChevronRight className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="mb-2">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="relative h-4 hidden md:block">
          <div className="absolute left-4 -top-2 w-4 h-4 bg-gradient-to-r from-gray-300 to-gray-400 rounded-full border-3 border-background"></div>
        </div>
        
        {/* Career summary for graduate */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-4 p-6 bg-card rounded-xl border">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">1+</div>
              <div className="text-xs text-muted-foreground">Years Experience</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">6+</div>
              <div className="text-xs text-muted-foreground">Projects</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">10+</div>
              <div className="text-xs text-muted-foreground">Technologies</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">2025</div>
              <div className="text-xs text-muted-foreground">Graduate</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}