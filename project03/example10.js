var nickNames = ["Alexander", "Alex", "Alexander the Great"];
function allNicknames(callback) {
    for (var i = 0; i < nickNames.length; i += 1) {
        console.log(callback(1));
    }
}
function getNameAt(index) {
    return "".concat(nickNames[index]);
}
allNicknames(getNameAt);
