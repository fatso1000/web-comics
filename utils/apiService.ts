import ContrastColor from "contrast-color";
import getPredominantColor from "./getBackgroundColor";

const hexaList = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

export async function handleContentBody(formData: FormData) {
  const thumbnail = formData.get("thumbnail") as Blob,
    description = formData.get("description"),
    title = formData.get("title");
  const arrayBuffer = await thumbnail.arrayBuffer();
  const fileBuffer = Buffer.from(arrayBuffer);
  const bgColor = await getPredominantColor(fileBuffer);
  const rgb = bgColor[0] as number[];

  const hexa: (string | number)[] = ["#"];
  Object.values(rgb).forEach((value) => {
    const primer = Math.floor(value / 16);
    const posicion = (value / 16 - primer) * 16;
    hexa.push(hexaList[primer - 1], hexaList[posicion - 1]);
  });

  const hexaBgColor = hexa.join("");
  const cc = new ContrastColor({
    bgColor: hexaBgColor,
    fgDarkColor: "#000000",
    fgLightColor: "#D3D3D3",
  });
  const textColor = cc.contrastColor();

  return {
    bgColor: hexaBgColor,
    description,
    textColor: textColor,
    thumbnail: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    language: "English",
    title,
    type: "Manga",
    mainCategory: "Shounen",
  };
}

export async function handleAuthorBody(formData: FormData) {
  const fullName = formData.get("fullName"),
    description = formData.get("description"),
    thumbnail = formData.get("thumbnail"),
    nationality = formData.get("nationality"),
    dateOfBirth = formData.get("dateOfBirt"),
    contentId = formData.get("contentId");

  return {
    fullName,
    description,
    thumbnail: "https://otakuteca.com/images/books/cover/66d4d59f50ff2.webp",
    nationality,
    dateOfBirth,
    contentId,
  };
}
