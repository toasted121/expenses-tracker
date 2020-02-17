//import moment from "moment"; this import will call the mocked library and cause stack trace overrun.

const moment = require.requireActual('moment');

export default (timestamp = 0) => {
    return moment(timestamp);
};