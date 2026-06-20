export interface JournalEntry {
  id:         string
  slug:       string
  title:      string
  category:   string
  excerpt:    string
  body:       string
  published:  boolean
  created_at: string
}

export interface PhilosophyEssay {
  numeral: string
  title:   string
  body:    string[]
}

export interface Initiative {
  numeral: string
  name:    string
  lead:    string
  body:    string[]
  current: string[]
  vision:  string[]
}
