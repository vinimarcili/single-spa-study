import { registerApplication, start } from "single-spa";

const app = {
  async mount(props) {
    const domElementContainer = document.getElementById(
      "single-spa-application:vanilla-app"
    );
    const img = document.createElement("img");
    img.setAttribute(
      "src",
      "https://images.dog.ceo/breeds/finnish-lapphund/mochilamvan.jpg"
    );
    domElementContainer.appendChild(img);
  },

  async unmount(props) {
    const domElementContainer = document.getElementById(
      "single-spa-application:vanilla-app"
    );
    domElementContainer.innerHTML = "";
  },
};

registerApplication({
  name: "vanilla-app",
  app,
  activeWhen: ["/"],
  customProps: {},
});

start();
