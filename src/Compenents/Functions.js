import ReactDOM from 'react-dom/client';
import { anayemek_baslik, anayemek_fiyat, anayemek_resim, anayemek_aciklama, corba_baslik,corba_aciklama,corba_resim,corba_fiyat, tatli_baslik, tatli_resim, tatli_aciklama, tatli_fiyat} from './icerik';
import {arasicak_baslik,arasicak_aciklama,arasicak_fiyat,arasicak_resim} from './icerik';

import YemekCard from './YemekCard';






export const sidebar_goster = (eleman, index) => {
    const sol = ReactDOM.createRoot(document.getElementById("sol"));

    if (eleman == "Ana Yemek") {
        sol.render(
            <>
                <div className="row text-dark">
                    <div className='col-12 '
                    >
                        <ul className='list-group list-group-horizontal-lg  d-flex  flex-wrap'>
                            {anayemek_baslik.map((eleman, index) =>
                            (<YemekCard
                                resim={anayemek_resim[index]}
                                baslik={eleman}
                                aciklama={anayemek_aciklama[index]}
                                fiyat={anayemek_fiyat[index]}



                            />)
                            )}

                        </ul>

                    </div>

                </div>
            </>

        )
    }
    else if (eleman == "Çorba") {
        sol.render(
            <>
                <div className="row text-dark">
                    <div className='col-12 '
                    >
                        <ul className='list-group list-group-horizontal-lg  d-flex  flex-wrap'>
                            {corba_baslik.map((eleman, index) =>
                            (<YemekCard
                                resim={corba_resim[index]}
                                baslik={eleman}
                                aciklama={corba_aciklama[index]}
                                fiyat={corba_fiyat[index]}



                            />)
                            )}

                        </ul>

                    </div>

                </div>
            </>

        )

    }
    else if (eleman == "Ara Sıcak") {
        sol.render(
            <>
                <div className="row text-dark">
                    <div className='col-12 '
                    >
                        <ul className='list-group list-group-horizontal-lg  d-flex  flex-wrap'>
                            {arasicak_baslik.map((eleman, index) =>
                            (<YemekCard
                                resim={arasicak_resim[index]}
                                baslik={eleman}
                                aciklama={arasicak_aciklama[index]}
                                fiyat={arasicak_fiyat[index]}



                            />)
                            )}

                        </ul>

                    </div>

                </div>
            </>

        )

    }
    else if (eleman == "Tatlı") {
        sol.render(
            <>
            <div className="row text-dark">
                <div className='col-12 '
                >
                    <ul className='list-group list-group-horizontal-lg  d-flex  flex-wrap'>
                        {tatli_baslik.map((eleman, index) =>
                        (<YemekCard
                            resim={tatli_resim[index]}
                            baslik={eleman}
                            aciklama={tatli_aciklama[index]}
                            fiyat={tatli_fiyat[index]}



                        />)
                        )}

                    </ul>

                </div>

            </div>
        </>

        )

    }

}
var sonuc = 0;
var secilen=[];
export const sepeteEkle = (baslik, fiyat) => {


secilen.push([baslik,fiyat]);

sessionStorage.setItem("siparis", secilen);



    var yemek_isim = baslik;
    var yemek_fiyat = parseInt(fiyat);
    
  

    
    var sepet = document.getElementById('sepet_list');
    document.getElementById('sag').style.display="";

    var toplam = document.getElementById('toplam');


    switch (yemek_isim) {
        case yemek_isim:
            document.getElementById("sepet_list").innerHTML += "<li>"+yemek_isim+"</li>"+yemek_fiyat+" TL";

            break;
     
        default:
    }
    sonuc += yemek_fiyat;
    toplam.innerHTML = sonuc;
    
        
        
       
    




}
export const siparis = () => {
    var toplam = document.getElementById('toplam').innerHTML;
    alert("Ödediğiniz Tutar: "+toplam+" TL"+"  "+" Siparişiniz alınmıştır.")

}


