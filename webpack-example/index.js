import "./styles.scss";
import cookie from './cookie.png';

const app = document.getElementById("app");
app.innerHTML = `<h1>Hello Webpackkelellelelelel!</h1>`;

const img = document.createElement("img");
img.src = cookie;
app.appendChild(img);
