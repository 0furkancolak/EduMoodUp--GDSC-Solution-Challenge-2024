import 'package:edumoodup/const.dart';
import 'package:flutter/material.dart';

class LoginPage extends StatefulWidget {
  const LoginPage({Key? key}) : super(key: key);

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
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
                                  const Text("Login",
                                      style: TextStyle(
                                          fontFamily: "Poppins",
                                          fontSize: 55,
                                          fontWeight: FontWeight.bold),
                                      textAlign: TextAlign.center),
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  const Text(
                                    "Sign in to Continue",
                                    style: TextStyle(
                                        fontFamily: "Poppins", fontSize: 15),
                                  ),
                                  const SizedBox(
                                    height: 50,
                                  ),
                                  TextArea("NAME"),
                                  TextArea("PASSWORD"),
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
                                          "Login",
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
                                    height: 30,
                                  ),
                                  const Text(
                                    "Forgot Password?",
                                    style: TextStyle(
                                        fontFamily: "Poppins", fontSize: 12),
                                  ),
                                  const SizedBox(
                                    height: 10,
                                  ),
                                  GestureDetector(
                                    onTap: () {
                                      Navigator.pushNamed(context, "/register");
                                    },
                                    child: const Text(
                                      "Signup !",
                                      style: TextStyle(
                                          fontFamily: "Poppins", fontSize: 12),
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
                return "${ozellik[0] + ozellik.substring(1).toLowerCase()} Kısmı Boş Bırakılamaz!";
              } else if (ozellik == "E-MAIL") {
                if ((!deger.contains("@") || !deger.contains("."))) {
                  return "Geçersiz Mail Formatı. Lütfen Kontrol Ediniz";
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
