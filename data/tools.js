/**
 * Hextools dataset.
 *
 * This is the single source of truth for every category and tool shown on
 * the site. Loaded as a plain classic script (no bundler, no build step) —
 * it just defines two globals, `categories` and `tools`, for the render
 * engine (assets/js/render.js) to read.
 *
 * To add a new tool: add one object to the `tools` array below with a
 * `category` matching one of the ids in `categories`. That's the whole
 * process — no HTML to touch.
 *
 * Tool shape:
 *   {
 *     id:          string   — unique, kebab-case
 *     title:       string   — display name
 *     description: string   — one sentence, what it does / why it's useful
 *     url:         string   — link to the tool
 *     category:    string   — must match a categories[].id
 *     icon:        string|null — Font Awesome class, or null to fall back
 *                                to the parent category's icon
 *     tags:        string[] — short labels (e.g. "Free", "Premium"); [] if none
 *   }
 */

const categories = [
  { id: "colors", label: "Colors", icon: "fa-solid fa-palette" },
  { id: "fonts", label: "Fonts & Typography", icon: "fa-solid fa-font" },
  { id: "logos", label: "Logos & Branding", icon: "fa-solid fa-tag" },
  { id: "gradients", label: "Gradients", icon: "fa-solid fa-rainbow" },
  { id: "templates", label: "Templates", icon: "fa-solid fa-layer-group" },
  { id: "emojis", label: "Emojis", icon: "fa-solid fa-face-grin" },
  { id: "style-guides", label: "Style Guides", icon: "fa-solid fa-swatchbook" },
  { id: "background-remover", label: "Background Remover", icon: "fa-solid fa-scissors" },
  { id: "code-snippets", label: "Code Snippets", icon: "fa-solid fa-code" },
  { id: "ai", label: "Artificial Intelligence", icon: "fa-solid fa-robot" },
  { id: "animations", label: "Animations", icon: "fa-solid fa-wand-magic-sparkles" },
];

const tools = [
  // ---- Colors (colors.htm) ----
  { id: "coolors", title: "Coolors", description: "Generate perfect color palettes with a single click.", url: "https://coolors.co/", category: "colors", icon: null, tags: [] },
  { id: "color-hunt", title: "Color Hunt", description: "Curated collection of trendy color palettes.", url: "https://colorhunt.co/", category: "colors", icon: null, tags: [] },
  { id: "colorsinspo-colors", title: "Colorsinspo", description: "All-in-one resource for colors, palettes, and gradients.", url: "https://colorsinspo.com/", category: "colors", icon: null, tags: [] },
  { id: "colorspace", title: "ColorSpace", description: "Generate matching colors and smooth gradients from one color.", url: "https://mycolor.space/", category: "colors", icon: null, tags: [] },
  { id: "adobe-color", title: "Adobe Color", description: "Create color harmonies, extract themes, and explore trends.", url: "https://color.adobe.com/create", category: "colors", icon: null, tags: [] },
  { id: "flat-ui-colors", title: "Flat UI Colors", description: "Beautiful flat color palettes for modern design inspiration.", url: "https://flatuicolors.com/", category: "colors", icon: null, tags: [] },
  { id: "paletton", title: "Paletton", description: "Interactive color wheel for generating harmonious palettes.", url: "https://paletton.com/", category: "colors", icon: null, tags: [] },
  { id: "colorzilla", title: "ColorZilla", description: "Advanced color picker and gradient generator browser extension.", url: "https://colorzilla.com/", category: "colors", icon: null, tags: [] },

  // ---- Fonts & Typography (fonts.htm) ----
  { id: "google-fonts", title: "Google Fonts", description: "Browse and use thousands of free open-source fonts for web and design.", url: "https://fonts.google.com/", category: "fonts", icon: null, tags: [] },
  { id: "fontshare", title: "Fontshare", description: "High-quality fonts by Indian Type Foundry, free for personal and commercial use.", url: "https://www.fontshare.com/", category: "fonts", icon: null, tags: [] },
  { id: "dafont", title: "DaFont", description: "Download free fonts by category or style for all design needs.", url: "https://www.dafont.com/", category: "fonts", icon: null, tags: [] },
  { id: "font-squirrel", title: "Font Squirrel", description: "Hand-picked, high-quality, free fonts for commercial use.", url: "https://fontsquirrel.com/", category: "fonts", icon: null, tags: [] },
  { id: "befonts", title: "BeFonts", description: "Modern free fonts for branding, posters, and web projects.", url: "https://befonts.com/", category: "fonts", icon: null, tags: [] },
  { id: "use-and-modify", title: "Use & Modify", description: "Open-source fonts that can be customized and reused freely.", url: "https://usemodify.com/", category: "fonts", icon: null, tags: [] },
  { id: "typelab", title: "TypeLab", description: "Explore creative typefaces for your next digital or print design.", url: "https://www.typelab.co/", category: "fonts", icon: null, tags: [] },
  { id: "font-pair", title: "Font Pair", description: "Find perfect font pairings for your projects using Google Fonts.", url: "https://fontpair.co/", category: "fonts", icon: null, tags: [] },

  // ---- Logos & Branding (logos.htm) ----
  { id: "looka", title: "Looka", description: "Create beautiful, AI-generated logos and complete brand kits in minutes.", url: "https://looka.com/", category: "logos", icon: null, tags: [] },
  { id: "freelogodesign", title: "FreeLogoDesign", description: "Design your logo online for free with easy templates and customization.", url: "https://www.freelogodesign.org/", category: "logos", icon: null, tags: [] },
  { id: "hatchful", title: "Hatchful by Shopify", description: "Free and fast logo maker for startups and small businesses.", url: "https://www.hatchful.shopify.com/", category: "logos", icon: null, tags: [] },
  { id: "logo-com", title: "Logo.com", description: "Instant logo generation tool with AI-based branding assets.", url: "https://logo.com/", category: "logos", icon: null, tags: [] },
  { id: "canva-logo-templates", title: "Canva Logo Templates", description: "Design customizable logos using free Canva templates.", url: "https://www.canva.com/logos/templates/", category: "logos", icon: null, tags: [] },
  { id: "brandmark", title: "Brandmark", description: "AI logo maker that builds logos and full brand identities.", url: "https://brandmark.io/", category: "logos", icon: null, tags: [] },
  { id: "namecheap-logo-maker", title: "Namecheap Logo Maker", description: "Generate and download free logos with editable vectors and color schemes.", url: "https://www.namecheap.com/logo-maker/", category: "logos", icon: null, tags: [] },
  { id: "logoai", title: "LogoAI", description: "AI-powered logo generator for startups and tech brands.", url: "https://app.logoai.com/", category: "logos", icon: null, tags: [] },

  // ---- Gradients (gradients.htm) ----
  { id: "gradient-page", title: "Gradient Page", description: "Get 90+ high-quality gradient wallpapers in 5K resolution.", url: "https://gradient.page/", category: "gradients", icon: null, tags: [] },
  { id: "grabient", title: "Grabient", description: "Pick gradients and adjust stops using an intuitive UI.", url: "https://www.grabient.com/", category: "gradients", icon: null, tags: [] },
  { id: "colorsinspo-gradients", title: "Colorsinspo", description: "Color palettes and gradients with inspiration and tools.", url: "https://colorsinspo.com/", category: "gradients", icon: null, tags: [] },
  { id: "ui-gradients", title: "UI Gradients", description: "Curated collection of beautiful multi-color gradients.", url: "https://uigradients.com/", category: "gradients", icon: null, tags: [] },
  { id: "webgradients", title: "WebGradients", description: "Free collection of 180 linear gradients for websites.", url: "https://webgradients.com/", category: "gradients", icon: null, tags: [] },
  { id: "mesh-gradient", title: "Mesh Gradient", description: "Create beautiful mesh gradient backgrounds easily.", url: "https://meshgradient.in/", category: "gradients", icon: null, tags: [] },

  // ---- Templates (templates.htm) ----
  { id: "html5-up", title: "HTML5 UP", description: "Fully responsive HTML5 + CSS3 site templates, clean and easily customizable — great for landing pages and portfolios.", url: "https://html5up.net/", category: "templates", icon: null, tags: ["Free"] },
  { id: "start-bootstrap", title: "Start Bootstrap", description: "Bootstrap-based templates and themes for dashboards, landing pages, and business sites — easy to drop into projects.", url: "https://startbootstrap.com/", category: "templates", icon: null, tags: ["Free"] },
  { id: "templated", title: "Templated", description: "Large collection of free CSS/HTML site templates with permissive use — handy for small business and personal sites.", url: "https://templated.co/", category: "templates", icon: null, tags: ["Free"] },
  { id: "themeforest", title: "ThemeForest", description: "Massive marketplace for premium website templates — WordPress, HTML, React, and more. Good when you need production-ready themes.", url: "https://themeforest.net/", category: "templates", icon: null, tags: ["Premium"] },
  { id: "uideck", title: "UIdeck", description: "Modern templates built with Bootstrap, Tailwind and other tools — a mix of free and premium options suitable for SaaS/product sites.", url: "https://uideck.com/", category: "templates", icon: null, tags: ["Free / Paid"] },
  { id: "bootstrapmade", title: "BootstrapMade", description: "Beautiful Bootstrap templates for portfolios, businesses and landing pages. Easy to customize with Bootstrap utilities.", url: "https://bootstrapmade.com/", category: "templates", icon: null, tags: ["Free / Paid"] },
  { id: "templatemonster", title: "TemplateMonster", description: "Huge selection of premium templates for CMSs and e-commerce platforms — themes, HTML templates and more.", url: "https://www.templatemonster.com/", category: "templates", icon: null, tags: ["Premium"] },
  { id: "freefrontend-templates", title: "FreeFrontend Templates", description: "Collection of modern free templates and components contributed by the community — great for inspiration and snippets.", url: "https://freefrontend.com/templates/", category: "templates", icon: null, tags: ["Free"] },
  { id: "tailwind-ui", title: "Tailwind UI", description: "High-quality, professionally designed UI components and templates built with Tailwind CSS — ideal for custom builds.", url: "https://tailwindui.com/", category: "templates", icon: null, tags: ["Premium"] },
  { id: "creative-tim", title: "Creative Tim", description: "Free and premium UI kits, admin dashboards and landing pages built with Bootstrap, React, Vue and Tailwind.", url: "https://www.creative-tim.com/", category: "templates", icon: null, tags: ["Free / Paid"] },

  // ---- Emojis (emojis.htm) ----
  { id: "emojipedia", title: "Emojipedia", description: "The ultimate emoji reference site — search every emoji, meaning, and Unicode version. Constantly updated.", url: "https://emojipedia.org/", category: "emojis", icon: null, tags: ["Comprehensive"] },
  { id: "getemoji", title: "GetEmoji", description: "Copy and paste emojis instantly into any app or site — quick, simple and ad-free interface.", url: "https://getemoji.com/", category: "emojis", icon: null, tags: ["Free"] },
  { id: "emoji-gg", title: "Emoji.gg", description: "Large community-driven library of Discord and custom emojis — perfect for social media and servers.", url: "https://emoji.gg/", category: "emojis", icon: null, tags: ["Community"] },
  { id: "copychar-emoji", title: "CopyChar Emoji", description: "Simple site to copy any emoji or Unicode symbol — includes categories, search and favorites.", url: "https://copychar.cc/emoji", category: "emojis", icon: null, tags: ["Free"] },
  { id: "twemoji", title: "Twemoji", description: "Twitter's open-source emoji set — clean SVGs and PNGs you can embed or download for your own projects.", url: "https://twemoji.twitter.com/", category: "emojis", icon: null, tags: ["Open Source"] },
  { id: "noto-color-emoji", title: "Noto Color Emoji", description: "Google's color emoji font used on Android and Chrome — downloadable and open for design projects.", url: "https://fonts.google.com/noto/specimen/Noto+Color+Emoji", category: "emojis", icon: null, tags: ["Font"] },
  { id: "icons8-emoji", title: "Icons8 Emoji", description: "Professionally designed emoji illustrations in multiple styles — perfect for UI mockups or presentations.", url: "https://icons8.com/emoji", category: "emojis", icon: null, tags: ["Creative"] },
  { id: "openmoji", title: "OpenMoji", description: "Free and open-source emoji project offering consistent SVG and PNG downloads for all emojis.", url: "https://openmoji.org/", category: "emojis", icon: null, tags: ["Open Source"] },

  // ---- Style Guides (style-guides.htm) ----
  { id: "apple-hig", title: "Apple Human Interface Guidelines", description: "Apple's official design principles for iOS, macOS, watchOS, and tvOS — focus on clarity, depth, and deference.", url: "https://www.apple.com/design/human-interface-guidelines/", category: "style-guides", icon: null, tags: ["Official"] },
  { id: "material-design-3", title: "Google Material Design 3", description: "Google's design system for consistent, adaptive UIs — includes color, motion, typography, and accessibility guidelines.", url: "https://m3.material.io/", category: "style-guides", icon: null, tags: ["Official"] },
  { id: "atlassian-design-system", title: "Atlassian Design System", description: "Comprehensive guide on Atlassian's product design philosophy with principles, patterns, and reusable components.", url: "https://atlassian.design/", category: "style-guides", icon: null, tags: ["Company"] },
  { id: "shopify-polaris", title: "Shopify Polaris", description: "Shopify's official style guide and design system — focuses on intuitive e-commerce experiences and brand consistency.", url: "https://polaris.shopify.com/", category: "style-guides", icon: null, tags: ["Company"] },
  { id: "adobe-spectrum", title: "Adobe Spectrum", description: "Adobe's design system covering color, motion, components, and content strategy across Creative Cloud products.", url: "https://spectrum.adobe.com/", category: "style-guides", icon: null, tags: ["Company"] },
  { id: "ibm-carbon", title: "IBM Carbon Design System", description: "IBM's open-source design system emphasizing accessibility and modularity for web and enterprise solutions.", url: "https://carbondesignsystem.com/", category: "style-guides", icon: null, tags: ["Company"] },
  { id: "github-primer", title: "GitHub Primer", description: "GitHub's design framework for product and web experiences — includes CSS utilities, components, and patterns.", url: "https://primer.style/", category: "style-guides", icon: null, tags: ["Open-source"] },
  { id: "us-web-design-system", title: "US Web Design System", description: "Official U.S. government design system for accessible, consistent digital services across federal agencies.", url: "https://designsystem.digital.gov/", category: "style-guides", icon: null, tags: ["Government"] },

  // ---- Background Remover (bg-remover.htm) — source cards had no description text, only name + icon ----
  { id: "remove-bg", title: "Remove.bg", description: "One-click AI background removal for photos, with a free tier for quick edits.", url: "https://www.remove.bg/", category: "background-remover", icon: "fa-solid fa-cut", tags: [] },
  { id: "slazzer", title: "Slazzer", description: "Automatic background remover with a bulk-processing API for larger workflows.", url: "https://www.slazzer.com/", category: "background-remover", icon: "fa-solid fa-eraser", tags: [] },
  { id: "cleanup-pictures", title: "Cleanup.pictures", description: "AI tool to remove unwanted objects, people, or backgrounds from photos.", url: "https://www.cleanup.pictures/", category: "background-remover", icon: "fa-solid fa-image", tags: [] },
  { id: "photoscissors", title: "PhotoScissors", description: "Background removal app with manual touch-up tools for tricky edges.", url: "https://photoscissors.com/", category: "background-remover", icon: "fa-solid fa-wand-magic-sparkles", tags: [] },
  { id: "erase-bg", title: "Erase.bg", description: "Free background remover with instant, no-signup image processing.", url: "https://www.erase.bg/", category: "background-remover", icon: "fa-solid fa-layer-group", tags: [] },
  { id: "fotor-bg-remover", title: "Fotor Background Remover", description: "Background removal built into Fotor's broader online photo editor.", url: "https://www.fotor.com/features/background-remover/", category: "background-remover", icon: "fa-solid fa-circle-half-stroke", tags: [] },

  // ---- Code Snippets (codesnippets.htm) ----
  { id: "carbon", title: "Carbon", description: "Create and share beautiful images of your source code with custom themes and fonts.", url: "https://carbon.now.sh/", category: "code-snippets", icon: "fa-solid fa-terminal", tags: [] },
  { id: "snappify", title: "Snappify", description: "Professional code snippets creator — generate stunning visuals of your code with AI assistance.", url: "https://snappify.com/", category: "code-snippets", icon: "fa-solid fa-camera", tags: [] },
  { id: "codepen", title: "CodePen", description: "Front-end playground for HTML, CSS and JS — perfect for showcasing and testing snippets.", url: "https://codepen.io/", category: "code-snippets", icon: "fa-solid fa-pen-to-square", tags: [] },
  { id: "jsfiddle", title: "JSFiddle", description: "Collaborative editor for web snippets — test, tweak, and share live demos easily.", url: "https://jsfiddle.net/", category: "code-snippets", icon: "fa-solid fa-laptop-code", tags: [] },
  { id: "snippet-generator", title: "Snippet Generator", description: "Quickly generate formatted VS Code / Sublime snippets — save repetitive typing time.", url: "https://snippet-generator.app/", category: "code-snippets", icon: "fa-solid fa-clipboard", tags: [] },
  { id: "ztm-code-snippets", title: "ZTM Code Snippets", description: "Curated list of reusable HTML/CSS/JS code snippets for modern developers.", url: "https://zerotomastery.io/resources/code-snippets/", category: "code-snippets", icon: "fa-solid fa-folder-open", tags: [] },

  // ---- Artificial Intelligence (ai.htm) — source cards had no description text, only name + icon ----
  { id: "chatgpt", title: "ChatGPT", description: "OpenAI's conversational AI assistant for writing, coding, and research.", url: "https://chat.openai.com/", category: "ai", icon: "fa-solid fa-robot", tags: [] },
  { id: "google-gemini", title: "Google Gemini", description: "Google's multimodal AI assistant, integrated across Search, Docs, and Android.", url: "https://gemini.google.com/", category: "ai", icon: "fa-solid fa-brain", tags: [] },
  { id: "github-copilot", title: "GitHub Copilot", description: "AI pair programmer that suggests code and whole functions in your editor.", url: "https://github.com/features/copilot", category: "ai", icon: "fa-solid fa-code", tags: [] },
  { id: "perplexity-ai", title: "Perplexity AI", description: "AI-powered answer engine that cites sources alongside its responses.", url: "https://www.perplexity.ai/", category: "ai", icon: "fa-solid fa-lightbulb", tags: [] },
  { id: "hugging-face", title: "Hugging Face", description: "Hub for open-source machine learning models, datasets, and demos.", url: "https://www.huggingface.co/", category: "ai", icon: "fa-solid fa-network-wired", tags: [] },
  { id: "midjourney", title: "Midjourney", description: "AI image generator known for its distinctive, painterly output style.", url: "https://www.midjourney.com/", category: "ai", icon: "fa-solid fa-image", tags: [] },

  // ---- Animations (animations.htm) — source cards had no description text, only name + icon ----
  { id: "animate-css", title: "Animate.css", description: "Ready-to-use CSS animation library — drop in a class name, get a polished effect.", url: "https://animate.style/", category: "animations", icon: "fa-solid fa-bolt", tags: [] },
  { id: "animista", title: "Animista", description: "Visual CSS animation generator — tweak settings and copy the resulting keyframes.", url: "https://animista.net/", category: "animations", icon: "fa-solid fa-wand-magic-sparkles", tags: [] },
  { id: "lottiefiles", title: "LottieFiles", description: "Library and player for lightweight, vector-based Lottie animations.", url: "https://lottiefiles.com/", category: "animations", icon: "fa-solid fa-shapes", tags: [] },
  { id: "motion-dev", title: "Motion.dev", description: "Animation library and docs for building fluid motion in web apps.", url: "https://motion.dev/", category: "animations", icon: "fa-solid fa-wave-square", tags: [] },
  { id: "keyframes-app", title: "Keyframes.app", description: "Simple visual editor for authoring CSS @keyframes animations.", url: "https://keyframes.app/", category: "animations", icon: "fa-solid fa-play", tags: [] },
  { id: "rive", title: "Rive", description: "Real-time interactive animation tool and runtime for apps and games.", url: "https://rive.app/", category: "animations", icon: "fa-solid fa-circle-notch", tags: [] },
];
