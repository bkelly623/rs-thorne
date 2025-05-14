// app/download/page.tsx
import { redirect } from 'next/navigation';

// This is a React Server Component in the App Router
export default function DownloadPage() {
  // In App Router, you can call redirect directly in Server Components
  redirect('/downloads/Claimed-Crowned-Consumed.pdf');
  
  // This part won't actually render, but is needed for TypeScript
  return null;
}