import Link from 'next/link';
import type { PlaygroundOption } from '../types';
import clsx from 'clsx';

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
      <div className='page-container'>
        <div className='space-y-4'>
          <h1 className='header'>
            Hello! Welcome to <span className='text-yellow-500'>Ray's ✨</span>{' '}
            Framer Motion playground!
          </h1>
          <ul className='space-y-4'>
            {menuItems.map((item) => (
              <li key={item.path} className=''>
                <Link
                  href={item.disabled ? '' : item.path}
                  className={clsx(
                    'text-primary-800',
                    item.disabled
                      ? 'cursor-not-allowed'
                      : 'hover:text-primary-600 hover:underline'
                  )}
                >
                  <div>
                    <div className='flex items-center space-x-2'>
                      <h2 className='text-base font-medium md:text-lg'>
                        {item.title}
                      </h2>
                      {item.disabled && (
                        <div className='m-0 flex h-5 items-center rounded-full bg-primary-400 p-0 px-2 leading-3'>
                          <span className='text-[10px] text-stone-50'>
                            Coming Soon
                          </span>
                        </div>
                      )}
                    </div>
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
