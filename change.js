var inputText = "";
var outputText = "";
var button = document.getElementById("button");
var text_id = document.getElementById("text");

button.addEventListener("click",function(){
   inputText = prompt("変換したい文字列を入力してください");
    changeText(inputText);
});

//文字列をフレイザー文字列に変換して返す
function changeText(text){
    for(var i = 0 ; i < text.length ; i++){
        var character = text.substr(i,1);
        outputText = outputText + checkCharacter(character);
    }
    text_id.innerHTML = outputText;
    copyToClipboard(outputText);

    outputText="";
}
//変換後テキストをクリップボードにコピーする
function copyToClipboard(text){
    navigator.clipboard.writeText(text).then(
        _ => alert("コピーしました"), _ => alert("コピーできませんでした")
    );
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