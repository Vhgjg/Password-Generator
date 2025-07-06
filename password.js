const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateBtn = document.getElementById('generate');
const copyBtn = document.getElementById('copy');

generateBtn.addEventListener('click', () => {
let characters = "";
const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lower = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*(){}[]=<>/,.';

if(uppercaseEl.checked) characters += upper;
if(lowercaseEl.checked) characters += lower;
if(numbersEl.checked) characters += numbers;
if(symbolsEl.checked) characters += symbols;

let password = "";
const length = parseInt(lengthEl.value); // mengubah nilai length menjadi int
for(let i = 0; i < length; i++) {
    const character = characters.charAt(Math.floor(Math.random() * characters.length));
    //logic nya adalah dengan mengambil panjang karakter yang sudah ditentukan, kemudian kemudia dikali angka random 0 -1, lalu dibulatkan ke bawah dan diambil karakter berdasarkan nilai tsbt
    password += character;
}
resultEl.value = password;

});
copytoClipboard = () => {
    resultEl.select();
    document.execCommand('copy');
     alert('Password copied to clipboard!');
};
copyBtn.Btn.addeventListener("click", () =>{
    if (resultEl.value) {
        copytoClipboard();
    } else {
        alert('please generate password first!');
    }
}
)