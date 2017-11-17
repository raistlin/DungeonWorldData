var spells = {
  light: {
    level: 'cantrip',
    description: 'An item you touch glows with arcane light, about as bright as a torch. It gives off no heat or sound and requires no fuel, but it is otherwise like a mundane torch. You have complete control of the color of the flame. The spell lasts as long as it is in your presence.'
  },
  prestidigitation: {
    level: 'cantrip',
    description: 'You perform minor tricks of true magic. If you touch an item as part of the casting you can make cosmetic changes to it: clean it, soil it, cool it, warm it, flavor it, or change its color. If you cast the spell without touching an item you can instead create minor illusions no bigger than yourself. Prestidigitation illusions are crude and clearly illusions—they won’t fool anyone, but they might entertain them.'
  },
  unseen_servant: {
    level: 'cantrip',
    description: 'You conjure a simple invisible construct that can do nothing but carry items. It has Load 3 and carries anything you hand to it. It cannot pick up items on its own and can only carry those you give to it. Items carried by an unseen servant appear to float in the air a few paces behind you. An unseen servant that takes damage or leaves your presence is immediately dispelled, dropping any items it carried. Otherwise the unseen servant serves you until you end the spell.',
    tags: ['ongoing']
  },
  contact_spirits: {
    level: 1,
    description: 'Name the spirit you wish to contact (or leave it to the GM). You pull that creature through the planes, just close enough to speak to you. It is bound to answer any one question you ask to the best of its ability.',
    tags: ['summoning']
  },
  detect_magic: {
    level: 1,
    description: 'One of your senses is briefly attuned to magic. The GM will tell you what here is magical.',
    tags: ['divination']
  },
  telepathy: {
    level: 1,
    description: 'You form a telepathic bond with a single person you touch, enabling you to converse with that person through your thoughts. You can only have one telepathic bond at a time.',
    tags: ['divination', 'ongoing']
  },
  charm_person: {
    level: 1,
    description: 'The person (not beast or monster) you touch while casting this spell counts you as a friend until they take damage or you prove otherwise.',
  tags: ['enchantment', 'ongoing']
  },
  invisibility: {
    level: 1,
    description: 'Touch an ally: nobody can see them. They’re invisible! The spell persists until the target attacks or you dismiss the effect. While the spell is ongoing you can’t cast a spell.',
  tags: ['illusion', 'ongoing']
  },
  magic_missile: {
    level: 1,
    description: 'Projectiles of pure magic spring from your fingers. Deal 2d4 damage to one target.',
  tags: ['evocation']
  },
  alarm: {
    level: 1,
    description: 'Walk a wide circle as you cast this spell. Until you prepare spells again your magic will alert you if a creature crosses that circle. Even if you are asleep, the spell will shake you from your slumber.'
  },
  dispel_magic: {
    level: 3,
    description: 'Choose a spell or magic effect in your presence: this spell rips it apart. Lesser spells are ended, powerful magic is just reduced or dampened so long as you are nearby.',
  },
  visions_through_time: {
    level: 3,
    description: 'Cast this spell and gaze into a reflective surface to see into the depths of time. The GM will reveal the details of a grim portent to you—a bleak event that will come to pass without your intervention. They’ll tell you something useful about how you can interfere with the grim portent’s dark outcomes. Rare is the portent that claims “You’ll live happily ever after.” Sorry.',
    tags: ['divination']
  },
  fireball: {
    level: 3,
    tags: ['evocation'],
    description: 'You evoke a mighty ball of flame that envelops your target and everyone nearby, inflicting 2d6 damage which ignores armor.'
  },
  mimic: {
    level: 3,
    tags: ['ongoing'],
    description: 'You take the form of someone you touch while casting this spell. Your physical characteristics match theirs exactly but your behavior may not. This change persists until you take damage or choose to return to your own form. While this spell is ongoing you lose access to all your wizard moves.'
  },
  mirror_image: {
    level: 3,
    tags: ['illusion'],
    description: 'You create an illusory image of yourself. When you are attacked, roll a d6. On a 4, 5, or 6 the attack hits the illusion instead, the image then dissipates and the spell ends.'
  },
  sleep: {
    level: 3,
    tags: ['enchantment'],
    description: '1d4 enemies you can see of the GM’s choice fall asleep. Only creatures capable of sleeping are affected. They awake as normal: loud noises, jolts, pain.'
  },
  cage: {
    level: 5,
    tags: ['evocation', 'ongoing'],
    description: 'The target is held in a cage of magical force. Nothing can get in or out of the cage. The cage remains until you cast another spell or dismiss it. While the spell is ongoing, the caged creature can hear your thoughts and you cannot leave sight of the cage.'
  },
  contact_other_plane: {
    level: 5,
    tags: ['divination'],
    description: 'You send a request to another plane. Specify who or what you’d like to contact by location, type of creature, name, or title. You open a two-way communication with that creature. Your communication can be cut off at any time by you or the creature you contacted.'
  },
  polymorph: {
    level: 5,
    tags: ['enchantment'],
    description: `Your touch reshapes a creature entirely, they stay in the form you craft until you cast a spell. Describe the new shape you craft, including any stat changes, significant adaptations, or major weaknesses. The GM will then tell you one or more of these:
 - The form will be unstable and temporary
 - The creature’s mind will be altered as well
 - The form has an unintended benefit or weakness`
  },
  summon_monster: {
    level: 5,
    tags: ['summoning', 'ongoing'],
    description: `A monster appears and aids you as best it can. Treat it as your character, but with access to only the basic moves. It has +1 modifier for all stats, 1 HP, and uses your damage dice. The monster also gets your choice of 1d6 of these traits:
 - It has +2 instead of +1 to one stat
 - It’s not reckless
 - It does 1d8 damage
 - Its bond to your plane is strong: +2 HP for each level you have
 - It has some useful adaptation
The GM will tell you the type of monster you get based on the traits you select. The creature remains on this plane until it dies or you dismiss it. While the spell is ongoing you take -1 to cast a spell.`
  },
  dominate: {
    level: 7,
    tags: ['enchantment', 'ongoing'],
    description:
`Your touch pushes your mind into someone else’s. You gain 1d4 hold. Spend one hold to make the target take one of these actions:
 - Speak a few words of your choice
 - Give you something they hold
 - Make a concerted attack on a target of your choice
 - Truthfully answer one question

If you run out of hold the spell ends. If the target takes damage you lose 1 hold. While the spell is ongoing you cannot cast a spell.`
  },
  true_seeing: {
    level: 7,
    tags: ['divination', 'ongoing'],
    description: 'You see all things as they truly are. This effect persists until you tell a lie or dismiss the spell. While this spell is ongoing you take -1 to cast a spell.'
  },
  shadow_walk: {
    level: 7,
    tags: ['illusion'],
    description: 'The shadows you target with this spell become a portal for you and your allies. Name a location, describing it with a number of words up to your level. Stepping through the portal deposits you and any allies present when you cast the spell at the location you described. The portal may only be used once by each ally.'
  },
  contingency: {
    level: 7,
    tags: ['evocation'],
    description: 'Choose a 5th level or lower spell you know. Describe a trigger condition using a number of words equal to your level. The chosen spell is held until you choose to unleash it or the trigger condition is met, whichever happens first. You don’t have to roll for the held spell, it just takes effect. You may only have a single contingent spell held at a time; if you cast Contingency while you have a held spell, the new held spell replaces the old one.'
  },
  cloudkill: {
    level: 7,
    tags: ['summoning', 'ongoing'],
    description: 'A cloud of fog drifts into this realm from beyond the Black Gates of Death, filling the immediate area. Whenever a creature in the area takes damage it takes an additional, separate 1d6 damage which ignores armor. This spell persists so long as you can see the affected area, or until you dismiss it.'
  },
  antipathy: {
    level: 9,
    tags: ['enchantment', 'ongoing'],
    description: 'Choose a target and describe a type of creature or an alignment. Creatures of the specified type or alignment cannot come within sight of the target. If a creature of the specified type does find itself within sight of the target, it immediately flees. This effect continues until you leave the target’s presence or you dismiss the spell. While the spell is ongoing you take -1 to cast a spell.'
  },
  alert: {
    level: 9,
    tags: ['divination'],
    description: 'Describe an event. The GM will tell you when that event occurs, no matter where you are or how far away the event is. If you choose, you can view the location of the event as though you were there in person. You can only have one Alert active at a time.'
  },
  soul_gem: {
    level: 9,
    description: 'You trap the soul of a dying creature within a gem. The trapped creature is aware of its imprisonment but can still be manipulated through spells, parley, and other effects. All moves against the trapped creature are at +1. You can free the soul at any time but it can never be recaptured once freed.'
  },
  shelter: {
  level: 9,
  tags: ['evocation', 'ongoing'],
  description: 'You create a structure out of pure magical power. It can be as large as a castle or as small as a hut, but is impervious to all non-magical damage. The structure endures until you leave it or you end the spell.'
  },
  perfect_summons: {
    level: 9,
    tags: ['summoning'],
    description: 'You teleport a creature to your presence. Name a creature or give a short description of a type of creature. If you named a creature, that creature appears before you. If you described a type of creature, a creature of that type appears before you.'
  }
}

module.exports = spells;
