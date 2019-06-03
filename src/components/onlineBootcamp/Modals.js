import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types'
import { Modal, Button } from 'antd';
import PayBootcamp from '../payform/PayBootcamp';

export default function Modals({open, onClose}){
    let [visible, setVisible] = useState(false)

    useEffect(()=>{
       // console.log(localStorage.user)
    },[])

    function showChildrenDrawer(){
        setVisible(true)
    }
return ( 
<div>
<Modal
          title={<h2> Formulario de pago  </h2>}
          centered
          visible={open}
          onOk={()=>{}}
          onCancel={onClose}
          width={"80%"}
          footer={null}
        >
          <PayBootcamp/>
          </Modal>
</div>
)
}

Modals.propTypes = {
    onClose: PropTypes.func,
    open: PropTypes.bool
}