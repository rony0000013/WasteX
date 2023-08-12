// import { useEffect } from "react";
// // import CameraComp from "./Camera";
// import Webcam from "react-webcam";
// import { useState, useRef, useCallback } from "react";
// import axios from "axios";


const CamPage = () => {
//     const camera = useRef(null);
//     const [image, setImage] = useState(null);
//     const [location, setLocation] = useState({lat: 22.597999572753906,
//         long: 88.37699890136719});

//     const [error, setError] = useState(null);

//     // useEffect(() => {
//     //     // Get the user's IP address
//     //     fetch("https://api.ipify.org?format=json")
//     //       .then((response) => response.json())
//     //       .then((data) => {
//     //         // Search for latitude and longitude using the ipstack API
//     //         fetch(`http://api.ipstack.com/${data.ip}?access_key=${import.meta.env.VITE_IPSTACK_API_KEY}`)
//     //           .then((response) => response.json())
//     //           .then((data) => {
//     //             console.log(data);
//     //             setLocation({
//     //               lat: data.latitude,
//     //               long: data.longitude,
//     //             });
//     //           })
//     //           .catch((error) => {
//     //             setError(error);
//     //           });
//     //       })
//     //       .catch((error) => {
//     //         setError(error);
//     //       });
//     //   }, []);

  
//     useEffect(() => {
//       if (location) {
//         const formData = new FormData();
//         // const blob = fetch(image).then((res) => res.blob());
//         console.log(image);
//         formData.append("file", image,image.name);

//         axios
//           .post(import.meta.env.VITE_BACKEND_API + "/check", formData, {
//             headers: {
//               "Content-Type": "multipart/form-data",
//             },
//             params: {
//               lat: location.lat,
//               long: location.long,
//             }
//           })
//           .then((res) => {
//             console.log(res.data);
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       }
//     }, [image]);
  
//     // if (error) {
//     //   return <div>{error.message}</div>;
//     // }

//     return (
//         <div>
//             <Webcam height={600} width={600} ref={camera} screenshotFormat="image/jpeg" />
//             <button onClick={() => setImage(camera.current.getScreenshot())} className="btn btn-primary">Take photo</button>
//             <button onClick={() => camera.current.switchCamera()} className="btn btn-secondary">Switch Camera</button>
//             <img src={image} alt='Taken photo' className="h-[100px] w-[100px]"/>
//             <div>{error?.message}</div>;
//         </div>
//     );
}

export default CamPage