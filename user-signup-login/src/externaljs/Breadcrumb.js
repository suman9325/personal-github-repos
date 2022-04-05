import React from 'react'
import { Link } from 'react-router-dom';

export default function Breadcumb(data) {
    return (
        <div className="breadcrumb-line breadcrumb-line-component m-b-20">
            <ul className="breadcrumb">
                {
                    data.map((menu, i) => {
                        if (menu.link !== "") {
                            if(i===0)                            
                                return <li key={i}><Link to={menu.link}><i className="icon-meter-slow position-left"></i> {menu.title}</Link></li>
                            else 
                                return <li key={i}><Link to={menu.link}>{menu.title}</Link></li>
                        } else {
                            return (
                                <li className={menu.class} key={i}>{menu.title}</li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}