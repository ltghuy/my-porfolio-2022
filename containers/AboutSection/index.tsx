import React from 'react'

const AboutSection = () => {
  const descriptionInfo = [
    { id: 1, title: 'First Name', value: 'Le' },
    { id: 2, title: 'Last Name', value: 'Huy' },
    { id: 3, title: 'Age', value: '23' },
    { id: 4, title: 'Nationality', value: 'Viet Nam' },
    {
      id: 5,
      title: 'Address',
      value: 'Bui Thi Xuan, Ninh Kieu, Can Tho, Viet Nam',
    },
    { id: 6, title: 'Freelance', value: 'Available' },
  ]

  return (
    <div className="grid grid-cols-2 gap-10 items-center">
      <div className="avatarcol-span-1">
        <div className="w-full h-96 bg-gradient-to-tr bg-primary bg-opacity-20 rounded relative">
          <div className="p-2 absolute w-full h-full top-0 left-0">
            <div className="w-full h-full overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src="/images/backdrop2.jpg"
                alt="backdrop"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="info col-span-1">
        <h3 className="text-2xl font-semibold mb-3">
          Hi, I am &nbsp;
          <span className="text-primary">Huy Le</span>
        </h3>
        <ul className="description space-y-1">
          {descriptionInfo.map((description) => (
            <li
              key={description.id}
              className="text-lg text-gray-400 font-medium marker:text-primary list-disc ml-6"
            >
              <strong className="min-w-[120px] inline-block">
                {description.title}
              </strong>
              : &nbsp;
              {description.value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default AboutSection
