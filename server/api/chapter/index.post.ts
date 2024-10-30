import { Chapter } from "~/server/models/chapters.model";
import { Content } from "~/server/models/content.model";

// CREATE CHAPTER
export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  let request;

  const newChapter = new Chapter({
    description: body.description,
    number: body.number,
    pagesCount: 0,
    thumbnail: body.thumbnail,
    title: body.title
  })

  // if (!query.search) {
  //   request = await Content.find({
  //     title: {
  //       $regex: query.search,
  //       $options: "i",
  //     },
  //   })
  //     .limit(15)
  //     .exec();
  // } else {
  //   request = await Content.find().limit(15).exec();
  // }
  return { data: request };
});
