import { redirect } from 'next/navigation';

export default function DownloadPage() {
  // Redirect to the API route that forces download
  redirect('/api/get-book');
  
  // This won't render
  return null;
}