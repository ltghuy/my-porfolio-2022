import React, { useEffect, useState } from 'react'
import emailjs from '@emailjs/browser'
import PhoneIcon from '../../public/icons/phone.svg'
import MailIcon from '../../public/icons/mail.svg'
import PinIcon from '../../public/icons/pin.svg'

const ContactSection = () => {
  const [mailStatus, setMailStatus] = useState<{
    sended: boolean
    btnText: string
  }>({ sended: false, btnText: 'Send Email' })
  const handleSubmit = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_oxnkmha',
        'template_no91955',
        e.target,
        'GKsV47r9O1tRMiddm'
      )
      .then(
        (result) => {
          console.log(result.text)
          setMailStatus({ sended: true, btnText: 'Sended Email' })
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }

  useEffect(() => {
    const fadeIn = document.querySelectorAll(
      '.fade-in'
    ) as NodeListOf<HTMLElement>
    for (let i = 0; i < fadeIn.length; ++i) {
      setTimeout(() => {
        fadeIn[i].style.cssText = 'opacity: 1; transform: translateY(0)'
      }, 350 + i * 500)
    }
  }, [])

  return (
    <div className="grid grid-cols-9 gap-10 items-end">
      <div className="information col-span-9 md:col-span-4 transition-all duration-500 fade-in">
        <h4 className="mb-3">Contact Information</h4>
        <p className="mb-3 text-base">
          Hi, you can easily contact me through the following ways:
        </p>
        <span className="w-20 h-1 inline-block bg-primary bg-opacity-20 rounded-full"></span>
        <div className="mt-5 space-y-5">
          <div className="card flex p-5 transition hover:border-primary">
            <span className="icon inline-flex items-center justify-center h-16 w-16 rounded-full flex-shrink-0 mr-4 bg-primary bg-opacity-20 text-2xl text-primary">
              <PhoneIcon />
            </span>
            <div className="content">
              <h5 className="text-lg font-medium mb-2">Contact on phone</h5>
              <p className="text-gray-500">+84 79 668 255</p>
            </div>
          </div>
          <div className="card flex p-5 transition hover:border-primary">
            <span className="icon inline-flex items-center justify-center h-16 w-16 rounded-full flex-shrink-0 mr-4 bg-primary bg-opacity-20 text-2xl text-primary">
              <MailIcon />
            </span>
            <div className="content">
              <h5 className="text-lg font-medium mb-2">Contact on mail</h5>
              <p className="text-gray-500">letrangiahuy0507@gmail.com</p>
            </div>
          </div>
          <div className="card flex p-5 transition hover:border-primary">
            <span className="icon inline-flex items-center justify-center h-16 w-16 rounded-full flex-shrink-0 mr-4 bg-primary bg-opacity-20 text-2xl text-primary">
              <PinIcon />
            </span>
            <div className="content">
              <h5 className="text-lg font-medium mb-2">Contact on address</h5>
              <p className="text-gray-500">
                Bui Thi Xuan, Ninh Kieu, Can Tho, Viet Nam
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="contact-form col-span-9 md:col-span-5  transition-all duration-500 fade-in">
        <form className="card p-5 space-y-4" onSubmit={handleSubmit}>
          <div className="input-box">
            <label htmlFor="name" className="block text-sm leading-6 mb-1">
              Name
            </label>
            <input
              className="form-control w-full h-12 border border-blur"
              type="text"
              id="name"
              name="name"
              autoComplete="off"
              placeholder="Enter your name..."
            />
          </div>
          <div className="input-box">
            <label htmlFor="email" className="block text-sm leading-6 mb-1">
              Email
            </label>
            <input
              className="form-control w-full h-12 border border-blur"
              type="email"
              id="email"
              name="email"
              autoComplete="off"
              placeholder="Enter your email..."
            />
          </div>
          <div className="input-box">
            <label htmlFor="subject" className="block text-sm leading-6 mb-1">
              Subject
            </label>
            <input
              className="form-control w-full h-12 border border-blur"
              type="text"
              id="subject"
              name="subject"
              autoComplete="off"
              placeholder="Enter subject..."
            />
          </div>
          <div className="input-box">
            <label htmlFor="message" className="block text-sm leading-6 mb-1">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={1}
              rows={5}
              placeholder="Enter your message..."
              autoComplete="off"
              className="form-control w-full border border-blur py-2"
            />
          </div>
          <button
            type="submit"
            disabled={mailStatus.sended}
            className="inline-block outline-none py-3 px-5 bg-primary uppercase text-dark-100 text-sm leading-4 font-medium rounded tracking-wide transition cursor-scale"
          >
            <span className="relative">{mailStatus.btnText}</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
