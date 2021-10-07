export enum GameEventType {
  // Turn phases
  BEGIN_TURN,
  BEGIN_ACTIVE_PHASE,
  END_ACTIVE_PHASE,
  BEGIN_DRAW_PHASE,
  END_DRAW_PHASE,
  BEGIN_MAIN_PHASE,
  END_MAIN_PHASE,
  BEGIN_ATTACK_PHASE,
  END_ATTACK_PHASE,
  BEGIN_MAIN_PHASE2,
  END_MAIN_PHASE2,
  END_TURN,

  CARD_DISCARDED,
  CARD_DULLED,
  CARD_ACTIVATED, // Card changes from dulled to not dulled
  CARD_PLAYED, // Card played on the board
  FORWARD_ATTACKING,
  FORWARDS_PARTY_ATTACKING,
  FORWARD_BLOCKING,
  CARD_DAMAGE_TAKEN, // A card is taking damage
  FORWARD_DESTROYED,
  CARD_GOING_TO_BREAK_ZONE, // A card goes from terrain to Break Zone
  CARD_GOING_TO_HAND, // Card sent back to its owner's hand
  CARD_GOING_TO_DECK, // Card sent back to its owner's deck
  CARD_REMOVED_FROM_GAME,
  PLAYER_DAMAGE_TAKEN, // A damage is being delt to one of the players

  EXBURST_TRIGGERED,
  SUMMON_CAST,
}
