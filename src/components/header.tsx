import React from 'react';
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from 'react-icons/fa';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-4">
            <div>
              <h1 className="text-xl font-semibold">Thanh Vinh Tong</h1>
              <p className="text-sm text-muted-foreground">Full Stack Developer</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild>
              <a href="mailto:vincent.tong369@gmail.com" aria-label="Email">
                <FaEnvelope size={16} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/ThanhVinhTong" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub size={16} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://www.linkedin.com/in/thanh-vinh-tong-b02b5016b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={16} />
              </a>
            </Button>
            <Button size="sm" className="hidden sm:flex" asChild>
              <a href="https://drive.google.com/file/d/1xCpTlximEhrBQqRudQaplY8tkXzLPMEh/view?usp=sharing" download="ThanhVinhTong_Resume.pdf">
                <span className="mr-2"><FaDownload size={16} /></span>
                Download 1-page Resume
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}