import { Query } from "./index";

//get all
const all = async () =>
  Query(
    "SELECT chirps.id, chirps.content, users.name FROM chirper.chirps JOIN users ON chirps.userid = users.id"
  );

// get one
const get = async (id: string) =>
  Query("SELECT * FROM chirper.chirps where id = ?", [id]);
// post one
const post = async (userid: string, content: string) =>
  Query("INSERT INTO chirps(userid, content) values (?, ?)", [userid, content]);

const put = async (id: string, content: string) =>
  Query(" UPDATE chirps SET content = ? WHERE id = ?", [content, id]);

// delete a chirp
const deleteChirp = async (id: string) =>
  Query("DELETE FROM chirper.chirps where id = ?", [id]);

export default {
  all,
  get,
  deleteChirp,
  put,
  post,
  // makeChirp,
  // makeUser
};

// INSERT INTO customer (first_name, last_name, occupation)
//      VALUES ("Han", "Solo", "Smuggler");
