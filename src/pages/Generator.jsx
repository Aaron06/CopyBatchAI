import { useState, useEffect } from 'react';

const Generator = () => {
  const [keyword, setKeyword] = useState('');
  const [selectedScenario, setSelectedScenario] = useState('product');
  const [selectedStyle, setSelectedStyle] = useState('professional');
  const [count, setCount] = useState(3);
  const [results, setResults] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const [allCopied, setAllCopied] = useState(false);
  const [freeQuota, setFreeQuota] = useState(5);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const scenarios = [
    { id: 'product', name: 'Product Description', icon: '📦' },
    { id: 'social', name: 'Social Media', icon: '📱' },
    { id: 'youtube', name: 'YouTube Title', icon: '📺' },
    { id: 'blog', name: 'Blog Intro', icon: '📝' },
    { id: 'instagram', name: 'Instagram Caption', icon: '📸' },
    { id: 'email', name: 'Email Marketing', icon: '📧' },
  ];

  const styles = [
    { id: 'professional', name: 'Professional' },
    { id: 'casual', name: 'Casual' },
    { id: 'creative', name: 'Creative' },
    { id: 'concise', name: 'Short & Concise' },
  ];

  const mockResults = {
    product: {
      professional: ['Elevate your daily routine with our premium product, crafted for discerning individuals who demand excellence.', 'Experience unparalleled quality with our expertly designed solution, engineered to exceed expectations.', 'Discover the perfect blend of functionality and elegance in our thoughtfully created product line.'],
      casual: ['Check out our awesome product - it\'s perfect for anyone looking to upgrade their game!', 'Our product is super cool and totally worth checking out. You won\'t be disappointed!', 'Looking for something great? Our product has got you covered in the best way possible.'],
      creative: ['Unleash your potential with a product that transforms ordinary moments into extraordinary experiences.', 'Step into a world of endless possibilities with our innovative creation that inspires and delights.', 'Where imagination meets innovation - our product redefines what you thought was possible.'],
      concise: ['Premium quality product for everyday use.', 'Elegant design meets exceptional functionality.', 'Elevate your experience with our expertly crafted solution.'],
    },
    social: {
      professional: ['Discover industry insights and expert tips to grow your business. Follow for valuable content.', 'Stay updated with the latest trends and strategies. Join our community of professionals.', 'Expert advice and actionable insights for ambitious entrepreneurs and business leaders.'],
      casual: ['Hey guys! Just wanted to share some awesome tips I\'ve been loving lately. Hope you enjoy!', 'What\'s up everyone? Here\'s something cool I thought you might like. Let me know what you think!', 'Just a quick post to share some positive vibes and useful stuff. Hope your day is going great!'],
      creative: ['✨ Transform your mindset and unlock new possibilities with these powerful insights ✨', '🚀 Ready to level up? These game-changing ideas will revolutionize your approach! 🚀', '🌟 Discover the secrets to success that others are missing. Your journey starts now! 🌟'],
      concise: ['Daily tips for growth and success.', 'Trending insights you need to know.', 'Join our community of achievers.'],
    },
    youtube: {
      professional: ['Complete Guide to Mastering [Topic] in 2024', 'Expert Strategies for Achieving [Goal] Successfully', 'Ultimate Tutorial: Everything You Need to Know About [Subject]'],
      casual: ['How I Learned [Skill] in Just 30 Days - You Can Too!', 'My Favorite [Topic] Hacks That Actually Work', 'Trying Out [Trend] - Here\'s What Happened'],
      creative: ['[Topic] Changed My Life - Here\'s How It Can Change Yours', 'The Hidden Secrets of [Subject] No One Talks About', 'Why [Topic] Is More Important Than You Think'],
      concise: ['Master [Topic] in Minutes', 'Quick Guide to [Subject]', 'Essential [Topic] Tips'],
    },
    blog: {
      professional: ['In today\'s competitive landscape, understanding [topic] is essential for business success. Let\'s explore why.', 'The future of [industry] is rapidly evolving. Here\'s what you need to know to stay ahead.', 'Expert analysis reveals key trends shaping [field] and how they impact your strategy.'],
      casual: ['Hey there! I\'ve been thinking a lot about [topic] lately, and I wanted to share some thoughts with you.', 'Let\'s talk about [subject] - it\'s something that\'s been on my mind, and I think you\'ll find it interesting.', 'I wanted to dive into [topic] today because it\'s something that affects so many of us. Let\'s explore together!'],
      creative: ['Imagine a world where [concept] becomes reality. That future is closer than you think.', 'The story of [topic] is one of innovation, passion, and relentless pursuit. Let\'s uncover its secrets.', 'What if everything you knew about [subject] was about to change? Prepare to have your mind opened.'],
      concise: ['Why [topic] matters more than ever before.', 'Understanding [subject] in simple terms.', 'Key insights into [topic] for beginners.'],
    },
    instagram: {
      professional: ['Capturing moments that matter. Elevate your feed with purposeful content. #ProfessionalGrowth', 'Crafting stories that resonate. Every post tells a story worth sharing. #ContentCreation', 'Building connections through authentic visuals. Join our journey of growth. #BrandStory'],
      casual: ['Just hanging out and enjoying the day! Hope your weekend is going amazing! 😊', 'Throwback to this awesome moment! Sometimes you just gotta pause and appreciate the good stuff. ✨', 'Chillin\' and working on some fun projects. What are you up to today? Let me know! 👇'],
      creative: ['🎨 Where creativity meets inspiration. Every moment is a canvas waiting to be painted.', '🌈 Embracing the beauty in everyday moments. Life is too short to miss the magic.', '✨ Creating my own sunshine, one post at a time. Join me on this colorful journey!'],
      concise: ['Living in the moment. #Grateful', 'Chasing dreams, one day at a time. #Hustle', 'Finding joy in the little things. #HappyLife'],
    },
    email: {
      professional: ['Dear [Name], We are excited to introduce our latest offering designed specifically for professionals like you.', 'Hi [Name], As a valued member of our community, we wanted to share an exclusive opportunity with you.', 'Dear [Name], Discover how our solution can transform your workflow and boost productivity.'],
      casual: ['Hey [Name]! Just wanted to shoot you a quick note to say hello and share something exciting!', 'Hi [Name], Hope you\'re doing well! I wanted to let you know about something cool we\'ve been working on.', 'Hey there [Name]! Thought you might be interested in this awesome update we just launched.'],
      creative: ['🌟 Exciting news is on its way! Something amazing is about to happen, and you\'re invited. 🌟', '🚀 Buckle up! We\'re about to embark on an incredible journey together. Are you ready? 🚀', '💡 Imagine a world where [benefit]. That world is here, and it starts with this email. 💡'],
      concise: ['Quick update: Check out our latest offering.', 'Important announcement for valued subscribers.', 'Exciting news we think you\'ll love.'],
    },
  };

  useEffect(() => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('copybatch_quota');
    if (savedData) {
      const data = JSON.parse(savedData);
      if (data.date !== today) {
        localStorage.setItem('copybatch_quota', JSON.stringify({ date: today, count: 0 }));
        setFreeQuota(5);
      } else {
        setFreeQuota(Math.max(0, 5 - data.count));
      }
    } else {
      localStorage.setItem('copybatch_quota', JSON.stringify({ date: today, count: 0 }));
    }
  }, []);

  const updateQuota = () => {
    const today = new Date().toDateString();
    const savedData = localStorage.getItem('copybatch_quota');
    if (savedData) {
      const data = JSON.parse(savedData);
      const newCount = data.count + count;
      localStorage.setItem('copybatch_quota', JSON.stringify({ date: today, count: newCount }));
      setFreeQuota(Math.max(0, 5 - newCount));
    }
  };

  const handleGenerate = () => {
    if (!keyword.trim()) {
      return;
    }

    if (freeQuota < count) {
      setShowUpgradeModal(true);
      return;
    }

    setIsGenerating(true);
    setResults([]);

    setTimeout(() => {
      const scenarioResults = mockResults[selectedScenario]?.[selectedStyle] || [];
      const generatedResults = scenarioResults.slice(0, Math.min(count, scenarioResults.length)).map((text, i) => ({
        id: i,
        content: text.replace(/\[Topic\]|\[topic\]|\[subject\]|\[Subject\]|\[Topic\]/g, keyword),
      }));
      setResults(generatedResults);
      setIsGenerating(false);
      updateQuota();
    }, 1500);
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const copyAllToClipboard = async () => {
    try {
      const allText = results.map(r => r.content).join('\n\n---\n\n');
      await navigator.clipboard.writeText(allText);
      setAllCopied(true);
      setTimeout(() => setAllCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-white mb-3">AI Content Generator</h1>
          <p className="text-gray-400">
            {freeQuota > 0 ? (
              <span>You have <span className="text-accent-400 font-semibold">{freeQuota}</span> free generations remaining today</span>
            ) : (
              <span className="text-orange-400">Daily free quota exceeded. <button onClick={() => setShowUpgradeModal(true)} className="text-accent-400 hover:underline">Upgrade now</button></span>
            )}
          </p>
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-6 sm:p-8">
          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Enter Your Keyword</label>
            <input
              type="text"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              placeholder="e.g., Sustainable Fashion, Digital Marketing, Fitness"
              className="w-full bg-dark-900 border border-dark-600 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-accent-500 transition-colors"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-white font-semibold mb-2">Select Scenario</label>
              <div className="grid grid-cols-2 gap-2">
                {scenarios.map((scenario) => (
                  <button
                    key={scenario.id}
                    onClick={() => setSelectedScenario(scenario.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedScenario === scenario.id
                        ? 'bg-accent-500 text-white'
                        : 'bg-dark-900 text-gray-400 hover:bg-dark-700'
                    }`}
                  >
                    <span className="mr-1">{scenario.icon}</span>
                    {scenario.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-white font-semibold mb-2">Select Style</label>
              <div className="grid grid-cols-2 gap-2">
                {styles.map((style) => (
                  <button
                    key={style.id}
                    onClick={() => setSelectedStyle(style.id)}
                    className={`px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      selectedStyle === style.id
                        ? 'bg-accent-500 text-white'
                        : 'bg-dark-900 text-gray-400 hover:bg-dark-700'
                    }`}
                  >
                    {style.name.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-white font-semibold mb-2">Number of Results: {count}</label>
            <input
              type="range"
              min="1"
              max="10"
              value={count}
              onChange={(e) => setCount(parseInt(e.target.value))}
              className="w-full h-2 bg-dark-900 rounded-lg appearance-none cursor-pointer accent-accent-500"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1</span>
              <span>10</span>
            </div>
          </div>

          <button
            onClick={handleGenerate}
            disabled={isGenerating || !keyword.trim()}
            className="w-full py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isGenerating ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Generating...
              </>
            ) : (
              'Generate Content'
            )}
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Results</h2>
              <button
                onClick={copyAllToClipboard}
                className="flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-lg text-gray-400 hover:text-accent-400 hover:border-accent-500/50 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {allCopied ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  )}
                </svg>
                {allCopied ? 'Copied!' : 'Copy All'}
              </button>
            </div>

            <div className="space-y-4">
              {results.map((result, index) => (
                <div
                  key={result.id}
                  className="bg-dark-800 border border-dark-700 rounded-xl p-4 hover:border-dark-600 transition-colors"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <p className="text-gray-300">{result.content}</p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(result.content, index)}
                      className="flex-shrink-0 p-2 hover:bg-dark-700 rounded-lg transition-colors"
                    >
                      <svg className={`w-5 h-5 ${copiedIndex === index ? 'text-accent-400' : 'text-gray-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {copiedIndex === index ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        )}
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8 max-w-md w-full">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Daily Quota Exceeded</h3>
              <p className="text-gray-400 mb-6">
                Upgrade to unlock unlimited content generation and advanced features.
              </p>
              <div className="flex gap-3">
                <button
                  onClick={() => setShowUpgradeModal(false)}
                  className="flex-1 py-3 bg-dark-700 text-gray-300 font-semibold rounded-xl hover:bg-dark-600 transition-colors"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    setShowUpgradeModal(false);
                    window.location.href = '/pricing';
                  }}
                  className="flex-1 py-3 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
                >
                  Upgrade Now
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Generator;
