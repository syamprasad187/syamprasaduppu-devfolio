import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-indigo-900 text-white dark:bg-indigo-950 py-4 text-center">
      &copy; {new Date().getFullYear()} Syam Prasad Uppu. All rights reserved.
    </footer>
  );
}