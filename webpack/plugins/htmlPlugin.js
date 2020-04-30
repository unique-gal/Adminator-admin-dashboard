const path = require("path"),
  manifest = require("../manifest"),
  HtmlWebpackPlugin = require("html-webpack-plugin");

const titles = {
  Notice: "Notice",
  calendar: "Calendar",
  validMember: "validMember",
  invalidMember: "invalidMember",
  readyMember: "readyMember",
  registMember: "registMember",
  coachmanager: "coachmanager",
  lessonManager: "lessonManager",
  lessonSchedule: "lessonSchedule",
  Setting: "Setting",
  datatable: "Datatable",

  // 'index': 'Dashboard',
  // 'blank': 'Blank',
  // 'charts': 'Charts',
  // 'chat': 'Chat',
  // 'compose': 'Compose',
  // 'email': 'Email',
  // 'forms': 'Forms',
  // 'google-maps': 'Google Maps',
  // 'signin': 'Signin',
  // 'signup': 'Signup',
  // 'ui': 'UI',
  // 'vector-maps': 'Vector Maps',
  // '404': '404',
  // '500': '500',
  // 'basic-table': 'Basic Table',
};

module.exports = Object.keys(titles).map((title) => {
  return new HtmlWebpackPlugin({
    template: path.join(manifest.paths.src, `${title}.html`),
    path: manifest.paths.build,
    filename: `${title}.html`,
    inject: true,
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  });
});
