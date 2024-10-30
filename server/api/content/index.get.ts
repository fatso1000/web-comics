import { Content } from "~/server/models/content.model";

// FIND CONTENT
export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  let request;
  if (query && query.search) {
    request = await Content.find({
      title: {
        $regex: query.search,
        $options: "i",
      },
    })
      .limit(15)
      .exec();
  } else {
    request = await Content.find().limit(15).exec();
  }
  return { data: request };
});
