import React from 'react'

interface TimelineProps {
  timeLineList: Array<{
    id: number
    time: string
    title: string
    subTitle: string
    desc: string
  }>
}
const Timeline: React.FC<TimelineProps> = ({ timeLineList }) => {
  return (
    <div className="timeline-list">
      {timeLineList.map((timeline) => (
        <div
          className="timeline-item group flex justify-between"
          key={timeline.id}
        >
          <div className="timeline-date text-sm leading-none pt-6 mr-12 min-w-[150px]">
            <span className="p-1 flex justify-center items-center text-gray-300 bg-primary bg-opacity-20 rounded-full">
              {timeline.time}
            </span>
          </div>
          <div className="timeline-main flex-1 pt-6 pl-12 border-l-4 border-white border-opacity-20 relative">
            <div className="circle absolute w-6 h-6 rounded-full border-4 border-white border-opacity-20 top-6 left-0 translate-x-[calc(-50%-2px)] transform bg-dark-50 z-10 flex justify-center items-center">
              <div className="w-2 h-2 bg-primary rounded-full hidden group-hover:block transition"></div>
            </div>
            <div className="rectangle absolute w-20 h-1 bg-white bg-opacity-20 top-6 left-0 transform -translate-x-1/2 translate-y-[calc(0.75rem-2px)]"></div>
            <h5 className="text-primary font-medium text-lg">
              {timeline.title}
            </h5>
            <h6 className="mb-2 leading-6">{timeline.subTitle}</h6>
            <p className="text-gray-300">{timeline.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Timeline
