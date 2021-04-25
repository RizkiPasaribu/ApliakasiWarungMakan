import React from 'react';
import {numberWithCommas} from '../../action/action';

function Menu(prop) {
    return (
        <div className="row row-cols-1 row-cols-md-3">
            {prop.menus.map((data)=>  
                <div onClick={()=>{prop.fungsi(data)}}  key={data.id} className="shadow p-3 mb-5 bg-white rounded col mb-3">
                    <div className="card h-100">
                        <img height="170px" src={"Assets/images/" + data.category.nama.toLowerCase() + "/" + data.gambar} className="card-img-top" alt={data.gambar}/>
                        <div className="card-body">
                            <p className="card-text m-auto">{data.nama}</p>
                            <h3 style={{border:'none'}} className="card-title m-auto">{"Rp "+numberWithCommas(data.harga)}</h3>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Menu;