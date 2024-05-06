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
