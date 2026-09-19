import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-base-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center space-y-4">
        <span className="badge badge-primary badge-outline text-xs tracking-widest uppercase">
          Fresh Perspective • Real News
        </span>
        <h1 className="text-4xl font-extrabold text-primary sm:text-5xl">
          About IceCream News
        </h1>
        <p className="text-lg text-base-content/80 max-w-2xl mx-auto">
          Delivering real-time, objective, and refreshing stories from around
          the globe. We slice through the noise to bring you news that matters.
        </p>
      </div>

      {/* Mission / Story Section */}
      <div className="max-w-6xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="rounded-2xl overflow-hidden shadow-lg bg-base-200 h-80 flex items-center justify-center">
          <img
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=800"
            alt="News Room Studio"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-base-content">
            Journalism Beyond the Surface
          </h2>
          <p className="text-base-content/70 leading-relaxed">
            Founded with a vision to redefine digital media,{" "}
            <strong>IceCream</strong> was built on the principle that news
            should be transparent, unbiased, and accessible to everyone.
          </p>
          <p className="text-base-content/70 leading-relaxed">
            Our global team of journalists works round-the-clock to investigate,
            analyze, and report on politics, business, technology, culture, and
            sports with absolute integrity.
          </p>
        </div>
      </div>

      {/* Pillars Section */}
      <div className="max-w-6xl mx-auto mt-20">
        <h2 className="text-3xl font-bold text-center text-base-content mb-10">
          Our Core Pillars
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-base-200 p-6 rounded-xl text-center space-y-3 shadow-xs">
            <div className="text-4xl">⚡</div>
            <h3 className="text-xl font-semibold">Real-Time Reporting</h3>
            <p className="text-sm text-base-content/70">
              Stay ahead with instant breaking news alerts and up-to-the-minute
              updates on critical global events.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl text-center space-y-3 shadow-xs">
            <div className="text-4xl">⚖️</div>
            <h3 className="text-xl font-semibold">Unbiased Accuracy</h3>
            <p className="text-sm text-base-content/70">
              We verify facts rigorously before publishing, giving you accurate,
              balanced, and independent coverage.
            </p>
          </div>

          <div className="bg-base-200 p-6 rounded-xl text-center space-y-3 shadow-xs">
            <div className="text-4xl">🌐</div>
            <h3 className="text-xl font-semibold">Global Coverage</h3>
            <p className="text-sm text-base-content/70">
              From local developments to international headlines, we bring world
              perspectives right to your screen.
            </p>
          </div>
        </div>
      </div>

      {/* Editorial Pledge */}
      <div className="max-w-4xl mx-auto mt-20 bg-base-200 p-8 rounded-2xl text-center space-y-4 shadow-xs">
        <h3 className="text-2xl font-bold text-base-content">
          Our Editorial Promise
        </h3>
        <p className="text-base-content/70 max-w-2xl mx-auto text-sm leading-relaxed">
          At <strong>IceCream</strong>, truth is our priority. We hold ourselves
          to high standards of ethics, neutrality, and editorial independence.
          We do not prioritize sensationalism—we prioritize accuracy.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
