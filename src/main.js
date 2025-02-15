import { createApp } from "vue";
import App from "./App.vue";

import Header from "./components/Header/Nav.vue";
import Banner from "./components/Header/Modal.vue";

import Carousel from "./components/Header/Carousel.vue";
import Feature from "./components/Body/Feature.vue";
import Team from "./components/Body/Team.vue";
import Footer from "./components/Footer/Footer.vue";

const app = createApp(App);

app.component("app-header", Header);
app.component("app-banner", Banner);
app.component("app-carousel", Carousel);
app.component("app-feature", Feature);
app.component("app-team", Team);
app.component("app-footer", Footer);
app.mount("#app");
