// ignore: file_names
import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher_string.dart';

class StudentAccountSettingsPage extends StatefulWidget {
  const StudentAccountSettingsPage({Key? key}) : super(key: key);

  @override
  State<StudentAccountSettingsPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<StudentAccountSettingsPage> {
  @override
  Widget build(BuildContext context) {
    Size size = MediaQuery.of(context).size;

    return SafeArea(
        child: Scaffold(
            bottomNavigationBar: Container(
              color: ikinciRenk,
              height: 70,
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  Expanded(
                    child: GestureDetector(
                      onTap: () {
                        Navigator.pushReplacementNamed(
                            context, "/discontinuty");
                      },
                      child: Container(
                        color: Colors.transparent,
                        width: size.width / 3,
                        child: const Icon(
                          Icons.alarm,
                          color: Colors.white,
                          size: 40,
                        ),
                      ),
                    ),
                  ),
                  Expanded(
                    child: GestureDetector(
                      onTap: () {
                        Navigator.popUntil(context, (route) => route.isFirst);
                      },
                      child: Container(
                        color: Colors.transparent,
                        width: size.width / 3,
                        child: const Icon(
                          Icons.home,
                          color: Colors.white,
                          size: 50,
                        ),
                      ),
                    ),
                  ),
                  Expanded(
                    child: Container(
                      height: 70,
                      color: ucuncuRenk,
                      width: size.width / 3,
                      child: const Icon(
                        Icons.settings,
                        color: Colors.white,
                        size: 40,
                      ),
                    ),
                  ),
                ],
              ),
            ),
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
                  SingleChildScrollView(
                    child: Center(
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            margin: const EdgeInsets.symmetric(horizontal: 20),
                            decoration: BoxDecoration(
                                color: Colors.transparent,
                                borderRadius: BorderRadius.circular(20)),
                            child: Padding(
                              padding: const EdgeInsets.all(20.0),
                              child: Column(
                                mainAxisAlignment: MainAxisAlignment.center,
                                crossAxisAlignment: CrossAxisAlignment.center,
                                children: [
                                  const Text("Settings",
                                      style: TextStyle(
                                          fontFamily: "Poppins",
                                          fontWeight: FontWeight.bold,
                                          fontSize: 35),
                                      textAlign: TextAlign.center),
                                  const SizedBox(
                                    height: 50,
                                  ),
                                  kutucuklar("My lessons", Icons.add_box, () {
                                    Navigator.pushNamed(context, "/addLesson");
                                  }),
                                  kutucuklar("Change Password", Icons.person,
                                      () {
                                    Navigator.pushNamed(
                                        context, "/changePassword");
                                  }),
                                  kutucuklar("About Us", Icons.info, () {
                                    Navigator.pushNamed(
                                        context, "/aboutApplication");
                                  }),
                                  kutucuklar("Our Website", Icons.public,
                                      () async {
                                    await launchUrlString(
                                      "https://edumoodup.com/",
                                      mode: LaunchMode
                                          .externalNonBrowserApplication,
                                    );
                                  }),
                                  kutucuklar("Developer Team", Icons.group,
                                      () {
                                    Navigator.pushNamed(
                                        context, "/developerGroup");
                                  }),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  GestureDetector(
                                    onTap: () {
                                      Navigator.popUntil(
                                          context, (route) => route.isFirst);
                                      Navigator.pushNamedAndRemoveUntil(
                                          context, "/login", (route) => false);
                                    },
                                    child: Container(
                                      height: 50,
                                      width: double.infinity,
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(15),
                                          color: ikinciRenk),
                                      child: const Center(
                                        child: Text(
                                          "Sign Out",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              fontSize: 20,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.white),
                                        ),
                                      ),
                                    ),
                                  )
                                ],
                              ),
                            ),
                          ),
                          const Text("All rights reserved ©",
                              style: TextStyle(
                                fontFamily: "Poppins",
                                fontSize: 12,
                              )),
                          const SizedBox(
                            height: 30,
                          ),
                        ],
                      ),
                    ),
                  )
                ]))));
  }

  Widget kutucuklar(String isim, IconData icon, void Function() function) {
    return Column(
      children: [
        GestureDetector(
          onTap: function,
          child: Container(
            height: 70,
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15), color: anaRenk),
            child: Padding(
              padding: const EdgeInsets.symmetric(horizontal: 15),
              child: Row(
                children: [
                  Icon(
                    icon,
                    color: Colors.black,
                    size: 30,
                  ),
                  const SizedBox(
                    width: 10,
                  ),
                  Padding(
                    padding: const EdgeInsets.only(top: 2),
                    child: Text(
                      isim,
                      style: const TextStyle(
                          fontFamily: "Poppins",
                          fontSize: 20,
                          fontWeight: FontWeight.bold,
                          color: Colors.black),
                    ),
                  ),
                  const Expanded(child: SizedBox()),
                  const Icon(
                    Icons.arrow_forward_ios,
                    color: Colors.black,
                  )
                ],
              ),
            ),
          ),
        ),
        const SizedBox(
          height: 10,
        )
      ],
    );
  }
}
