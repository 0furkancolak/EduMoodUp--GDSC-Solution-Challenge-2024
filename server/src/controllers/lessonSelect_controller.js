// öğrencinin dersi seçmesi / hocanın dersi seçmesi

import LES from "../model/ders_model";
import User from "../model/user";
import WEEK from "../model/weeklessonprograming_model";

const STUDENT = require("../model/student_model");

const studentaddlesson = async (req, res) => {
  const { lessonid, student } = req.params;
  const studentdata = await STUDENT.findOne({ _id: student });
  const newLesson = {
    lessonId: lessonid,
    devamsizlik: 0,
    verification: false,
  };
  studentdata.lesson.push(newLesson);
  await studentdata.save();
};

const teacheraddlesson = async (req, res) => {
  const { lessonid, teacher } = req.params;
  const lessondata = await LES.findOne({ _id: lessonid });
  lessondata.TEACHERID = teacher;
  lessondata.save();
};

const getverlessonstudents = async (req, res) => {
  const { lessonid } = req.params;

  const students = await STUDENT.find({
    lessonId: lessonid,
    verification: true,
  });
  let studentdata = [];
  students.forEach(async (element) => {
    const user = await User.findOne({ _id: element.ID });
    studentdata.push(user);
  });
  res.json(studentdata);
};
const getunverlessonstudents = async (req, res) => {
  const students = await STUDENT.find({
    lessonId: lessonid,
    verification: false,
  });
  let studentdata = [];
  students.forEach(async (element) => {
    const user = await User.findOne({ _id: element.ID });
    studentdata.push(user);
  });
  res.json(studentdata);
};

const weekprogram = async (req, res) => {
  const { id } = req.params;

  const student = await STUDENT.findOne({ ID: id });

  const studentlessons = student.lesson;
  let lesson = [];
  let data = [];
  studentlessons.forEach((element) => {
    lesson.push(element.lessonId);
  });
  lesson.forEach(async (element) => {
    const week = await WEEK.findOne({ LESSONID: element });
    data.push(week);
  });

  res.json(data);
};
export default {
  studentaddlesson,
  teacheraddlesson,
  getverlessonstudents,
  getunverlessonstudents,
  weekprogram,
};
