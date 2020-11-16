import * as express from "express";
import dbChirps from "../db/chirps";
import dbUsers from "../db/users";
import chirpstore from  "./chirpstore"

let router = express.Router();

router.get("/", async (req, res) => {
  let data = await dbChirps.all();
  console.log(data);
  res.json(data);
});
//get all works

router.get("/:id?", async (req, res) => {
  let data = await dbChirps.get(req.params.id);
  console.log(data);
  res.json(data);
});
// get one works

// router.post("/", (req: express.Request, res: express.Response) => {
//   console.log(req.body);
//   CreateChirp(req.body);
//   res.sendStatus(200);
// });

router.post("/", async (req, res) => {
  try {
    // call dbUsers.insert
    // that returns an object with an insertId property that you can user to create a chirp
    const name = req.body.name,
      content = req.body.content,
      location = req.body.locationid;

    let newUser = await dbUsers.insert(name); //returns obj with insertId property
    let data = await dbChirps.post(newUser.insertId, content);

    res.status(200).send(data);
  } catch (e) {
    console.log(e);
    res.sendStatus(500);
  }
});
//working on this

router.put("/:id?", async (req, res) => {
  let data = await dbChirps.put(req.params.id, req.body.message);
 data;
  res.json(data);
});
//update message done

router.delete("/:id", async (req, res) => {
  let data = await dbChirps.deleteChirp(req.params.id);
  data;
  res.json(data);
});
//this works

export default router;
