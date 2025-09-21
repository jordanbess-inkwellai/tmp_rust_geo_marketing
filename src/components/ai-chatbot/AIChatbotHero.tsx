'use client';

import { motion } from 'framer-motion';
import { 
  ChatBubbleLeftRightIcon,
  MagnifyingGlassIcon,
  BoltIcon,
  GlobeAltIcon,
  CpuChipIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function AIChatbotHero() {
  const capabilities = [
    { icon: ChatBubbleLeftRightIcon, text: 'Natural Language' },
    { icon: MagnifyingGlassIcon, text: 'Spatial Search' },
    { icon: BoltIcon, text: 'Real-time Answers' },
    { icon: GlobeAltIcon, text: 'Geographic Context' },
  ];

  const sampleQueries = [
    "Show me all flood zones within 5 miles of downtown",
    "What's the population density around military bases?",
    "Find infrastructure projects near earthquake fault lines",
    "Identify agricultural areas affected by recent drought"
  ];

  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-emerald-900 via-teal-800 to-cyan-900 text-white overflow-hidden">
      {/* Background AI Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12 animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/5 to-transparent transform skew-y-12" />
        {/* Neural Network Pattern */}
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* AI Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-emerald-600/20 border border-emerald-400/30 rounded-full text-emerald-300 text-sm font-medium"
            >
              <BoltIcon className="w-4 h-4 mr-2" />
              POWERED BY ADVANCED AI & ML
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold leading-tight"
            >
              Geospatial
              <span className="block text-gradient bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
                AI Chatbot
              </span>
              & Spatial Intelligence
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-emerald-100 leading-relaxed max-w-2xl"
            >
              Ask questions in natural language and get intelligent answers about 
              your geospatial data. Powered by advanced LLMs, RAG technology, 
              and spatial reasoning engines.
            </motion.p>

            {/* Key Capabilities */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg"
                >
                  <capability.icon className="w-8 h-8 text-emerald-400 mb-2" />
                  <span className="text-sm text-center font-medium">{capability.text}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Sample Queries */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="space-y-3"
            >
              <h3 className="text-lg font-semibold text-emerald-200">Try asking questions like:</h3>
              <div className="space-y-2">
                {sampleQueries.map((query, index) => (
                  <motion.div
                    key={query}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center text-sm text-emerald-100 bg-white/5 rounded-lg p-3"
                  >
                    <ChatBubbleLeftRightIcon className="w-4 h-4 text-emerald-400 mr-3 flex-shrink-0" />
                    "{query}"
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="btn bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg">
                Try Interactive Demo
              </button>
              <button className="btn bg-transparent border-2 border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg">
                See Query Examples
              </button>
            </motion.div>
          </motion.div>

          {/* Right Column - Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            {/* Main Chat Interface */}
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-emerald-500/20 rounded-3xl blur-3xl transform scale-110" />
              
              {/* Chat Interface */}
              <div className="relative bg-gradient-to-br from-gray-900/90 to-black/90 backdrop-blur-lg border border-white/20 rounded-2xl p-6">
                {/* Chat Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse" />
                    <span className="text-emerald-400 text-sm font-medium">GEOSPATIAL AI ASSISTANT</span>
                  </div>
                  <div className="text-xs text-gray-400">
                    Multi-LLM • RAG Enabled
                  </div>
                </div>

                {/* Chat Messages */}
                <div className="space-y-4 mb-6 max-h-96 overflow-y-auto">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-br-md p-3 max-w-xs">
                      <div className="text-sm">Show me all hospitals within 10 miles of San Francisco downtown that are near fault lines</div>
                    </div>
                  </div>

                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white rounded-2xl rounded-bl-md p-4 max-w-md">
                      <div className="text-sm mb-3">I found 12 hospitals within 10 miles of downtown San Francisco. Of these, 8 are located within 2 miles of known fault lines:</div>
                      
                      {/* Results Preview */}
                      <div className="bg-gray-800 rounded-lg p-3 mb-3">
                        <div className="text-xs text-gray-400 mb-2">TOP RESULTS:</div>
                        <div className="space-y-1 text-xs">
                          <div className="flex justify-between">
                            <span>UCSF Medical Center</span>
                            <span className="text-yellow-400">0.3mi from fault</span>
                          </div>
                          <div className="flex justify-between">
                            <span>SF General Hospital</span>
                            <span className="text-yellow-400">0.8mi from fault</span>
                          </div>
                          <div className="flex justify-between">
                            <span>California Pacific Med</span>
                            <span className="text-red-400">1.2mi from fault</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-xs text-gray-400">
                        🗺️ View on map • 📊 Export data • 🔍 Refine search
                      </div>
                    </div>
                  </div>

                  {/* User Follow-up */}
                  <div className="flex justify-end">
                    <div className="bg-emerald-600 text-white rounded-2xl rounded-br-md p-3 max-w-xs">
                      <div className="text-sm">What's the seismic risk level for these facilities?</div>
                    </div>
                  </div>

                  {/* AI Typing Indicator */}
                  <div className="flex justify-start">
                    <div className="bg-gray-700 text-white rounded-2xl rounded-bl-md p-3 max-w-xs">
                      <div className="flex items-center space-x-2">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-emerald-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                        <span className="text-xs text-gray-400">Analyzing seismic data...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Chat Input */}
                <div className="border-t border-gray-700 pt-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex-1 bg-gray-800 rounded-full px-4 py-2 flex items-center">
                      <input
                        type="text"
                        placeholder="Ask about your geospatial data..."
                        className="bg-transparent text-white placeholder-gray-400 flex-1 text-sm focus:outline-none"
                      />
                      <MagnifyingGlassIcon className="w-4 h-4 text-gray-400" />
                    </div>
                    <button className="w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center hover:bg-emerald-700 transition-colors">
                      <BoltIcon className="w-5 h-5 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center text-white/60">
          <span className="text-sm mb-2">Explore AI Capabilities</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full animate-bounce mt-2" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}