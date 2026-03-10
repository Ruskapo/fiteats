export const loadTodayItems = () => {
  const data = localStorage.getItem("today-items");

  if (!data) {
    return [];
  }

  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
};
