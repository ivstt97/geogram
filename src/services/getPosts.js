import { getDocs } from "firebase/firestore";
import { postsCollectionRef } from "../firebase-config";

const getPosts = async () => {
  const data = await getDocs(postsCollectionRef);

  return data.docs.map((doc) => ({
    id: doc.id.toString(),
    ...doc.data(),
  }));
};

export default getPosts;
