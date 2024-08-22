import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Set storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = path.resolve('uploads');
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Initialize multer with the storage engine
const upload = multer({ storage });

export const multerMiddleware = upload.fields([{ name: 'images' }, { name: 'thumbnail', maxCount: 1 }]);
