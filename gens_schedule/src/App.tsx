"use client";

import { useState } from "react";

type Status = "参加" | "不参加" | "未定";

interface Event {
  id: number;
  title: string;
  date: string;
}

const initialEvents: Event[] = [
  { id: 1, title: "練習", date: "2025年8月10日（日）19:00 - 21:00" },
  { id: 2, title: "試合 vs ABC FC", date: "2025年8月17日（日）14:00 - 16:00" },
  { id: 3, title: "練習", date: "2025年8月24日（日）19:00 - 21:00" },
  { id: 4, title: "練習", date: "2025年8月31日（日）19:00 - 21:00" },
];

export default function App() {
  const [attendance, setAttendance] = useState<Record<number, Status>>({});

  const handleAttendance = (eventId: number, status: Status) => {
    setAttendance((prev) => ({ ...prev, [eventId]: status }));
  };

  const getStatusColor = (status: Status | undefined) => {
    switch (status) {
      case "参加":
        return "bg-green-500 hover:bg-green-600";
      case "不参加":
        return "bg-red-500 hover:bg-red-600";
      case "未定":
        return "bg-yellow-500 hover:bg-yellow-600";
      default:
        return "bg-gray-300 hover:bg-gray-400";
    }
  };

  return (
    <div className="container mx-auto p-4 font-sans">
      <h1 className="text-2xl font-bold mb-4">スケジュール</h1>
      <div className="space-y-4">
        {initialEvents.map((event) => (
          <div key={event.id} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold">{event.title}</h2>
            <p className="text-gray-600">{event.date}</p>
            <div className="mt-4 flex space-x-2">
              {(["参加", "不参加", "未定"] as Status[]).map((status) => (
                <button
                  key={status}
                  onClick={() => handleAttendance(event.id, status)}
                  className={`px-4 py-2 text-white rounded-md transition-colors ${
                    attendance[event.id] === status
                      ? getStatusColor(status)
                      // A bit of a hack to show the "default" color when unselected
                      : getStatusColor(
                          status === "参加"
                            ? "参加"
                            : status === "不参加"
                            ? "不参加"
                            : "未定"
                        ) + " opacity-50"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
            {attendance[event.id] && (
              <p className="mt-2 text-sm font-medium">
                あなたの出欠: {attendance[event.id]}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}