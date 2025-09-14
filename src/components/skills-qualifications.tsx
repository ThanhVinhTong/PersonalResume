import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Award, Code, Palette, Database, Cloud, Users, ExternalLink } from "lucide-react";

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code,
    skills: ["Next.js", "JavaScript", "HTML/CSS", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: Database,
    skills: [".Net", "C#", "Python", "MongoDB", "PostgreSQL"]
  },
  {
    title: "Tools & Platforms",
    icon: Cloud,
    skills: ["Git", "Docker", "Vite", "Vercel", "AWS"]
  },
  {
    title: "Other Skills",
    icon: Palette,
    skills: ["Problem Solving"]
  }
];

// Update certifications (formerly soft skills, now Certifications)
const certifications = [
  {
    title: "Basics of Machine Learning",
    issuer: "Codecademy",
    date: "Date not specified",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/Codecademy's%20Basic%20Machine%20Learning%20Coursework/Certificate.png"
  },
  {
    title: "Computer Vision - Image Basics with OpenCV and Python",
    issuer: "Coursera",
    date: "Date not specified",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/Coursera's%20Computer-Vision---Image-Basics-with-OpenCV-and-Python/Coursera_OpenCV_Certificate.jpg"
  },
  {
    title: "Deep Learning Specialization",
    issuer: "Coursera",
    date: "Date not specified",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/Coursera's%20Deep%20Learning%20Specialization/ThanhVinhTong_DL_Specialization_Certificate.pdf"
  }
];

// Update awards array
const awards = [
  {
    title: "Out of The Box Award",
    issuer: "VIETNAMESE AUSSIES IN IT",
    date: "2025",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/VAIT%20Hackathon%20Award/thanhvinhtong_vait_hackathon_2025_out_of_the_box.pdf"
  },
  {
    title: "Best Trainee in Samsung Display Vietnam’s internship",
    issuer: "SAMSUNG DISPLAY VIETNAM",
    date: "2023",
    credentialId: "https://github.com/ThanhVinhTong/Certificates/blob/main/SDV's%20Internship%20Award/TongThanhVinh_Award_SamsungDisplayVietnam.pdf"
  },
  {
    title: "2nd place, SVMC Application Development Contest",
    issuer: "SAMSUNG VIETNAM MOBILE R&D CENTER",
    date: "2022",
    credentialId: ""
  }
];

export function SkillsQualifications() {
  return (
    <section className="mb-8">
      <h2 className="mb-6">Skills & Awards</h2>
      
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Technical Skills */}
        <div className="space-y-6">
          {skillCategories.map((category, index) => (
            <Card key={index}>
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2">
                  <category.icon className="h-5 w-5 text-primary" />
                  {category.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
                {category.title === "Other Skills" && (
                  <div className="mt-4">
                    <a 
                      href="https://leetcode.com/u/vinhtongthanh57/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-primary hover:underline flex items-center gap-1"
                    >
                      LeetCode Profile
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="space-y-6">
          {/* Awards */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-primary" />
                Awards
              </CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-4">
              {awards.map((award, index) => (
                <div key={index} className="border-l-2 border-primary pl-4">
                  <h4 className="font-medium">{award.title}</h4>
                  <p className="text-sm text-muted-foreground">{award.issuer}</p>
                  <div className="flex justify-between items-center mt-1">
                    <p className="text-sm text-muted-foreground">{award.date}</p>
                    {award.credentialId && (
                      <a href={award.credentialId} target="_blank" rel="noopener noreferrer" className="text-primary text-xs hover:underline">
                        View
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          
          {/* Languages */}
          <Card>
            <CardHeader>
              <CardTitle>Languages</CardTitle>
            </CardHeader>
            
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span>English</span>
                <Badge variant="default">Fluent</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span>Vietnamese</span>
                <Badge variant="default">Native</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}