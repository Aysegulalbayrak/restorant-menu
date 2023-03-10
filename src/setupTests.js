// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';



export const goster = (eleman, eleman_index) => {

    const sol = ReactDOM.createRoot(document.getElementById("sol"));
    const sag = ReactDOM.createRoot(document.getElementById("sag"));
  
    if(eleman == "Eğitimler"){
      sol.render(
        <Sol 
          baslik = {basliklar[eleman_index]} 
          icerik = {icerikler[eleman_index]} 
        /> 
      )
  
    }
    else if(eleman == "Hemen Başvur"){

      var isLogin = sessionStorage.getItem("isLogin");
      var user_info = sessionStorage.getItem("user_info");

      if(isLogin == "true"){
        if(user_info == null){
          sol.render(
            <Basvur btn_deger="Gönder" />
          )
        }else{
          sol.render(
            <Basvur btn_deger="Güncelle" />
          )
        }
        
      }
      else if(isLogin == "false"){
        alert("Başvuru formu görüntülenmeden önce giriş yapılmalıdır.");
        sag.render(
          <Giris_form />
        )
      }
      
    }
    else if(eleman == "S.S.S."){
      sol.render(
        <>
        <h1>{basliklar[eleman_index]}</h1>
  
        {sorular.map((Q, soru_index) =>   
          (<Sss
              soru={Q} 
              cevap={cevaplar[soru_index]}
          />)
          )}
        </>
      )
    }
    else if(eleman == "giris"){
      sag.render(
        <Giris_form />
      )
    }
    else if(eleman == "kayit"){
      sag.render(
        <Kayit_form />
      )
    }
        
    
  }