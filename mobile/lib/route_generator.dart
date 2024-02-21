import 'package:edumoodup/pages/about_application_page.dart';
import 'package:edumoodup/pages/lesson_accept_page.dart';
import 'package:edumoodup/pages/student_AcccountSettings_page.dart';
import 'package:edumoodup/pages/add_lesson_page.dart';
import 'package:edumoodup/pages/change_password_page.dart';
import 'package:edumoodup/pages/developer_group_page.dart';
import 'package:edumoodup/pages/discontinuity_page.dart';
import 'package:edumoodup/pages/login_page.dart';
import 'package:edumoodup/pages/select_register_page.dart';
import 'package:edumoodup/pages/student_register_page.dart';
import 'package:edumoodup/pages/student_page.dart';
import 'package:edumoodup/pages/graphic_page.dart';
import 'package:edumoodup/pages/teacher_AccountSettings_page.dart';
import 'package:edumoodup/pages/teacher_page.dart';
import 'package:edumoodup/pages/teacher_register_page.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter/foundation.dart';
import 'package:flutter/material.dart';

class RouteGenerator {
  static Route<dynamic>? _gidilecekrota(
      Widget gidilecekWidget, RouteSettings settings) {
    if (defaultTargetPlatform == TargetPlatform.iOS) {
      return CupertinoPageRoute(
          settings: settings, builder: (context) => gidilecekWidget);
    } else {
      return MaterialPageRoute(
          settings: settings, builder: (context) => gidilecekWidget);
    }
  }

  static Route<dynamic>? rotaOlustur(RouteSettings settings) {
    switch (settings.name) {
      case '/':
        return _gidilecekrota(const LoginPage(), settings);
      case '/login':
        return _gidilecekrota(const LoginPage(), settings);

      case '/register':
        return _gidilecekrota(const SelectRegisterPage(), settings);
      case '/studentRegister':
        return _gidilecekrota(const StudentRegisterPage(), settings);
      case '/teacherRegister':
        return _gidilecekrota(const TeacherRegisterPage(), settings);
      case '/studentAccountSettings':
        return _gidilecekrota(const StudentAccountSettingsPage(), settings);
      case '/teacherAccountSettings':
        return _gidilecekrota(const TeacherAccountSettingsPage(), settings);
      case '/discontinuty':
        return _gidilecekrota(const DiscontinuityPage(), settings);
      case '/student':
        return _gidilecekrota(const StudentPage(), settings);
      case '/teacher':
        return _gidilecekrota(const TeacherPage(), settings);
      case '/graphic':
        return _gidilecekrota(const GraphicPage(), settings);
      case '/aboutApplication':
        return _gidilecekrota(const AboutApplicationPage(), settings);
      case '/developerGroup':
        return _gidilecekrota(const DeveloperGroupPage(), settings);
      case '/changePassword':
        return _gidilecekrota(const ChangePasswordPage(), settings);
      case '/addLesson':
        return _gidilecekrota(const AddLessonPage(), settings);
      case '/lessonAccept':
        return _gidilecekrota(const LessonAcceptPage(), settings);
      default:
        return _gidilecekrota(const LoginPage(), settings);
    }
  }
}
