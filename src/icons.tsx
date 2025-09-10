import { library, config } from "@fortawesome/fontawesome-svg-core";

config.autoAddCss = false;

import {
  faSquareEnvelope,
  faSquarePhone,
} from "@fortawesome/free-solid-svg-icons";
import { faSquareGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

library.add(faSquareEnvelope, faSquarePhone, faSquareGithub, faLinkedin);

import "@fortawesome/fontawesome-svg-core/styles.css";
