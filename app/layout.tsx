import './globals.css';
import { abhayaLibre } from './fonts';

export const metadata = {
  title: 'Rajrasa - Royal Rajasthani Dining Experience',
  description: 'Delve into the Rajasthani culinary experience by Chef Saurabh',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={abhayaLibre.variable}>
      <body>{children}</body>
    </html>
  );
}