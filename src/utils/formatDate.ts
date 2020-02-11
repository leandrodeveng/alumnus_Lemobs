export function formatedDate(dateStr) {
  const darr = dateStr.split("-");
  var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
  return dobj
}
