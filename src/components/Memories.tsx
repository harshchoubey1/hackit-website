"use client";

import { useEffect, useState } from "react";
import { getMemories } from "@/lib/getMemories";
import MemoriesClient from "./MemoriesClient"; // Tera wo UI wala component jisme gallery hai

export default function Memories() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Component load hote hi Server Action call hoga
    const fetchImages = async () => {
      const data = await getMemories();
      setImages(data);
    };
    
    fetchImages();
  }, []);

  // Agar images load nahi hui hain toh khali div ya loader dikha de
  if (images.length === 0) return <div className="py-20 text-center text-[#d4510d]">Loading Memories...</div>;

  return <MemoriesClient images={images} />;
}