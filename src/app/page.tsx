import Link from 'next/link';
import type { PlaygroundOption } from '../types';
import carrotImage from '../assets/carrot.png';

const menuItems: PlaygroundOption[] = [
  {
    title: 'Animated Tabs',
    description: 'Animated Tabs - with Inverted Text',
    path: '/playground/animated-tabs',
  },
  {
    title: 'Animated Checklist',
    description: 'Trello-like Checklist',
    path: '/playground/animated-checklist',
    disabled: true,
  },
];

export default function Home() {
  return (
    <main>
      <div className='mx-auto max-w-4xl px-4 py-8 md:px-8'>
        <div className='space-y-4'>
          <h1 className='text-lg font-semibold md:text-2xl'>
            Hello! Welcome to <span className='text-yellow-500'>Ray's ✨</span>{' '}
            Framer Motion playground!
          </h1>
          <ul className='space-y-4'>
            {menuItems.map((item) => (
              <li key={item.path} className=''>
                <Link
                  href={item.path}
                  className=' hover:text-stone-600 hover:underline'
                >
                  <div>
                    <h2 className='text-base font-medium md:text-lg'>
                      {item.title}
                    </h2>
                    <p className='text-xs font-light md:text-sm'>
                      {item.description}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
