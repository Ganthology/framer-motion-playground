'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';

const tabs = [
  { id: 'home', label: 'Home' },
  { id: 'pets', label: 'Pets' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
  { id: 'portfolio', label: 'Portfolio' },
];

export default function Page() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <main>
      <div className='page-container'>
        <div className='space-y-4'>
          <h1 className='header'>Animated Tabs</h1>
          <section className='rounded-lg bg-primary-950'>
            <div className='flex space-x-1 px-4 py-4'>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className='relative px-3 py-1.5 text-sm font-medium text-primary-200 outline-2 outline-sky-400 transition hover:text-primary-200/50 focus-visible:outline'
                >
                  {tab.id === activeTab && (
                    <motion.div
                      layoutId='active-pill'
                      className='absolute inset-0 bg-primary-100'
                      style={{
                        borderRadius: 9999,
                      }}
                      transition={{
                        duration: 0.6,
                        type: 'spring',
                      }}
                    />
                  )}
                  <span className='relative z-10 mix-blend-exclusion'>
                    {tab.label}
                  </span>
                </button>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
