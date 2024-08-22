import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useDropzone } from 'react-dropzone';
import axios from 'axios'
import '../styles/AddProduct.css'

const AddProduct = () => {
  const [images, setImages] = useState([]);
  const [thumbnail, setThumbnail] = useState(null);

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      price: '',
      category: '',
      gender:'',
      sizes: '',
      colors: '',
      stock: '',
      brand: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      description: Yup.string().required('Required'),
      price: Yup.number().required('Required').positive('Must be positive'),
      category: Yup.string().required('Required'),
      gender:Yup.string().required('Required'),
      sizes: Yup.string().required('Required'),
      colors: Yup.string().required('Required'),
      stock: Yup.number().required('Required').positive('Must be positive').integer('Must be an integer'),
      brand: Yup.string().required('Required'),
    }),
    onSubmit:  async(values) => {
      console.log("hii herere");
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('description', values.description);
      formData.append('price', values.price);
      formData.append('category', values.category);
      formData.append('gender',values.gender);
      formData.append('sizes', values.sizes.split(','));
      formData.append('colors', values.colors.split(','));
      formData.append('stock', values.stock);
      formData.append('brand', values.brand);
      images.forEach((image) => {
        formData.append('images', image);
      });
      if (thumbnail) {
        formData.append('thumbnail', thumbnail);
      }

      try {
        const res = await axios.post('/api/admin/addproducts', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        alert('Product added successfully!');
        console.log(res);
        formik.resetForm();
        setImages([]);
        setThumbnail(null);
      } catch (err) {
        console.error(err);
        alert('Error adding product');
      }
    },
  });

  const onDropImages = (acceptedFiles) => {
    setImages([...images, ...acceptedFiles]);
  };

  const onDropThumbnail = (acceptedFile) => {
    setThumbnail(acceptedFile[0]);
  };

  const { getRootProps: getRootPropsImages, getInputProps: getInputPropsImages } = useDropzone({ onDrop: onDropImages,multiple:true, });
  const { getRootProps: getRootPropsThumbnail, getInputProps: getInputPropsThumbnail } = useDropzone({ onDrop: onDropThumbnail, multiple: false });

  return (
    <div className='AddProduct'>
      <form onSubmit={formik.handleSubmit}>
      <h1>Add Product</h1>
        <div>
          <label>Name:</label>
          <input type="text" {...formik.getFieldProps('name')} />
          {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
        </div>
        <div>
          <label>Description:</label>
          <textarea {...formik.getFieldProps('description')} />
          {formik.touched.description && formik.errors.description ? <div>{formik.errors.description}</div> : null}
        </div>
        <div>
          <label>Price:</label>
          <input type="number" {...formik.getFieldProps('price')} />
          {formik.touched.price && formik.errors.price ? <div>{formik.errors.price}</div> : null}
        </div>
        <div>
          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'male'}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              onChange={formik.handleChange}
              checked={formik.values.gender === 'female'}
            />
            Female
          </label>
          {formik.touched.gender && formik.errors.gender ? <div>{formik.errors.gender}</div> : null}
        </div>
        <div>
          <label>Category:</label>
          <input type="text" {...formik.getFieldProps('category')} />
          {formik.touched.category && formik.errors.category ? <div>{formik.errors.category}</div> : null}
        </div>
        <div>
          <label>Sizes (comma separated):</label>
          <input type="text" {...formik.getFieldProps('sizes')} />
          {formik.touched.sizes && formik.errors.sizes ? <div>{formik.errors.sizes}</div> : null}
        </div>
        <div>
          <label>Colors (comma separated):</label>
          <input type="text" {...formik.getFieldProps('colors')} />
          {formik.touched.colors && formik.errors.colors ? <div>{formik.errors.colors}</div> : null}
        </div>
        <div>
          <label>Images:</label>
          <div {...getRootPropsImages()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputPropsImages()} />
            <p>Drag {'n'} drop some files here, or click to select files</p>
          </div>
          <div>
            {images.map((file, index) => (
              <div key={index}>
                {file.name}
              </div>
            ))}
          </div>
        </div>
        <div>
          <label>Thumbnail:</label>
          <div {...getRootPropsThumbnail()} style={{ border: '2px dashed #cccccc', padding: '20px', textAlign: 'center' }}>
            <input {...getInputPropsThumbnail()} />
            <p>Drag {'n'} drop the thumbnail here, or click to select a file</p>
          </div>
          <div>
            {thumbnail && <div>{thumbnail.name}</div>}
          </div>
        </div>
        <div>
          <label>Stock:</label>
          <input type="number" {...formik.getFieldProps('stock')} />
          {formik.touched.stock && formik.errors.stock ? <div>{formik.errors.stock}</div> : null}
        </div>
        <div>
          <label>Brand:</label>
          <input type="text" {...formik.getFieldProps('brand')} />
          {formik.touched.brand && formik.errors.brand ? <div>{formik.errors.brand}</div> : null}
        </div>
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

