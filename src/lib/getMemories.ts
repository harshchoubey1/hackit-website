"use server"

import cloudinary from "./cloudinary";

// cloudinary se saare images fetch karne wala function
export async function getMemories() {

  const result = await cloudinary.search
    .expression("folder:hackit_memories") // jo folder tumne banaya
    .sort_by("public_id", "desc")
    .max_results(400)
    .execute();

  return result.resources;
}