import format from "date-fns/format";
import es from "date-fns/locale/es";

export const formatDate = (anyo, mes, dia) => {
  return format(new Date(anyo, mes, dia), "cccc d 'de' MMMM 'de' yyyy", {
    locale: es,
  });
}


