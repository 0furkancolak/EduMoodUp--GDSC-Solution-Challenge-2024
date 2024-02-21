import 'package:carousel_slider/carousel_slider.dart';
import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class DeveloperGroupPage extends StatefulWidget {
  const DeveloperGroupPage({
    Key? key,
  }) : super(key: key);

  @override
  State<DeveloperGroupPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<DeveloperGroupPage> {
  List imgList = [
    "assets/Furkan.jpg",
    "assets/Atahan.jpg",
    "assets/Selim.jpg",
    "assets/Habil.jpg"
  ];

  Map adlar = {
    "assets/Furkan.jpg": "Furkan Çolak",
    "assets/Atahan.jpg": "Atahan Halıcı",
    "assets/Selim.jpg": "Ahmet Selim Boz",
    "assets/Habil.jpg": "Habil Yusuf Ayhan"
  };
  Map gorevler = {
    "assets/Furkan.jpg": "Frontend Developer",
    "assets/Atahan.jpg": "Mobile Developer",
    "assets/Selim.jpg": "Backend Developer",
    "assets/Habil.jpg": "Backend Developer"
  };
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
                                color: anaRenk,
                                borderRadius: BorderRadius.circular(20)),
                            child: Column(
                              children: [
                                const SizedBox(
                                  height: 20,
                                ),
                                const Text(
                                  "Geliştirici Ekip",
                                  style: TextStyle(
                                    fontFamily: "Poppins",
                                    fontSize: 25,
                                    fontWeight: FontWeight.bold,
                                  ),
                                ),
                                CarouselSlider(
                                  options: CarouselOptions(
                                    viewportFraction: 1,
                                    height: size.height - 270,
                                    autoPlay: true,
                                  ),
                                  items: imgList.map((imgAsset) {
                                    return Builder(
                                      builder: (BuildContext context) {
                                        return GestureDetector(
                                          onTap: () {},
                                          child: Container(
                                            // height: size.height / 4,
                                            margin: const EdgeInsets.all(15),
                                            decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(20),
                                            ),
                                            child: Column(
                                              mainAxisAlignment:
                                                  MainAxisAlignment.center,
                                              children: [
                                                Image.asset(imgAsset),
                                                const SizedBox(
                                                  height: 15,
                                                ),
                                                Text(
                                                  adlar[imgAsset],
                                                  style: const TextStyle(
                                                    fontFamily: "Poppins",
                                                    fontSize: 20,
                                                    fontWeight: FontWeight.bold,
                                                  ),
                                                ),
                                                Text(
                                                  gorevler[imgAsset],
                                                  style: const TextStyle(
                                                    fontFamily: "Poppins",
                                                    fontSize: 14,
                                                  ),
                                                ),
                                              ],
                                            ),
                                          ),
                                        );
                                      },
                                    );
                                  }).toList(),
                                ),
                                Text(
                                  "EduMoodUp",
                                  style: TextStyle(
                                      fontFamily: "DancingScript",
                                      fontSize: 17,
                                      fontWeight: FontWeight.bold,
                                      color: ucuncuRenk),
                                )
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
