import figlet from "figlet";
import Pagga from "../ascii/Pagga";
import Nancyj from "figlet/importable-fonts/Nancyj";

const asciiWord = (word, font = "Pagga") => {
  let text = "";
  figlet.parseFont(font, font === "Pagga" ? Pagga : Nancyj);
  figlet.text(
    word,
    {
      font,
    },
    function (err, data) {
      console.log(data);
      text = data;
    }
  );
  return text;
};

export default asciiWord;
