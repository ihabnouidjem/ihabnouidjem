import clientPromise from "../../lib/database";

export default async function handler(req, res) {
  const { name, email, message, details } = req.body;
  try {
    const client = await clientPromise;
    const db = client.db("Messages");
    const newMessage = await db
      .collection("Messages")
      .insertOne({ name, email, message, details });
    res.status(200).json(newMessage);
  } catch (err) {
    console.error(err);
  }
}
