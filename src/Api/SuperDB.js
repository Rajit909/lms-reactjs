import { db } from "../Services/firebase";

const getAllProductUsers = (setUsers) => {
  // product users who bought the packages
  let list = [];
  db.collection("admin")
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        list.push(doc.data());
      });
      setUsers(list);
    })
    .catch((e) => console.log("getAllProductUsers", e));
};

const getAllTickets = (setTickets) => {
  let list = [];
  db.collection("tickets")
    .get()
    .then((docs) => {
      docs.forEach((doc) => {
        list.push(doc.data());
      });
      setTickets(list);
    })
    .catch((e) => console.log("getAllTickets", e));
};

export { getAllProductUsers, getAllTickets };
