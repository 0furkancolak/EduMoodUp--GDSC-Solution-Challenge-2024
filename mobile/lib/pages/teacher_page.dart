import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class TeacherPage extends StatefulWidget {
  const TeacherPage({
    Key? key,
  }) : super(key: key);

  @override
  State<TeacherPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<TeacherPage> {
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
                        Navigator.pushNamed(context, "/graphic");
                      },
                      child: Container(
                        color: Colors.transparent,
                        width: size.width / 3,
                        child: const Icon(
                          Icons.graphic_eq,
                          color: Colors.white,
                          size: 40,
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
                        Icons.home,
                        color: Colors.white,
                        size: 50,
                      ),
                    ),
                  ),
                  Expanded(
                    child: GestureDetector(
                      onTap: () {
                        Navigator.pushNamed(context, "/teacherAccountSettings");
                      },
                      child: Container(
                        color: Colors.transparent,
                        width: size.width / 3,
                        child: const Icon(
                          Icons.settings,
                          color: Colors.white,
                          size: 40,
                        ),
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
                      child: Padding(
                        padding: const EdgeInsets.all(20.0),
                        child: Column(
                          children: [
                            const SizedBox(
                              height: 30,
                            ),
                            const Text(
                              "Hello Furkan 🖐️",
                              style: TextStyle(
                                  fontFamily: "Poppins",
                                  fontSize: 34,
                                  fontWeight: FontWeight.bold,
                                  color: Colors.black),
                            ),
                            const SizedBox(
                              height: 40,
                            ),
                            Container(
                              decoration: BoxDecoration(
                                  color: ikinciRenk,
                                  borderRadius: BorderRadius.circular(20)),
                              child: Padding(
                                padding: const EdgeInsets.all(15.0),
                                child: Row(
                                  mainAxisAlignment: MainAxisAlignment.center,
                                  children: [
                                    Image.asset(
                                      "assets/weather.png",
                                      width: 75,
                                    ),
                                    const SizedBox(
                                      width: 10,
                                    ),
                                    const Text(
                                      "Sunny",
                                      style: TextStyle(
                                          fontFamily: "Poppins",
                                          fontSize: 25,
                                          fontWeight: FontWeight.bold,
                                          color: Colors.white),
                                    ),
                                    const SizedBox(
                                      width: 10,
                                    ),
                                    Text(
                                      "29°",
                                      style: TextStyle(
                                          fontFamily: "Poppins",
                                          fontSize: 25,
                                          fontWeight: FontWeight.bold,
                                          color: ucuncuRenk),
                                    ),
                                    const SizedBox(
                                      width: 15,
                                    ),
                                    const Column(
                                      children: [
                                        Text(
                                          "27.01.2024",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              fontSize: 15,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.white),
                                        ),
                                        SizedBox(
                                          height: 10,
                                        ),
                                        Text(
                                          "Erzincan",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              fontSize: 15,
                                              fontWeight: FontWeight.bold,
                                              color: Colors.white),
                                        ),
                                      ],
                                    )
                                  ],
                                ),
                              ),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            dersKayitKutu(),
                            Container(
                              decoration: BoxDecoration(
                                  color: ikinciRenk,
                                  borderRadius: BorderRadius.circular(20)),
                              child: Column(
                                children: [
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  const Text(
                                    "Today's Lessons",
                                    style: TextStyle(
                                        fontFamily: "Poppins",
                                        fontSize: 30,
                                        fontWeight: FontWeight.bold,
                                        color: Colors.white),
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  dersKutu("13.00", "Mathematics 1", size),
                                  dersKutu("15.00", "Physics 2", size),
                                  dersKutu(
                                      "17.00", "Signals and Systems", size),
                                  dersKutu("19.00", "Space", size),
                                  const SizedBox(
                                    height: 10,
                                  ),
                                ],
                              ),
                            )
                          ],
                        ),
                      ),
                    ),
                  )
                ]))));
  }

  Widget dersKayitKutu() {
    return GestureDetector(
      onTap: () {
        Navigator.pushNamed(context, "/lessonAccept");
      },
      child: Column(
        children: [
          Container(
            width: double.infinity,
            decoration: BoxDecoration(
                color: ikinciRenk, borderRadius: BorderRadius.circular(20)),
            child: Padding(
              padding: const EdgeInsets.all(15.0),
              child: Stack(
                children: [
                  Positioned(
                      right: 0,
                      bottom: 0,
                      child: Transform.rotate(
                        angle: 0.3,
                        child: const Icon(
                          Icons.notifications,
                          size: 40,
                          color: Colors.orangeAccent,
                        ),
                      )),
                  Wrap(
                    //mainAxisAlignment: MainAxisAlignment.center,
                    children: [
                      const SizedBox(
                        height: 15,
                      ),
                      const Padding(
                        padding: EdgeInsets.only(top: 2.0, bottom: 2),
                        child: Text(
                          "Number of Students",
                          style: TextStyle(
                              fontFamily: "Poppins",
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                      ),
                      const Padding(
                        padding: EdgeInsets.all(2.0),
                        child: Text(
                          "Waiting to Enroll",
                          style: TextStyle(
                              fontFamily: "Poppins",
                              fontSize: 15,
                              fontWeight: FontWeight.bold,
                              color: Colors.white),
                        ),
                      ),
                      Row(
                        children: [
                          const Text(
                            "in Your Classes:",
                            style: TextStyle(
                                fontFamily: "Poppins",
                                fontSize: 15,
                                fontWeight: FontWeight.bold,
                                color: Colors.white),
                          ),
                          const SizedBox(
                            width: 5,
                          ),
                          Text(
                            "18",
                            style: TextStyle(
                                fontFamily: "Poppins",
                                fontSize: 25,
                                fontWeight: FontWeight.bold,
                                color: ucuncuRenk),
                          ),
                        ],
                      ),
                      const SizedBox(
                        height: 15,
                      ),
                    ],
                  ),
                ],
              ),
            ),
          ),
          const SizedBox(
            height: 20,
          )
        ],
      ),
    );
  }

  dersKutu(String saat, String adi, Size size) {
    return Column(
      children: [
        Padding(
          padding: const EdgeInsets.symmetric(horizontal: 15.0),
          child: Container(
            decoration: BoxDecoration(
                color: anaRenk, borderRadius: BorderRadius.circular(20)),
            child: Padding(
              padding: const EdgeInsets.all(8.0),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceBetween,
                children: [
                  Text(
                    saat,
                    style: const TextStyle(
                      fontFamily: "Poppins",
                      fontSize: 25,
                      fontWeight: FontWeight.bold,
                    ),
                  ),
                  const SizedBox(
                    width: 15,
                  ),
                  SizedBox(
                    width: (size.width / 2) - 40,
                    child: Text(
                      adi,
                      overflow: TextOverflow.ellipsis,
                      textAlign: TextAlign.center,
                      style: const TextStyle(
                        fontFamily: "Poppins",
                        fontSize: 25,
                        fontWeight: FontWeight.bold,
                      ),
                    ),
                  ),
                  const SizedBox(
                    width: 15,
                  ),
                  GestureDetector(
                    onTap: () {
                      alertDialog(adi);
                    },
                    child: Container(
                      decoration: BoxDecoration(
                          color: ucuncuRenk,
                          borderRadius: BorderRadius.circular(20)),
                      child: const Center(
                        child: Padding(
                          padding: EdgeInsets.all(8.0),
                          child: Text(
                            "Click",
                            style: TextStyle(
                                fontFamily: "Poppins",
                                color: Colors.white,
                                fontWeight: FontWeight.bold,
                                fontSize: 12),
                          ),
                        ),
                      ),
                    ),
                  ),
                ],
              ),
            ),
          ),
        ),
        const SizedBox(
          height: 15,
        ),
      ],
    );
  }

  alertDialog(String dersAdi) {
    return showDialog<void>(
      context: context,
      barrierDismissible: true, // user must tap button!
      builder: (BuildContext context) {
        return Dialog(
          shape:
              RoundedRectangleBorder(borderRadius: BorderRadius.circular(20.0)),
          backgroundColor: anaRenk,
          child: Padding(
            padding: const EdgeInsets.all(10.0),
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const SizedBox(
                  height: 20,
                ),
                Text(
                  "How it was $dersAdi?",
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                      fontFamily: "Poppins",
                      fontSize: 30,
                      fontWeight: FontWeight.bold,
                      color: Colors.black),
                ),
                const SizedBox(
                  height: 30,
                ),
                const Row(
                  mainAxisAlignment: MainAxisAlignment.spaceAround,
                  children: [
                    Text(
                      "😟",
                      style: TextStyle(fontSize: 40),
                    ),
                    Text(
                      "😴",
                      style: TextStyle(fontSize: 40),
                    ),
                    Text(
                      "😲",
                      style: TextStyle(fontSize: 40),
                    ),
                    Text(
                      "😄",
                      style: TextStyle(fontSize: 40),
                    ),
                    Text(
                      "😂",
                      style: TextStyle(fontSize: 40),
                    ),
                  ],
                ),
                const SizedBox(
                  height: 30,
                ),
                MaterialButton(
                  onPressed: () {},
                  child: Container(
                    height: 60,
                    width: double.infinity,
                    decoration: BoxDecoration(
                      borderRadius: BorderRadius.circular(15),
                      color: ikinciRenk,
                    ),
                    child: const Center(
                      child: Text(
                        "I didn't enter",
                        style: TextStyle(
                            fontFamily: "Poppins",
                            fontSize: 20,
                            color: Colors.white,
                            fontWeight: FontWeight.bold),
                      ),
                    ),
                  ),
                ),
                const SizedBox(
                  height: 20,
                ),
              ],
            ),
          ),
        );
      },
    );
  }
}
