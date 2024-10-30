import { Content } from "~/server/models/content.model";
import { handleContentBody } from "~/utils/apiService";

// CREATE CONTENT
export default defineEventHandler(async (event) => {
  try {
    const body = await readMultipartFormData(event);
    const formData = new FormData();

    body!.forEach((value) => {
      if (value.name && value.data) {
        if (value.name === "thumbnail") {
          const blob = new Blob([value.data], { type: value.type });
          formData.append(value.name, blob);
        } else {
          formData.append(value.name, value.data.toString());
        }
      }
    });

    const content = await handleContentBody(formData);
    const newContent = new Content(content);
    const request = await newContent.save();

    if (!request) {
      throw createError({
        statusCode: 400,
        statusMessage: "Content couldn't be created.",
      });
    }

    return { data: request, statusMessage: "Successfully created." };
  } catch (error: unknown) {
    throw createError({
      statusCode: 400,
      statusMessage: "Unknown error",
    });
  }
});
