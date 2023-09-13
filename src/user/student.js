import { addScript, make } from "../rca.mjs"


export function student(){
    constructor()
}


function constructor(){
    //addScript("https://unpkg.com/qr-code-styling@1.5.0/lib/qr-code-styling.js")
    QR()
}

function header(){

}

function QR(){
    //App Frame
    make('section').from('App_Frame').to('body').content('').build()

    //ID Frame
    //QR Frame
    make('div').from("canvas").to("#App_Frame").content('').build()
    make("h1").from("ID").to("#canvas").content('22-22222').build()

    const qrCode = new QRCodeStyling({
        width: 300,
        height: 300,
        type: "svg",
        data: "22-22222",
        image: "AC.png",
        dotsOptions: {
            color: "#7F00FF",
            type: "rounded"
        },
        backgroundOptions: {
            color: "#e9ebee",
        },
        imageOptions: {
            crossOrigin: "anonymous",
            margin: 20
        }
    });
    qrCode.append(document.getElementById("canvas"));
}