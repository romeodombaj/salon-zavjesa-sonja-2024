import sql from "better-sqlite3";

const db = sql("gallery.db");

export async function getGallery(category = "zavjese") {
  const data = db.prepare(`SELECT * FROM ${category}`).all();
  return data;
}
