import React from 'react'
import PhoneIcon from '../../public/icons/phone.svg'
import MailIcon from '../../public/icons/mail.svg'
import PinIcon from '../../public/icons/pin.svg'

const ContactSection = () => {
  return (
    <div className="grid grid-cols-9 gap-10 items-end">
      <div className="col-span-4">
        <h4 className="mb-3">Contact Information</h4>
        <p className="mb-3 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A omnis,
          iusto harum possimus non praesentium qui facere.
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
      <div className="col-span-5">
        <form className="card p-5 space-y-4">
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
              className="form-control w-full border border-blur py-2"
            />
          </div>
          <button
            type="submit"
            className="inline-block py-3 px-5 bg-primary uppercase text-dark-100 text-sm leading-4 font-medium rounded tracking-wide transition opacity-80 hover:opacity-100"
          >
            <span className="relative">Send Email</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection