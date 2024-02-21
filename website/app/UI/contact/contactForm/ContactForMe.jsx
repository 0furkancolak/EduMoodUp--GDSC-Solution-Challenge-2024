"use client"
import React, { useState } from "react";
import { Input, divider } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import Motion from "../../motion/Motion";
import axios from "axios"
import { toast } from "react-toastify";

export default function ContactForMe({ t }) {
  const [name, setName] = useState()
  const [email, setEmail] = useState()
  const [message, setMessage] = useState()
  const [loading, setLoading] = useState(false)

  const formData = {
    email,
    name,
    message
  }

  const resetMsg = () => {
    setName("")
    setEmail("")
    setMessage("")
  }

  async function handleSubmit(event) {
    event.preventDefault();
    try {
      setLoading(true)
      const response = await axios.post("/api/contact", formData)
      toast.success("En yakın zamanda sizinle iletişime geçeceğiz.")
      resetMsg()
      setLoading(false)
    } catch (err) {
      console.error(err);
      toast.error("Lütfen daha sonra tekrar deneyiniz.")
      resetMsg()
      setLoading(false)
    }
  };

  return (
    <Motion
      initial={{ opacity: 0, y: +100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.12 }}

    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 md:gap-4">
        <div className="flex flex-col md:flex-row gap-2">
          <Input
            className="w-72 bg-white rounded-lg"
            type="text"
            label={t.isim}
            labelPlacement={"inside"}
            isRequired
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <Input
            className="w-72 bg-white rounded-lg"
            type="email"
            label="Email"
            labelPlacement={"inside"}
            isRequired
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            value={email}
          />
        </div>
        <Textarea
          minRows={5}
          isRequired
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t.mesaj}
          className=" bg-white rounded-lg" 
        />
        <button type="submit" className={`${loading ? "bg-green-600 hover:bg-green-700" : "bg-blue-600 hover:bg-blue-700"} text-white flex items-center justify-center py-3 px-8 rounded-lg font-bold  transition-colors duration-300`}>
          {loading ? (<div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white "></div>) : t.gonder}
        </button>
      </form>
    </Motion>
  );
}
