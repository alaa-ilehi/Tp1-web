let text = document.getElementById("text");
let colorPicker = document.getElementById("colorPicker");
let sizeInput = document.getElementById("sizeInput");
let fontSelect = document.getElementById("fontSelect");

colorPicker.addEventListener("input", function() {
    text.style.color = colorPicker.value;
});

sizeInput.addEventListener("input", function() {
    text.style.fontSize = sizeInput.value + "px";
});

fontSelect.addEventListener("change", function() {
    text.style.fontFamily = fontSelect.value;
});
