import "../css/main.css";

console.log(`this is main.js!`);


const autoChangeSkin = () => {
    let head = document.querySelector(`head`);
    let link = `
        <link href="../css/app.min.css" rel="stylesheet">
    `;
    head.insertAdjacentHTML(`beforeend`, link);
};

document.addEventListener(`DOMContentLoaded`, () => {
    alert(`3s 后, 通过 CSS3 变量自动换肤!`);
    setTimeout(() => {
        autoChangeSkin();
    }, 3000);
});
