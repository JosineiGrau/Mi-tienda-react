import {
  getDocs,
  collection,
  query,
  where,
  doc,
  getDoc,
  writeBatch,
  addDoc,
  documentId,
} from "firebase/firestore";
import { db } from "./index";
import { productAdaptedFromFirestore } from "../../productAdapter/productAdapter";

export const getProducts = (genero, categoryId, marca) => {
  const collectionRef = categoryId
    ? query(collection(db, "productsList"), where("category", "==", categoryId))
    : marca
    ? query(collection(db, "productsList"), where("marca", "==", marca))
    : genero
    ? query(collection(db, "productsList"), where("genero", "==", genero))
    : null;

  return getDocs(collectionRef)
    .then((response) => {
      const products = response.docs.map((doc) => {
        return productAdaptedFromFirestore(doc);
      });
      return products;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProduct = (productoId) => {
  const collectionRef = doc(db, "productsList", productoId);

  return getDoc(collectionRef)
    .then((doc) => {
      return productAdaptedFromFirestore(doc);
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getProductsCheckOut = async (
  ids,
  userOrder,
  setId,
  setError,
  setProductosSinStock,
  setOrderConfirmed,
  clearCart,
  cart
) => {
  const productRef = query(
    collection(db, "productsList"),
    where(documentId(), "in", ids)
  );

  const productsAddedFromFB = await getDocs(productRef);
  const { docs } = productsAddedFromFB;

  const productsOutOfStock = [];

  setProductosSinStock(productsOutOfStock);

  const batch = writeBatch(db);

  docs.forEach((doc) => {
    const docData = doc.data();
    const stockFromFB = docData.stock;

    const productAddedToCart = cart.find((prod) => prod.id === doc.id);
    const prodQuantity = productAddedToCart?.quantity;

    if (stockFromFB >= prodQuantity) {
      batch.update(doc.ref, { stock: stockFromFB - prodQuantity });
    } else {
      productsOutOfStock.push({ id: doc.id, ...docData });
    }
  });
  if (productsOutOfStock.length === 0) {
    await batch.commit();

    const orderRef = collection(db, "orders");
    const orderAdded = await addDoc(orderRef, userOrder);
    setId(orderAdded.id);
    clearCart();
    setOrderConfirmed(true);
  } else {
    setError("Hay productos que estan fuera de stock");
  }
};
