// app/download/page.tsx
import { redirect } from 'next/navigation';

export default function DownloadPage() {
  // This page doesn't need to render anything since it will redirect
  return (
    <div>
      <h1>Initiating your download...</h1>
      <p>If your download doesn't start automatically, <a href="/downloads/Claimed-Crowned-Consumed.pdf" download>click here</a>.</p>
    </div>
  );
}

// This runs on the server before the page loads
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/downloads/Claimed-Crowned-Consumed.pdf',
      permanent: false,
    },
  };
}