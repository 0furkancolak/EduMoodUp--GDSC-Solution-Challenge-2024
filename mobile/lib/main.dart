import 'package:edumoodup/const.dart';
import 'package:edumoodup/pages/login_page.dart';
import 'package:edumoodup/pages/splash_page.dart';
import 'package:edumoodup/route_generator.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';

void main() async {
  WidgetsFlutterBinding.ensureInitialized();
  await SystemChrome.setPreferredOrientations([
    DeviceOrientation.portraitUp,
  ]);
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EduMoodUp',
      onGenerateRoute: RouteGenerator.rotaOlustur,
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: anaRenk),
        useMaterial3: true,
      ),
      home: const SplashPage(),
    );
  }
}
