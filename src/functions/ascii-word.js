import figlet from '../when-module-doesnt-merge-your-pullrequest/figlet.js'
import Pagga from '../when-module-doesnt-merge-your-pullrequest/figlet.js/importable-fonts/Pagga'
const font = "Pagga"

const asciiWord = word => {
    let text = ''
    figlet.parseFont(font, Pagga);
    figlet.text(word, {
        font,
    }, function(err, data) {
        console.log(data)
        text = data;
    });
    return text
}

export default asciiWord
