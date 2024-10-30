import { Content } from "~/server/models/content.model";

// FIND CONTENT
export default defineEventHandler(async (event) => {
  const id = getRouterParam(event, "id");
  if (!id) {
    throw createError({
      statusCode: 400,
      statusMessage: "ID is missing.",
    });
  } else {
    const request = await Content.findById({ _id: id }).exec();
    if (!request) {
      throw createError({
        statusCode: 404,
        statusMessage: "Content not found.",
      });
    }
    return { data: request };
  }
});
