import { Author } from "~/server/models/authors.model";
import { handleAuthorBody } from "~/utils/apiService";

// CREATE CONTENT
export default defineEventHandler(async (event) => {
  try {
    const body = await readMultipartFormData(event);
    const formData = new FormData();

    body!.forEach((value) => {
      if (value.name && value.data) {
        formData.append(value.name, value.data.toString());
      }
    });

    const author = await handleAuthorBody(formData);
    const newAuthor = new Author(author);
    const request = await newAuthor.save();

    if (!request) {
      throw createError({
        statusCode: 400,
        statusMessage: "Author couldn't be created.",
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
