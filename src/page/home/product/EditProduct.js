import {Link, useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "axios";
import {Button} from "react-bootstrap";
import {Field, Form, Formik} from "formik";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../service/ProductService";

export default function EditProduct() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {id} = useParams()
    console.log(id)
    useEffect(() => {
        axios.get(`http://localhost:3000/products/` + id)
            .then(response => {
                setProductData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);
    const [productData, setProductData] = useState({
        title: '',
        price: '',
        description: ''
    });
    return (
        <div>
            <Formik initialValues={{
                title: productData.title,
                price: productData.price,
                description: productData.description
            }}
                    enableReinitialize={true}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:3000/products/` + id, values).then(r => {
                            alert("Sửa thành công")
                            navigate('/')
                        })
                    }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Tên sản phẩm</label>
                        <Field name={'title'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" style={{width: '500px'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Giá sản phẩm</label>
                        <Field name={'price'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" style={{width: '500px'}}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Mô tả sản phẩm</label>
                        <Field name={'description'} type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" style={{width: '500px'}}></Field>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <Button type="button" className="btn btn-info"><Link to={'/'} className="card-link">Trở lại</Link></Button>

                </Form>
            </Formik>
        </div>
    )
}