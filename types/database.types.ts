// src/types/database.types.ts
export type Database = {
  public: {
    Tables: {
      projects: {
        Row: {
          id: number
          name: string
          image: string
          description: string
        }
      }
    }
  }
}
