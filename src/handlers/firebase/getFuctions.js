import {
  collection,
  getDocs,
  query,
  where,
  limit,
  startAfter,
  getDoc,
  doc,
} from "firebase/firestore";
import firebaseDb, { Tables } from ".";

const executeGetFunction = (action, data = {}) => {
  return action(firebaseDb, data);
};
const userLoginAction = async (db, data = {}) => {
  const userColRef = collection(db, Tables.users);
  const queryBuild = query(
    userColRef,
    where("userName", "==", data.userName),
    where("password", "==", data.password)
  );
  const querySnapshot = await getDocs(queryBuild);
  const result = querySnapshot.docs.map((each_doc, index) => ({
    ...each_doc.data(),
    id: each_doc.id,
    key: index,
  }));
  return result;
};
const getItemActions = async (db, data = {}) => {
  const itemColRef = collection(db, Tables.items);
  let queryBuild = null;
  if (data.lastData) {
    queryBuild = query(
      itemColRef,
      startAfter(data.lastData),
      limit(data.perPage)
    );
  } else {
    queryBuild = query(itemColRef, limit(data.perPage));
  }

  const querySnapshot = await getDocs(queryBuild);
  const result = querySnapshot.docs.map((each_doc, index) => ({
    ...each_doc.data(),
    id: each_doc.id,
    key: index,
  }));
  return {
    data: result,
    lastData:
      querySnapshot.docs.length > 0
        ? querySnapshot.docs[querySnapshot.docs.length - 1]
        : null,
  };
};
const getEachItemAction = async (db, id) => {
  if (id === "") {
    return {
      status: "error",
      message: "Please select an item",
    };
  }
  const itemRef = doc(db, Tables.items, id);
  const query = await getDoc(itemRef);
  if (query.exists()) {
    return {
      status: "success",
      message: "Get data successfully",
      data: query.data(),
    };
  } else {
    return {
      status: "error",
      message: "No Data found !",
      data: null,
    };
  }
};
export {
  executeGetFunction,
  userLoginAction,
  getItemActions,
  getEachItemAction,
};
