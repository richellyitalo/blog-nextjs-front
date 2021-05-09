export function convertToDateTimeReadableForHuman(dateTime) {
  const optionsDate = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };
  const dateFormat = new Date(dateTime);
  return dateFormat.toLocaleDateString('pt-BR', optionsDate);
}

export function convertToDateReadableForHuman(dateTime) {
  const optionsDate = { day: 'numeric', month: 'long', year: 'numeric' };
  const dateFormat = new Date(dateTime);
  return dateFormat.toLocaleDateString('pt-BR', optionsDate);
}
