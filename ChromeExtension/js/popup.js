document.getElementById("conv_button").addEventListener("click",()=>changeText(document.getElementById('input_message').value));

document.getElementById("copy_button").addEventListener("click",()=>navigator.clipboard.writeText(document.querySelector('#txt').value).then(_=>alert("コピーしました"),_=>alert("コピーできませんでした")));

//文字列をフレイザー文字列に変換してテキストエリアに入力する
function changeText(text){
    var ta = document.querySelector('#txt');
    ta.value = "";
    for(var i = 0 ; i < text.length ; i++){
        var character = text.substr(i,1);
        ta.value += checkCharacter(character);
    }
}

//文字をフレイザー文字に変換する。変換対象でない場合はそのまま
function checkCharacter(text){
    switch(text){
        case "A":return "ꓮ";
        case "B":return "ꓐ";
        case "C":return "ꓚ";
        case "D":return "ꓓ";
        case "E":return "ꓰ";
        case "F":return "ꓝ";
        case "G":return "ꓖ";
        case "H":return "ꓧ";
        case "I":return "ꓲ";
        case "J":return "ꓙ";
        case "K":return "ꓗ";
        case "L":return "ꓡ";
        case "M":return "ꓟ";
        case "N":return "ꓠ";
        case "O":return "ꓳ";
        case "p":return "ꓑ";
        case "R":return "ꓣ";
        case "S":return "ꓢ";
        case "T":return "ꓔ";
        case "U":return "ꓴ";
        case "V":return "ꓦ";
        case "W":return "ꓪ";
        case "X":return "ꓫ";
        case "Y":return "ꓬ";
        case "Z":return "ꓜ";
        default:return text;
    }
}

