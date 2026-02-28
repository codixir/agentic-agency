const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "long",
  day: "numeric",
  year: "numeric",
});

export const formatDate = (value: string) => dateFormatter.format(new Date(value));
