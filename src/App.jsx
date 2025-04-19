
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Mail, Github, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Handwritten Text Recognition & Voice Detection',
    description: 'A system that converts handwritten text to audio for visually impaired individuals.',
    tech: ['Python', 'OpenCV', 'TensorFlow'],
    link: 'https://www.researchgate.net/publication/371404614_Handwritten_Text_Recognition_and_Voice_Detection'
  },
  {
    title: 'Website Traffic Analytics',
    description: 'Real-time web analytics pipeline built on AWS using Lambda, S3, and SageMaker.',
    tech: ['AWS', 'SageMaker', 'Lambda', 'API Gateway'],
    link: ''
  },
  {
    title: 'No Cell Left Behind',
    description: 'Physics-based tracking of every cell in a dense colony using NetworkX.',
    tech: ['Python', 'NetworkX', 'Matplotlib'],
    link: ''
  },
  {
    title: 'Speech Emotion Recognition using VAE',
    description: 'Model to detect emotion from audio using Variational Autoencoders.',
    tech: ['Python', 'VAE', 'Librosa'],
    link: ''
  }
];

const achievements = [
  'TA for Computer Systems & C Programming @ UC Irvine',
  'Data Analyst Intern at Ernst & Young',
  'Community Coding Workshop Leader – Taught data science basics to underserved students',
  'AWS SageMaker ML Deployment for Content Platform',
  'Healthcare Research Project on Centenarian Longevity with LiveGood, Inc.',
  'Top Contributor @ Rotary Club for STEM Education',
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white px-6 py-12">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-bold text-center mb-4">Saanvi Shankar</h1>
        <p className="text-center text-lg text-gray-300 mb-8">
          Data Scientist | ML Engineer | Healthcare + Sustainability Advocate
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <a href="mailto:saanvis2@uci.edu"><Mail /></a>
          <a href="https://github.com/saanvishankar"><Github /></a>
          <a href="https://linkedin.com/in/saanvishankar"><Linkedin /></a>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <Card key={idx} className="bg-gray-800">
                <CardContent>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-2">{project.description}</p>
                  <p className="text-sm text-gray-500 mb-2">Tech: {project.tech.join(', ')}</p>
                  {project.link && <a href={project.link} target="_blank" rel="noopener" className="text-blue-400 underline">View Project</a>}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Achievements</h2>
          <ul className="list-disc list-inside text-gray-300 space-y-2">
            {achievements.map((ach, idx) => (
              <li key={idx}>{ach}</li>
            ))}
          </ul>
        </section>

        <section className="text-center">
          <Button variant="outline" asChild>
            <a href="/resume_saanvi_shankar.pdf" download>Download My Resume</a>
          </Button>
        </section>
      </motion.div>
    </div>
  );
}
