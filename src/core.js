import { make, set_webName } from "./rca.mjs";
import { student } from "./user/student.js";
import { teacher } from "./user/teacher.js";


function constructor(){
    header()
    teacher()

    //student()
}
constructor()

function header(){
    set_webName('BSIT | BETA')
}