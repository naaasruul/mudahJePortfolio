import { createApp } from "vue";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Components
import App from "./App.vue";

import Header from "./components/Header/Nav.vue";
import Banner from "./components/Header/Modal.vue";

import Carousel from "./components/Header/Carousel.vue";
import Feature from "./components/Body/Feature.vue";
import Team from "./components/Body/Team.vue";
import Footer from "./components/Footer/Footer.vue";
import Timeline from "./components/Body/Timeline.vue";

const vuetify = createVuetify({
    components,
    directives,
  })

const app = createApp(App);

app.component("app-header", Header);
app.component("app-banner", Banner);
app.component("app-carousel", Carousel);
app.component("app-feature", Feature);
app.component("app-team", Team);
app.component("app-timeline", Timeline );
app.component("app-footer", Footer);

app.use(vuetify).mount("#app");
