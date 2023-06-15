import React, { useEffect, useState } from 'react'





//<ResponsiveItem component={Home} mobileComponent={HomeMobile} />
const ResponsiveItem = (props) => {

    const [screen, setScreen] = useState({
        width: window.innerWidth
    })
    useEffect(()=>{
        changeScreen();

        return () => {
            window.removeEventListener('resize',handleResize);
        }

    },[])

    let ComponentRender = props.component;
    const handleResize = () => {
        setScreen({
            width:window.innerWidth
        });
    }
    const changeScreen = () =>{
        //Đăng ký sự kiện cho thao tác resize cửa sổ window

        window.addEventListener('resize',handleResize);
    }


    if (screen.width <= 768 && props.mobileComponent) {
        ComponentRender = props.mobileComponent;
    }

    return (
        <ComponentRender />
    )
}

export default ResponsiveItem