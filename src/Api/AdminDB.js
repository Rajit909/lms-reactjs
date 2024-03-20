import { db, storage, firebase } from "../Services/firebase";

const updateProductUser = (updatedUser, isUpdated) => {
  db.collection("admin")
    .doc(updatedUser.id)
    .update(updatedUser)
    .then(() => {
      console.log("successfully updated!!!");
      isUpdated(true);
    })
    .catch((e) => {
      console.log(e);
      isUpdated(false);
    });
};

const getProductUserTickets = (user, setTickets) => {
  let list = [];
  if (user !== null) {
    db.collection("tickets")
      .where("ticketer.id", "==", user.id)
      .get()
      .then((docs) => {
        docs.forEach((doc) => {
          list.push(doc.data());
        });
        setTickets(list);
      })
      .catch((e) => console.log("getProductUserTickets", e));
  }
};

const raiseTicket = (user, ticket, isUpdated) => {
  let data = {
    id: "",
    ticketId: "",
    title: ticket.title,
    description: ticket.description,
    domain: user.domain,
    package: user.package.name,
    priority: ticket.priority,
    status: "sent",
    timestamp: new Date().getTime().toString(),
    responses: [],
    images: [],
    ticketer: {
      id: user.id,
      name: user.name,
      email: user.email,
      phone: user.phone
    }
  };

  let bucketName = "tickets";
  let storageRef = storage.ref();
  let listPromises = [];
  let imgUrlsPromises = [];
  ticket.images.forEach((img) => {
    // console.log("img name", img.name);
    let imgRef = storageRef.child(`${bucketName}/${img.name}`);
    listPromises.push(imgRef.put(img));
  });
  Promise.all(listPromises)
    .then(() => {
      ticket.images.forEach((img) => {
        // console.log("img name", img.name);
        let imgRef = storageRef.child(`${bucketName}/${img.name}`);
        imgUrlsPromises.push(imgRef.getDownloadURL());
      });
      Promise.all(imgUrlsPromises)
        .then((urls) => {
          urls.forEach((url) => {
            data.images.push(url);
          });
          db.collection("tickets")
            .add(data)
            .then((docRef) => {
              let docId = docRef.id;
              db.collection("tickets")
                .doc(docId)
                .update({
                  id: docId
                })
                .then(() => {
                  // console.log("Successfully Updated!!!");
                  alert("Ticket Raised Successfully!!!");
                  isUpdated(true);
                })
                .catch((e) => console.log(e));
            })
            .catch((e) => console.log(e));
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
  // imgRef
  //   .getDownloadURL()
  //   .then((imgUrl) => {})
  //   .catch((e) => console.log("downloadUrl-error", e));
};

const addResponse = (user, response, ticket, isUpdated) => {
  // console.log("res", response, ticket);
  if (response === "") {
    alert("Invalid Response");
  } else {
    let data = {
      from: user.name,
      message: response,
      timestamp: new Date().getTime().toString()
    };
    db.collection("tickets")
      .doc(ticket.id)
      .update({
        responses: firebase.firestore.FieldValue.arrayUnion(data)
      })
      .then(() => {
        isUpdated(data);
      })
      .catch((e) => {
        console.log(e);
        isUpdated(false);
      });
  }
};

export { updateProductUser, getProductUserTickets, raiseTicket, addResponse };
