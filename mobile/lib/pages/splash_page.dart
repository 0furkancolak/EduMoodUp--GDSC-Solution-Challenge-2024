// ignore_for_file: use_build_context_synchronously

import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class SplashPage extends StatefulWidget {
  const SplashPage({Key? key}) : super(key: key);

  @override
  State<SplashPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<SplashPage> {
  @override
  void initState() {
    zamanlayiciCalistir();
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return SafeArea(
        child: Scaffold(
            body: SizedBox(
                width: size.width,
                height: size.height,
                child: Stack(children: [
                  Container(
                    width: size.width,
                    height: size.height,
                    decoration: BoxDecoration(
                        gradient: LinearGradient(
                      begin: Alignment.bottomCenter,
                      end: Alignment.topCenter,
                      colors: [
                        anaRenk,
                        const Color.fromARGB(255, 202, 199, 197),
                      ],
                    )),
                  ),
                  Center(
                    child: Column(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        const Expanded(
                          child: SizedBox(),
                        ),
                        Image.asset("assets/logo.png"),
                        const Expanded(
                          child: SizedBox(),
                        ),
                        LinearProgressIndicator(
                          color: ucuncuRenk,
                        ),
                      ],
                    ),
                  )
                ]))));
  }

  void zamanlayiciCalistir() async {
    await Future.delayed(const Duration(seconds: 4));
    Navigator.popUntil(context, (route) => route.isFirst);
    Navigator.pushNamedAndRemoveUntil(context, "/login", (route) => false);
  }
}
