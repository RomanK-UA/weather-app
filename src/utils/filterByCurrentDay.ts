export default function filterByCurrentDay(data) {
    const today = new Date();
  
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth();
    const currentDate = today.getDate();
  
    return data.filter(item => {
      const itemDate = new Date(item.dt_txt);   
      return (
        itemDate.getFullYear() === currentYear &&
        itemDate.getMonth() === currentMonth &&
        itemDate.getDate() === currentDate
      );
    });
  }