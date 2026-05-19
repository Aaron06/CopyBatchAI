import { Link } from 'react-router-dom';

const Home = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Fast Generation',
      description: 'Generate multiple high-quality copies in seconds.'
    },
    {
      icon: '🎨',
      title: 'Multiple Styles',
      description: 'Choose from Professional, Casual, Creative or Concise.'
    },
    {
      icon: '📱',
      title: 'Any Platform',
      description: 'Perfect for social media, blogs, emails and more.'
    },
    {
      icon: '🔒',
      title: 'Secure & Private',
      description: 'Your data stays with you. No storage on our servers.'
    }
  ];

  const testimonials = [
    {
      content: 'CopyBatch AI has revolutionized our content workflow. We\'ve cut our content creation time by 80%.',
      author: 'Sarah Chen',
      role: 'Marketing Director at TechStart'
    },
    {
      content: 'The best AI copywriting tool I\'ve used. Simple, fast, and produces amazing results.',
      author: 'Mike Johnson',
      role: 'Freelance Content Creator'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-dark-800 border border-dark-700 rounded-full mb-8">
              <span className="w-2 h-2 bg-accent-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-gray-400">5 Free Generations Daily</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              AI-Powered
              <span className="text-gradient"> Bulk Content</span>
              <br /> Generation
            </h1>
            
            <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
              Create high-quality copy for any platform in seconds. 
              Perfect for marketers, content creators, and businesses.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/generator"
                className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
              >
                Start Generating Free
              </Link>
              <Link
                to="/how-it-works"
                className="px-8 py-4 bg-dark-800 border border-dark-700 text-white font-semibold rounded-xl hover:bg-dark-700 transition-colors"
              >
                Learn How It Works
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Why Choose CopyBatch AI</h2>
            <p className="text-gray-400">Powerful features designed for content creators</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent-500/50 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">What Our Users Say</h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-dark-900 border border-dark-700 rounded-xl p-8">
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-accent rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">{testimonial.author[0]}</span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-dark-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Supercharge Your Content?</h2>
          <p className="text-gray-400 mb-8">
            Start generating high-quality content today. Free tier available.
          </p>
          <Link
            to="/generator"
            className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity"
          >
            Get Started Free
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
