import React, { useState, useEffect } from 'react'
import { getCoupons, createCoupon, deleteCoupon } from '../../../services/coupon-service'
import FontAwesome from 'react-fontawesome'
import toastr from 'toastr'

export default function ({ }) {
    let [nuevo, setNuevo] = useState({
        quantity: 20,
        value: 50
    })
    let [coupons, setCoupons] = useState([])
    let [user, setUser] = useState(null)
    useEffect(() => {
        function checkAdmin() {
            let user = JSON.parse(localStorage.getItem("user"));
            setUser(user);
            if (user.role !== "ADMIN") this.props.history.push("/");
            else getCupons()
        }

        checkAdmin()
    }, [])


    function getCupons() {
        getCoupons()
            .then(coupons => {
                console.log(coupons)
                setCoupons(coupons)
            })
            .catch(e => console.log(e));
    }

    function onChange(e) {
        if (e.target.value.includes(" ")) return
        let change = { ...nuevo, [e.target.name]: e.target.value }
        setNuevo(change)
        console.log(nuevo)
    }

    function addCoupon(e) {
        e.preventDefault()
        if (!nuevo.name) return toastr.warning("Nombra tu cupon")
        createCoupon(nuevo)
            .then(info => {
                console.log(info)
                getCupons()
            })
    }

    function removeCoupon(id){
        if(!window.confirm("Segur@?")) return
        deleteCoupon(id)
        .then(()=>{
            toastr.info("Cupón borrado")
            getCupons()
        })
    }

    return (
        <div style={{ paddingTop: '60px', maxWidth: 960, marginLeft: 'auto', marginRight: 'auto' }}>
            <h1>Cupones</h1>
            <div style={{ display: "flex", flexWrap: "wrap" }}>
                {coupons.map((c, i) => {
                    return <p style={{ border: "1px solid", padding: 5 }} key={i}>
                        <strong>{c.name}</strong> | Discount: {c.value}% | Rest: {c.quantity} | Used: {Object.keys(c.used).length - 1}
                        {" | "}

                        <FontAwesome
                            onClick={()=>removeCoupon(c._id)}
                            style={{ cursor: "pointer" }}
                            name='trash' />
                    </p>
                })}
            </div>
            <br />
            <form onSubmit={addCoupon}>
                <div className="formgroup">
                    <p>Nombre del cupón: </p>
                    <div className="inp">
                        <input value={nuevo.name} type="text" name="name" className="formcontrol" onChange={onChange} placeholder="No uses espacios" />
                    </div>
                </div>
                <div className="formgroup">
                    <p>Cantidad de cupones: </p>
                    <div className="inp">
                        <input value={nuevo.quantity} type="number" onChange={onChange} className="formcontrol" name="quantity" />
                    </div>
                </div>
                <div className="formgroup">
                    <p>Descuento: </p>
                    <div className="inp">
                        <input value={nuevo.value} type="text" onChange={onChange} name="value" className="formcontrol" placeholder="Descuento en decenas (100)" />
                    </div>
                </div>

                <button className="btn_start" type="submit">Crear</button>
            </form>

        </div>
    )
}