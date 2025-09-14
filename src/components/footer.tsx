import React from 'react';
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPhone, FaHeart } from 'react-icons/fa';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t bg-background">
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-3">
          {/* Contact Info */}
          <div>
            <h3 className="mb-4">Contact Information</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <FaEnvelope size={16} />
                <a href="mailto:vincent.tong369@gmail.com" className="hover:text-foreground transition-colors">
                vincent.tong369@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone size={16} />
                <a href="tel:+61481789234" className="hover:text-foreground transition-colors">
                  +61 481 789 234
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt size={16} />
                <span>Perth, Western Australia</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <div className="space-y-2 text-sm">
              <a href="#overview" className="block text-muted-foreground hover:text-foreground transition-colors">
                Portfolio Overview
              </a>
              <a href="#experience" className="block text-muted-foreground hover:text-foreground transition-colors">
                Work Experience
              </a>
              <a href="#projects" className="block text-muted-foreground hover:text-foreground transition-colors">
                Personal Projects
              </a>
              <a href="#skills" className="block text-muted-foreground hover:text-foreground transition-colors">
                Skills & Qualifications
              </a>
            </div>
          </div>
          
          {/* Social Links */}
          <div>
            <h3 className="mb-4">Connect With Me</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" asChild>
                <a href="https://github.com/ThanhVinhTong" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <FaGithub size={16} />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <a href="mailto:vincent.tong369@gmail.com" aria-label="Email">
                  <FaEnvelope size={16} />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground mt-3">
              Open to full-time opportunities and freelance projects. Let's build something amazing together!
            </p>
          </div>
        </div>
        
        <Separator className="my-6" />
        
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Thanh Vinh Tong (Vincent Tong). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}