const blogs = [
  {
    id: "starting",
    title: "I couldn't wait for a laptop. So I didn't.",
    date: "12 March 2026",
    content: `It started with a phone, a bluetooth keyboard, and absolutely no patience.
I wanted to build things. That feeling was already there . I just needed to start. So instead of waiting until I had the right setup, I bought a keyboard and a mouse for my phone. Plugged it in. Opened a mobile compiler. And just started typing.It sounds ridiculous. Maybe it was. But I didn't care. I wanted to see something on the screen that I made. That was enough reason.
My first real project was a YouTube clone. No frameworks, no API calls, no fancy logic. just plain HTML and CSS, written on a phone, opened in a mobile browser. It looked rough. The spacing was off, things didn't align right, and half of what I tried didn't work the first time. But I kept fixing it. One thing at a time.
Then one day I opened it and it just looked right.I still remember that moment. Sitting there, staring at the screen, feeling something I couldn't really explain. That thing when the output matches exactly what you had in your head. When it actually works the way you imagined it. That feeling became the reason I kept going.
That project eventually turned into Glassy Tube. Live YouTube API data, dark glass aesthetic, search functionality, channel info a completely different thing from where it started. But built with the exact same energy. The same stubbornness. The same love for that moment when it finally works.The setup got better. The obsession never changed.`,
  },
  {
    id: "Built_Different",
    title: "Built Different.",
    date: "12 March 2026",
    content: `I had a idea from the start , a notebook theme. Warm colors, doodle aesthetic, something handwritten and personal. Not some generic template everyone uses.But here's the thing ,knowing what you want isn't the same as having it all figured out.I knew the vibe. That notebook feel. The rest? I just started building and figured it out along the way. 
    Every background, every element custom-made to fit exactly what I needed. Nothing stock. Nothing borrowed. Created piece by piece as I went.The first version was honestly kind of a mess. Colors weren't right, spacing was all over the place. But it existed. I could click through it, see what worked and what didn't. That's how you actually know what needs fixing.Every mistake taught me something real. Mobile layout looked terrible - had to completely rethink how things should stack. Animations felt wrong spent time adjusting the timing to match that handwritten feel. Responsive design broke in ways I never expected learned media queries the hard way, through actual problems.You can't plan your way past these lessons. You just build, watch things break, fix them, and keep moving.
    My portfolio isn't professional in that clean, minimal way everyone does. It's personal. A little rough. And honestly, that's who I am. I'm not trying to look like everyone else's portfolio. That matters way more to me than having everything perfectly polished.If you've got a clear vision - hold onto it. That's what makes your work yours. But don't sit around waiting to execute it perfectly. Just start building, even if the first version is rough.The aesthetic was there from day one. But the version that actually works and feels right? That came from building messy first, then polishing as I learned what it needed to be.`,
  },
  {
    id: "More Than Just a Database",
    title: "More Than Just a Database",
    date: "20 june 2026",
    content: `
I built Thudipp during my vacation because I wanted to challenge myself with something bigger than the small projects I'd made before. Blood donation wasn't just another CRUD app—it made me think about people, privacy, and responsibility.

At that point, I had almost no backend connected web experience. I learned Supabase, authentication, databases, and row-level security by building the project. Whenever I got stuck, I used AI to understand concepts, research solutions, and learn faster. It didn't build the project for me, it helped me build it myself.

The feature I'm most proud of isn't something visitors see. Anyone can search for a donor, but they only see essential information like the donor's name, blood group, availability, and admission number. If they need more information, they can contact an administrator or an authorized volunteer. Sensitive details are never publicly exposed, and every important action is recorded in an activity log because accountability matters.The biggest challenge was understanding row-level security. My first policies were insecure, but fixing them taught me one of the most valuable lessons I've learned so far.

Thudipp is still a prototype with demonstration data, but it completely changed the way I think about software. I realized that building an application isn't just about making features work. it's about protecting people's information and making sure it's in the right hands.

Looking back, Thudipp wasn't just another project. It was the project that taught me to think beyond code.
`,
  },
  {
    id: "What I Chose to Remove",
    title: "What I Chose to Remove",
    date: "26 june 2026",
    content: `
I loved my old portfolio.Honestly, I still do.It had notebook pages, sticky notes, doodles, and warm colors. It felt personal and unlike the typical developer portfolio.But over time, I noticed something.People remembered the design more than my work.So I rebuilt it.Not because the old one was bad, but because I had changed.

This version removes almost everything that distracted from the content. No decorative backgrounds. No unnecessary illustrations. Just enough design to let the projects, writing, and ideas speak for themselves.Building something simpler turned out to be harder. Every section had to earn its place, and if it didn't help visitors understand who I am or what I build, it didn't belong.

I'm especially happy with the blog section. Projects show what I build, but writing shows how I think. I wanted visitors to leave knowing more about me than just my GitHub repositories.This was also my second project built entirely with Tailwind CSS. It made responsive design easier and let me focus more on content than styling.

Looking back, I don't see my two portfolios as competitors.The first helped me discover my style.This one helped me discover my focus.
`,
  },
];

export default blogs;