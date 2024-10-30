import { Content } from "~/server/models/content.model";

// FIND CHAPTER BY ID
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");

  let request;
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "No chapter ID found.",
    });
  } else {
    request = await Content.findById(id).exec();
    if (!request) {
      throw createError({
        statusCode: 404,
        statusMessage: "Chapter not found.",
      });
    }
  }
  return { data: request };
});
