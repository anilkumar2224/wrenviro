import React from 'react';

const ImpactSection=() => {
  return (
    <section id="impact" className="py-24 relative overflow-hidden bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/80 to-white -z-10">
        <div className="h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-block mb-3">
            <div className="px-4 py-2 rounded-full border border-primary/20 bg-primary/5 text-primary font-medium text-sm">
              Measurable Results
            </div>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 font-heading mb-4">
            Our Environmental Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Driving positive change through measurable environmental achievements
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 md:grid-cols-2 gap-6 mb-20">
          {/* First Metric: Projects Completed */}
          <div className="p-6 md:p-8 rounded-xl border border-blue-200 bg-blue-50 shadow-sm transition-all duration-300 flex flex-col h-full  card-hover">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
              <i className="fas fa-diagram-project text-xl text-blue-600 icon-hover"></i>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Projects Completed</h3>
              <div className="flex items-baseline mb-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <span className="font-bold">500+</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full text-blue-600 rounded-full" style={{ width: '92%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Environmental initiatives successfully delivered across industries from waste management to renewable energy integration.
              </p>
            </div>
          </div>

          {/* Second Metric: CO₂ Reduction */}
          <div className="p-6 md:p-8 rounded-xl border border-green-200 bg-green-50 shadow-sm transition-all duration-300 flex flex-col h-full  card-hover">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
              <i className="fas fa-leaf text-xl text-green-600 icon-hover"></i>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">CO₂ Reduction</h3>
              <div className="flex items-baseline mb-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <span className="font-bold">2.8M</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full text-green-600 rounded-full" style={{ width: '78%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Metric tons of carbon emissions eliminated through our comprehensive sustainability programs and interventions.
              </p>
            </div>
          </div>

          {/* Third Metric: Waste Reduction */}
          <div className="p-6 md:p-8 rounded-xl border border-purple-200 bg-purple-50 shadow-sm transition-all duration-300 flex flex-col h-full  card-hover">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
              <i className="fas fa-recycle text-xl text-purple-600 icon-hover"></i>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Waste Reduction</h3>
              <div className="flex items-baseline mb-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <span className="font-bold">80%</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full text-purple-600 rounded-full" style={{ width: '86%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Average decrease in landfill waste achieved through our circular economy principles and recycling initiatives.
              </p>
            </div>
          </div>

          {/* Fourth Metric: Global Reach */}
          <div className="p-6 md:p-8 rounded-xl border border-amber-200 bg-amber-50 shadow-sm transition-all duration-300 flex flex-col h-full  card-hover">
            <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-5 shadow-sm">
              <i className="fas fa-earth-americas text-xl text-amber-600 icon-hover"></i>
            </div>
            <div className="flex flex-col flex-grow">
              <h3 className="text-lg font-semibold text-gray-800 mb-1">Global Reach</h3>
              <div className="flex items-baseline mb-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">
                  <span className="font-bold">25+</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-gray-100 rounded-full mb-3 overflow-hidden">
                <div className="h-full text-amber-600 rounded-full" style={{ width: '65%' }}></div>
              </div>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                Countries where we've implemented sustainable solutions, bringing positive environmental impact to communities worldwide.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 relative">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-green-500 to-amber-500 rounded-t-2xl"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-3 flex items-center">
                <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-2">
                  <i className="fas fa-award text-primary"></i>
                </span>
                A Decade of Impact
              </h3>
              <p className="text-neutral-600 mb-4">
                Since 2013, our organization has been at the forefront of environmental solutions, helping organizations worldwide reduce their ecological footprint while improving operational efficiency.
              </p>
              <div className="flex items-center gap-6 mt-6">
                <div className="text-center">
                  <div className="text-xl font-bold text-primary mb-1">A+</div>
                  <div className="text-xs text-neutral-500">EPA Rating</div>
                </div>
                <div className="h-10 w-px bg-neutral-200"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary mb-1">ISO</div>
                  <div className="text-xs text-neutral-500">14001 Certified</div>
                </div>
                <div className="h-10 w-px bg-neutral-200"></div>
                <div className="text-center">
                  <div className="text-xl font-bold text-primary mb-1">5★</div>
                  <div className="text-xs text-neutral-500">Client Rating</div>
                </div>
              </div>
              <div className="mt-6">
                <a href="#" className="inline-flex items-center text-primary font-medium hover:underline">
                  <span>Download Impact Report</span>
                  <i className="fas fa-arrow-right ml-2"></i>
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="45" fill="none" stroke="#f1f5f9" strokeWidth="8"></circle>
                  <circle
                    className="motion-circle"
                    cx="50"
                    cy="50"
                    r="45"
                    fill="none"
                    stroke="url(#gradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="283"
                    strokeDashoffset="36.79"
                  ></circle>
                  <defs>
                    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#3b82f6"></stop>
                      <stop offset="50%" stopColor="#10b981"></stop>
                      <stop offset="100%" stopColor="#f59e0b"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-3xl font-bold text-primary">
                    <span className="font-bold">87%</span>
                  </div>
                  <p className="text-sm text-neutral-500">Sustainability Goal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
