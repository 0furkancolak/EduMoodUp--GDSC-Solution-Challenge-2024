import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class AddLessonPage extends StatefulWidget {
  const AddLessonPage({Key? key}) : super(key: key);

  @override
  State<AddLessonPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<AddLessonPage> {
  bool fizik = false;
  bool mat = false;
  bool elektronik = false;
  bool web = false;
  bool mobil = false;
  bool gorsel = false;
  bool secim = false;
  String? university;
  final List<String> _tumUniversiteler = [
    "Erzincan Binali Yıldırım University",
  ];
  String? faculty;
  List<String> _tumFakulteler = [];
  String? chapter;
  List<String> _tumBolumler = [];
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
                                  const Text("My lessons",
                                      style: TextStyle(
                                        fontFamily: "Poppins",
                                        fontSize: 35,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      textAlign: TextAlign.center),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  const Text(
                                    "You can view and edit your existing lessons here",
                                    textAlign: TextAlign.center,
                                    style: TextStyle(
                                      fontFamily: "Poppins",
                                      fontSize: 15,
                                    ),
                                  ),
                                  const SizedBox(
                                    height: 50,
                                  ),
                                  DersTablosu(),
                                  const Text(
                                    "Add and Remove Courses",
                                    style: TextStyle(
                                        fontFamily: "Poppins",
                                        color: Colors.black,
                                        fontSize: 20,
                                        fontWeight: FontWeight.bold),
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  DropDown("UNIVERSİTY", _tumUniversiteler,
                                      university),
                                  DropDown("FACULTY", _tumFakulteler, faculty),
                                  DropDown("CHAPTER", _tumBolumler, chapter),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  Visibility(
                                    visible: secim,
                                    child: Column(
                                      children: [
                                        const Text(
                                          "Courses that can be added",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              color: Colors.black,
                                              fontSize: 20,
                                              fontWeight: FontWeight.bold),
                                        ),
                                        const SizedBox(
                                          height: 20,
                                        ),
                                        Dersler("Physics 1", fizik),
                                        Dersler("Mathematics 1", mat),
                                        Dersler(
                                            "Basic Electronics", elektronik),
                                        Dersler("Web Programming", web),
                                        Dersler("Mobile Programming", mobil),
                                        Dersler("Visual Programming", gorsel),
                                        const SizedBox(
                                          height: 20,
                                        ),
                                      ],
                                    ),
                                  ),
                                  GestureDetector(
                                    onTap: () {},
                                    child: Container(
                                      height: 60,
                                      width: double.infinity,
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(15),
                                          color: ikinciRenk),
                                      child: const Center(
                                        child: Text(
                                          "Save",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              fontSize: 20,
                                              color: Colors.white,
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  ),
                                ],
                              ),
                            ),
                          ),
                          const SizedBox(
                            height: 30,
                          ),
                        ],
                      ),
                    ),
                  )
                ]))));
  }

  Column DersTablosu() {
    return Column(
      children: [
        const Text(
          "My Current Courses",
          style: TextStyle(
              fontFamily: "Poppins",
              color: Colors.black,
              fontSize: 20,
              fontWeight: FontWeight.bold),
        ),
        const SizedBox(
          height: 10,
        ),
        Table(
          border: TableBorder.all(),
          columnWidths: const {
            0: FractionColumnWidth(0.6),
            1: FractionColumnWidth(0.4),
          },
          children: const [
            TableRow(
              children: [
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Lesson',
                      style: TextStyle(
                          fontFamily: "Poppins",
                          color: Colors.black,
                          fontSize: 15,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Teacher',
                      style: TextStyle(
                          fontFamily: "Poppins",
                          color: Colors.black,
                          fontSize: 15,
                          fontWeight: FontWeight.bold),
                    ),
                  ),
                ),
              ],
            ),
            TableRow(
              children: [
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Space',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Ahmet Yılmaz',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            TableRow(
              children: [
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Signals and Systems',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Ayşe Yıldız',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            TableRow(
              children: [
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Physics 2',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
                TableCell(
                  child: Padding(
                    padding: EdgeInsets.all(8.0),
                    child: Text(
                      'Mehmet Kaya',
                      overflow: TextOverflow.ellipsis,
                      style: TextStyle(
                        fontFamily: "Poppins",
                        color: Colors.black,
                        fontSize: 15,
                      ),
                    ),
                  ),
                ),
              ],
            ),
            // Buraya istediğiniz kadar ders ve öğretmen ekleyebilirsiniz.
          ],
        ),
        const SizedBox(
          height: 30,
        )
      ],
    );
  }

  Widget Dersler(String adi, bool sonuc) {
    return Column(
      children: [
        Row(
          children: [
            Checkbox(
              checkColor: Colors.white,
              activeColor: ikinciRenk,
              value: adi == "Physics 1"
                  ? fizik
                  : adi == "Mathematics 1"
                      ? mat
                      : adi == "Basic Electronics"
                          ? elektronik
                          : adi == "Web Programming"
                              ? web
                              : adi == "Mobile Programming"
                                  ? mobil
                                  : gorsel,
              onChanged: (bool? value) {
                setState(() {
                  adi == "Physics 1"
                      ? fizik = value!
                      : adi == "Mathematics 1"
                          ? mat = value!
                          : adi == "Basic Electronics"
                              ? elektronik = value!
                              : adi == "Web Programming"
                                  ? web = value!
                                  : adi == "Mobile Programming"
                                      ? mobil = value!
                                      : gorsel = value!;
                });
              },
            ),
            GestureDetector(
              onTap: () {
                setState(() {
                  adi == "Physics 1"
                      ? fizik = !fizik
                      : adi == "Mathematics 1"
                          ? mat = !mat
                          : adi == "Basic Electronics"
                              ? elektronik = !elektronik
                              : adi == "Web Programming"
                                  ? web = !web
                                  : adi == "Mobile Programming"
                                      ? mobil = !mobil
                                      : gorsel = !gorsel;
                });
              },
              child: Container(
                padding: const EdgeInsets.symmetric(vertical: 10),
                child: Text(
                  adi,
                  style: const TextStyle(
                    fontFamily: "Poppins",
                    color: Colors.black,
                    fontSize: 15,
                  ),
                ),
              ),
            ),
          ],
        ),
        const SizedBox(
          height: 10,
        ),
      ],
    );
  }

  // ignore: non_constant_identifier_names
  Column DropDown(String adi, List<String> items, String? value) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          adi,
          style: const TextStyle(
              fontSize: 15, color: Colors.black, fontWeight: FontWeight.bold),
        ),
        const SizedBox(
          height: 10,
        ),
        Container(
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(15),
                color: const Color.fromARGB(255, 180, 180, 180)),
            height: 70,
            width: double.infinity,
            child: Center(
              child: Padding(
                padding: const EdgeInsets.all(5.0),
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
                    hint: const Text(
                      "Select",
                      style: TextStyle(fontFamily: "Poppins", fontSize: 15),
                    ),
                    items: items
                        .map(
                          (String oAnkiSehir) => DropdownMenuItem(
                            value: oAnkiSehir,
                            child: Text(
                              oAnkiSehir,
                              style: const TextStyle(
                                  fontFamily: "Poppins", fontSize: 15),
                            ),
                          ),
                        )
                        .toList(),
                    value: adi == "UNIVERSİTY"
                        ? university
                        : adi == "FACULTY"
                            ? faculty
                            : chapter,
                    onChanged: (String? yeni) {
                      setState(() {
                        if (adi == "UNIVERSİTY") {
                          university = yeni!;
                          faculty = null;
                          chapter = null;
                          _tumFakulteler = [
                            "Faculty of Engineering - Architecture",
                            "Faculty of Pharmacy"
                          ];
                          _tumBolumler = [];
                        } else if (adi == "FACULTY") {
                          faculty = yeni!;
                          chapter = null;
                          _tumBolumler = [
                            "Computer Engineering",
                            "Electrical and Electronics Engineering"
                          ];
                        } else {
                          chapter = yeni!;
                        }
                        if (chapter != null) {
                          secim = true;
                        } else {
                          secim = false;
                        }
                      });
                    }),
              ),
            )),
        const SizedBox(
          height: 10,
        ),
      ],
    );
  }

  Column TextArea(String ozellik) {
    return Column(
      mainAxisAlignment: MainAxisAlignment.start,
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        Text(
          ozellik,
          style: const TextStyle(
              fontSize: 15, color: Colors.black, fontWeight: FontWeight.bold),
        ),
        const SizedBox(
          height: 10,
        ),
        SizedBox(
          height: 80,
          child: TextFormField(
            style: const TextStyle(
              fontFamily: "Poppins",
            ),
            autovalidateMode: AutovalidateMode.onUserInteraction,
            cursorColor: Colors.black,
            maxLines: 1,
            decoration: InputDecoration(
              labelStyle: const TextStyle(
                color: Colors.black,
                fontFamily: "Poppins",
              ),
              fillColor: const Color.fromARGB(255, 180, 180, 180),
              filled: true,
              border: OutlineInputBorder(
                borderSide: const BorderSide(
                  width: 0,
                  style: BorderStyle.none,
                ),
                borderRadius: BorderRadius.circular(10.0),
              ),
            ),
            validator: (deger) {
              if (deger!.isEmpty) {
                return "${ozellik[0] + ozellik.substring(1).toLowerCase()} Part cannot be left blank!";
              } else if (ozellik == "E-MAIL") {
                if ((!deger.contains("@") || !deger.contains("."))) {
                  return "Invalid Mail Format. Please Check";
                }
              } else {}
              return null;
            },
          ),
        ),
      ],
    );
  }
}
