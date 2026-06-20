export interface ImpactStory {
  id:     string
  kicker: string
  text:   string
}

export const impactStories: ImpactStory[] = [
  {
    id:     'story-1',
    kicker: 'A meal distributed',
    text:   'An elderly man, sitting on the same concrete step where we find him most weeks, asked once why we kept coming back. The honest answer was that we never considered not coming back. He did not ask again after that.',
  },
  {
    id:     'story-2',
    kicker: 'A conversation had',
    text:   'A woman accepting a bottle of water paused to ask after someone she remembered from a previous visit — a small kindness returned, unprompted. It is easy to forget that the people receiving help are also capable of offering it.',
  },
  {
    id:     'story-3',
    kicker: 'A moment witnessed',
    text:   'Two strangers, waiting in the same place for the same meal, ended up sharing a single umbrella against the rain without either of us suggesting it. Dignity, once restored even slightly, tends to extend itself outward on its own.',
  },
  {
    id:     'story-4',
    kicker: 'A lesson learned',
    text:   'We once arrived later than usual and found people had simply waited. Not impatiently — just present, certain we would come. That certainty, more than the meal itself, is what we think we are actually building.',
  },
]
