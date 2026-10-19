import {positionLesson} from '../../../../core/position-lesson.js';
export default {types:['position_lesson'],build:s=>positionLesson(s.questionIndex??0)};
