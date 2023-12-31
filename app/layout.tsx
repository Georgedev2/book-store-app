import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book Store App',
  description: 'Generated by create next app',
};

interface Props {
  children: React.ReactNode;
}
const RootLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};
export default RootLayout;
