const HowItWorks = () => {
  const steps = [
    {
      step: '01',
      title: 'Enter Your Keyword',
      description: 'Start by entering a keyword or topic you want to generate content about. This could be a product name, industry term, or any subject you need content for.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=minimal%20search%20interface%20with%20keyword%20input%20field%20dark%20theme&image_size=landscape_4_3'
    },
    {
      step: '02',
      title: 'Choose Scenario & Style',
      description: 'Select from 6 content scenarios and 4 writing styles to match your brand voice. Whether you need professional product descriptions or casual social media posts.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=minimal%20selection%20interface%20with%20style%20options%20dark%20theme%20modern&image_size=landscape_4_3'
    },
    {
      step: '03',
      title: 'Generate & Copy',
      description: 'Click generate and watch as AI creates multiple content pieces in seconds. Copy individual results or export all at once with a single click.',
      image: 'https://neeko-copilot.bytedance.net/api/text2image?prompt=minimal%20content%20generation%20result%20display%20dark%20theme%20modern&image_size=landscape_4_3'
    },
  ];

  const tips = [
    {
      icon: '💡',
      title: 'Be Specific',
      description: 'The more specific your keyword, the better the results. Include details like audience, tone, or key features.'
    },
    {
      icon: '🔄',
      title: 'Experiment',
      description: 'Try different styles and scenarios for the same keyword to see what works best for your needs.'
    },
    {
      icon: '📊',
      title: 'Batch Generate',
      description: 'Generate multiple pieces at once to fill your content calendar or A/B test different variations.'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-4">How It Works</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Creating amazing content has never been easier. Follow these simple steps to get started.
          </p>
        </div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-accent-500/20 rounded-full -z-10"></div>
                  <span className="text-6xl font-bold text-accent-500/20 absolute -right-4 -bottom-4">
                    {step.step}
                  </span>
                  <div className="bg-dark-800 border border-dark-700 rounded-2xl overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center">
                    <span className="text-white font-bold">{step.step}</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white">{step.title}</h2>
                </div>
                <p className="text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Pro Tips</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <div
                key={index}
                className="bg-dark-800 border border-dark-700 rounded-xl p-6 hover:border-accent-500/50 transition-colors"
              >
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="text-white font-semibold mb-2">{tip.title}</h3>
                <p className="text-gray-400 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Start generating high-quality content in seconds. No credit card required.
          </p>
          <button className="px-8 py-4 bg-gradient-accent text-white font-semibold rounded-xl hover:opacity-90 transition-opacity">
            Start Generating Free
          </button>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
