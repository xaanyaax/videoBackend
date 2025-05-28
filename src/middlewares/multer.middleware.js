import multer from "multer";

// Define storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "./public/temp"); // Directory to save uploaded files
    },
    filename: (req, file, cb) => {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
      const ext = path.extname(file.originalname);
      cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
  });

  const upload = multer({ storage: storage });

export default upload;