import {twoWayTable} from '../../../../core/two-way-table.js';
export default {types:['two_way_table'],build:s=>twoWayTable(s.questionIndex??0)};
