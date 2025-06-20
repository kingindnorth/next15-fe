// Update the import path below if EduBitsClient is located elsewhere
import EduBitsClient from '@/components/EduBitsClient';

interface EduBit {
  id: number;
    title: string;
    youtubeUrl: string;
    thumbnail?: { url: string };
    isStory: boolean;
}

async function fetchEduBits(): Promise<EduBit[]> {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_API_URL || 'http://localhost:5004'}/api/edu-bit-stories?populate=thumbnail`,
    { next: { revalidate: 60 } }
  );
  const json = await res.json();
  console.log(json,"boom")
  return json.data;
}

export default async function EduBitsPage() {
  const eduBits = await fetchEduBits();
  console.log(eduBits,"boom 2")

  return <EduBitsClient eduBits={eduBits} />;
}