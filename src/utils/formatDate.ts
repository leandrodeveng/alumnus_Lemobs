import { BadRequestException } from "@nestjs/common";

export function formatedDate(dateStr) {
  const darr = dateStr.split("-");
  var reg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;

  if (dateStr.match(reg)) {
    var dobj = new Date(parseInt(darr[2]),parseInt(darr[1])-1,parseInt(darr[0]));
    return dobj
  }
  else {
    throw new BadRequestException('Please enter a valid date with dd-mm-yyyy format')
  }
}