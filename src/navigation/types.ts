// src/types.ts
export type StackParamList = {
    HomeScreen: undefined;
    HealthCheckScreen: undefined;
    InfoUserScreen:{ stepsStatus: ("pending" | "success" | "failure")[] };
  };
  