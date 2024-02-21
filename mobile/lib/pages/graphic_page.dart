import 'dart:ui';

import 'package:carousel_slider/carousel_slider.dart';
import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';
import 'package:graphic/graphic.dart';

class GraphicPage extends StatefulWidget {
  const GraphicPage({Key? key}) : super(key: key);

  @override
  State<GraphicPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<GraphicPage> {
  int aktifSayfa = 0;
  String? ders;
  final List<String> _tumDersler = [
    "Algorithm and Programming 1",
  ];
  String? hafta;
  final List<String> _tumHaftalar = [
    "Week 1",
  ];

  CarouselController carouselController = CarouselController();
  var basicData = [
    {'genre': 'Minnie', 'sold': 16.7},
    {'genre': 'Happy', 'sold': 16.7},
    {'genre': 'Beautiful', 'sold': 16.7},
    {'genre': 'Sad', 'sold': 33.3},
    {'genre': 'Sweet', 'sold': 16.7},
  ];
  var lineMarkerData = [
    {'item': 'Minnie', 'value': 18},
    {'item': 'Happy', 'value': 26},
    {'item': 'Beautiful', 'value': 23},
    {'item': 'Sad', 'value': 35},
    {'item': 'Sweet', 'value': 36},
  ];

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
                    child: Container(
                      height: 70,
                      color: ucuncuRenk,
                      width: size.width / 3,
                      child: const Icon(
                        Icons.graphic_eq,
                        color: Colors.white,
                        size: 40,
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
                            Container(
                              decoration: BoxDecoration(
                                  color: ikinciRenk,
                                  borderRadius: BorderRadius.circular(20)),
                              child: Padding(
                                  padding: const EdgeInsets.all(15.0),
                                  child: Column(
                                    children: [
                                      const Text(
                                        "Your student's psychology",
                                        style: TextStyle(
                                            fontFamily: "Poppins",
                                            fontSize: 22,
                                            fontWeight: FontWeight.bold,
                                            color: Colors.white),
                                      ),
                                      const SizedBox(
                                        height: 10,
                                      ),
                                      Container(
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(15),
                                              color: anaRenk),
                                          height: 50,
                                          width: double.infinity,
                                          child: Center(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.all(5.0),
                                              child: DropdownButton<String>(
                                                  isExpanded: true,
                                                  underline: Container(
                                                    height: 0,
                                                  ),
                                                  icon: const Visibility(
                                                    visible: false,
                                                    child: Icon(
                                                      Icons.arrow_drop_down,
                                                    ),
                                                  ),
                                                  hint: const Center(
                                                    child: Text(
                                                      "Select Course",
                                                      overflow:
                                                          TextOverflow.ellipsis,
                                                      style: TextStyle(
                                                        fontFamily: "Poppins",
                                                        fontSize: 20,
                                                        fontWeight:
                                                            FontWeight.bold,
                                                      ),
                                                    ),
                                                  ),
                                                  items: _tumDersler
                                                      .map(
                                                        (String oAnkiSehir) =>
                                                            DropdownMenuItem(
                                                          value: oAnkiSehir,
                                                          child: Center(
                                                            child: Text(
                                                              oAnkiSehir,
                                                              overflow:
                                                                  TextOverflow
                                                                      .ellipsis,
                                                              style:
                                                                  const TextStyle(
                                                                fontFamily:
                                                                    "Poppins",
                                                                fontSize: 20,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .bold,
                                                              ),
                                                            ),
                                                          ),
                                                        ),
                                                      )
                                                      .toList(),
                                                  value: ders,
                                                  onChanged: (String? yeni) {
                                                    setState(() {
                                                      ders = yeni!;
                                                    });
                                                  }),
                                            ),
                                          )),
                                      const SizedBox(
                                        height: 10,
                                      ),
                                      Container(
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(15),
                                              color: anaRenk),
                                          height: 50,
                                          width: double.infinity,
                                          child: Center(
                                            child: Padding(
                                              padding:
                                                  const EdgeInsets.all(5.0),
                                              child: DropdownButton<String>(
                                                  isExpanded: true,
                                                  underline: Container(
                                                    height: 0,
                                                  ),
                                                  icon: const Visibility(
                                                    visible: false,
                                                    child: Icon(
                                                      Icons.arrow_drop_down,
                                                    ),
                                                  ),
                                                  hint: const Center(
                                                    child: Text(
                                                      "Select Week",
                                                      overflow:
                                                          TextOverflow.ellipsis,
                                                      style: TextStyle(
                                                        fontFamily: "Poppins",
                                                        fontSize: 20,
                                                        fontWeight:
                                                            FontWeight.bold,
                                                      ),
                                                    ),
                                                  ),
                                                  items: _tumHaftalar
                                                      .map(
                                                        (String oAnkiSehir) =>
                                                            DropdownMenuItem(
                                                          value: oAnkiSehir,
                                                          child: Center(
                                                            child: Text(
                                                              oAnkiSehir,
                                                              overflow:
                                                                  TextOverflow
                                                                      .ellipsis,
                                                              style:
                                                                  const TextStyle(
                                                                fontFamily:
                                                                    "Poppins",
                                                                fontSize: 20,
                                                                fontWeight:
                                                                    FontWeight
                                                                        .bold,
                                                              ),
                                                            ),
                                                          ),
                                                        ),
                                                      )
                                                      .toList(),
                                                  value: hafta,
                                                  onChanged: (String? yeni) {
                                                    setState(() {
                                                      hafta = yeni!;
                                                    });
                                                  }),
                                            ),
                                          )),
                                    ],
                                  )),
                            ),
                            const SizedBox(
                              height: 20,
                            ),
                            Container(
                              decoration: BoxDecoration(
                                  color: ikinciRenk,
                                  borderRadius: BorderRadius.circular(20)),
                              child: Column(
                                children: [
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  SizedBox(
                                      width: size.width,
                                      child: const Padding(
                                        padding: EdgeInsets.symmetric(
                                            horizontal: 15.0),
                                        child: Row(
                                          mainAxisAlignment:
                                              MainAxisAlignment.spaceBetween,
                                          children: [
                                            Text(
                                              "Pc Lesson:",
                                              textAlign: TextAlign.start,
                                              style: TextStyle(
                                                  fontFamily: "Poppins",
                                                  fontSize: 22,
                                                  fontWeight: FontWeight.bold,
                                                  color: Colors.white),
                                            ),
                                            Text(
                                              "27.12.23",
                                              textAlign: TextAlign.start,
                                              style: TextStyle(
                                                  fontFamily: "Poppins",
                                                  fontSize: 22,
                                                  fontWeight: FontWeight.bold,
                                                  color: Colors.white),
                                            ),
                                          ],
                                        ),
                                      )),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  CarouselSlider(
                                    carouselController: carouselController,
                                    options: CarouselOptions(
                                      viewportFraction: 1,
                                      height: 300,
                                      autoPlay: false,
                                      onPageChanged: (index, reason) {
                                        setState(() {
                                          aktifSayfa = index;
                                        });
                                      },
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
                                              child: imgAsset,
                                            ),
                                          );
                                        },
                                      );
                                    }).toList(),
                                  ),
                                  const SizedBox(
                                    height: 5,
                                  ),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      GestureDetector(
                                        onTap: () {
                                          setState(() {
                                            aktifSayfa = 0;
                                          });
                                          carouselController.animateToPage(0);
                                        },
                                        child: Container(
                                          height: 20,
                                          width: 20,
                                          decoration: BoxDecoration(
                                              shape: BoxShape.circle,
                                              color: aktifSayfa == 0
                                                  ? ucuncuRenk
                                                  : anaRenk),
                                        ),
                                      ),
                                      const SizedBox(
                                        width: 5,
                                      ),
                                      GestureDetector(
                                        onTap: () {
                                          setState(() {
                                            aktifSayfa = 1;
                                          });
                                          carouselController.animateToPage(1);
                                        },
                                        child: Container(
                                          height: 20,
                                          width: 20,
                                          decoration: BoxDecoration(
                                              shape: BoxShape.circle,
                                              color: aktifSayfa == 1
                                                  ? ucuncuRenk
                                                  : anaRenk),
                                        ),
                                      ),
                                      const SizedBox(
                                        width: 5,
                                      ),
                                      GestureDetector(
                                        onTap: () {
                                          setState(() {
                                            aktifSayfa = 2;
                                          });
                                          carouselController.animateToPage(2);
                                        },
                                        child: Container(
                                          height: 20,
                                          width: 20,
                                          decoration: BoxDecoration(
                                              shape: BoxShape.circle,
                                              color: aktifSayfa == 2
                                                  ? ucuncuRenk
                                                  : anaRenk),
                                        ),
                                      )
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 5,
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

  List imgList = [
    Container(
      margin: const EdgeInsets.only(top: 10),
      width: 350,
      height: 300,
      child: Chart(
        data: const [
          {'genre': 'Minnie', 'sold': 16.7},
          {'genre': 'Happy', 'sold': 16.7},
          {'genre': 'Beautiful', 'sold': 16.7},
          {'genre': 'Sad', 'sold': 33.3},
          {'genre': 'Sweet', 'sold': 16.7},
        ],
        variables: {
          'genre': Variable(
            accessor: (Map map) => map['genre'] as String,
          ),
          'sold': Variable(
            accessor: (Map map) => map['sold'] as num,
          ),
        },
        transforms: [
          Proportion(
            variable: 'sold',
            as: 'percent',
          )
        ],
        marks: [
          IntervalMark(
            position: Varset('percent') / Varset('genre'),
            label: LabelEncode(
              encoder: (tuple) {
                final genre = tuple['genre'].toString();
                final sold = tuple['sold'].toString();
                return Label(
                  '$genre\n%$sold', // Hem genre hem de sold değerlerini ekleyin
                  LabelStyle(
                      textStyle: const TextStyle(
                          fontFamily: "Poppins",
                          fontSize: 10,
                          fontWeight: FontWeight.bold,
                          color: Colors.black)),
                );
              },
            ),
            color: ColorEncode(
              variable: 'genre',
              values: Defaults.colors10,
            ),
            modifiers: [StackModifier()],
          ),
          /*IntervalMark(
                                          position: Varset('percent') /
                                              Varset('genre'),
                                          label: LabelEncode(
                                              encoder: (tuple) => Label(
                                                    tuple['sold'].toString(),
                                                    LabelStyle(
                                                        textStyle:
                                                            Defaults.runeStyle),
                                                  )),
                                          color: ColorEncode(
                                              variable: 'genre',
                                              values: Defaults.colors10),
                                          modifiers: [StackModifier()],
                                        )*/
        ],
        coord: PolarCoord(transposed: true, dimCount: 1),
      ),
    ),
    Container(
      margin: const EdgeInsets.only(top: 10),
      width: 350,
      height: 300,
      child: Chart(
        data: const [
          {'item': 'Minnie', 'value': 18},
          {'item': 'Happy', 'value': 26},
          {'item': 'Beautiful', 'value': 23},
          {'item': 'Sad', 'value': 35},
          {'item': 'Sweet', 'value': 36},
        ],
        variables: {
          'item': Variable(
            accessor: (Map datum) => datum['item'] as String,
            scale: OrdinalScale(inflate: true),
          ),
          'value': Variable(
            accessor: (Map datum) => datum['value'] as num,
            scale: LinearScale(
              max: 40, // İsteğe bağlı olarak değiştirilebilir
              min: 0, // İsteğe bağlı olarak değiştirilebilir
              tickCount: 5,
              formatter: (v) => '${v.toInt()}',
            ),
          ),
        },
        marks: [
          LineMark(
            position: Varset('item') * Varset('value'),
            // Grafik rengi
            color: ColorEncode(
              value: ucuncuRenk,
            ),
          ),
          PointMark(
            position: Varset('item') * Varset('value'),
            color: ColorEncode(
              value: ucuncuRenk,
            ), // Nokta pozisyonu
          ),
        ],
        axes: [
          Defaults.horizontalAxis,
          Defaults.verticalAxis,
        ],
      ),
    ),
    SizedBox(
      height: 300,
      width: 350,
      child: Center(
          child: Column(
        mainAxisAlignment: MainAxisAlignment.center,
        children: [
          Container(
            padding: const EdgeInsets.only(
              bottom: 5, // Space between underline and text
            ),
            decoration: const BoxDecoration(
                border: Border(
                    bottom: BorderSide(
              color: Colors.white,
              width: 1.0, // Underline thickness
            ))),
            child: const Text(
              "Artificial Intelligence Proposal:",
              textAlign: TextAlign.start,
              style: TextStyle(
                  fontFamily: "Poppins",
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                  color: Colors.white),
            ),
          ),
          /* SizedBox(
            width: double.infinity,
            child: Text(
              "Yapay Zeka Önerisi:",
              textAlign: TextAlign.start,
              style: TextStyle(
                 
                  fontFamily: "Poppins",
                  fontSize: 15,
                  fontWeight: FontWeight.bold,
                  color: Colors.white),
            ),
          ),*/
          const SizedBox(
            height: 20,
          ),
          const Text(
            "Your lessons are fun and enjoyable for your students.",
            textAlign: TextAlign.start,
            style: TextStyle(
                fontFamily: "Poppins",
                fontSize: 25,
                fontWeight: FontWeight.bold,
                color: Colors.white),
          ),
        ],
      )),
    )
  ];
}
