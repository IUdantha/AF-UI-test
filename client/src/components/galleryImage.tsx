import React, {useState} from "react";

export default function GalleryImage({src, alt, description}: any) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      data-testid="image"
      className="block m-5 border border-gray-200 rounded-lg shadow bg-transparent"
    >
      {src && (
        <img
          className="h-auto w-full rounded-tl rounded-tr"
          src={src}
          alt={alt || "No alt text available"}
        />
      )}
      {description && (
        <p className="text-gray-700 p-7">
          {expanded ? description : `${description.slice(0, 200)}...`}
          {!expanded && (
            <button
              onClick={toggleExpanded}
              className="text-blue-500 hover:underline focus:outline-none"
            >
              Read More
            </button>
          )}
        </p>
      )}
      {!src && <p className="text-gray-700 p-7">No image available</p>}
    </div>
  );
}
