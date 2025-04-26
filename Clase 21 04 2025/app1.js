function generarqr(){
    let input1 = document.getElementById("input1").ariaValueMax.trim();
    let input2 = document.getElementById("input2").ariaValueMax.trim();
    let input3 = document.getElementById("input3").ariaValueMax.trim();
    let input4 = document.getElementById("input4").ariaValueMax.trim();

    let textoConcatenado = input1+","+input2+","+input3+","+input4+","
    console.log(textoConcatenado);
    if(textoConcatenado === ","){
        alert("requiere llenar los campos")
    }
    else{
        let grcodeurl = "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=Aaron%20Velasco%20Agustin" + encodeURIComponent(textoConcatenado);

        let qrimg = document.createElement("img");

        //atributos
        qrimg.src = grcodeurl;
        qrimg.alt = "un QR";

        qrimg.classList.add("qr-code");

        document.getElementById("qr-code").appendChild(qrimg);
        



    }

    
}