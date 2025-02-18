// src/types.ts
export type StackParamList = {
  HomeScreen: undefined;
  HealthCheckScreen: undefined;
  InfoUserScreen: { stepsStatus: ("pending" | "success" | "failure")[] };
  InfoHealthScreen: { statusMessage: string }; 
  InfoProductScreen: undefined;
  DetailProductScreen: undefined;
  TabletHomeScreen: undefined;
  TabletCheckScreen: undefined;
};
