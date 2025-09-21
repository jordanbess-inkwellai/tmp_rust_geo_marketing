'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  UserGroupIcon,
  ChatBubbleLeftRightIcon,
  HeartIcon,
  CodeBracketSquareIcon,
  ArrowRightIcon,
  StarIcon,
  ClockIcon
} from '@heroicons/react/24/outline';

const communityStats = [
  { label: 'Active Members', value: '12.5K+', icon: UserGroupIcon },
  { label: 'Forum Posts', value: '85K+', icon: ChatBubbleLeftRightIcon },
  { label: 'Code Samples', value: '2.1K+', icon: CodeBracketSquareIcon },
  { label: 'Community Rating', value: '4.9', icon: StarIcon }
];

const forumCategories = [
  {
    name: 'General Discussion',
    description: 'General questions and platform discussions',
    posts: '15.2K',
    members: '8.5K',
    lastActivity: '2 min ago',
    icon: '💬'
  },
  {
    name: 'Developer Help',
    description: 'Technical questions and development support',
    posts: '22.8K',
    members: '6.2K',
    lastActivity: '5 min ago',
    icon: '🔧'
  },
  {
    name: 'Code Sharing',
    description: 'Share code snippets and examples',
    posts: '8.9K',
    members: '4.1K',
    lastActivity: '12 min ago',
    icon: '📝'
  },
  {
    name: 'Feature Requests',
    description: 'Suggest and discuss new features',
    posts: '3.6K',
    members: '2.8K',
    lastActivity: '1 hour ago',
    icon: '💡'
  }
];

const recentPosts = [
  {
    title: 'Best practices for handling large spatial datasets?',
    author: 'Sarah Chen',
    category: 'Developer Help',
    replies: 12,
    views: 340,
    timeAgo: '2 hours ago',
    solved: true,
    avatar: '👩‍💻'
  },
  {
    title: 'New React component for map visualization',
    author: 'Mike Rodriguez',
    category: 'Code Sharing',
    replies: 8,
    views: 156,
    timeAgo: '4 hours ago',
    solved: false,
    avatar: '👨‍💻'
  },
  {
    title: 'Integration with popular GIS software',
    author: 'Jennifer Liu',
    category: 'Feature Requests',
    replies: 15,
    views: 425,
    timeAgo: '6 hours ago',
    solved: false,
    avatar: '👩‍🔬'
  }
];

const communityResources = [
  {
    title: 'Developer Discord',
    description: 'Real-time chat with developers and experts',
    members: '3.2K',
    icon: '💬',
    link: 'Join Discord'
  },
  {
    title: 'GitHub Repository',
    description: 'Open source examples and contributions',
    stars: '8.5K',
    icon: '⭐',
    link: 'View on GitHub'
  },
  {
    title: 'Stack Overflow',
    description: 'Ask questions with #geospatial tag',
    questions: '1.2K',
    icon: '🤔',
    link: 'Ask Question'
  },
  {
    title: 'YouTube Channel',
    description: 'Video tutorials and live streams',
    subscribers: '15K',
    icon: '📺',
    link: 'Subscribe'
  }
];

export default function CommunitySupport() {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-6"
          >
            Community Support
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Join our thriving community of developers, share knowledge, and get help 
            from experts and peers around the world.
          </motion.p>
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {communityStats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center bg-white rounded-xl p-6 shadow-sm"
            >
              <div className="bg-blue-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Forum Categories */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Discussion Forums
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {forumCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="text-2xl mr-4">{category.icon}</div>
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {category.name}
                      </h4>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{category.posts}</div>
                    <div className="text-gray-500">Posts</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{category.members}</div>
                    <div className="text-gray-500">Members</div>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-green-600">{category.lastActivity}</div>
                    <div className="text-gray-500">Last Active</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recent Posts */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Recent Discussions
          </motion.h3>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {recentPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 hover:bg-gray-50 transition-colors cursor-pointer group border-b border-gray-100 last:border-b-0"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start flex-1">
                    <div className="text-2xl mr-4">{post.avatar}</div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <h4 className="text-lg font-medium text-gray-900 group-hover:text-blue-600 transition-colors mr-3">
                          {post.title}
                        </h4>
                        {post.solved && (
                          <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">
                            Solved
                          </span>
                        )}
                      </div>
                      <div className="flex items-center text-sm text-gray-600 space-x-4">
                        <span>by {post.author}</span>
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {post.category}
                        </span>
                        <div className="flex items-center">
                          <ClockIcon className="w-4 h-4 mr-1" />
                          {post.timeAgo}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-right text-sm text-gray-600 ml-4">
                    <div className="font-medium">{post.replies} replies</div>
                    <div>{post.views} views</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Community Resources */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-bold text-gray-900 text-center mb-12"
          >
            Community Resources
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {communityResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow text-center group cursor-pointer"
              >
                <div className="text-4xl mb-4">{resource.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {resource.title}
                </h4>
                <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                <div className="text-blue-600 font-semibold mb-4">
                  {resource.members || resource.stars || resource.questions || resource.subscribers}
                  {resource.members && ' members'}
                  {resource.stars && ' stars'}
                  {resource.questions && ' questions'}
                  {resource.subscribers && ' subscribers'}
                </div>
                <button className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  {resource.link} →
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-12 text-center text-white"
        >
          <HeartIcon className="w-16 h-16 mx-auto mb-6 text-orange-200" />
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Community</h3>
          <p className="text-xl text-orange-100 mb-8 max-w-2xl mx-auto">
            Connect with thousands of developers, share your projects, get help when you need it, 
            and contribute to the future of geospatial development.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors flex items-center">
              Join Community Forum
              <ArrowRightIcon className="w-4 h-4 ml-2" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors">
              Browse Discussions
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}