// import React from 'react'
// import { useState } from 'react'
// // import image from '../src/image/BFEST-LIVE.gif'

// const Go = () => {

//   let items = [


//     {
//     id: 48,
//     title: "Sleek Olive Green Hardshell Carry-On Luggage",
//     price: 55555,
//     description: "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
//     images: ["https://i.imgur.com/jVfoZnP.jpg", "https://i.imgur.com/Tnl15XK.jpg", "https://i.imgur.com/7OqTPO6.jpg"],
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-10T09:08:55.000Z",
//     category: {
//     id: 5,
//     name: "Miscellaneous",
//     image: "https://i.imgur.com/BG8J0Fj.jpg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     },
//     {
//     id: 98,
//     title: "Baju",
//     price: 15,
//     description: "Baju Hitam",
//     images: ["https://i.imgur.com/QkIa5tT.jpeg"],
//     creationAt: "2024-09-10T09:02:52.000Z",
//     updatedAt: "2024-09-10T09:02:52.000Z",
//     category: {
//     id: 1,
//     name: "Clothe",
//     image: "https://i.imgur.com/QkIa5tT.jpeg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-10T07:47:14.000Z"
//     }
//     },
//     {
//     id: 99,
//     title: "test image",
//     price: 50,
//     description: "test",
//     images: ["https://api.escuelajs.co/api/v1/files/7ef10.png"],
//     creationAt: "2024-09-10T09:11:59.000Z",
//     updatedAt: "2024-09-10T09:11:59.000Z",
//     category: {
//     id: 2,
//     name: "Electronics",
//     image: "https://i.imgur.com/ZANVnHE.jpeg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     },
//     {
//     id: 100,
//     title: "string",
//     price: 10,
//     description: "string",
//     images: ["https://test.ccom"],
//     creationAt: "2024-09-10T09:13:10.000Z",
//     updatedAt: "2024-09-10T09:13:10.000Z",
//     category: {
//     id: 1,
//     name: "Clothe",
//     image: "https://i.imgur.com/QkIa5tT.jpeg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-10T07:47:14.000Z"
//     }
//     },
//     {
//     id: 101,
//     title: "ayam",
//     price: 10,
//     description: "mantap",
//     images: ["https://i.imgur.com/R3iobJA.jpeg"],
//     creationAt: "2024-09-10T09:52:53.000Z",
//     updatedAt: "2024-09-10T09:52:53.000Z",
//     category: {
//     id: 5,
//     name: "Miscellaneous",
//     image: "https://i.imgur.com/BG8J0Fj.jpg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     },
//     {
//     id: 102,
//     title: "1000",
//     price: 10,
//     description: "mantap",
//     images: ["https://i.imgur.com/R3iobJA.jpeg"],
//     creationAt: "2024-09-10T09:54:16.000Z",
//     updatedAt: "2024-09-10T09:54:16.000Z",
//     category: {
//     id: 5,
//     name: "Miscellaneous",
//     image: "https://i.imgur.com/BG8J0Fj.jpg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     },
//     {
//     id: 103,
//     title: "kambing",
//     price: 200000,
//     description: "kambing",
//     images: ["https://i.imgur.com/R3iobJA.jpeg"],
//     creationAt: "2024-09-10T09:55:35.000Z",
//     updatedAt: "2024-09-10T09:55:35.000Z",
//     category: {
//     id: 5,
//     name: "Miscellaneous",
//     image: "https://i.imgur.com/BG8J0Fj.jpg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     },
//     {
//     id: 104,
//     title: "celana",
//     price: 100000,
//     description: "celana",
//     images: ["https://i.imgur.com/R3iobJA.jpeg"],
//     creationAt: "2024-09-10T10:00:26.000Z",
//     updatedAt: "2024-09-10T10:00:26.000Z",
//     category: {
//     id: 1,
//     name: "Clothe",
//     image: "https://i.imgur.com/QkIa5tT.jpeg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-10T07:47:14.000Z"
//     }
//     },
//     {
//     id: 105,
//     title: "test",
//     price: 10,
//     description: "test",
//     images: ["https://i.imgur.com/R3iobJA.jpeg"],
//     creationAt: "2024-09-10T10:02:37.000Z",
//     updatedAt: "2024-09-10T10:02:37.000Z",
//     category: {
//     id: 5,
//     name: "Miscellaneous",
//     image: "https://i.imgur.com/BG8J0Fj.jpg",
//     creationAt: "2024-09-09T23:39:55.000Z",
//     updatedAt: "2024-09-09T23:39:55.000Z"
//     }
//     }
//     ]


//     const [first, setfirst] = useState(items)
   



      
//         const product = first.filter((item) => setfirst( items.category.name === 'Clothe,Miscellaneous,Electronics'))
//         const clothe = first.filter((item) => setfirst(items.category.name === 'Clothe'))
//         const bike = first.filter((item) => setfirst(items.category.name === 'Miscellaneous'))
//         const game = first.filter((item) => setfirst(items.category.name === 'Electronics'))
        


        
        
        
        
        
      


//       // function Clothe() {
//       //   const drbee = first.filter((item) => items.category.name === 'Clothe')
//       //   console.log(drbee);
        
        
//       //   setfirst(drbee);
        
//       // }


//       // function bike() {
//         // const dr = first.filter((item) => items.category.name === 'Miscellaneous')
//       //   console.log(dr);
        
        
//       //   setfirst(dr);
        
//       // }


//       // function game() {
//         // const bee = first.filter((item) => items.category.name === 'Electronics')
        
        
        
//       //   setfirst(bee);
        
//       // }
    
//   return (
//     <div>
//     <div className='flex flex-row gap-5 justify-center w-screen'>
//     <button className='bg-black text-white w-28 h-8 rounded' onClick={product}>All Product</button>
//    <button className='bg-black text-white w-28 h-8 rounded' onClick={clothe}>Clothe</button>
//     <button className='bg-black text-white w-28 h-8 rounded' onClick={bike}>Bicycle</button>
//     <button className='bg-black text-white w-28 h-8 rounded' onClick={game}>Electronic</button>
//     </div>



    
//     <div className=' bg-gray-400 grid grid-cols-3 flex-wrap border-blue-800 w-screen'>
//     {first.map(first=>
//       <div className='h-screen w-screen text-green-500 bg-white'>{first.id}
//       <img className='h-80 w-90 rounded-md' src={first.category.image} alt={first.category.id} />
//       <div className='px-10'>
//       <h1>{first.title}</h1>
//       <h2>{first.price}</h2>
//       <h1>{first.description}</h1>
//       <h3>{first.creationAt}</h3>
//       <h1>{first.updatedAt}</h1>

//       </div>
//       </div>
      
      
      
//     ) 
//     }
//     </div>
//     </div>
//   )
// }

// export default Go




import React, { useState } from 'react';

const Go = () => {
  let items = [


        {
        id: 48,
        title: "Sleek Olive Green Hardshell Carry-On Luggage",
        price: 55555,
        description: "Travel in style with our durable hardshell carry-on, perfect for weekend getaways and business trips. This sleek olive green suitcase features smooth gliding wheels for easy airport navigation, a sturdy telescopic handle, and a secure zippered compartment to keep your belongings safe. Its compact size meets most airline overhead bin requirements, ensuring a hassle-free flying experience.",
        images: ["https://i.imgur.com/jVfoZnP.jpg", "https://i.imgur.com/Tnl15XK.jpg", "https://i.imgur.com/7OqTPO6.jpg"],
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-10T09:08:55.000Z",
        category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        },
        {
        id: 98,
        title: "Baju",
        price: 15,
        description: "Baju Hitam",
        images: ["https://i.imgur.com/QkIa5tT.jpeg"],
        creationAt: "2024-09-10T09:02:52.000Z",
        updatedAt: "2024-09-10T09:02:52.000Z",
        category: {
        id: 1,
        name: "Clothe",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-10T07:47:14.000Z"
        }
        },
        {
        id: 99,
        title: "test image",
        price: 50,
        description: "test",
        images: ["https://api.escuelajs.co/api/v1/files/7ef10.png"],
        creationAt: "2024-09-10T09:11:59.000Z",
        updatedAt: "2024-09-10T09:11:59.000Z",
        category: {
        id: 2,
        name: "Electronics",
        image: "https://i.imgur.com/ZANVnHE.jpeg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        },
        {
        id: 100,
        title: "string",
        price: 10,
        description: "string",
        images: ["https://test.ccom"],
        creationAt: "2024-09-10T09:13:10.000Z",
        updatedAt: "2024-09-10T09:13:10.000Z",
        category: {
        id: 1,
        name: "Clothe",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-10T07:47:14.000Z"
        }
        },
        {
        id: 101,
        title: "ayam",
        price: 10,
        description: "mantap",
        images: ["https://i.imgur.com/R3iobJA.jpeg"],
        creationAt: "2024-09-10T09:52:53.000Z",
        updatedAt: "2024-09-10T09:52:53.000Z",
        category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        },
        {
        id: 102,
        title: "1000",
        price: 10,
        description: "mantap",
        images: ["https://i.imgur.com/R3iobJA.jpeg"],
        creationAt: "2024-09-10T09:54:16.000Z",
        updatedAt: "2024-09-10T09:54:16.000Z",
        category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        },
        {
        id: 103,
        title: "kambing",
        price: 200000,
        description: "kambing",
        images: ["https://i.imgur.com/R3iobJA.jpeg"],
        creationAt: "2024-09-10T09:55:35.000Z",
        updatedAt: "2024-09-10T09:55:35.000Z",
        category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        },
        {
        id: 104,
        title: "celana",
        price: 100000,
        description: "celana",
        images: ["https://i.imgur.com/R3iobJA.jpeg"],
        creationAt: "2024-09-10T10:00:26.000Z",
        updatedAt: "2024-09-10T10:00:26.000Z",
        category: {
        id: 1,
        name: "Clothe",
        image: "https://i.imgur.com/QkIa5tT.jpeg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-10T07:47:14.000Z"
        }
        },
        {
        id: 105,
        title: "test",
        price: 10,
        description: "test",
        images: ["https://i.imgur.com/R3iobJA.jpeg"],
        creationAt: "2024-09-10T10:02:37.000Z",
        updatedAt: "2024-09-10T10:02:37.000Z",
        category: {
        id: 5,
        name: "Miscellaneous",
        image: "https://i.imgur.com/BG8J0Fj.jpg",
        creationAt: "2024-09-09T23:39:55.000Z",
        updatedAt: "2024-09-09T23:39:55.000Z"
        }
        }
        ];

  const [filteredItems, setFilteredItems] = useState(items);

  const showAllProducts = () => {
    setFilteredItems(items);
  };

  const filterByCategory = (categoryName) => {
    const filtered = items.filter((item) => item.category.name === categoryName);
    setFilteredItems(filtered);
  };

  return (
    <div>
    <div className='flex flex-row gap-3 justify-center w-full my-4'>
    <button className='bg-black text-white w-28 h-10 rounded-lg' onClick={showAllProducts}>
      All Products
    </button>
    <button className='bg-black text-white w-28 h-10 rounded-lg' onClick={() => filterByCategory('Clothe')}>
      Clothe
    </button>
    <button className='bg-black text-white w-28 h-10 rounded-lg' onClick={() => filterByCategory('Miscellaneous')}>
      Miscellaneous
    </button>
    <button className='bg-black text-white w-28 h-10 rounded-lg' onClick={() => filterByCategory('Electronics')}>
      Electronics
    </button>
  </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4'>
      {filteredItems.map((item) => (
        <div key={item.id} className='bg-white p-4 rounded-lg shadow-md'>
          <img className='h-64 w-full object-cover rounded-lg mb-4' src={item.category.image} alt={item.title} />
          <h1 className='text-lg font-bold mb-2'>{item.title}</h1>
          <h2 className='text-gray-800 mb-1'>${item.price}</h2>
          <p className='text-gray-600 mb-2'>{item.description}</p>
          <p className='text-sm text-gray-500'>Created at: {new Date(item.creationAt).toLocaleDateString()}</p>
          <p className='text-sm text-gray-500'>Updated at: {new Date(item.updatedAt).toLocaleDateString()}</p>
        </div>
          
        ))}
      </div>
    </div>
  );
};

export default Go;
