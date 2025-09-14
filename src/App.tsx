import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ResumeHeader } from "./components/resume-header";
import { ProfessionalExperience } from "./components/professional-experience";
import { PersonalProjects } from "./components/personal-projects";
import { SkillsQualifications } from "./components/skills-qualifications";
import { ContactSection } from "./components/contact-section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { motion } from "motion/react";
import { Toaster } from "./components/ui/sonner";
import { Briefcase, Code, Award, Mail, User } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="container max-w-6xl mx-auto px-4 py-8">
          <Tabs defaultValue="overview" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview" className="flex items-center gap-2">
              <User className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="experience" className="flex items-center gap-2">
              <Briefcase className="h-4 w-4" />
              Experience
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Projects
            </TabsTrigger>
            <TabsTrigger value="skills" className="flex items-center gap-2">
              <Award className="h-4 w-4" />
              Skills
            </TabsTrigger>
            <TabsTrigger value="contact" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Contact
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ResumeHeader />
              
              <div className="text-center py-8">
                <h2 className="mb-4">Welcome to My Professional Portfolio</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
                  Explore my journey as a full-stack developer through the tabs above. From my professional experience 
                  to personal projects, skills, and how to get in touch - everything you need to know about my work and expertise.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">1+</div>
                    <div className="text-sm text-muted-foreground">Year Experience</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">15+</div>
                    <div className="text-sm text-muted-foreground">Projects Completed</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">10+</div>
                    <div className="text-sm text-muted-foreground">Technologies</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">2024</div>
                    <div className="text-sm text-muted-foreground">Graduate</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </TabsContent>

          <TabsContent value="experience" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ProfessionalExperience />
            </motion.div>
          </TabsContent>

          <TabsContent value="projects" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <PersonalProjects />
            </motion.div>
          </TabsContent>

          <TabsContent value="skills" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <SkillsQualifications />
            </motion.div>
          </TabsContent>

          <TabsContent value="contact" className="mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <ContactSection />
            </motion.div>
          </TabsContent>
        </Tabs>
        </div>
      </main>
      
      <Footer />
      <Toaster />
    </div>
  );
}