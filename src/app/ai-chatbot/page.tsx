'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AIChatbotHero from '@/components/ai-chatbot/AIChatbotHero';
import AICapabilities from '@/components/ai-chatbot/AICapabilities';
import SpatialQueryExamples from '@/components/ai-chatbot/SpatialQueryExamples';
import AITechnology from '@/components/ai-chatbot/AITechnology';
import AIUseCases from '@/components/ai-chatbot/AIUseCases';
import AIArchitecture from '@/components/ai-chatbot/AIArchitecture';
import AIPerformance from '@/components/ai-chatbot/AIPerformance';
import AIChatbotContact from '@/components/ai-chatbot/AIChatbotContact';

export default function AIChatbotPage() {
  return (
    <>
      <Header />
      <main>
        <AIChatbotHero />
        <AICapabilities />
        <SpatialQueryExamples />
        <AITechnology />
        <AIUseCases />
        <AIArchitecture />
        <AIPerformance />
        <AIChatbotContact />
      </main>
      <Footer />
    </>
  );
}