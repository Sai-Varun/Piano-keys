const whiteKeys = ["KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ"];
const blackKeys = ["KeyW", "KeyE", "KeyT", "KeyY", "KeyU"];
playKey = el => {
    let keyToPlay = new Audio(el);
    keyToPlay.play();
}
document.addEventListener("keydown", ev => {
    if(whiteKeys.includes(ev.code)) {
        playKey(`white_keys/${ev.key}.mp3`);
    } else if(blackKeys.includes(ev.code)) {
        playKey(`black_keys/${ev.key}.mp3`);
    }
});
const piano = document.querySelectorAll("kbd");
for (let i = 0; i < piano.length; i++){
    piano[i].addEventListener("click",() => {
        if(whiteKeys.includes(`Key${piano[i].innerText}`)) {
            playKey(`white_keys/${piano[i].innerText}.mp3`);
        } else {
            playKey(`black_keys/${piano[i].innerText}.mp3`);
        }
    });
}