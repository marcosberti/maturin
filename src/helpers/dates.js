const formatDate = (type, date) =>
  new Intl.DateTimeFormat('es-AR', { dateStyle: type }).format(getTime(date));

const getTime = (date) => getDate(date).getTime();

const getDate = (date) =>
  date.seconds ? new Date(date.seconds * 1000) : new Date(date);

export { formatDate, getTime, getDate };
