import {useDispatch, useSelector} from "react-redux";
import {Link, useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {deleteProduct, getProduct} from "../../../service/ProductService";
import ConfirmDeleteComponent from "./ConfirmDeleteComponent";

export default function ListProduct() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getProduct())
    }, [])

    const  products = useSelector( state => {
        return Array.from(state.products.products)
    })

    const handleDelete = (idProduct) => {
        // Dispatch action logout
        dispatch(deleteProduct(idProduct))
        navigate('/')
    };

    return (
        <div className={'row'}>
            <div className="col-12">
                <h2>Danh sách sản phẩm</h2>
                <Link to={"/createProduct"}><button className="btn btn-primary">Thêm mới</button></Link>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Tên Sản Phẩm</th>
                        <th scope="col">Mô Tả</th>
                        <th scope="col">Giá</th>
                        <th scope="col" colSpan={2}>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {products?.map((item, index)=>(
                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td><Link to={`/detailProduct/${item.id}`}>{item.title}</Link></td>
                            <td>{item.description}</td>
                            <td>{item.price}</td>
                            <td>
                                <ConfirmDeleteComponent
                                    onDelete={handleDelete}
                                    id={item.id}
                                />
                            </td>
                            <td><Link to={'/editProduct/' + item.id}><button type="button" className="btn btn-primary">Sửa</button></Link></td>
                        </tr>
                    ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}