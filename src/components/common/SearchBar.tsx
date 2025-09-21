'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  XMarkIcon,
  DocumentTextIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  ChatBubbleLeftRightIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  type: 'page' | 'blog' | 'docs' | 'careers' | 'resources';
  url: string;
  category?: string;
}

const mockResults: SearchResult[] = [
  {
    id: '1',
    title: 'Geospatial Analytics Platform',
    description: 'Real-time geospatial analytics and visualization platform for enterprise applications.',
    type: 'page',
    url: '/analytics-demo',
    category: 'Product'
  },
  {
    id: '2',
    title: 'AI-Powered Chatbot Solutions',
    description: 'Intelligent conversational AI with advanced geospatial query capabilities.',
    type: 'page',
    url: '/ai-chatbot',
    category: 'AI Solutions'
  },
  {
    id: '3',
    title: 'Senior Platform Engineer - Remote',
    description: 'Join our engineering team to build next-generation geospatial infrastructure.',
    type: 'careers',
    url: '/careers',
    category: 'Engineering'
  },
  {
    id: '4',
    title: 'Getting Started Guide',
    description: 'Complete guide to integrating our geospatial APIs into your application.',
    type: 'docs',
    url: '/resources',
    category: 'Documentation'
  },
  {
    id: '5',
    title: 'Building Real-time Geospatial APIs',
    description: 'Technical deep-dive into architecting high-performance spatial APIs.',
    type: 'blog',
    url: '/blog',
    category: 'Technical'
  }
];

const getTypeIcon = (type: string) => {
  switch (type) {
    case 'blog':
      return DocumentTextIcon;
    case 'careers':
      return UserGroupIcon;
    case 'docs':
    case 'resources':
      return DocumentTextIcon;
    default:
      return BuildingOfficeIcon;
  }
};

const getTypeColor = (type: string) => {
  switch (type) {
    case 'blog':
      return 'text-blue-600 bg-blue-100';
    case 'careers':
      return 'text-green-600 bg-green-100';
    case 'docs':
    case 'resources':
      return 'text-purple-600 bg-purple-100';
    default:
      return 'text-gray-600 bg-gray-100';
  }
};

interface SearchBarProps {
  className?: string;
  placeholder?: string;
  onResultClick?: (result: SearchResult) => void;
}

export default function SearchBar({ 
  className = '', 
  placeholder = 'Search documentation, blog posts, careers...',
  onResultClick 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Mock search function - in real implementation, this would call your search API
  const performSearch = (searchQuery: string) => {
    if (searchQuery.length < 2) {
      setResults([]);
      return;
    }

    const filtered = mockResults.filter(
      result =>
        result.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        result.category?.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setResults(filtered);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(query);
    }, 200);

    return () => clearTimeout(debounceTimer);
  }, [query]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setActiveIndex(-1);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % results.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => (prev - 1 + results.length) % results.length);
        break;
      case 'Enter':
        e.preventDefault();
        if (activeIndex >= 0 && results[activeIndex]) {
          handleResultClick(results[activeIndex]);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setActiveIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  const handleResultClick = (result: SearchResult) => {
    if (onResultClick) {
      onResultClick(result);
    } else {
      window.location.href = result.url;
    }
    setIsOpen(false);
    setQuery('');
    setActiveIndex(-1);
  };

  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setActiveIndex(-1);
    inputRef.current?.focus();
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      {/* Search Input */}
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" />
        </div>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
            setActiveIndex(-1);
          }}
          onFocus={() => {
            if (query.length >= 2) setIsOpen(true);
          }}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-12 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
          placeholder={placeholder}
        />
        {query && (
          <button
            onClick={clearSearch}
            className="absolute inset-y-0 right-0 pr-3 flex items-center"
          >
            <XMarkIcon className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>
        )}
      </div>

      {/* Search Results */}
      <AnimatePresence>
        {isOpen && results.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden"
          >
            <div className="max-h-96 overflow-y-auto">
              {results.map((result, index) => {
                const IconComponent = getTypeIcon(result.type);
                const typeColorClass = getTypeColor(result.type);
                
                return (
                  <button
                    key={result.id}
                    onClick={() => handleResultClick(result)}
                    className={`w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-150 border-b border-gray-100 last:border-b-0 ${
                      activeIndex === index ? 'bg-blue-50' : ''
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <div className={`p-2 rounded-lg ${typeColorClass}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="text-sm font-semibold text-gray-900 truncate">
                            {result.title}
                          </h4>
                          <ArrowRightIcon className="w-4 h-4 text-gray-400 ml-2 flex-shrink-0" />
                        </div>
                        <p className="text-sm text-gray-600 line-clamp-2 mb-1">
                          {result.description}
                        </p>
                        <div className="flex items-center space-x-2">
                          <span className="text-xs font-medium text-gray-500 capitalize">
                            {result.type}
                          </span>
                          {result.category && (
                            <>
                              <span className="text-xs text-gray-400">•</span>
                              <span className="text-xs text-gray-500">
                                {result.category}
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Footer */}
            <div className="px-4 py-2 bg-gray-50 border-t border-gray-200">
              <div className="flex items-center justify-between text-xs text-gray-500">
                <span>Press ↵ to select, ↑↓ to navigate</span>
                <span className="flex items-center">
                  <span>Powered by</span>
                  <ChatBubbleLeftRightIcon className="w-3 h-3 ml-1" />
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* No Results */}
      <AnimatePresence>
        {isOpen && query.length >= 2 && results.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-4"
          >
            <div className="text-center py-4">
              <MagnifyingGlassIcon className="w-8 h-8 text-gray-400 mx-auto mb-2" />
              <p className="text-gray-500 text-sm">No results found for "{query}"</p>
              <p className="text-gray-400 text-xs mt-1">Try adjusting your search terms</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}