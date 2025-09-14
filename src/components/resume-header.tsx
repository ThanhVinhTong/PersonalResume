import React from 'react';
import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";

export function ResumeHeader() {
  return (
    <Card className="mb-8">
      <CardContent className="p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Names and Title */}
          <div className="lg:col-span-2">
            <div className="mb-4">
              <h1 className="mb-2">Thanh Vinh Tong</h1>
              <p className="text-muted-foreground">Preferred Name: Vincent Tong</p>
              <p className="text-primary mt-2">Full Stack Software Engineer</p>
            </div>
            
            {/* Summary */}
            <div className="mb-6">
              <h3 className="mb-3">About Me</h3>
              <p className="text-muted-foreground leading-relaxed">
                Recent graduate with strong foundation in full-stack development, passionate about building efficient web applications and solving complex problems.
              </p>
            </div>

            {/* Core Skills */}
            <div>
              <h4 className="mb-3">Core Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {["Next.js", ".NET", "JavaScript", "Python", "C#", "Java"].map((skill) => (
                  <Badge key={skill} variant="secondary">{skill}</Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <div>
              <h4 className="mb-3">Contact Information</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <span>+61 481 789 234</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p>vinhtongthanh57@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Personal</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Briefcase className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p>vincent.tong369@gmail.com</p>
                    <p className="text-sm text-muted-foreground">Work</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <span>Perth, Western Australia</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div>
              <h4 className="mb-3">Education</h4>
              <div className="space-y-2">
                <div>
                  <p>Master of Information Technology</p>
                  <p className="text-sm text-muted-foreground">University of Western Australia</p>
                  <p className="text-sm text-muted-foreground">Feb 2024 - Dec 2025</p>
                </div>
              </div>
              <div className="space-y-2">
                <div>
                  <p>Bachelor of Information Technology</p>
                  <p className="text-sm text-muted-foreground">Hanoi University of Science and Technology</p>
                  <p className="text-sm text-muted-foreground">Aug 2019 - Sep 2023</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}