
import { sepeteEkle } from "./Functions";


function YemekCard(props) {

  
    return (
        <>
            <li className="list-group-item p-3 m-3 border border-dark" style={{width:400}} >
                <div className=""  >
                    <img src={props.resim}
                        style={{
                            height: '50%',
                            width: '50%',
                            display: 'block',
                            margin: '0 auto'
                        }} />
                    <p><b>{props.baslik}</b></p>
                    <hr/>
                    <p>{props.aciklama}</p>
                    <p><b>{props.fiyat} TL</b></p>
                    <button className="btn btn-md btn-warning" 
                    onClick={
                        ()=>sepeteEkle(`${props.baslik}`,`${props.fiyat}`)
                        }
                        >
                        Sepete Ekle</button>
                </div>

            </li>
        </>

    );
}
export default YemekCard;
