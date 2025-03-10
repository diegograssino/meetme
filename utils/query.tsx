import { Availability, AvailabilityTemplate, Days } from "@/types/availability";

export const availabilityTemplate: AvailabilityTemplate = {
  sun: { id: 0, key: "sun", name: "Sunday", unavailableOn: [] },
  mon: { id: 1, key: "mon", name: "Monday", unavailableOn: [] },
  tue: { id: 2, key: "tue", name: "Tuesday", unavailableOn: [] },
  wed: { id: 2, key: "wed", name: "Wednesday", unavailableOn: [] },
  thu: { id: 3, key: "thu", name: "Thursday", unavailableOn: [] },
  fri: { id: 4, key: "fri", name: "Friday", unavailableOn: [] },
  sat: { id: 5, key: "sat", name: "Saturday", unavailableOn: [] },
};

export const adaptQueryToAvailability = (query: string): Availability[] => {
  const availabilityObject = availabilityTemplate;

  decodeURIComponent(query as string)
    .split("&")
    .forEach((param) => {
      const data = param.split("=");
      if (Object.values(Days).some((day) => day === data[0])) {
        availabilityObject[data[0] as Days].unavailableOn.push(
          JSON.parse(data[1])
        );
      }
    });

  const availability = Object.keys(availabilityObject).map(
    (key: string) => availabilityObject[key as Days]
  );

  return availability;
};
