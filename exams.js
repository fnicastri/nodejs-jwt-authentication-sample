var exams = require('./exams.json');

exports.getExams = function(id) {
  console.log(id)
  return exams[id]?exams[id].exams:{};
}
