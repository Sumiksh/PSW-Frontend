import React from 'react';
import Navigation from './lib/Navigation';
import { Toaster } from 'react-hot-toast';
import "./global.css";
import 'bootstrap/dist/css/bootstrap.css';

export const metadata = {
  title: "Support Worker",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
      <html lang="en">
        <body>
          <Toaster />
          <Navigation />
          {children}
        </body>
      </html>
  );
}
