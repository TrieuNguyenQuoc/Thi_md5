import {Link, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findProductByID, getProduct} from "../../../service/ProductService";

export default function DetailProduct() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(findProductByID(id))
    }, [])
    const product = useSelector (state => {
        return state.products.products;
    })

    return (

        <div className="card bg-light mb-3" style={{maxWidth: '18rem'}}>
            <div className="card-header"><b>Chi tiết sản phẩm</b></div>
            <div className="card-body">
                <h5 className="card-title"><h2>Tên sản phẩm: {product.title}</h2></h5>
                <p className="card-text">Mô tả: {product.description}</p>
                <p className="card-text">Giá: {product.price} VNĐ</p>
                <td onClick={()=>{
                    navigate('/')
                }}><button type="button" className="btn btn-primary">Trở Lại</button></td>
            </div>
        </div>
    )
}