import React from 'react'
import { useSelector } from 'react-redux';
import { formatRupiah } from '../utils/index'

const Cart = () => {
    const { cart } = useSelector(root => root);
    return (
        <div className="container mt-4">
            <h2>Cart</h2>
            {
                cart.map((p, idx) => <div className="card" key={idx}>
                    <div className="card-header">
                        <h5 className="card-title">{p?.products_name}</h5>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-3">
                                    <img src={p?.img_url} className="card-img-top" alt="..." width={100} />
                                </div>
                                <div className="col-lg-5">
                                    <h6 className="card-title">Price: {formatRupiah(p?.price)}</h6>
                                    <p className="card-text">{p?.description}</p>
                                    <p className="card-text">Stock: {p?.stock}</p>
                                </div>
                                <div className="col-lg-3">
                                    <h6 className="card-title">Sub Total: {formatRupiah(p?.price * p?.stock)}</h6>
                                </div>
                                <div className="col-lg-1">
                                    <button className="btn btn-danger"><i className='fa fa-trash'/></button>
                                </div>
                            </div>
                        </div>
                        {
                            idx === cart.length - 1 ? <div className="cart-footer p-5">
                                <div className="text-end">
                                    <h5>Total: {formatRupiah(cart.reduce((acc, current) => acc + (current.price * current.stock), 0))}</h5>
                                </div>
                            </div> : ""
                        }
                        <div className="cart-footer"></div>
                    </div>
                </div>)
            }

        </div>
    )
}

export default Cart
