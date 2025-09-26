"use client"
import { Card } from "@/components/ui/card"

interface Seat {
  id: number
  row: number
  position: number
  status: "available" | "selected" | "occupied" | "reserved"
}

interface SeatMapProps {
  selectedSeats: number[]
  onSeatSelect: (seatId: number) => void
  occupiedSeats?: number[]
  reservedSeats?: number[]
}

export function SeatMap({ selectedSeats, onSeatSelect, occupiedSeats = [], reservedSeats = [] }: SeatMapProps) {
  const generateSeats = (): Seat[] => {
    const seats: Seat[] = []
    let seatId = 1

    // Generate 6 rows with 4 seats each (24 total seats)
    for (let row = 1; row <= 6; row++) {
      for (let position = 1; position <= 4; position++) {
        let status: Seat["status"] = "available"

        if (occupiedSeats.includes(seatId)) {
          status = "occupied"
        } else if (reservedSeats.includes(seatId)) {
          status = "reserved"
        } else if (selectedSeats.includes(seatId)) {
          status = "selected"
        }

        seats.push({
          id: seatId,
          row,
          position,
          status,
        })
        seatId++
      }
    }
    return seats
  }

  const seats = generateSeats()

  const getSeatStyle = (seat: Seat) => {
    const baseStyle =
      "w-12 h-12 rounded-lg border-2 flex items-center justify-center text-sm font-medium cursor-pointer transition-all duration-200 hover:scale-105"

    switch (seat.status) {
      case "available":
        return `${baseStyle} bg-white border-gray-300 text-gray-700 hover:border-[#949f7d] hover:bg-gray-50`
      case "selected":
        return `${baseStyle} bg-[#949f7d] border-[#949f7d] text-white shadow-lg`
      case "occupied":
        return `${baseStyle} bg-gray-400 border-gray-400 text-white cursor-not-allowed opacity-60`
      case "reserved":
        return `${baseStyle} bg-[#e5d5bc] border-[#e5d5bc] text-gray-700 cursor-not-allowed`
      default:
        return baseStyle
    }
  }

  const handleSeatClick = (seat: Seat) => {
    if (seat.status === "occupied" || seat.status === "reserved") return
    onSeatSelect(seat.id)
  }

  return (
    <Card className="p-6">
      <div className="text-center mb-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2">Studio Layout</h3>
        <div className="inline-flex items-center justify-center bg-[#949f7d] text-white px-4 py-2 rounded-lg mb-4">
          <span className="font-medium">Coach Position</span>
        </div>
      </div>

      {/* Seat Grid */}
      <div className="space-y-3 mb-6">
        {[1, 2, 3, 4, 5, 6].map((row) => (
          <div key={row} className="flex justify-center space-x-3">
            {seats
              .filter((seat) => seat.row === row)
              .map((seat) => (
                <button
                  key={seat.id}
                  className={getSeatStyle(seat)}
                  onClick={() => handleSeatClick(seat)}
                  disabled={seat.status === "occupied" || seat.status === "reserved"}
                >
                  {seat.id}
                </button>
              ))}
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="border-t pt-4">
        <h4 className="text-sm font-medium text-gray-900 mb-3">Legend</h4>
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-white border-2 border-gray-300 rounded"></div>
            <span className="text-gray-600">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#949f7d] rounded"></div>
            <span className="text-gray-600">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-gray-400 rounded"></div>
            <span className="text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-4 h-4 bg-[#e5d5bc] rounded"></div>
            <span className="text-gray-600">Reserved</span>
          </div>
        </div>
      </div>

      {/* Selection Summary */}
      {selectedSeats.length > 0 && (
        <div className="mt-4 p-3 bg-[#949f7d]/10 rounded-lg">
          <p className="text-sm font-medium text-[#949f7d]">
            You selected {selectedSeats.length} seat{selectedSeats.length !== 1 ? "s" : ""}: {selectedSeats.join(", ")}
          </p>
        </div>
      )}
    </Card>
  )
}
