export function getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  export function getRandomDate(): string {
    const day: number = getRandomInt(1, 28);
    const month: number = getRandomInt(1, 12);
    const year: number = getRandomInt(2000, 2024);
    return `${day.toString().padStart(2, '0')} ${month.toString().padStart(2, '0')} ${year}`;
  }

  export function getRandomType(): string {
    const types: string[] = ["sales", "marketing", "service", "product", "news"];
    const randomIndex: number = Math.floor(Math.random() * types.length);
    return types[randomIndex];
  }


  export function getRandomJobRole(): string {
    const jobRoles: string[] = [
      "Marketing Analyst",
      "Content Developer",
      "Sales Representative",
      "Sales Strategist",
      "Sales Consultant",
      "Product Manager",
      "Product Marketing Manager",
      "Email Marketing Specialist",
      "Mobile App Developer",
      "Sales Trainer",
      "Product Launch Manager",
      "Sales Funnel Analyst",
      "Sales Developer",
      "Sales Script Writer"
    ];
    const randomIndex: number = Math.floor(Math.random() * jobRoles.length);
    return jobRoles[randomIndex];
  }
