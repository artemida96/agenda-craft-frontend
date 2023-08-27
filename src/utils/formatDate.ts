const formatDate = (inputDate:Date) => {
  const modifiedDate = new Date(inputDate);
  modifiedDate.setDate(modifiedDate.getDate() + 1);

  const [datePart] = modifiedDate.toISOString().split("T");
  const [year, month, day] = datePart.split("-");
  return `${day}/${month}/${year}`;
};

export default formatDate;
