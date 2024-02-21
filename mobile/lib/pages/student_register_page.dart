import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class StudentRegisterPage extends StatefulWidget {
  const StudentRegisterPage({Key? key}) : super(key: key);

  @override
  State<StudentRegisterPage> createState() => _RegisterPageState();
}

class _RegisterPageState extends State<StudentRegisterPage> {
  String? university;
  final List<String> _tumUniversiteler = [
    "Erzincan Binali Yıldırım University",
  ];
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
                                  const Text("Create New Student Account",
                                      style: TextStyle(
                                        fontFamily: "Poppins",
                                        fontSize: 35,
                                        fontWeight: FontWeight.bold,
                                      ),
                                      textAlign: TextAlign.center),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  Row(
                                    mainAxisAlignment: MainAxisAlignment.center,
                                    children: [
                                      const Text(
                                        "Already Registered?",
                                        style: TextStyle(
                                          fontFamily: "Poppins",
                                          fontSize: 15,
                                        ),
                                      ),
                                      const SizedBox(
                                        width: 5,
                                      ),
                                      GestureDetector(
                                        onTap: () {
                                          Navigator.pushNamedAndRemoveUntil(
                                              context,
                                              "/login",
                                              (route) => false);
                                        },
                                        child: const Text(
                                          "Log in here.",
                                          style: TextStyle(
                                            fontFamily: "Poppins",
                                            fontSize: 15,
                                          ),
                                        ),
                                      ),
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 50,
                                  ),
                                  TextArea("NAME"),
                                  TextArea("E-MAIL"),
                                  TextArea("PASSWORD"),
                                  Column(
                                    mainAxisAlignment: MainAxisAlignment.start,
                                    crossAxisAlignment:
                                        CrossAxisAlignment.start,
                                    children: [
                                      const Text(
                                        "UNIVERSİTY",
                                        style: TextStyle(
                                            fontSize: 15,
                                            color: Colors.black,
                                            fontWeight: FontWeight.bold),
                                      ),
                                      const SizedBox(
                                        height: 10,
                                      ),
                                      Container(
                                          decoration: BoxDecoration(
                                              borderRadius:
                                                  BorderRadius.circular(15),
                                              color: const Color.fromARGB(
                                                  255, 180, 180, 180)),
                                          height: 70,
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
                                                  hint: const Text(
                                                    "Select",
                                                    style: TextStyle(
                                                        fontFamily: "Poppins",
                                                        fontSize: 15),
                                                  ),
                                                  items: _tumUniversiteler
                                                      .map(
                                                        (String oAnkiSehir) =>
                                                            DropdownMenuItem(
                                                          value: oAnkiSehir,
                                                          child: Text(
                                                            oAnkiSehir,
                                                            style:
                                                                const TextStyle(
                                                                    fontFamily:
                                                                        "Poppins",
                                                                    fontSize:
                                                                        15),
                                                          ),
                                                        ),
                                                      )
                                                      .toList(),
                                                  value: university,
                                                  onChanged: (String? yeni) {
                                                    setState(() {
                                                      university = yeni!;
                                                    });
                                                  }),
                                            ),
                                          )),
                                    ],
                                  ),
                                  const SizedBox(
                                    height: 20,
                                  ),
                                  GestureDetector(
                                    onTap: () {
                                      Navigator.popUntil(
                                          context, (route) => route.isFirst);
                                      Navigator.pushNamedAndRemoveUntil(context,
                                          "/student", (route) => false);
                                    },
                                    child: Container(
                                      height: 60,
                                      width: double.infinity,
                                      decoration: BoxDecoration(
                                          borderRadius:
                                              BorderRadius.circular(15),
                                          color: ikinciRenk),
                                      child: const Center(
                                        child: Text(
                                          "Register",
                                          style: TextStyle(
                                              fontFamily: "Poppins",
                                              fontSize: 20,
                                              color: Colors.white,
                                              fontWeight: FontWeight.bold),
                                        ),
                                      ),
                                    ),
                                  )
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
                return "${ozellik[0] + ozellik.substring(1).toLowerCase()} Part cannot be left blank";
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
