import { styleText } from 'node:util';

const logger = {
    filesystem: function (message) {
        console.log(styleText("blue", `[FILESYSTEM] ${message}`));
    },
    error: function (message) {
        console.log(styleText("red", `[ERROR] ${message}`));
    },
    system: function (message) {
        console.log(styleText("green", `[SYSTEM] ${message}`));
    },
    http: function (message) {
        console.log(styleText("yellow", `[HTTP] ${message}`));
    }
};

export default logger;