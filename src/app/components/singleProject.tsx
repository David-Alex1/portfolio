import React from "react";

interface SingleProjectProps {
  title: string;
  description: string;
  youtubeUrl: string;
}

const getYouTubeEmbedUrl = (url: string) => {
  const videoId = url.split("v=")[1]?.split("&")[0];
  return `https://www.youtube.com/embed/${videoId}`;
};

const SingleProject: React.FC<SingleProjectProps> = ({
  title,
  description,
  youtubeUrl,
}) => {
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <div className="mt-2 rounded-lg mx-auto mb-10">
      <h2 className="text-2xl md:text-3xl text-white mb-4">{title}</h2>
      <p className="text-white/60 text-base md:text-lg mb-3">{description}</p>
      <div className="aspect-video rounded-lg overflow-hidden">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default SingleProject;
