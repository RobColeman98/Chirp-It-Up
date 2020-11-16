import { Query } from "./index";

const insert = (name) => Query(`insert into users (name) values ("${name}")`)

export default {
   insert
};