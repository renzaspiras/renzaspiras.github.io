import { set_webName, make, img, print } from "./rca.mjs";
constructor()
function constructor(){
    header()
    body_system()
    detects()
}

function header(){
    set_webName('BSIT | Beta');
}

function body_system(){
    
    make("section").from("App_Frame").to('body').content('').build()
    
    
        // Camera
        make('div').from('Camera_Frame').to('#App_Frame').content('').build()
        Camera()

        // Scan
        make('div').from('Scan_Frame').to("#App_Frame").content('').build()
        img('assets/scan.png').from('scanCon').to("#Scan_Frame").build()
}

function detects(){
    const Scan = document.getElementById('scanCon')
    Scan.addEventListener('click',()=>{
        //alert('Pogi Sige Na')

        /**
         * ID Number
         * Course
         * Section
         * Student Name
         * 
         * Format = [ID, Course, Year, Section, Name]
         */
        make('div').from('QR').to('body').content('').build()
        
        const QR = document.getElementById('QR')
        const qrcode = new QRCode(document.getElementById('QR'),{
            text: "http://jindo.dev.naver.com/collie",
            width: 128,
            height: 128,
            colorDark : "#000000",
            colorLight : "#ffffff",
            correctLevel : QRCode.CorrectLevel.H
        })
    })
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