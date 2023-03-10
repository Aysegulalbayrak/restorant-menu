import React from 'react';
import logo from '../logo.png'
import SideList from './SideList';

import { sidebar_goster } from './Functions';
import { menu_eleman } from './icerik';

function Sidebar() {
    return (
        <div className='sidebar p-4 bg-dark text-white' style={{ height: "150vh" }}>
            <div className='row'>
                <div className='col-12'>

                    <div className='row   my-5' id="user">
                        <div className='col-2 '><img src={logo} width={60} height={60} /></div>
                        <div className='col-10 my-2  '>
                            <p>Menü</p>
                        </div>

                    </div>
                    <div className='row d-flex justify-content-center my-4'>
                        <ul className="col-12 " style={{ listStyle: 'none' }}>

                            {menu_eleman.map((eleman, index) =>
                            (<SideList menuElemani={eleman}
                                tiklandiginda={() => sidebar_goster(eleman, index)} />)
                            )}

                        </ul>
                    </div>



                </div>
            </div>
          

        </div>
    );
}
export default Sidebar;