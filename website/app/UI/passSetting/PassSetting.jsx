"use client"
import { Input } from "@nextui-org/react"
import React, { useState } from 'react'

export default function PassSetting({ role }) {
    const [oldPass, setOldPass] = useState("")
    const [newPass, setNewPass] = useState("")
    const [newPassRe, setnewPassRe] = useState("")
    const [err, setErr] = useState("")

    const handleFunc = () => {
        if (oldPass === "") {
            return setErr("Lütfen eski şifrenizi girin")
        }
        if (newPass !== newPassRe) {
            return setErr("Yeni şifrenizi iki kere doğru girin")
        }
        //Backendde gönderme işlemi
    }

    return (
        <div className='flex flex-col gap-3 mt-3'>
            <div className='flex flex-col gap-4'>
                <h3 className='text-2xl font-bold'>Şifre güncelle</h3>
                <Input onChange={(e) => setOldPass(e.target.value)} type="password" label="Önceki Şifreniz" />
                <Input onChange={(e) => setNewPass(e.target.value)} type="password" label="Yeni şifre" />
                <Input onChange={(e) => setnewPassRe(e.target.value)} type="password" label="Yeni Şifre Tekrar" />
                {err && <p className="text-sm text-red-600">{err}</p>}
                <button onClick={handleFunc} className="btn-primary">Kaydet</button>
            </div>
        </div>
    )
}
