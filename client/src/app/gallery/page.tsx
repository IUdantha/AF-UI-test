"use client";
import {useState} from "react";
import GalleryImage from "@/components/galleryImage";
import NavBar from "@/components/navbar";
import SearchInput from "@/components/searchInput";

export default function Gallery() {
  const [searchTerm, setSearchTerm] = useState(""); // State to hold search term
  const [images, setImages] = useState([]); // State to hold fetched images

  // Function to handle search input change
  const handleSearchInputChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // Function to handle form submission
  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `https://images-api.nasa.gov/search?q=${searchTerm}`
      );
      const data = await response.json();
      // Extract relevant information from API response
      const items = data.collection.items || [];
      console.log(items[0].links[0].href);
      const galleryItems = items.map((item: any) => {
        const imageData = item.data[0];
        // Check if links array exists and has at least one element
        const imageSrc =
          item.links && item.links.length > 0 ? item.links[0].href : null;
        return {
          src: imageSrc,
          alt: imageData.title,
          description: imageData.description,
        };
      });
      setImages(galleryItems);
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };
  console.log(images);

  return (
    <>
      <NavBar fontColor="text-stone-950" />
      <h1 className="text-center text-black text-5xl font-bold mb-10">
        Gallery
      </h1>
      <SearchInput
        value={searchTerm}
        onChange={handleSearchInputChange}
        onSubmit={handleSearchSubmit}
      />
      <div className="m-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {images.map((image: any, index) => (
          <GalleryImage
            key={index}
            src={image.src}
            alt={image.alt}
            description={image.description}
          />
        ))}
      </div>
    </>
  );
}
