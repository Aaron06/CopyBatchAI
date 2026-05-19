const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Generate high-quality content in seconds, not minutes. Our AI engine works tirelessly to deliver results instantly.',
      highlights: ['10x faster than manual writing', 'Real-time generation', 'No waiting required']
    },
    {
      icon: '🎨',
      title: 'Multiple Styles',
      description: 'Choose from a variety of writing styles to match your brand voice and audience preferences.',
      highlights: ['Professional', 'Casual', 'Creative', 'Short & Concise']
    },
    {
      icon: '📦',
      title: '6 Built-in Scenarios',
      description: 'Whether you need product descriptions, social media captions, or email marketing copy, we\'ve got you covered.',
      highlights: ['Product Description', 'Social Media', 'YouTube Titles', 'Blog Intros', 'Instagram Captions', 'Email Marketing']
    },
    {
      icon: '📝',
      title: 'Batch Generation',
      description: 'Generate multiple pieces of content at once. Perfect for content calendars and bulk campaigns.',
      highlights: ['Up to 10 pieces at once', 'Consistent quality', 'Save time on repetitive tasks']
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Access CopyBatch AI from anywhere, on any device. Our interface adapts perfectly to your screen.',
      highlights: ['Mobile-first design', 'Tablet support', 'Desktop optimized']
    },
    {
      icon: '🔒',
      title: 'Privacy First',
      description: 'Your data stays yours. We don\'t store your generated content or keywords on our servers.',
      highlights: ['End-to-end encryption', 'No data storage', 'GDPR compliant']
    },
    {
      icon: '💾',
      title: 'Local Storage',
      description: 'Your generation history is stored locally in your browser. Access your content anytime.',
      highlights: ['Automatic saving', 'No account required', 'Cross-session persistence']
    },
    {
      icon: '💰',
      title: 'Free Tier Available',
      description: 'Start generating content for free. No credit card required. Upgrade when you\'re ready.',
      highlights: ['5 free generations/day', 'No credit card', 'Cancel anytime']
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-4">Features</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Everything you need to create amazing content at scale
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent-500/50 transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{feature.description}</p>
              <ul className="space-y-2">
                {feature.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-gray-500 text-xs flex items-center gap-2">
                    <svg className="w-3 h-3 text-accent-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-accent-500/10 to-accent-400/5 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Ready to Supercharge Your Content?</h2>
            <p className="text-gray-400 mb-6">
              Join thousands of content creators who trust CopyBatch AI for their content needs.
            </p>
            <button className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
              Start Generating Free
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
