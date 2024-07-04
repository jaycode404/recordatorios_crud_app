// import React, { useEffect, useState } from "react";
// import { db } from "../DataBase/firebase";
// import { getDocs, collection } from "firebase/firestore";

// function ViewTareas() {
//   const [videos, setVideos] = useState([]);

//   function obtenerVideos() {
//     const videosRef = ref(db, "videos");
//     return get(videosRef)
//       .then((snapshot) => {
//         if (snapshot.exists()) {
//           const videosData = snapshot.val();
//           if (!videosData) return [];
//           const videosArray = Object.keys(videosData).map((key) => ({
//             id: key,
//             ...videosData[key],
//           }));

//           return videosArray;
//         } else {
//           console.log("No se encontraron videos");
//           return [];
//         }
//       })
//       .catch((error) => {
//         console.error("Error al obtener videos:", error);
//         return [];
//       });
//   }

//   return (
//     <div>
//       {videos.map((video) => (
//         <div key={video.id}>
//           <h2>{video.titulo}</h2>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default ViewTareas;
