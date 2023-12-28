import {Link, useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {Button} from "react-bootstrap";
import {useDispatch} from "react-redux";
import {addProduct} from "../../../service/ProductService";

export default function  CreateProduct () {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    return (
        <div>
            <Formik initialValues={{
                title: '',
                price: '',
                description: ''
            }}
                    onSubmit={(values) => {
                        dispatch(addProduct(values));
                        alert('Thêm thành công')
                        navigate('/')
                    }}
            >
                <Form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label" style={{width: '500px'}}>Tên sản phẩm</label>
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
                        <Field name={'description'} type="textarea" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp" style={{width: '500px'}}/>
                    </div>
                    <Button type="submit" className="btn btn-primary">Submit</Button>
                    <button className="btn btn-info"><Link to={'/'} className="card-link">Trở lại</Link></button>

                </Form>
            </Formik>
        </div>
    )
}