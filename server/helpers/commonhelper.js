class CommonHelper {
  static generateTimeIntervals = (date) => {
    const currentDate = new Date();

    // Define the start and end times (10:00 AM to 2:00 PM)
    const startHour = 10; // 10 AM
    const endHour = 14; // 2 PM

    // Parse the selected date and set the time to start at 10 AM
    const selectedDateObj = new Date(date);
    selectedDateObj.setHours(startHour, 0, 0, 0); // Set the start time to 10:00 AM

    const availableIntervals = [];

    // Loop through and add 30-minute intervals
    while (selectedDateObj.getHours() < endHour) {
      const timeString = selectedDateObj.toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Add interval if it hasn't passed yet
      if (selectedDateObj > currentDate) {
        availableIntervals.push(timeString);
      }

      // Increment by 30 minutes
      selectedDateObj.setMinutes(selectedDateObj.getMinutes() + 30);
    }

    return availableIntervals;
  };

  static nextDays = (n, DoctoryAvailableDays) => {
    const currentDate = new Date();
    return Array.from({ length: n }, (_, index) => {
      const nextDay = new Date(currentDate);
      nextDay.setDate(currentDate.getDate() + index + 1);

      const dayName = nextDay.toLocaleDateString("en-US", {
        weekday: "long",
      });
      const formattedDate = nextDay.toISOString().split("T")[0]; // Format as YYYY-MM-DD

      return { dayName, formattedDate };
    }).filter(day => DoctoryAvailableDays.includes(day.dayName));
};


}

module.exports = CommonHelper;
