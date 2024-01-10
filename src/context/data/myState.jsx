import React, { useEffect, useState } from 'react'
import MyContext from './myContext'
import { toast } from 'react-toastify';
import { Timestamp, addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, setDoc } from 'firebase/firestore';
import { fireDB } from '../../firebase/FireBaseConfig';

const myState = (props) => {
  const [mode, setMode] = useState('light');
  const [loading, setLoading] = useState(false)

  const toggleMode = () => {
      if (mode === 'light') {
          setMode('dark');
          document.body.style.backgroundColor = 'rgb(17, 24, 39)';
      }
      else {
          setMode('light');
          document.body.style.backgroundColor = 'white';

      }
  }
//  adding products object which is used for all product data.
  const [products, setProducts] = useState({
    title: null,
    price: null,
    imageUrl: null,
    category: null,
    description: null,
    time: Timestamp.now(),
    date: new Date().toLocaleString(
      "en-US",
      {
        month: "short",
        day: "2-digit",
        year: "numeric",
      }
    )

  })

    // ********************** Add Product Section  **********************
    const addProduct = async () => {
        if (products.title == null || products.price == null || products.imageUrl == null || products.category == null || products.description == null) {
          return toast.error('Please fill all fields')
        }
        const productRef = collection(fireDB, "products")
        setLoading(true)
        try {
          await addDoc(productRef, products)
          toast.success("Product Add successfully")
          getProductData()
        //   closeModal()

         setTimeout(()=>{
            window.location.href = '/dashboard';
         },800);
          setLoading(false)
        } catch (error) {
          console.log(error)
          setLoading(false)
        }
        setProducts("")
      }

      const [product, setProduct] = useState([]);

       // ****** get product
  const getProductData = async () => {
    setLoading(true)
    try {
      const q = query(
        collection(fireDB, "products"),
        orderBy("time"),
        // limit(5)
      );
      const data = onSnapshot(q, (QuerySnapshot) => {
        let productsArray = [];
        QuerySnapshot.forEach((doc) => {
          productsArray.push({ ...doc.data(), id: doc.id });
        });
        setProduct(productsArray)
        setLoading(false);
      });
      return () => data;
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  
  
  }
  const edithandle = (item) => {
    console.log(item);
    setProducts(item)
  
  }
  // update product
  const updateProduct = async (item) => {
    setLoading(true)
    try {
      await setDoc(doc(fireDB, "products", products.id), products);
      toast.success("Product Updated successfully")
      getProductData();
      setLoading(false)
      setTimeout(()=>{
        window.location.href = '/dashboard';
     },800);
    } catch (error) {
      setLoading(false)
      toast.error("Product Update Failed")
      console.log(error)
    }
    setProducts("")
  }

  const deleteProduct = async (item) => {
    setLoading(true)
    try {
    
      await deleteDoc(doc(fireDB, "products", item.id));
      toast.success('Product Deleted successfully')
      setLoading(false)
      getProductData()
    } catch (error) {
      toast.error('Product Deleted Falied')
      setLoading(false)
    }
  }






  useEffect(() => {
    getProductData();
  }, []);


  return (
    <MyContext.Provider
      value={{
        mode,
        toggleMode,
        loading,
        setLoading,
        products,
        product,
        setProducts,
        addProduct,
        updateProduct,
        deleteProduct,
        edithandle
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
}

export default myState;
