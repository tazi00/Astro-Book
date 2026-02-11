import React from "react";

const notifications = [
  { id: 1, text: "Ankush and 2 others People followed you." },
  { id: 2, text: "Ankush and 2 others People followed you." },
  { id: 3, text: "Ankush and 2 others People followed you." },
  { id: 4, text: "Ankush and 2 others People followed you." },
  { id: 5, text: "Ankush and 2 others People followed you." },
  { id: 6, text: "Ankush and 2 others People followed you." },
];

function NotificationsPage() {
  return (
    <div className="">
      {/* Header */}
      <h3 className="text-gray-400 text-lg mb-3 mt-5 max-w-[1020px] mx-auto  ">
        Notifications
      </h3>
      <div className="border-b-2 border-gray-500 mb-5"></div>

      {/* New Section */}
      <div className="max-w-[1020px] mx-auto">
        <h2 className="text-secondary font-normal  mb-3">New</h2>

        <NotificationItem text={notifications[0]?.text} />

        {/* Earlier Section */}
        <h2 className="text-secondary font-normal  mt-8 mb-3">Earlier</h2>

        <div className="space-y-3">
          {notifications.slice(1).map((item) => (
            <NotificationItem key={item.id} text={item.text} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NotificationsPage;

function NotificationItem({ text }: { text?: string }) {
  return (
    <div className="flex items-center justify-between bg-purple-50 rounded-lg px-4 py-3">
      <div className="flex items-center gap-3">
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
          <span className="text-primary text-sm">👤</span>
        </div>

        {/* Text */}
        <p className="text-tertiary text-lg font-normal">{text}</p>
      </div>

      {/* More Icon */}
      <button className="text-secondary text-4xl leading-none -mt-[14px]">
        ...
      </button>
    </div>
  );
}
