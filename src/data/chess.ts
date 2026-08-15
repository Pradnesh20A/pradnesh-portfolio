export const chess = {
  fideRating: 1489,
  summary:
    'Beyond code, I\'m a FIDE-rated chess player who brings the same strategic thinking and pattern recognition from the 64 squares to building AI systems. Chess has shaped how I approach problem-solving — thinking several moves ahead, evaluating complex positions, and finding elegant solutions under constraints.',
  profiles: {
    chesscom: {
      url: 'https://www.chess.com/member/Pradnesh20',
      username: 'Pradnesh20',
    },
    lichess: {
      url: 'https://lichess.org/@/Pradnesh20',
      username: 'Pradnesh20',
    },
  },
  journey: [
    { label: 'Started Playing', description: 'Fell in love with chess and began competitive play' },
    { label: 'FIDE Rated', description: 'Achieved official FIDE rating of 1489' },
    { label: 'Online Competition', description: '4,100+ games played across platforms' },
    { label: 'Chess Meets AI', description: 'Built a Chess AI engine with Minimax & Alpha-Beta pruning' },
  ],
  stats: [
    { label: 'FIDE Rating', value: '1489', accent: 'from-amber-500 to-amber-600' },
    { label: 'Lichess Rapid', value: '1893', accent: 'from-emerald-500 to-emerald-600' },
    { label: 'Lichess Classical', value: '1992', accent: 'from-blue-500 to-blue-600' },
    { label: 'Puzzle Rating', value: '2113', accent: 'from-violet-500 to-violet-600' },
  ],
} as const
