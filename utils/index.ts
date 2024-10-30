import type { Model } from "mongoose";

export const paginate = async (
  model: Model<any>,
  currentPage: number,
  pageSize: number
) => {
  try {
    // Calculate the total number of documents
    const totalDocuments = await model.countDocuments();

    // Calculate the total number of pages
    const totalPages = Math.ceil(totalDocuments / pageSize);

    // Ensure currentPage is within valid bounds
    currentPage = Math.max(1, Math.min(currentPage, totalPages));

    // Calculate the number of documents to skip for pagination
    const skipDocuments = (currentPage - 1) * pageSize;

    // Get the documents for the current page
    const results = await model.find().skip(skipDocuments).limit(pageSize);

    // Determine the previous and next page
    const previousPage = currentPage > 1 ? currentPage - 1 : null;
    const nextPage = currentPage < totalPages ? currentPage + 1 : null;

    return {
      currentPage,
      previousPage,
      nextPage,
      totalPages,
      results,
    };
  } catch (error) {
    console.error("Pagination error:", error);
    throw error;
  }
};

export const blobToImageData = (blob: Blob): Promise<ImageData> => {
  return new Promise((resolve, reject) => {
    // Create an image element
    const img = new Image();

    // Convert the blob to a URL and assign it to the image source
    const url = URL.createObjectURL(blob);
    img.src = url;

    // Handle image load
    img.onload = () => {
      // Create a canvas to draw the image
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;

      // Get the canvas context
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        reject(new Error("Failed to get 2D context"));
        return;
      }

      // Draw the image onto the canvas
      ctx.drawImage(img, 0, 0);

      // Get the ImageData from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      resolve(imageData);

      // Revoke the object URL after use
      URL.revokeObjectURL(url);
    };

    // Handle image loading errors
    img.onerror = () => {
      reject(new Error("Failed to load image"));
    };
  });
};
