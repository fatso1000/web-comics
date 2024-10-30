import { Author } from "~/server/models/authors.model";

// FIND AUTHOR
export default defineEventHandler(async (event) => {
  try {
    const query = getQuery(event);
    let request;
    if (query && query.search) {
      request = await Author.find({
        fullName: {
          $regex: query.search,
          $options: "i",
        },
      })
        .limit(15)
        .exec();
    } else {
      request = await Author.find().limit(15).exec();
    }
    return { data: request };
  } catch (error) {
    throw createError({
      statusCode: 400,
      statusMessage: "Unknown error",
    });
  }
});
