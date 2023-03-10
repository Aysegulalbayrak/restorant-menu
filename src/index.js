import React from 'react';
import ReactDOM from 'react-dom/client';
import Sidebar from './Compenents/Sidebar';
import './index.css';
import sepet from "./img/sepet.png"
import { siparis } from "./Compenents/Functions";

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className="Sidebar">
      <div className='row'>

        <div className='col-3'><Sidebar /></div>


        <div className='col-9 p-5' >

          <div className='row'>
            <div className='col-8' id="sol"></div>

            
            <div className='col-4' id="sag" style={{display:'none'}}>
              <div className='container bg-white text-dark border border-danger'>
                <div className='row p-4 m-3'>
                  <div className='col-12'>
                    <div className='row'>
                      <div className='col-3'><img height={50} width={50} src={sepet}/></div>
                      <div className='col-4 my-1'><h3>Sepetim</h3></div>

                    </div>
                    

                    <p className='my-4'>
                      <ul id="sepet_list">

                      </ul>
                    </p>
                    <p><b>Toplam: </b> <span id="toplam"></span> TL</p>
                  </div>




                </div>
                <div className='row my-2 d-flex justify-content-end'>
                  <div className='col-4 my-2'>

                    <button className='btn btn-md btn-danger' onClick={()=>siparis()}>Sipariş ver </button>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
