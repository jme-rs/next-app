"use client"
import YouTube from 'react-youtube';

function getVideoId(url: string): string {
  const urlObj = new URL(url);
  console.log(urlObj);
  const videoId = urlObj.searchParams.get('v');
  return videoId || "";
}

export default function YouTubeEmbed({ url }: { url: string }) {
  const videoId = getVideoId(url);
  console.log(videoId);

  return (
    <YouTube
      videoId="wdUS9LoKV_8"
      opts={{width: "100%", }}
      id="youtube-embed"
    />
  )
}
