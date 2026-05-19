const Pricing = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out the platform',
      features: [
        '5 generations per day',
        'All 6 content scenarios',
        'All 4 writing styles',
        'Basic copy functionality',
        'Local storage',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'For serious content creators',
      features: [
        'Unlimited generations',
        'All 6 content scenarios',
        'All 4 writing styles',
        'Priority processing',
        'Advanced customization',
        'Export options',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$49',
      period: 'per month',
      description: 'For teams and businesses',
      features: [
        'Everything in Pro',
        'Team collaboration',
        'Custom API access',
        'SLA guarantee',
        'Dedicated account manager',
        'Custom integrations',
        'White-label options',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  const faqs = [
    {
      question: 'Do I need a credit card to sign up?',
      answer: 'No credit card is required for the Free tier. For Pro and Enterprise plans, we offer a 14-day free trial with no credit card required.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or hidden fees.'
    },
    {
      question: 'How does the daily quota work?',
      answer: 'Free users get 5 generations per day. The quota resets at midnight UTC. Pro and Enterprise users have unlimited generations.'
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we take privacy seriously. Your content is generated locally in your browser and we do not store any of your data on our servers.'
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-3xl font-bold text-white mb-4">Pricing</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Simple, transparent pricing for content creators of all sizes
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-dark-800 border rounded-2xl p-8 ${
                plan.popular
                  ? 'border-accent-500 shadow-lg shadow-accent-500/10'
                  : 'border-dark-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-accent text-white text-sm font-semibold rounded-full">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-6">
                <span className="text-4xl font-bold text-white">{plan.price}</span>
                <span className="text-gray-500">/{plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-gray-400">
                    <svg className="w-5 h-5 text-accent-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 rounded-xl font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-accent text-white hover:opacity-90'
                    : 'bg-dark-700 text-gray-300 hover:bg-dark-600'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>

        <div className="bg-dark-800 border border-dark-700 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-dark-700 pb-4">
                <h3 className="text-white font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
