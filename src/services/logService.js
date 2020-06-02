//import * as Sentry from "@sentry/browser";

function init() {
  /*  Sentry.init({
    dsn: "https://d5682c4a270c4b038d47818412efda54@sentry.io/1807603"
  });*/
}

function log(error) {
  /*Sentry.captureException(error);*/
  console.error(error);
}

export default {
  init,
  log
};
