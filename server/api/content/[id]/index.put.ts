import { Content } from "~/server/models/content.model";
import { handleContentBody } from "~/utils/apiService";

// MODIFY CONTENT
export default defineEventHandler(async (event) => {
  try {
    const id = getRouterParam(event, "id");
    if (!id) {
      throw createError({
        statusCode: 400,
        statusMessage: "ID is missing.",
      });
    }

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

    const filter = { _id: id };
    const content = await handleContentBody(formData);
    const update = {};
    const request = await Content.findByIdAndUpdate(filter, update);

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
