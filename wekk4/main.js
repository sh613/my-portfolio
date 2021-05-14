const root = document.documentElement;
const world = document.querySelector(".world");
const faceElements = document.querySelectorAll(".face");
const faces = ["😀"];

const getWorldCoordinates = (x, y) => {
  const r = world.getBoundingClientRect();

  root.style.setProperty("--world-x", x - (r.left + Math.floor(r.width / 2)));
  root.style.setProperty("--world-y", y - (r.top + Math.floor(r.height / 2)));
};

const addFace = ({ clientX, clientY }) => {
  const face = faces[Math.floor(Math.random() * faces.length)];
  const text = document.createTextNode(face);
  const node = document.createElement("div");

  node.appendChild(text);
  node.classList.add("face");
  node.style.left = clientX + "px";
  node.style.top = clientY + "px";
  node.addEventListener("animationend", () => node.remove());

  getWorldCoordinates(clientX, clientY);
  document.body.insertAdjacentElement("beforeend", node);
};

document.body.addEventListener("mousemove", _.throttle(addFace, 60));
