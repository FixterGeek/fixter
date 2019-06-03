import React, {useState, useEffect} from 'react'
import Modals from './Modals';
import queryString from 'query-string'

export default function OnlineBootcampLanding({history}){
    let [open, setOpen] = useState(false)
    useEffect(()=>{
          let {open}  = queryString.parse(
            history.location.search
        )
        if(open) openPay()
    }, [])

    function openPay(){
        checkLogin()
        setOpen(true)
    }

    function checkLogin(){
        if(localStorage.user) return
        return history.push('/login?next=/bootcamp')
        
    }

    function close(){
        setOpen(false)
    }
    console.log(history.location.search)
    return (
        <div>
       <h1>Landing page</h1> 
       <button
       onClick={openPay}
       >Open</button>
       <Modals
        onClose={close}
        open={open}
       />
    </div>
    )
}