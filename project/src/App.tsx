import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Globe2, Zap, Shield, Clock, UserCog, LineChart as ChartLineUp, Wallet, Blocks } from 'lucide-react';
import { useFlags, useLDClient } from 'launchdarkly-react-client-sdk';

function App() {
  const { learnMore } = useFlags();
  const ldClient = useLDClient();
  const [role, setRole] = useState('visitor');

  const handleRoleChange = () => {
    const newRole = role === 'visitor' ? 'admin' : 'visitor';
    ldClient?.identify({
      kind: 'user',
      key: 'user-key-123abcde',
      email: 'biz@face.dev',
      role: newRole,
      beta: false
    });
    setRole(newRole);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Header */}
      <header className="px-6 py-6 md:px-12 backdrop-blur-lg bg-slate-900/50 sticky top-0 z-50">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Blocks className="w-8 h-8 text-blue-400" strokeWidth={2.5} />
            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CryptoFlow</span>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={handleRoleChange}
              className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                role === 'admin' 
                  ? 'bg-blue-600 hover:bg-blue-700' 
                  : 'bg-slate-800 hover:bg-slate-700'
              }`}
            >
              <UserCog className="w-5 h-5 text-white" />
              <span>{role === 'admin' ? 'Switch to Visitor' : 'Switch to Admin'}</span>
            </button>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a>
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-2 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25">
                Launch App
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-24 md:py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-slate-700">
            <span className="text-blue-400 mr-2">⚡</span>
            <span className="text-slate-300">Now supporting cross-chain transactions</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text leading-tight">
            Enterprise Crypto Infrastructure for the Modern Web
          </h1>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Scale your blockchain operations with institutional-grade APIs, advanced security, and seamless multi-chain support.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25 flex items-center w-full md:w-auto justify-center">
              Start Building 
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            {learnMore ? (
              <button id="learn-more-btn" className="learn-more-btn bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all shadow-lg shadow-emerald-500/25 w-full md:w-auto">
                Learn More
              </button>
            ) : (
              <button className="bg-slate-800 text-white px-8 py-4 rounded-lg hover:bg-slate-700 transition-all border border-slate-700 w-full md:w-auto">
                Contact Enterprise Sales
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/50 to-transparent"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text mb-4">Enterprise Features</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Built for scale, security, and reliability</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <ChartLineUp className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Real-time Analytics</h3>
              <p className="text-slate-400">Advanced blockchain analytics and monitoring across multiple networks.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <Shield className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">MPC Security</h3>
              <p className="text-slate-400">Multi-party computation for institutional-grade key management.</p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all group">
              <Wallet className="w-12 h-12 text-blue-400 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-3 text-white">Multi-chain Support</h3>
              <p className="text-slate-400">Seamless integration with major blockchains and L2 networks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-24 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-slate-300 text-transparent bg-clip-text mb-4">Transparent Pricing</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Scale your infrastructure with predictable costs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Developer',
                price: '499',
                features: ['100K API calls/month', 'Basic Analytics', '5 Team Members', 'Community Support']
              },
              {
                name: 'Business',
                price: '1,499',
                features: ['1M API calls/month', 'Advanced Analytics', 'Unlimited Team', '24/7 Support']
              },
              {
                name: 'Enterprise',
                price: 'Custom',
                features: ['Unlimited API calls', 'Custom Analytics', 'Dedicated Support', 'Custom SLA']
              }
            ].map((plan, index) => (
              <div key={plan.name} 
                className={`bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border ${
                  index === 1 
                    ? 'border-blue-500 shadow-lg shadow-blue-500/25' 
                    : 'border-slate-700'
                } hover:border-blue-500/50 transition-all`}
              >
                <h3 className="text-xl font-semibold mb-4 text-white">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-slate-400">/month</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map(feature => (
                    <li key={feature} className="flex items-center text-slate-300">
                      <CheckCircle2 className="w-5 h-5 text-blue-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-lg transition-all ${
                  index === 1
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white hover:from-blue-600 hover:to-cyan-600 shadow-lg shadow-blue-500/25'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`}>
                  {index === 2 ? 'Contact Sales' : 'Get Started'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900/50 backdrop-blur-sm border-t border-slate-800 px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Blocks className="w-6 h-6 text-blue-400" strokeWidth={2.5} />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 text-transparent bg-clip-text">CryptoFlow</span>
            </div>
            <p className="text-slate-400">Enterprise-grade blockchain infrastructure for the future of finance.</p>
          </div>
          {[
            {
              title: 'Product',
              items: ['API Docs', 'SDKs', 'Pricing', 'Security']
            },
            {
              title: 'Company',
              items: ['About', 'Blog', 'Careers', 'Press']
            },
            {
              title: 'Resources',
              items: ['Documentation', 'Support', 'Status', 'Terms']
            }
          ].map(section => (
            <div key={section.title}>
              <h4 className="font-semibold text-white mb-6">{section.title}</h4>
              <ul className="space-y-4">
                {section.items.map(item => (
                  <li key={item}>
                    <a href="#" className="text-slate-400 hover:text-white transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
}

export default App;