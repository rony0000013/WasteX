// import CameraComp from "./Camera";
import Webcam from "react-webcam";
import { useState, useRef, useCallback, useEffect } from "react";
import axios from "axios";


const CamPage = () => {
    const camera = useRef(null);
    const [image, setImage] = useState(null);
    const [location, setLocation] = useState({lat: 22.597999572753906,
        long: 88.37699890136719});
    const [ans, setAns] = useState("");

    const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Get the user's IP address
    //     fetch("https://api.ipify.org?format=json")
    //       .then((response) => response.json())
    //       .then((data) => {
    //         // Search for latitude and longitude using the ipstack API
    //         fetch(`http://api.ipstack.com/${data.ip}?access_key=${import.meta.env.VITE_IPSTACK_API_KEY}`)
    //           .then((response) => response.json())
    //           .then((data) => {
    //             console.log(data);
    //             setLocation({
    //               lat: data.latitude,
    //               long: data.longitude,
    //             });
    //           })
    //           .catch((error) => {
    //             setError(error);
    //           });
    //       })
    //       .catch((error) => {
    //         setError(error);
    //       });
    //   }, []);

    const imgFilehandler = (e) => {
        if (e.target.files.length !== 0) {
            const formData = new FormData();
            // console.log(image);
            formData.append("file", e.target.files[0]);
    
            axios
              .post(import.meta.env.VITE_BACKEND_API + "/check", formData, {
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                params: {
                  lat: location.lat,
                  long: location.long,
                }
              })
              .then((res) => {
                console.log(res.data);
                if (res.data.result === true){
                    setAns(() => "Successfully Inforemed")
                  }
              })
              .catch((err) => {
                console.log(err);
                setAns("Error Occured")
              });
        }
      }


    
      const uploadImage = () => {
        if (image && location) {
          const formData = new FormData();
          formData.append("file", image);
    
          axios
            .post(import.meta.env.VITE_BACKEND_API + "/check", formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
              params: {
                lat: location.lat,
                long: location.long,
              },
            })
            .then((res) => {
              console.log(res.data);
              

            })
            .catch((err) => {
              console.log(err);
              
            });
        }
      };
    
      if (error) {
        return <div>{error.message}</div>;
      }

    return (
        <>
        <div className='align-middle flex flex-wrap justify-center gap-4 bg-primary'>
            <a className="Btn" to={"/"}><button className='btn btn-success '>
                Go back to home
        </button></a>
        </div>
        <div className="flex bg-primary min-h-screen align-middle justify-center ">
            <div className="flex flex-col align-middle justify-center gap-3 px-2 ">
            <Webcam height={600} width={600} ref={camera} screenshotFormat="image/jpeg" />
            {/* <button onClick={captureImage} className="btn btn-primary">Take photo</button> */}
            <br></br>
            <input type="file" onChange={imgFilehandler} />
            <button onClick={uploadImage} className="btn btn-success">
                Upload photo
            </button>
            <h1 className="text-3xl text-green-700">{ans}</h1>
        </div>
        </div>
        </>
    );
}

export default CamPage