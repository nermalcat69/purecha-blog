export interface Post {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tags: string[]
  content: string
}

export const posts: Post[] = [
  {
    slug: 'perfect-masala-chai',
    title: 'The Perfect Masala Chai',
    excerpt: 'The foundational recipe that every chai lover needs. Strong, spiced, perfectly balanced between milk and tea — this is the chai you come home to.',
    date: '2026-03-01',
    readTime: '5 min read',
    tags: ['masala chai', 'recipe', 'beginner'],
    content: `## The Perfect Masala Chai

There is no single recipe for masala chai. Every household, every tapri, every city has its own version. But there are principles — ratios, techniques, choices — that separate a great cup from a forgettable one.

### What You'll Need

**For 2 cups:**

- 1.5 cups water
- 1 cup full-cream milk
- 2 tsp strong CTC tea (Assam or Dooars)
- 1.5 tsp sugar (adjust to taste)
- 3 green cardamom pods, lightly crushed
- 1-inch fresh ginger, grated or crushed
- 1 small cinnamon stick
- 2 cloves

### Method

**Step 1: Start with water and spices.**
Bring the water to a boil in a small saucepan. Add the crushed cardamom, ginger, cinnamon, and cloves. Let the spices bloom in the water for 2 minutes.

**Step 2: Add the tea.**
Add the CTC tea leaves and boil for 1 full minute. The water should turn deep brown.

**Step 3: Add milk and sugar.**
Pour in the milk and add sugar. Bring to a rolling boil while stirring. This is the critical moment — the chai should rise up dramatically. Let it boil for 30 seconds, then turn down the heat and let it simmer for another minute.

**Step 4: Strain and serve.**
Strain through a fine mesh strainer into cups. Serve immediately.

### The Ratios Matter

The classic tapri ratio is 60% milk to 40% water. Home recipes often go 50-50 for a lighter cup. If you prefer chai that is closer to the Mumbai cutting style, go 70% milk to 30% water.

### Choosing Your Tea

**CTC Assam** gives you bold, malty, slightly astringent chai — the classic tapri flavour.
**Darjeeling leaf tea** gives you a more delicate, floral cup — better brewed lighter with less spice.
**Dooars tea** falls in between — robust but smooth.

### Common Mistakes

**Boiling milk too long:** Boiling milk for more than 3 minutes scorches it and creates a skin. Watch the heat.

**Adding tea before water boils:** Cold-water tea extraction gives flat, weak chai. Always start with boiling water.

**Under-spicing:** Dried cardamom powder is no substitute for freshly crushed pods. Use whole spices whenever possible.

### Variations

**No ginger:** If you prefer a gentler cup, skip the ginger and double the cardamom.
**Black pepper version:** Add 4 cracked black peppercorns with the spices for a warming, slightly sharp chai.
**Tulsi chai:** Add 4–5 fresh tulsi (holy basil) leaves with the spices for an Ayurvedic twist.

This is your base recipe. From here, you can go anywhere.`,
  },
  {
    slug: 'kashmiri-noon-chai',
    title: 'Kashmiri Noon Chai (Pink Tea)',
    excerpt: "One of India's most visually striking teas — a soft pink brew made with gunpowder green tea, milk, salt, and baking soda. It tastes nothing like you'd expect.",
    date: '2026-03-08',
    readTime: '7 min read',
    tags: ['kashmiri chai', 'pink tea', 'recipe', 'regional'],
    content: `## Kashmiri Noon Chai (Pink Tea)

Noon Chai is the most surprising cup of tea in India. It looks like a pink latte, it contains no sugar and is instead salted, and it is made with gunpowder green tea and baking soda. First-timers are consistently startled by how much they love it.

### The Science of the Pink

The pink colour comes from the chemical reaction between green tea tannins and baking soda in alkaline conditions. When you add milk, the anthocyanins in the tea react with the milk proteins and the alkaline environment, producing that distinctive dusty rose hue. It is entirely natural.

### What You'll Need

**For 4 small cups (noon chai is served in small cups called khos):**

- 2 cups water
- 2 tsp gunpowder green tea (or Kashmiri green tea if available)
- 1/4 tsp baking soda
- 1.5 cups full-cream milk
- 1/2 tsp salt (or to taste — noon means salt in Kashmiri)
- 2 green cardamom pods
- Garnish: chopped pistachios, dried rose petals

### Method

**Step 1: Make the tea concentrate.**
Bring 2 cups water to a boil. Add the gunpowder tea and baking soda. Boil vigorously for 10–12 minutes. The water will turn a deep red-brown. This is your sheer chai concentrate.

**Step 2: Aerate the concentrate.**
Traditional noon chai is poured back and forth between vessels many times to aerate it. At home, whisk the concentrate vigorously for 2 minutes, or blend it briefly. This step makes the colour deepen and the texture silky.

**Step 3: Add milk and salt.**
Add the milk and salt to the concentrate and bring to a gentle simmer. Do not boil aggressively. Stir and watch the colour transform to pink.

**Step 4: Add cardamom.**
Crush the cardamom pods and add to the simmering chai. Remove from heat after 1 minute.

**Step 5: Strain and garnish.**
Strain into small cups. Garnish with a few crushed pistachios and, if available, a dried rose petal.

### Serving Noon Chai

In Kashmir, noon chai is drunk at breakfast with lavasa (a flatbread) and in the late afternoon. It is a communal, unhurried cup — not something you rush. The salted, creamy flavour pairs well with sweet breads and pastries, which is why Kashmiris eat it with kandur (local bakery bread).

### Why Salt?

The salt in noon chai has historical and practical roots. In the high-altitude cold of Kashmir, sodium helps retain warmth and is vital for physical exertion. The taste, initially strange to outsiders, becomes deeply comforting. Think of it like salted caramel — the salt deepens every other flavour.

### Variations

**Sweet noon chai:** Some Kashmiri families add a small amount of sugar alongside the salt for a sweet-salty version.
**Dry fruit noon chai:** Adding 4–5 soaked and blanched almonds blended into the milk before adding it to the concentrate gives a richer, nuttier cup.

This chai is a commitment — it takes time and patience. The reward is a cup unlike anything else.`,
  },
  {
    slug: 'adrak-chai-ginger-tea',
    title: 'Adrak Wali Chai — The Everyday Ginger Tea',
    excerpt: 'The simplest, most universally loved chai variation. Fresh ginger elevates basic masala chai into something warm and alive. A recipe you will make every single day.',
    date: '2026-03-15',
    readTime: '4 min read',
    tags: ['ginger chai', 'adrak chai', 'recipe', 'everyday'],
    content: `## Adrak Wali Chai — The Everyday Ginger Tea

If masala chai is the base, adrak chai is the soul. There is something uniquely comforting about ginger — its heat, its sharpness, the way it clears the throat and warms the chest from the first sip. This is the chai most Indians return to on a cold morning or a difficult day.

### Why Ginger Works in Chai

Fresh ginger contains gingerols and shogaols — compounds that create that distinctive warming sensation. When boiled with tea, they infuse into the liquid and bind with the tannins, creating a synergistic warmth that is greater than the sum of its parts. Ginger also cuts through the richness of milk, making the cup feel cleaner and brighter.

### What You'll Need

**For 2 cups:**

- 1 cup water
- 1 cup full-cream milk
- 2 tsp CTC tea (Assam works best here)
- 1.5 tsp sugar
- 1.5-inch fresh ginger

### Method

**The key is in the ginger preparation.**

There are three schools of thought on how to prepare ginger for chai:

**School 1: Grated ginger**
Grate the ginger directly into the boiling water. This gives the strongest, most fibrous ginger flavour and a slightly cloudy cup. This is how tapris often do it.

**School 2: Crushed ginger**
Crush the ginger with the flat of your knife to bruise it and release oils without fully breaking it down. This gives a cleaner, more aromatic ginger flavour.

**School 3: Thin sliced ginger**
Slice the ginger thinly and boil it whole. This gives the mildest, most delicate ginger notes — good if you want ginger as a background note rather than the dominant flavour.

Choose your method based on your preference. For the strongest cup, grate. For everyday drinking, crush.

**Boil the water** with ginger for 2 minutes before adding anything else. This is important — it gives the gingerols time to bloom.

**Add tea** and boil for 1 minute. Add milk and sugar. Bring to a rolling boil, let simmer for 1 minute.

**Strain and serve.**

### Pairing Notes

Adrak chai pairs perfectly with:
- Parle-G biscuits (the classic)
- Toast with jam
- Poha
- Samosas (ginger cuts through the oil)

### Health Properties

Ayurveda classifies ginger (shunthi or adraka) as a powerful warming herb — deepana (ignites digestive fire) and pachana (aids digestion). It is prescribed for colds, nausea, poor circulation, and low energy. A cup of adrak chai on a rainy day is genuinely medicinal.

### Ramping It Up

**Adrak tulsi chai:** Add 4 fresh tulsi leaves with the ginger. This combination is the Indian home remedy for colds.
**Adrak kali mirch chai:** Add 3 cracked black peppercorns with the ginger. The pepper amplifies the ginger heat.
**Saunf adrak chai:** Add 1/4 tsp fennel seeds with the ginger for a post-meal digestive chai.

This is the recipe that needs no occasion. Make it now.`,
  },
  {
    slug: 'cold-brew-darjeeling',
    title: 'Cold Brew Darjeeling — The Summer Cup',
    excerpt: "Darjeeling's muscatel notes shine brightest when cold brewed slowly overnight. No heat, no bitterness, just a clean, floral, naturally sweet cup. Perfect for Indian summers.",
    date: '2026-03-18',
    readTime: '6 min read',
    tags: ['cold brew', 'darjeeling', 'recipe', 'summer', 'no-milk'],
    content: `## Cold Brew Darjeeling — The Summer Cup

Hot chai in a 45-degree Indian summer is an act of stubborn habit. Cold brew tea is the summer adaptation that preserves everything great about good tea — the aromatics, the depth, the origin character — while delivering it refreshingly cold.

Darjeeling tea, with its famous muscatel (grape-like, floral) notes, is the finest candidate for cold brewing. Heat extraction can sometimes make Darjeeling slightly bitter and astringent. Cold water is gentler, pulling only the delicate flavours and leaving the harsh tannins behind.

### What You'll Need

**For 2 large glasses (cold brew requires more leaf than hot tea):**

- 600ml cold filtered water
- 3 tsp high-quality Darjeeling loose leaf tea (first or second flush)
- Optional: 1 sprig fresh mint, or 2–3 lemon verbena leaves
- Ice, for serving
- Lemon slice, for garnish

### Method

**Step 1: Measure into a jar or pitcher.**
Place the tea leaves loosely into a glass jar or pitcher. Do not use a tea bag — the leaves need room to unfurl.

**Step 2: Add cold water.**
Pour cold, filtered water over the leaves. Do not use tap water in cities with heavily chlorinated supplies — chlorine flattens the delicate Darjeeling aromatics. If adding mint or lemon verbena, add it now.

**Step 3: Refrigerate.**
Cover and place in the refrigerator. Leave for 8–12 hours. The overnight method (10–12 hours) gives the fullest flavour. Do not leave longer than 14 hours or the tea will become slightly bitter even with cold extraction.

**Step 4: Strain.**
Strain through a fine mesh strainer into a clean vessel. The liquid should be a clear amber-gold, lighter than hot-brewed tea.

**Step 5: Serve.**
Pour over ice. Garnish with a thin lemon slice. Drink within 48 hours.

### Choosing Your Darjeeling

**First flush (March–April):** Lighter, more floral, higher in muscatel. Best for cold brew — produces a delicate, almost white-tea-like cup.

**Second flush (May–June):** Richer, bolder muscatel, deeper amber colour. Cold brew produces a more substantial cup with more body.

**Autumnal flush:** Milder flavour, good body. Cold brew produces a pleasant everyday cup without strong aromatics.

For a first cold brew, start with second flush for its more pronounced character.

### Why Cold Brew Works

The science: caffeine and most tea catechins (including the bitter EGCG) are more soluble in hot water. Cold extraction pulls less caffeine and fewer bitter compounds, resulting in a naturally smoother, sweeter cup with no bitterness at all. You are essentially making a selective extraction — pulling aromatic compounds and milder flavours while leaving the harsh ones behind.

### Variations

**Cold brew with citrus:** Add 3–4 thin slices of orange or lemon to the jar before refrigerating. The citrus brightens the floral notes.

**Cold brew honey lemonade:** Mix cold brew Darjeeling 50-50 with fresh lemon juice and a tablespoon of honey. One of India's best summer drinks.

**Cold brew milk tea (cold brew + milk):** Mix 2 parts cold brew with 1 part cold full-cream milk. Do not heat. Add sugar or jaggery syrup if desired. This is cold brew iced chai — lighter and more delicate than the hot version.

### Storage

Cold brew keeps for 3 days refrigerated. After that, the aromatics fade and the flavour flattens. Make fresh batches rather than large batches that sit around.`,
  },
  {
    slug: 'karak-chai',
    title: 'Karak Chai — The Bold, Caramelised Gulf Chai',
    excerpt: 'Brought back to India by the Gulf diaspora, karak chai is twice-brewed, heavily spiced, and cooked with condensed milk until it is thick and golden. Addictive.',
    date: '2026-03-22',
    readTime: '6 min read',
    tags: ['karak chai', 'recipe', 'regional', 'strong chai'],
    content: `## Karak Chai — The Bold, Caramelised Gulf Chai

Karak chai (karak means 'strong' in Arabic) was born in the Indian diaspora kitchens of the Gulf countries — UAE, Qatar, Bahrain — where Indian workers adapted their masala chai to local tastes and condensed milk availability. It has since come back to India, particularly popular in coastal cities with Gulf connections: Kozhikode, Malappuram, Surat, Mumbai.

It is nothing like standard masala chai. It is thicker, more caramelised, twice-cooked, and deeply addictive.

### What You'll Need

**For 2 small cups (karak is served small and strong):**

- 1.5 cups water
- 3 tsp strong CTC tea (Assam)
- 4 tbsp sweetened condensed milk (use more for sweeter, richer chai)
- 3 green cardamom pods, crushed
- 1 tsp dried ginger powder (saunth — not fresh ginger)
- 1 small cinnamon stick
- 3 cloves
- 1/4 tsp fennel seeds (optional but traditional)
- 1 pinch saffron (optional — adds golden colour and aroma)

### Method

**Step 1: First brew.**
Boil the water with all the spices for 3 minutes. Add the tea leaves. Boil for 2 more minutes. The liquid should be very dark. Strain off the tea leaves and spices (or leave them for the second brew — this is the karak way).

**Step 2: Add condensed milk.**
Add the condensed milk to the strained tea and bring to a boil. Let it boil hard for 1–2 minutes while stirring. The liquid will reduce and thicken slightly. It will also begin to caramelise at the edges — scrape this back in.

**Step 3: The re-brew.**
This is what distinguishes karak. Pour the tea back into the pan (with spices if you kept them), add 2–3 more tablespoons of water, and bring back to a full boil. Boil for another 2 minutes. This second cooking cycle caramelises the milk sugars and creates karak's distinctive thick, slightly toffee-ish flavour.

**Step 4: Strain and serve.**
Strain finely into small cups. The chai should be golden-amber, thick, and aromatic. Serve immediately.

### The Condensed Milk Question

Traditional Gulf karak uses sweetened condensed milk exclusively — no fresh milk, no added sugar. The condensed milk provides both sweetness and body, and its concentrated milk proteins handle the second boil without breaking. If you want less sweet, use evaporated milk (unsweetened) and add sugar separately.

### Why Dried Ginger, Not Fresh?

Fresh ginger adds sharpness and brightness. Dried ginger (saunth) adds warmth and depth without sharpness — it integrates into the body of the tea rather than cutting through it. Karak's character is warmth and roundness, not sharpness, so saunth is the right choice here.

### Gulf Karak vs Indian Masala Chai

| | Gulf Karak | Indian Masala Chai |
|---|---|---|
| Milk | Condensed | Fresh full-cream |
| Ginger | Dried powder | Fresh |
| Brews | Twice-cooked | Once |
| Texture | Thick, syrupy | Fluid |
| Sweetness | High (from condensed milk) | Adjustable |
| Character | Caramelised, bold | Bright, spiced |

### Where to Find It in India

If you're looking for karak chai outside your kitchen: Kozhikode's Muslim-owned cafes (particularly around Kuttichira), Mumbai's Bohri Mohalla and Bandra's UAE-returnee community areas, and Hyderabad's old city all have authentic karak chai options.

This is not everyday chai. This is special-occasion chai — the kind you make on cold evenings when you want something that genuinely warms your soul.`,
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug)
}

export function getAllSlugs(): string[] {
  return posts.map((p) => p.slug)
}
