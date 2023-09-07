import text from '../text/text.json' assert { type: 'json' };
import { language } from './consts.js';

const getElementChildren = element => {
    if (element.children?.length) {
        
    }
}

const changeLang = lang => {
    console.log(document.body);

    for(let element of document.body.children){
        if (element.children) {

        }
        console.log(element);
    }
    
}

const ua = document.getElementById("ua");
const en = document.getElementById("en");

ua.onclick = _ => {
    changeLang(language.ua);
}

en.onclick = _ => {
    changeLang(language.en);
}

changeLang(language.ua);