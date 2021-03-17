import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import { Button } from "@material-ui/core";
import { storage } from "../firebase/firebase";

export default function ImageUpload() {
  const hiddenFileInput = React.useRef(null);

  const [imageAsFile, setImageAsFile] = useState("");
  const [localImgUrl, setlocalImgUrl] = useState("");

  const [imageAsUrl, setImageAsUrl] = useState(false);
  const [imageUploaded, setImageUploaded] = useState(false);
  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };
  // console.log("image as file naem", imageAsFile);
  const handleChange = (event) => {
    const image = event.target.files[0];
    const myImg = URL.createObjectURL(event.target.files[0]);
    setlocalImgUrl(myImg);
    setImageAsFile((imageFile) => image);
    // console.log("filename", image);

    setImageUploaded(true);
  };

  //image upload to firbse
  const handleFireBaseUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log("snapshot from image Upload", snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl(true);
          });
      }
    );
  };
  return (
    <div>
      <form onSubmit={handleFireBaseUpload}>
        {imageUploaded && (
          <div className="popUp">
            <h1>IMAGE PREVIEW</h1>
            <img
              style={{ maxHeight: "300px", minHeight: "100px" }}
              src={localImgUrl}
              alt=""
            />
            <Button
              type="submit"
              style={{
                color: "#fff",
                marginTop: "20px",
                backgroundColor: "#055024",
              }}
            >
              Upload To Firebase
            </Button>
            {imageAsUrl && (
              <div className="sucessMsg">
                <p>
                  {" "}
                  File Uploaded Successfully Please Refresh The page to see
                  changes
                </p>
                <Button
                  onClick={() => {
                    setImageUploaded(false);
                  }}
                  style={{ color: "#fff" }}
                >
                  OK
                </Button>
              </div>
            )}
          </div>
        )}

        <input
          type="file"
          accept="image/*"
          ref={hiddenFileInput}
          onChange={handleChange}
          style={{ display: "none" }}
        />
        <div onClick={handleClick} className="upload_btn">
          <AddIcon style={{ fontSize: "2.3rem" }} />
        </div>
      </form>
    </div>
  );
}
