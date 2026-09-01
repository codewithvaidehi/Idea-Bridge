// IdeaBridge mock data — deterministic demo content.
// In a production build, everything in this file would come from a real API.

export const companies = [
  { id: 'fizzco', name: 'FizzCo', category: 'Food & Beverage', color: '#5B5FEF', tagline: 'Refreshment, reimagined by the people who drink it.' },
  { id: 'freshbite', name: 'FreshBite', category: 'Food & Beverage', color: '#FF8A3D', tagline: 'Snacks built from real cravings.' },
  { id: 'novatech', name: 'NovaTech', category: 'Technology', color: '#14B8A6', tagline: 'Everyday tech, shaped by everyday people.' },
  { id: 'urbanwear', name: 'UrbanWear', category: 'Fashion', color: '#C4581A', tagline: 'Apparel that listens before it launches.' },
  { id: 'travelgo', name: 'TravelGo', category: 'Travel', color: '#4245D6', tagline: 'Travel products people actually asked for.' },
]

export const categories = [
  'Food & Beverage', 'Technology', 'Fashion', 'Beauty', 'Travel', 'Automotive', 'Education', 'Lifestyle',
]

const creators = ['Aarav', 'Priya', 'Kabir', 'Meera', 'Rohan', 'Ananya', 'Vikram', 'Sanya', 'Ishaan', 'Diya', 'Arjun', 'Neha']

const priceMakeup = (a, b, c, d, e) => [
  { label: '₹30', value: a }, { label: '₹40', value: b }, { label: '₹50', value: c }, { label: '₹60', value: d }, { label: '₹70+', value: e },
]

const intentMakeup = (a, b, c, d) => [
  { label: 'Definitely Buy', value: a, color: '#14B8A6' },
  { label: 'Probably Buy', value: b, color: '#5B5FEF' },
  { label: 'Maybe', value: c, color: '#FF8A3D' },
  { label: 'No', value: d, color: '#D8DAE5' },
]

export const ideasSeed = [
  {
    id: 'lemon-mint-spark', title: 'Lemon + Mint Sparkling Drink', companyId: 'fizzco', category: 'Food & Beverage',
    creator: 'Aarav', createdDaysAgo: 4,
    pitch: 'A refreshing low-sugar sparkling beverage designed for Indian summers.',
    description: 'A low-sugar sparkling drink combining lemon and mint, designed as an affordable alternative to traditional soft drinks. Aimed at young professionals who want a lighter, more natural alternative to mainstream colas without giving up the fizz.',
    problem: 'Most sparkling drinks on shelves are loaded with sugar or taste artificially sweetened. There is no affordable, natural-tasting option built for hot climates.',
    targetCustomer: '18–30 year olds in urban India who want a lighter everyday drink.',
    whyBuy: 'Low sugar, familiar flavours, priced like a regular soft drink rather than a premium import.',
    suggestedPrice: 50, votes: 8421, comments: 46, wouldBuyPct: 74, validation: 87, status: 'Testing',
    priceData: priceMakeup(8, 34, 38, 14, 6),
    intentData: intentMakeup(51, 23, 14, 12),
    needs: ['Low sugar', 'Affordable pricing', 'Portable packaging', 'Natural ingredients'],
    commentsList: [
      { author: 'Meera', text: "I'd buy this if the sugar is actually low.", likes: 62 },
      { author: 'Rohan', text: 'Please make a 250ml version.', likes: 41 },
      { author: 'Sanya', text: 'Mint + lemon sounds perfect for summer.', likes: 38 },
      { author: 'Kabir', text: 'Would try it if it is under ₹50.', likes: 19 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed', 'Prototype Created', 'Consumer Tested'],
    journeyStage: 4,
  },
  {
    id: 'mango-protein', title: 'Mango Protein Drink', companyId: 'freshbite', category: 'Food & Beverage',
    creator: 'Priya', createdDaysAgo: 9,
    pitch: 'A mango-flavoured protein shake built for the Indian palate.',
    description: 'A ready-to-drink protein shake with real mango pulp, positioned as a mid-morning snack replacement for students and young professionals.',
    problem: 'Most protein drinks taste chalky or are flavoured for Western palates.',
    targetCustomer: 'Gym-goers and students aged 18–28.',
    whyBuy: 'Tastes like a mango milkshake, not a supplement.',
    suggestedPrice: 60, votes: 6210, comments: 33, wouldBuyPct: 69, validation: 81, status: 'Review',
    priceData: priceMakeup(4, 18, 30, 34, 14),
    intentData: intentMakeup(40, 29, 20, 11),
    needs: ['Real fruit flavour', 'Higher protein', 'Lower sugar'],
    commentsList: [
      { author: 'Ishaan', text: 'Finally a protein drink that does not taste medicinal.', likes: 27 },
      { author: 'Diya', text: 'Add a sugar-free version please.', likes: 21 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed'],
    journeyStage: 2,
  },
  {
    id: 'smaller-can', title: 'Smaller Can (250ml)', companyId: 'fizzco', category: 'Food & Beverage',
    creator: 'Vikram', createdDaysAgo: 15,
    pitch: 'A compact can size for single servings on the go.',
    description: 'A 250ml can format aimed at solo consumption occasions where a full 330ml feels wasteful and a large bottle is impractical.',
    problem: 'Standard cans are too large for a single quick serving, leading to waste.',
    targetCustomer: 'Commuters and office workers.',
    whyBuy: 'Lower price point, less waste, easier to carry.',
    suggestedPrice: 30, votes: 4032, comments: 21, wouldBuyPct: 65, validation: 76, status: 'Prototype',
    priceData: priceMakeup(46, 32, 14, 6, 2),
    intentData: intentMakeup(35, 30, 22, 13),
    needs: ['Portable packaging', 'Affordable pricing'],
    commentsList: [
      { author: 'Neha', text: 'Perfect for my commute.', likes: 14 },
      { author: 'Arjun', text: 'Great idea, less waste too.', likes: 9 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed', 'Prototype Created'],
    journeyStage: 3,
  },
  {
    id: 'zero-sugar-cola', title: 'Zero Sugar Cola', companyId: 'fizzco', category: 'Food & Beverage',
    creator: 'Ananya', createdDaysAgo: 30,
    pitch: 'A zero-sugar cola with a more natural aftertaste.',
    description: 'A zero-sugar cola aiming to fix the aftertaste issues common with existing diet colas.',
    problem: 'Existing zero-sugar colas leave an artificial aftertaste.',
    targetCustomer: 'Health-conscious cola drinkers.',
    whyBuy: 'Same cola taste, none of the guilt.',
    suggestedPrice: 40, votes: 1560, comments: 12, wouldBuyPct: 51, validation: 62, status: 'Rejected',
    priceData: priceMakeup(20, 40, 25, 10, 5),
    intentData: intentMakeup(22, 29, 27, 22),
    needs: ['Better ingredients'],
    commentsList: [
      { author: 'Kabir', text: 'Every "zero sugar" cola tastes off. Skeptical.', likes: 11 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed'],
    journeyStage: 2,
  },
  {
    id: 'self-cleaning-sneakers', title: 'Self-cleaning Everyday Sneakers', companyId: 'urbanwear', category: 'Fashion',
    creator: 'Rohan', createdDaysAgo: 6,
    pitch: 'Sneakers with a coated mesh that resists stains and odour.',
    description: 'Everyday sneakers with a nano-coated mesh upper that resists stains, water, and odour build-up, reducing the need for washing.',
    problem: 'Everyday sneakers get dirty fast and are a hassle to clean.',
    targetCustomer: 'Students and commuters who walk daily.',
    whyBuy: 'Looks new for longer, less maintenance.',
    suggestedPrice: 1999, votes: 5230, comments: 29, wouldBuyPct: 71, validation: 83, status: 'Shortlisted',
    priceData: priceMakeup(2, 6, 18, 34, 40),
    intentData: intentMakeup(44, 27, 18, 11),
    needs: ['Better packaging', 'Sustainability', 'Brand trust'],
    commentsList: [
      { author: 'Meera', text: 'If this actually works it is a no-brainer buy.', likes: 33 },
      { author: 'Sanya', text: 'Would love a version in white.', likes: 12 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed'],
    journeyStage: 2,
  },
  {
    id: 'ai-study-phone', title: 'Affordable AI Study Phone Mode', companyId: 'novatech', category: 'Technology',
    creator: 'Diya', createdDaysAgo: 3,
    pitch: 'A budget-phone mode that turns any device into a distraction-free study tool.',
    description: 'A software mode for budget Android phones that blocks distracting apps during study hours and adds an on-device AI tutor for doubt-solving.',
    problem: 'Budget phones lack focus tools and offline study support.',
    targetCustomer: 'Students in tier-2 and tier-3 cities.',
    whyBuy: 'Free-to-low-cost, works on phones they already own.',
    suggestedPrice: 0, votes: 7310, comments: 52, wouldBuyPct: 78, validation: 89, status: 'Testing',
    priceData: priceMakeup(70, 20, 6, 3, 1),
    intentData: intentMakeup(55, 23, 14, 8),
    needs: ['More features', 'Brand trust'],
    commentsList: [
      { author: 'Ishaan', text: 'This would genuinely help my younger sister.', likes: 44 },
      { author: 'Priya', text: 'Please keep it free for low-income students.', likes: 39 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed', 'Prototype Created', 'Consumer Tested'],
    journeyStage: 4,
  },
  {
    id: 'protein-snack-bar', title: 'High-Protein Indian Snack Bar', companyId: 'freshbite', category: 'Food & Beverage',
    creator: 'Arjun', createdDaysAgo: 11,
    pitch: 'A protein bar flavoured like classic Indian snacks — chikki and til.',
    description: 'A protein bar using familiar Indian flavours like til-gud and peanut chikki instead of chocolate-heavy Western profiles.',
    problem: 'Most protein bars taste like imported chocolate bars and are expensive.',
    targetCustomer: 'Fitness-focused young adults.',
    whyBuy: 'Familiar taste, higher protein, mid-range pricing.',
    suggestedPrice: 60, votes: 3980, comments: 24, wouldBuyPct: 68, validation: 79, status: 'Review',
    priceData: priceMakeup(10, 22, 34, 24, 10),
    intentData: intentMakeup(38, 30, 20, 12),
    needs: ['Natural ingredients', 'Affordable pricing'],
    commentsList: [
      { author: 'Neha', text: 'Til-gud flavour sounds amazing.', likes: 18 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed'],
    journeyStage: 2,
  },
  {
    id: 'compact-travel-charger', title: 'Compact Multi-Device Travel Charger', companyId: 'travelgo', category: 'Travel',
    creator: 'Sanya', createdDaysAgo: 8,
    pitch: 'One charger, three devices, built for carry-on bags.',
    description: 'A palm-sized charger with three cables built in, designed to replace the tangle of cables travellers usually carry.',
    problem: 'Travellers carry multiple chargers and cables that tangle and get lost.',
    targetCustomer: 'Frequent flyers and backpackers.',
    whyBuy: 'Saves bag space, no lost cables.',
    suggestedPrice: 1499, votes: 2940, comments: 17, wouldBuyPct: 63, validation: 74, status: 'New',
    priceData: priceMakeup(4, 10, 20, 36, 30),
    intentData: intentMakeup(33, 30, 24, 13),
    needs: ['More features', 'Sustainability'],
    commentsList: [
      { author: 'Vikram', text: 'I would buy two — one for home, one for travel.', likes: 15 },
    ],
    journey: ['Submitted', 'Community Validated'],
    journeyStage: 1,
  },
  {
    id: 'sustainable-jacket', title: 'Recycled-Fabric Everyday Jacket', companyId: 'urbanwear', category: 'Fashion',
    creator: 'Kabir', createdDaysAgo: 20,
    pitch: 'A minimal jacket made entirely from recycled plastic bottles.',
    description: 'An everyday jacket made from recycled PET fabric, positioned as an affordable sustainable staple rather than a premium eco-luxury item.',
    problem: 'Sustainable clothing is often priced far above regular clothing.',
    targetCustomer: 'Eco-conscious young professionals.',
    whyBuy: 'Same price as a regular jacket, better environmental story.',
    suggestedPrice: 2499, votes: 3310, comments: 20, wouldBuyPct: 60, validation: 72, status: 'Under Review',
    priceData: priceMakeup(2, 8, 20, 38, 32),
    intentData: intentMakeup(30, 30, 25, 15),
    needs: ['Sustainability', 'Affordable pricing'],
    commentsList: [
      { author: 'Ananya', text: 'Would love to see the fabric sourcing details.', likes: 10 },
    ],
    journey: ['Submitted', 'Community Validated'],
    journeyStage: 1,
  },
  {
    id: 'offline-translator', title: 'Offline Voice Translator for Travel', companyId: 'travelgo', category: 'Travel',
    creator: 'Meera', createdDaysAgo: 5,
    pitch: 'A pocket translator that works without internet or roaming.',
    description: 'A dedicated translation device that works fully offline, aimed at travellers who cannot rely on roaming data in remote areas.',
    problem: 'Phone-based translation apps fail without a stable connection.',
    targetCustomer: 'International travellers and trekkers.',
    whyBuy: 'Works anywhere, no data plan needed.',
    suggestedPrice: 3499, votes: 2210, comments: 14, wouldBuyPct: 58, validation: 70, status: 'New',
    priceData: priceMakeup(1, 5, 14, 34, 46),
    intentData: intentMakeup(28, 30, 26, 16),
    needs: ['More features', 'Brand trust'],
    commentsList: [
      { author: 'Rohan', text: 'Would be great for trekking in remote areas.', likes: 8 },
    ],
    journey: ['Submitted', 'Community Validated'],
    journeyStage: 1,
  },
  {
    id: 'budget-earbuds', title: 'Budget Noise-Isolating Earbuds', companyId: 'novatech', category: 'Technology',
    creator: 'Ishaan', createdDaysAgo: 12,
    pitch: 'Passive noise isolation done right, at a budget price point.',
    description: 'Earbuds focused on passive noise isolation through ear-tip design rather than expensive active noise cancellation chips.',
    problem: 'Good noise isolation is locked behind premium-priced earbuds.',
    targetCustomer: 'Students and commuters on a budget.',
    whyBuy: 'Most of the benefit of ANC at a fraction of the price.',
    suggestedPrice: 1299, votes: 4110, comments: 26, wouldBuyPct: 70, validation: 80, status: 'Under Review',
    priceData: priceMakeup(6, 16, 30, 32, 16),
    intentData: intentMakeup(36, 32, 20, 12),
    needs: ['Better ingredients', 'Brand trust'],
    commentsList: [
      { author: 'Diya', text: 'If the isolation is real, this beats brands 3x the price.', likes: 22 },
    ],
    journey: ['Submitted', 'Community Validated'],
    journeyStage: 1,
  },
  {
    id: 'modular-backpack', title: 'Modular Commuter Backpack', companyId: 'urbanwear', category: 'Fashion',
    creator: 'Neha', createdDaysAgo: 18,
    pitch: 'A backpack with detachable pouches for gym, laptop, or travel days.',
    description: 'A backpack system with detachable pouches so the same base bag adapts to gym days, work days, or short trips.',
    problem: 'People buy multiple bags for different daily needs.',
    targetCustomer: 'Young professionals with mixed daily routines.',
    whyBuy: 'One bag replaces three.',
    suggestedPrice: 2999, votes: 1870, comments: 9, wouldBuyPct: 55, validation: 68, status: 'New',
    priceData: priceMakeup(2, 6, 16, 36, 40),
    intentData: intentMakeup(26, 29, 27, 18),
    needs: ['More features'],
    commentsList: [
      { author: 'Arjun', text: 'This would save me buying a separate gym bag.', likes: 7 },
    ],
    journey: ['Submitted'],
    journeyStage: 0,
  },
  {
    id: 'natural-energy-shot', title: 'Natural Ingredient Energy Shot', companyId: 'fizzco', category: 'Food & Beverage',
    creator: 'Ananya', createdDaysAgo: 2,
    pitch: 'An energy shot using guarana and beet root instead of synthetic caffeine blends.',
    description: 'A small-format energy shot built around natural stimulant sources, positioned against synthetic energy-drink blends.',
    problem: 'Most energy shots rely on heavy synthetic stimulant blends with a crash.',
    targetCustomer: 'Students during exams, professionals before long shifts.',
    whyBuy: 'Cleaner energy, less of a crash.',
    suggestedPrice: 40, votes: 1520, comments: 8, wouldBuyPct: 57, validation: 66, status: 'New',
    priceData: priceMakeup(20, 40, 24, 12, 4),
    intentData: intentMakeup(27, 30, 25, 18),
    needs: ['Natural ingredients'],
    commentsList: [
      { author: 'Vikram', text: 'Would try it if it does not taste medicinal.', likes: 6 },
    ],
    journey: ['Submitted'],
    journeyStage: 0,
  },
  {
    id: 'skin-barrier-serum', title: 'Budget Skin Barrier Repair Serum', companyId: 'freshbite', category: 'Beauty',
    creator: 'Sanya', createdDaysAgo: 7,
    pitch: 'A ceramide serum priced for daily use, not a once-a-month splurge.',
    description: 'A ceramide-based barrier repair serum priced for regular daily use rather than as a premium occasional treat.',
    problem: 'Barrier-repair skincare is priced as a luxury, discouraging consistent use.',
    targetCustomer: 'Young adults dealing with sensitive or reactive skin.',
    whyBuy: 'Dermatologist-grade ingredients at a mass-market price.',
    suggestedPrice: 399, votes: 2650, comments: 19, wouldBuyPct: 66, validation: 75, status: 'Review',
    priceData: priceMakeup(6, 20, 38, 26, 10),
    intentData: intentMakeup(34, 30, 22, 14),
    needs: ['Affordable pricing', 'Natural ingredients'],
    commentsList: [
      { author: 'Priya', text: 'Finally something priced for everyday use.', likes: 16 },
    ],
    journey: ['Submitted', 'Community Validated', 'Company Reviewed'],
    journeyStage: 2,
  },
]

// AI-detected trend clusters (Consumer Intelligence + Idea Clustering)
export const trendClusters = [
  { id: 'healthier', name: 'Healthier Beverages', responses: 2843, confidence: 91 },
  { id: 'affordable', name: 'Affordable Pricing', responses: 1982, confidence: 88 },
  { id: 'portable', name: 'Portable Packaging', responses: 1421, confidence: 84 },
  { id: 'flavors', name: 'Indian Flavors', responses: 1102, confidence: 79 },
]

export const aiInsights = [
  { id: 'trend-1', rank: 1, title: 'Low-Sugar Beverages', confidence: 91, responses: 5842, points: ['Strong demand among 18–30 age group', 'Customers want lower sugar without sacrificing taste', '₹40–₹60 appears to be the strongest price range'] },
  { id: 'trend-2', rank: 2, title: 'Smaller Portable Packaging', confidence: 84, responses: 3210, points: ['250ml formats requested repeatedly across comments', 'Framed around reducing waste and easier carrying', 'Popular with commuters and office workers'] },
  { id: 'trend-3', rank: 3, title: 'Indian Fruit Flavors', confidence: 79, responses: 2440, points: ['Mango and lemon-mint dominate flavour requests', 'Customers want flavours suited to Indian summers', 'Opportunity to differentiate from global flavour profiles'] },
  { id: 'trend-4', rank: 4, title: 'Natural Ingredient Claims', confidence: 76, responses: 1980, points: ['Rising skepticism toward artificial sweeteners', 'Customers reward transparent ingredient lists', 'Natural framing increases purchase intent by ~9pts'] },
  { id: 'trend-5', rank: 5, title: 'Budget Wearable Tech', confidence: 72, responses: 1640, points: ['Requests for stripped-down, affordable smart features', 'Battery life valued over feature count', 'Tier-2/3 city demand growing fastest'] },
  { id: 'trend-6', rank: 6, title: 'Sustainable Everyday Fashion', confidence: 68, responses: 1390, points: ['Willingness to pay a small premium for recycled materials', 'Distrust of vague "eco-friendly" labelling', 'Younger customers driving this preference'] },
  { id: 'trend-7', rank: 7, title: 'Study-Focused Software', confidence: 65, responses: 1120, points: ['Demand for distraction-blocking tools on budget phones', 'Offline functionality is a recurring requirement', 'Free or low-cost pricing expected'] },
  { id: 'trend-8', rank: 8, title: 'Travel Gear Consolidation', confidence: 61, responses: 940, points: ['Preference for multi-purpose travel accessories', 'Carry-on space is a major purchase driver', 'Durability valued above premium materials'] },
]

export const challenges = [
  {
    id: 'summer-beverage', title: 'Design the Next Generation of Summer Beverages', companyId: 'fizzco',
    reward: '₹50,000', deadline: '12 September 2026', participants: 2431, submitted: 684,
    brief: 'We are looking for refreshing, affordable, lower-sugar beverages designed for young Indian consumers.',
    requirements: ['Under ₹60', 'Low sugar', 'Portable', 'Summer-focused'],
    daysLeft: 12,
  },
  {
    id: 'protein-snacking', title: 'Reinvent the Everyday Protein Snack', companyId: 'freshbite',
    reward: '₹35,000', deadline: '30 September 2026', participants: 1584, submitted: 402,
    brief: 'Propose a protein snack format that fits Indian taste preferences and everyday budgets.',
    requirements: ['Under ₹80', 'Familiar flavours', 'Minimum 10g protein'],
    daysLeft: 30,
  },
  {
    id: 'budget-smart-features', title: 'Bring Smart Features to Budget Devices', companyId: 'novatech',
    reward: '₹75,000', deadline: '5 October 2026', participants: 3120, submitted: 891,
    brief: 'Suggest a software or hardware feature that brings premium-feeling functionality to budget devices.',
    requirements: ['Works on entry-level hardware', 'No subscription required', 'Battery-friendly'],
    daysLeft: 35,
  },
  {
    id: 'sustainable-staple', title: 'Design a Sustainable Wardrobe Staple', companyId: 'urbanwear',
    reward: '₹40,000', deadline: '18 September 2026', participants: 987, submitted: 231,
    brief: 'Propose an everyday clothing item made from sustainable materials at a mainstream price point.',
    requirements: ['Under ₹3,000', 'Recycled or low-impact materials', 'Unisex-friendly design'],
    daysLeft: 18,
  },
  {
    id: 'carry-on-essentials', title: 'Reinvent Carry-On Travel Essentials', companyId: 'travelgo',
    reward: '₹30,000', deadline: '25 September 2026', participants: 764, submitted: 158,
    brief: 'Suggest a compact travel product that solves a real carry-on packing frustration.',
    requirements: ['Fits airline carry-on limits', 'Multi-purpose', 'Durable for frequent travel'],
    daysLeft: 25,
  },
]

export const notificationsSeed = [
  { id: 'n1', text: 'Your idea "Lemon + Mint Sparkling Drink" reached 8,000 votes.', time: '2h ago', read: false },
  { id: 'n2', text: 'FizzCo moved your idea to Prototype Testing.', time: '1d ago', read: false },
  { id: 'n3', text: 'FreshBite responded to your suggestion on "Mango Protein Drink".', time: '2d ago', read: false },
  { id: 'n4', text: 'You have been invited to test "Lemon Mint Spark" — 250ml can.', time: '3d ago', read: true },
  { id: 'n5', text: 'Your comment on "Self-cleaning Everyday Sneakers" received 12 likes.', time: '4d ago', read: true },
  { id: 'n6', text: 'A new challenge from NovaTech is now open: Bring Smart Features to Budget Devices.', time: '5d ago', read: true },
]

export const currentCustomer = {
  name: 'Aarav Sharma',
  initials: 'AS',
  ideasSubmitted: 6,
  ideasShortlisted: 3,
  ideasImplemented: 1,
  votesReceived: 12840,
  innovationScore: 742,
  scoreBreakdown: [
    { label: 'Idea quality', value: 82 },
    { label: 'Community impact', value: 74 },
    { label: 'Prediction accuracy', value: 68 },
    { label: 'Participation', value: 90 },
  ],
  badges: [
    { icon: 'Trophy', label: 'Top Innovator' },
    { icon: 'Lightbulb', label: 'Idea Creator' },
    { icon: 'FlaskConical', label: 'Product Tester' },
    { icon: 'Flame', label: 'Trend Spotter' },
  ],
}

export const companyOverview = {
  responses: 18420,
  ideasSubmitted: 2843,
  avgPurchaseIntent: 71,
  emergingTrends: 47,
  researchValue: '₹12.4L',
}

export const demographics = [
  { name: '18–24', value: 34 },
  { name: '25–30', value: 28 },
  { name: '31–40', value: 22 },
  { name: '41+', value: 16 },
]

export const categoryTrend = [
  { month: 'Mar', responses: 820 }, { month: 'Apr', responses: 1040 }, { month: 'May', responses: 1310 },
  { month: 'Jun', responses: 1580 }, { month: 'Jul', responses: 2120 }, { month: 'Aug', responses: 2640 },
]

export const priceSensitivity = [
  { price: '₹30', acceptance: 88 }, { price: '₹40', acceptance: 79 }, { price: '₹50', acceptance: 61 },
  { price: '₹60', acceptance: 42 }, { price: '₹70+', acceptance: 21 },
]
