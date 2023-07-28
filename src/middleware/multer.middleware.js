import multer from "multer";


var upload;

function getUpload(req, resp, next) {
    console.log(req)

  //use multer library to save the image
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads");
      
    },
    filename: (req, file, cb) => {
      cb(
        null,
        file.fieldname + "-" + Date.Now + path.extname(file.originalname)
      );
    },
  });
  return multer({ storage: storage });
}

upload = getUpload();



export default upload;

