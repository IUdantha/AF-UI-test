import {useState} from "react";

export default function NewsCard({date, title, content}: any) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="block m-5 p-6 border border-gray-200 rounded-lg shadow bg-transparent">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">
        {title}
      </h5>
      <p className="font-normal text-gray-700">
        {expanded ? content : `${content.slice(0, 200)}...`}
        {!expanded && (
          <button
            onClick={toggleExpanded}
            className="text-blue-500 hover:underline focus:outline-none"
          >
            Read More
          </button>
        )}
      </p>
      <p className="pt-2 text-sm text-right text-gray-700 text-center">
        {date}
      </p>
    </div>
  );
}
