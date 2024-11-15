export interface Project {
    id: number;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    isActive: boolean;
    organizer: {
      name: string;
    };
  }