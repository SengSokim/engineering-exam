import Image from "next/image";
import Header from "@/app/components/Header";
import Footer from '@/app/components/Footer';

import HeroSection from "@/app/components/HeroSection";
import ValueExamSection from "@/app/components/ValueExamSection";
import ExamTypeSection from "@/app/components/ExamTypeSection";
import CommitteeSection from "@/app/components/CommitteeSection";
import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Engineering Exam',
}
export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <HeroSection />
        <ValueExamSection />
        <ExamTypeSection />
        <CommitteeSection />
      </main>
      <Footer />
    </div>
  );
}
