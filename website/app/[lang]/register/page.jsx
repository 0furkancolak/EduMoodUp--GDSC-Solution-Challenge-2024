"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TransitionEffect from "@/app/UI/loading/TransitionEffect";
import Link from "next/link"
import { useParams } from "next/navigation";
import axios from "axios"
import { useRouter } from "next/navigation"

export default function Register() {
  const params = useParams()
  const lang = params.lang
  const router = useRouter()
  const initialValues = { name: "", email: "", password: "" };
  const loginSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
  });
  const handleSubmit = (e) => {
    axios.post("http://localhost:5000/university/register", e).then((res) => {
      console.log("başarılı");
      console.log(res);
      router.push(`/${lang}/login`)
    }).catch((err) => { console.log("üni login errr" + err); })
  };
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-emerald-600">
      <TransitionEffect />
      <div className="flex flex-col gap-5 bg-white px-10 py-12 rounded-lg text-black">
        <h1 className="text-3xl text-center font-bold mb-6">Kayıt Ol</h1>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          <Form className="flex flex-col">
            <div className="my-2 flex flex-col w-96">
              <Field
                autoComplete="off"
                name="name"
                placeholder="Üniversite İsmi"
                className="bg-zinc-50 ring-2 ring-zinc-600 rounded-xl px-5 py-4 hover:border-none focus:bg-white inset-0 outline-none focus:ring-blue-800 cursor-pointer transition "
              />

              <ErrorMessage
                className="text-sm text-red-500 ps-2"
                name="name"
                component="span"
              />
            </div>

            <div className="my-2 flex flex-col w-96">
              <Field
                autoComplete="off"
                name="email"
                placeholder="Email"
                className="bg-zinc-50 ring-2 ring-zinc-600 rounded-xl px-5 py-4 hover:border-none focus:bg-white inset-0 outline-none focus:ring-blue-800 cursor-pointer transition"
              />

              <ErrorMessage
                className="text-sm text-red-500 ps-2"
                name="email"
                component="span"
              />
            </div>

            <div className="my-2 flex flex-col w-96">
              <Field
                autoComplete="off"
                type="password"
                name="password"
                placeholder="Şifre"
                className="bg-zinc-50 ring-2 ring-zinc-600 rounded-xl px-5 py-4 hover:border-none focus:bg-white inset-0 outline-none focus:ring-blue-800 cursor-pointer transition"
              />
              <ErrorMessage
                className="text-sm text-red-500 ps-2"
                name="password"
                component="span"
              />
            </div>
            <button
              className="btn-primary mt-4 py-4"
              type="submit"
            >
              Kayıt Ol
            </button>
          </Form>
        </Formik>
        <div>
          <Link className="text-sm ps-2 hover:opacity-75 transition-colors duration-300" href={`/${lang}/login`}>Giriş?</Link>
        </div>
      </div>
    </div>
  );
}
