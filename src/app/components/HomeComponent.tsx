import React from "react";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSeK8CutBL7qz-1xbf7hOd7vtb92DGyxVEJwf7UHDQAJQ5lyPg/viewform?usp=publish-editor";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            {/* Coming Soon Badge */}
            <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Coming Soon
            </div>

            <h1
              className="text-5xl md:text-7xl font-extrabold mb-6 text-gray-900 tracking-wide"
              style={{ lineHeight: "1.3", fontFamily: "system-ui, -apple-system, sans-serif" }}
            >
              Your Shield Against <br /> <span className="text-green-500">Digital Scams</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
              In the digital era, most realize they have been scammed only after
              it happens. ScamBuzzer detects, alerts, and protects you before
              it&apos;s too late to act.
            </p>

            {/* Join Waitlist CTA */}
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-black font-black px-10 py-4 rounded-full text-lg inline-flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                Join Waitlist
              </button>
            </a>
            <p className="text-sm text-gray-400 mt-4">
              Be the first to know when we launch. No spam, ever.
            </p>
          </div>
        </div>
      </section>

      {/* What We're Building */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-4">
            What We&apos;re Building
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            A powerful browser extension that keeps you safe from the most
            common and sophisticated scam tactics online.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Lookalike Website Detection",
                description:
                  "Instantly flags fake websites that impersonate trusted brands to steal your credentials.",
                icon: (
                  <path d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                ),
              },
              {
                title: "Malware Script Scanning",
                description:
                  "Detects hidden malicious scripts designed to compromise your wallet or personal data.",
                icon: (
                  <path d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135c-.117-1.82-.74-3.507-1.666-4.86A4.073 4.073 0 0014.5 1.5h-5a4.072 4.072 0 00-2.889 1.695c-.926 1.353-1.55 3.04-1.666 4.86a23.908 23.908 0 01-1.152 6.135A24.053 24.053 0 0112 12.75z" />
                ),
              },
              {
                title: "Domain Trust Analysis",
                description:
                  "Evaluates domain history, age, and reputation to assess trustworthiness in real time.",
                icon: (
                  <path d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                ),
              },
              {
                title: "Phishing URL Detection",
                description:
                  "Catches encoded and obfuscated URLs designed to trick you into visiting harmful pages.",
                icon: (
                  <path d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m9.86-2.54a4.5 4.5 0 00-6.364-6.364L4.757 8.07a4.5 4.5 0 003.182 7.683" />
                ),
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-xl hover:shadow-lg transition-all hover:border-green-200 border border-transparent"
              >
                <div className="w-10 h-10 mb-4 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 text-green-600"
                  >
                    {feature.icon}
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-black text-center mb-4">
            Why It Matters
          </h2>
          <p className="text-gray-500 text-center mb-12 max-w-xl mx-auto">
            The threat of digital scams is growing every year. Here&apos;s what
            we&apos;re up against.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-black text-green-500 mb-2">
                $2.3B+
              </div>
              <p className="text-gray-600 text-sm">
                Lost to hacks and scams in 2024 alone
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-black text-green-500 mb-2">
                $450M+
              </div>
              <p className="text-gray-600 text-sm">
                Lost to phishing scams specifically
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-black text-green-500 mb-2">#1</div>
              <p className="text-gray-600 text-sm">
                Phishing is the most effective attack vector
              </p>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-sm text-center">
              <div className="text-4xl font-black text-green-500 mb-2">
                24/7
              </div>
              <p className="text-gray-600 text-sm">
                Real-time protection across crypto, web, and beyond
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-black mb-4">
              Don&apos;t Wait Until It&apos;s Too Late
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Join our waitlist and be among the first to get access when
              ScamBuzzer launches. Stay ahead of scammers.
            </p>
            <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 hover:bg-green-600 text-black font-black px-10 py-4 rounded-full text-lg inline-flex items-center gap-3 transition-all hover:scale-105 hover:shadow-lg hover:shadow-green-200">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <line x1="19" x2="19" y1="8" y2="14" />
                  <line x1="22" x2="16" y1="11" y2="11" />
                </svg>
                Join Waitlist
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
