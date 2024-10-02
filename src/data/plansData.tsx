interface Plan {
  icon: JSX.Element;
  name: string;
  price: string;
  features: string[];
  id: number
}

export const plansData: Plan[] = [
  {
    icon: (
      <svg
        width="15"
        height="13"
        viewBox="0 0 15 13"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="..." />
      </svg>
    ),
    name: "BASIC PLAN",
    id: 1,
    price: "25",

    features: [
      "2 hours of excercises",
      "Free consultaion to coaches",
      "Access to The Community",
    ],
  },
  {
    icon: (
      <svg
        width="28"
        height="24"
        viewBox="0 0 28 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="..." />
      </svg>
    ),
    name: "PREMIUM PLAN",
    price: "30",
    id: 2,
    features: [
      "5 hour of excercises",
      "Free consultaion of Coaches",
      "Accessto minibar",
    ],
  },
  {
    icon: (
      <svg
        width="16"
        height="15"
        viewBox="0 0 16 15"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="..." />
      </svg>
    ),
    name: "PRO PLAN",
    price: "45",
    id: 3,
    features: [
      "8 hours of excercises",
      "Consultation of Private Coach",
      "Free Fitness Merchandises",
    ],
  },
];
