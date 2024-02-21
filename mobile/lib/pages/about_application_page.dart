import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class AboutApplicationPage extends StatefulWidget {
  const AboutApplicationPage({
    Key? key,
  }) : super(key: key);

  @override
  State<AboutApplicationPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<AboutApplicationPage> {
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
                  Center(
                    child: Padding(
                      padding: const EdgeInsets.all(20.0),
                      child: Column(
                        children: [
                          const SizedBox(
                            height: 30,
                          ),
                          Container(
                            height: size.height - 180,
                            decoration: BoxDecoration(
                                image: const DecorationImage(
                                    image: AssetImage(
                                      "assets/logo.jpg",
                                    ),
                                    fit: BoxFit.fill,
                                    opacity: 0.25),
                                color: anaRenk,
                                borderRadius: BorderRadius.circular(20)),
                            child: const Column(
                              mainAxisAlignment: MainAxisAlignment.center,
                              crossAxisAlignment: CrossAxisAlignment.center,
                              children: [
                                SizedBox(
                                  height: 10,
                                ),
                                Text(
                                  "About EduMoodUp",
                                  style: TextStyle(
                                    fontFamily: "Poppins",
                                    fontSize: 30,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                Expanded(
                                  child: SizedBox(
                                    child: SingleChildScrollView(
                                      child: Padding(
                                        padding: EdgeInsets.all(8.0),
                                        child: Column(
                                          mainAxisAlignment:
                                              MainAxisAlignment.center,
                                          children: [
                                            Text(
                                              "EduMoodUp is an innovative educational project that aims to increase lesson efficiency and strengthen student-teacher communication by measuring students' emotional states with an emoji-based system. The platform allows students to express their daily emotional states, while allowing teachers to understand students' emotional needs and adjust lesson plans accordingly. In this way, teachers can create a more effective learning environment and increase lesson efficiency by taking into account students' psychological states. By emphasizing the importance of emotional intelligence and communication in modern education, EduMoodUp promotes a student-centered approach and contributes to the education of the future.",
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 15,
                                                // fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            SizedBox(
                                              height: 10,
                                            ),
                                            Text(
                                              "Education",
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 20,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            Divider(),
                                            Text(
                                              "Emphasizes the importance of emotional intelligence and communication in education in order to understand students' emotional states and improve their learning processes.",
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 15,
                                                // fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            SizedBox(
                                              height: 10,
                                            ),
                                            Text(
                                              "Study",
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 20,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            Divider(),
                                            Text(
                                              "It allows teachers to better understand students' emotional states and adjust lesson plans accordingly, making their work easier and increasing lesson efficiency.",
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 15,
                                                // fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            SizedBox(
                                              height: 10,
                                            ),
                                            Text(
                                              "Life",
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 20,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            Divider(),
                                            Text(
                                              "It provides support for a more balanced and happy life process by understanding the emotional needs of individuals in their daily lives and promoting healthy communication.",
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 15,
                                                // fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            SizedBox(
                                              height: 10,
                                            ),
                                            Text(
                                              "World",
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 20,
                                                fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                            Divider(),
                                            Text(
                                              "It aims to be adopted worldwide as a step towards understanding emotional needs and strengthening communication in all segments of society.",
                                              textAlign: TextAlign.center,
                                              style: TextStyle(
                                                fontFamily: "Poppins",
                                                fontSize: 15,
                                                // fontWeight: FontWeight.bold,
                                              ),
                                            ),
                                          ],
                                        ),
                                      ),
                                    ),
                                  ),
                                ),
                                SizedBox(
                                  height: 10,
                                ),
                              ],
                            ),
                          ),
                        ],
                      ),
                    ),
                  )
                ]))));
  }
}
