export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      apps: {
        Row: {
          created_at: string
          id: number
          image_url: string | null
          name: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          image_url?: string | null
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
