"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ClassSession {
  id: string
  time: string
  instructor: string
  availableSpots: number
  totalSpots: number
  price: number
  duration: string
}

interface ClassCalendarProps {
  className: string
  onDateSelect: (date: Date) => void
  onTimeSelect: (session: ClassSession) => void
  selectedDate: Date | null
  selectedSession: ClassSession | null
}

export function ClassCalendar({
  className,
  onDateSelect,
  onTimeSelect,
  selectedDate,
  selectedSession,
}: ClassCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  // Mock class sessions for different classes
  const getClassSessions = (date: Date): ClassSession[] => {
    const sessions: Record<string, ClassSession[]> = {
      "Belly Dance": [
        {
          id: "bd1",
          time: "10:00 AM",
          instructor: "Amira Hassan",
          availableSpots: 8,
          totalSpots: 12,
          price: 35,
          duration: "60 min",
        },
        {
          id: "bd2",
          time: "6:00 PM",
          instructor: "Amira Hassan",
          availableSpots: 5,
          totalSpots: 12,
          price: 35,
          duration: "60 min",
        },
      ],
      "Khaleej Dance": [
        {
          id: "kd1",
          time: "11:00 AM",
          instructor: "Amira Hassan",
          availableSpots: 10,
          totalSpots: 15,
          price: 40,
          duration: "75 min",
        },
        {
          id: "kd2",
          time: "7:00 PM",
          instructor: "Amira Hassan",
          availableSpots: 3,
          totalSpots: 15,
          price: 40,
          duration: "75 min",
        },
      ],
      "Latina Dance": [
        {
          id: "ld1",
          time: "9:00 AM",
          instructor: "Sofia Martinez",
          availableSpots: 6,
          totalSpots: 16,
          price: 30,
          duration: "60 min",
        },
        {
          id: "ld2",
          time: "5:00 PM",
          instructor: "Sofia Martinez",
          availableSpots: 12,
          totalSpots: 16,
          price: 30,
          duration: "60 min",
        },
        {
          id: "ld3",
          time: "8:00 PM",
          instructor: "Sofia Martinez",
          availableSpots: 0,
          totalSpots: 16,
          price: 30,
          duration: "60 min",
        },
      ],
      Ballet: [
        {
          id: "b1",
          time: "8:00 AM",
          instructor: "Elena Petrov",
          availableSpots: 4,
          totalSpots: 10,
          price: 45,
          duration: "90 min",
        },
        {
          id: "b2",
          time: "4:00 PM",
          instructor: "Elena Petrov",
          availableSpots: 7,
          totalSpots: 10,
          price: 45,
          duration: "90 min",
        },
      ],
      Zumba: [
        {
          id: "z1",
          time: "7:00 AM",
          instructor: "Maria Santos",
          availableSpots: 15,
          totalSpots: 20,
          price: 25,
          duration: "45 min",
        },
        {
          id: "z2",
          time: "12:00 PM",
          instructor: "Maria Santos",
          availableSpots: 8,
          totalSpots: 20,
          price: 25,
          duration: "45 min",
        },
        {
          id: "z3",
          time: "6:30 PM",
          instructor: "Maria Santos",
          availableSpots: 2,
          totalSpots: 20,
          price: 25,
          duration: "45 min",
        },
      ],
      Fitness: [
        {
          id: "f1",
          time: "6:00 AM",
          instructor: "Maria Santos",
          availableSpots: 12,
          totalSpots: 18,
          price: 28,
          duration: "50 min",
        },
        {
          id: "f2",
          time: "7:30 PM",
          instructor: "Maria Santos",
          availableSpots: 9,
          totalSpots: 18,
          price: 28,
          duration: "50 min",
        },
      ],
      Yoga: [
        {
          id: "y1",
          time: "8:30 AM",
          instructor: "Priya Sharma",
          availableSpots: 6,
          totalSpots: 12,
          price: 32,
          duration: "75 min",
        },
        {
          id: "y2",
          time: "5:30 PM",
          instructor: "Priya Sharma",
          availableSpots: 11,
          totalSpots: 12,
          price: 32,
          duration: "75 min",
        },
      ],
    }

    return sessions[className] || []
  }

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []

    // Add empty cells for days before the first day of the month
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }

    // Add all days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(new Date(year, month, day))
    }

    return days
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return date.toDateString() === today.toDateString()
  }

  const isPastDate = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const hasClasses = (date: Date) => {
    // Mock logic - assume classes are available on weekdays
    const dayOfWeek = date.getDay()
    return dayOfWeek >= 1 && dayOfWeek <= 6 && !isPastDate(date)
  }

  const navigateMonth = (direction: "prev" | "next") => {
    const newMonth = new Date(currentMonth)
    if (direction === "prev") {
      newMonth.setMonth(currentMonth.getMonth() - 1)
    } else {
      newMonth.setMonth(currentMonth.getMonth() + 1)
    }
    setCurrentMonth(newMonth)
  }

  const days = getDaysInMonth(currentMonth)
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const sessions = selectedDate ? getClassSessions(selectedDate) : []

  return (
    <div className="space-y-6">
      {/* Calendar */}
      <Card className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-gray-900">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </h3>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth("prev")}
              className="border-[#949f7d] text-[#949f7d] hover:bg-[#949f7d] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth("next")}
              className="border-[#949f7d] text-[#949f7d] hover:bg-[#949f7d] hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Days of week header */}
        <div className="grid grid-cols-7 gap-1 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar grid */}
        <div className="grid grid-cols-7 gap-1">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && hasClasses(day) && onDateSelect(day)}
              disabled={!day || !hasClasses(day)}
              className={`
                p-2 text-sm rounded-lg transition-all duration-200 h-10 flex items-center justify-center
                ${!day ? "invisible" : ""}
                ${day && isPastDate(day) ? "text-gray-300 cursor-not-allowed" : ""}
                ${day && hasClasses(day) && !isPastDate(day) ? "hover:bg-[#949f7d] hover:text-white cursor-pointer" : ""}
                ${day && isToday(day) ? "bg-[#e5d5bc] font-bold" : ""}
                ${day && selectedDate && day.toDateString() === selectedDate.toDateString() ? "bg-[#949f7d] text-white" : ""}
                ${day && hasClasses(day) && !selectedDate?.toDateString().includes(day.toDateString()) ? "bg-green-50 text-green-700 border border-green-200" : ""}
              `}
            >
              {day?.getDate()}
            </button>
          ))}
        </div>
      </Card>

      {/* Time Slots */}
      {selectedDate && (
        <Card className="p-6">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Available Times -{" "}
            {selectedDate.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
          </h3>

          {sessions.length > 0 ? (
            <div className="space-y-3">
              {sessions.map((session) => (
                <div
                  key={session.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all duration-200 ${
                    session.availableSpots === 0
                      ? "border-red-200 bg-red-50 cursor-not-allowed opacity-60"
                      : selectedSession?.id === session.id
                        ? "border-[#949f7d] bg-[#949f7d]/10"
                        : "border-gray-200 hover:border-[#949f7d] hover:bg-gray-50"
                  }`}
                  onClick={() => session.availableSpots > 0 && onTimeSelect(session)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="text-lg font-bold text-gray-900">{session.time}</div>
                      <div className="text-sm text-gray-600">with {session.instructor}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-[#949f7d]">${session.price}</div>
                      <div className="text-sm text-gray-500">{session.duration}</div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{session.duration}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>
                          {session.availableSpots}/{session.totalSpots} spots
                        </span>
                      </div>
                    </div>

                    {session.availableSpots === 0 ? (
                      <span className="text-red-600 font-medium text-sm">Fully Booked</span>
                    ) : session.availableSpots <= 3 ? (
                      <span className="text-orange-600 font-medium text-sm">Almost Full</span>
                    ) : (
                      <Button size="sm" className="bg-[#949f7d] hover:bg-[#949f7d]/90 text-white">
                        Select Time
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center py-8">No classes available on this date.</p>
          )}
        </Card>
      )}
    </div>
  )
}
