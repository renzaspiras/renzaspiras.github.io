import { addScript, make, set_webName, img } from "../rca.mjs"

export function teacher(){
    constructor()
}

function constructor(){
    header()
    scanner()

    roaming()
}

function header(){
    set_webName('BSIT | Teacher')
    
}

function scanner(){
    make("section").from("App_Frame").to('body').content('').build()
    make('div').from('Camera_Frame').to('#App_Frame').content('').build()

    Camera()

    make('div').from('Scan_Frame').to("#App_Frame").content('').build()
    make('button').from('scanNow').to('#Scan_Frame').content('Scan Now').build()

    make('canvas').from('capture').to("#App_Frame").content('').build()
    make('div').from('imgContainer').to('#App_Frame').content('').build()

    img('').from("data").to("#imgContainer").build()
}

function Camera(){
    make('video').from('camera-feed').to('#Camera_Frame').content('').build()
    const cam = document.getElementById('camera-feed')

    cam.autoplay = true
    cam.facingMode = "environment"
    cam.setAttribute('playsinline', '');
    document.addEventListener('DOMContentLoaded', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });
            const videoElement = document.getElementById('camera-feed');
            
            // Set the video stream as the source for the video element.
            videoElement.srcObject = stream;
        } catch (error) {
            console.error('Error accessing the camera:', error);
        }
    }); 
    
}


export function roaming(){
    document.getElementById("scanNow").addEventListener('click',()=>{
        const video = document.getElementById("camera-feed");
        const canvas = document.getElementById("capture");
        const context = canvas.getContext('2d');

        video.pause();

        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;

        context.drawImage(video, 0, 0, canvas.width, canvas.height)
        document.getElementById('data').src = canvas.toDataURL('image/png')

        //const qrcode = new jsQR(document.querySelector("img").src);
        //const qrcode = new jsQR(document.querySelector("img").src)

     
        video.play();
    })
}



function fetchRequest(file, formData){
    fetch("http://api.qrserver.com/v1/read-qr-code/", {
        method: 'POST', body: formData
    }).then(res => res.json()).then(result => {
        result = result[0].symbol[0].data;
        //infoText.innerText = result ? "Upload QR Code to Scan" : "Couldn't scan QR Code";
        if(!result) return;
        alert(result)
        //document.querySelector("textarea").innerText = result;
        //form.querySelector("img").src = URL.createObjectURL(file);
        //wrapper.classList.add("active");
    }).catch(() => {
        infoText.innerText = "Couldn't scan QR Code";
    });
}


// Boxes
/**
 * Login;
 * Auto Login Features;
 * Login Now
 */

