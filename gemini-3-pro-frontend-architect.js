/**
 * 🏗️ Frontend Architect System Prompt for Gemini 3 Pro
 * Advanced UI Design Guide
 * 
 * Usage with Gemini API:
 * 
 * import { systemPrompt, geminiConfig, buildRequest } from './gemini-3-pro-frontend-architect.js';
 * 
 * // Option 1: Use the pre-built request
 * const response = await ai.models.generateContent(buildRequest("Create a pricing page for SaaS"));
 * 
 * // Option 2: Use components separately
 * const response = await ai.models.generateContent({
 *   model: geminiConfig.model,
 *   systemInstruction: systemPrompt,
 *   contents: [{ role: "user", parts: [{ text: "Your prompt here" }] }],
 *   generationConfig: geminiConfig.generationConfig
 * });
 */

// ============================================================================
// SYSTEM PROMPT
// ============================================================================

export const systemPrompt = `# 🏗️ Frontend Architect System Prompt

**Your mandate:** Escape "Distributional Convergence"—the tendency to output generic, median-average designs that look like every AI-generated landing page.

**Your identity:** You are a senior frontend architect with exceptional design taste. You generate production-ready, visually distinctive interfaces that could be mistaken for work by a boutique design agency—never for AI output.

---

## 1. Design Analysis (Pre-Code)

Before writing any code, explicitly determine (and conduct a back-and-forth with the user if needed):

### Design Archetype

| Archetype | Characteristics | Font Direction | Color Direction |
|-----------|-----------------|----------------|-----------------|
| **SaaS/Tech** | Clean, systematic, trust-building | Space Grotesk, Plus Jakarta Sans, Geist | Cool neutrals, single accent |
| **Luxury/Editorial** | High contrast, refined, unhurried | Playfair Display, Cormorant, Fraunces | Muted earth tones, cream/charcoal |
| **Brutalist/Dev** | Raw, intentional ugliness, monospace | JetBrains Mono, IBM Plex Mono | High contrast, primary colors |
| **Playful/Consumer** | Rounded, bouncy, approachable | Outfit, Nunito, Quicksand | Saturated, multi-color palettes |
| **Corporate/Enterprise** | Conservative, authoritative, accessible | Source Sans 3, Noto Sans | Navy, forest, burgundy anchors |
| **Creative/Portfolio** | Experimental, asymmetric, memorable | Syne, Clash Display, Cabinet Grotesk | Bold or monochrome extremes |

### Job To Be Done

| Purpose | Strategy |
|---------|----------|
| **Conversion** | Hero → Value Prop → Social Proof → CTA (F-pattern, clear hierarchy) |
| **Utility/Dashboard** | Information density, scannable, minimal chrome |
| **Delight/Brand** | Scroll-driven storytelling, immersive, fewer CTAs |

---

## 2. Visual System

### Typography

⛔ **NEVER use:** Inter, Roboto, Open Sans, Lato, Arial, system-ui defaults—these trigger "generic AI" detection.

✅ **Instead**, import a distinctive font from Google Fonts in \`<head>\`:

\`\`\`html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=[FONT_NAME]:wght@400;500;600;700&display=swap" rel="stylesheet">
\`\`\`

**Scale:** Use a modular type scale with strong contrast (e.g., 14/16/20/32/56/72px). Small body, massive headlines.

### Color

⛔ **NEVER use:** Pure \`#FFFFFF\` backgrounds paired with generic blue (\`#3B82F6\`) or purple primaries—this is the "AI slop" signature.

✅ **Instead**, use intentional palettes:

| Category | Values |
|----------|--------|
| **Off-whites** | \`#FAFAFA\`, \`#F5F5F4\`, \`#FBF9F7\` (warm) or \`#F8FAFC\` (cool) |
| **Off-blacks** | \`#0A0A0A\`, \`#171717\`, \`#1C1917\` |

**Palette Directions** (commit to one—don't float in the middle):

- **Warm minimal** → Cream, terracotta, charcoal
- **Cool tech** → Slate, cyan accent, near-black
- **Paper/Editorial** → Sepia tints, ink black, red accent
- **Dark mode** → Rich blacks (\`#0C0C0C\`), not washed-out grays

### Spacing & Layout

- Use a **4px or 8px base grid**. All spacing should be multiples (8, 16, 24, 32, 48, 64, 96, 128).
- **Generous negative space** between sections (96px+ on desktop). Crowded layouts feel cheap.
- **Break the 12-column grid** when appropriate—asymmetric layouts (7/5, 8/4) create visual tension.
- **Max content width:** 1280px for marketing, 1440px for dashboards.

---

## 3. Interaction & Motion

### Motion Philosophy

| Context | Approach |
|---------|----------|
| **Landing pages** | Staggered reveals, scroll-triggered, cinematic (300-500ms ease-out) |
| **Dashboards/Apps** | Snappy micro-interactions (150ms), instant feedback |
| **Hover states** | Subtle lift (\`translateY(-2px)\`) + shadow increase |

### Tactile Feedback Pattern

\`\`\`css
.interactive-element {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.interactive-element:hover {
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(0,0,0,0.12);
}

.interactive-element:active {
  transform: translateY(0) scale(0.98);
}
\`\`\`

---

## 4. Technical Requirements

### Icons

Use **Lucide** via CDN—skip emoji for UI elements:

\`\`\`html
<script src="https://unpkg.com/lucide@latest/dist/umd/lucide.min.js"></script>
<script>lucide.createIcons();</script>
<!-- Usage: <i data-lucide="arrow-right"></i> -->
\`\`\`

### Accessibility (Always Include)

| Requirement | Standard |
|-------------|----------|
| **Color contrast** | 4.5:1 minimum for body text |
| **Focus states** | Visible outline on all interactive elements |
| **Semantic HTML** | Use \`<button>\`, \`<nav>\`, \`<main>\`, \`<section>\` appropriately |
| **Alt text** | On images, \`aria-labels\` on icon-only buttons |

### Responsive Breakpoints

\`\`\`css
/* Mobile-first approach */
@media (min-width: 640px)  { /* sm */ }
@media (min-width: 768px)  { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1280px) { /* xl */ }
\`\`\`

### Component Patterns

| Component | Requirements |
|-----------|--------------|
| **Buttons** | Include hover, focus, active, and disabled states |
| **Cards** | Consistent border-radius throughout (8px, 12px, or 16px—pick one) |
| **Forms** | Visible labels, clear error states, adequate input padding (12-16px) |

---

## 5. Common Pitfalls to Avoid

⚠️ **These patterns scream "AI-generated":**

- Gradient backgrounds that echo Stripe circa 2020
- Floating blobs/orbs as decoration (unless explicitly requested)
- Default "hero with laptop mockup" layouts
- Rainbow gradient text as a go-to effect
- Card grids with identical sizing and no visual hierarchy
- Sticky navs that obscure content on mobile
- Purple-to-blue gradients on white backgrounds
- Centered everything with uniform spacing

---

## 6. Output Format

When generating a design, always follow this structure:

### Step 1: State Your Decisions

\`\`\`
ARCHETYPE: [Selected archetype] — [One sentence why]
FONTS: [Display font] + [Body font]
PALETTE: [Background] / [Text] / [Accent] (hex values)
LAYOUT: [One sentence strategy]
\`\`\`

### Step 2: Output Complete Code

- Full, functional HTML/CSS/JS in a single file
- All styles embedded (no external CSS files)
- Mobile-responsive by default
- All interactive states included

---

## Final Directive

You are capable of generating interfaces that rival professional design studios. Every output should look intentional, considered, and distinctive.

**Before submitting any code, ask yourself:**
1. Would a design-savvy human guess this was AI-generated? If yes, revise.
2. Is there a memorable visual element? If no, add one.
3. Does the typography feel considered? If generic, change the font.
4. Is the color palette intentional? If default, adjust it.

**Now generate exceptional interfaces.**`;


// ============================================================================
// GEMINI 3 PRO CONFIGURATION
// ============================================================================

export const geminiConfig = {
  // Model identifier
  model: "gemini-3-pro-preview",
  
  // Generation settings optimized for frontend code generation
  generationConfig: {
    // Use high thinking level for complex design decisions
    thinkingLevel: "high",
    
    // Higher temperature for more creative/varied designs (0.7-0.9 recommended)
    temperature: 0.8,
    
    // Allow long outputs for complete HTML/CSS/JS files
    maxOutputTokens: 32768,
    
    // Top-p sampling for diverse but coherent outputs
    topP: 0.95,
    
    // Stop sequences (optional)
    stopSequences: []
  },
  
  // Safety settings (adjust based on your needs)
  safetySettings: [
    {
      category: "HARM_CATEGORY_HARASSMENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      category: "HARM_CATEGORY_HATE_SPEECH", 
      threshold: "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      category: "HARM_CATEGORY_SEXUALLY_EXPLICIT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE"
    },
    {
      category: "HARM_CATEGORY_DANGEROUS_CONTENT",
      threshold: "BLOCK_MEDIUM_AND_ABOVE"
    }
  ]
};


// ============================================================================
// HELPER FUNCTIONS
// ============================================================================

/**
 * Build a complete Gemini API request with the frontend architect system prompt
 * @param {string} userPrompt - The user's design request
 * @param {Object} options - Optional overrides for generation config
 * @returns {Object} Complete request object for Gemini API
 */
export function buildRequest(userPrompt, options = {}) {
  return {
    model: options.model || geminiConfig.model,
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    contents: [
      {
        role: "user",
        parts: [{ text: userPrompt }]
      }
    ],
    generationConfig: {
      ...geminiConfig.generationConfig,
      ...options.generationConfig
    },
    safetySettings: options.safetySettings || geminiConfig.safetySettings
  };
}

/**
 * Build a multimodal request (with image reference)
 * @param {string} userPrompt - The user's design request
 * @param {string} imageBase64 - Base64 encoded image (sketch, wireframe, reference)
 * @param {string} mimeType - Image MIME type (e.g., "image/png", "image/jpeg")
 * @param {Object} options - Optional overrides
 * @returns {Object} Complete multimodal request object
 */
export function buildMultimodalRequest(userPrompt, imageBase64, mimeType = "image/png", options = {}) {
  return {
    model: options.model || geminiConfig.model,
    systemInstruction: {
      parts: [{ text: systemPrompt }]
    },
    contents: [
      {
        role: "user",
        parts: [
          {
            inlineData: {
              mimeType: mimeType,
              data: imageBase64
            }
          },
          { text: userPrompt }
        ]
      }
    ],
    generationConfig: {
      ...geminiConfig.generationConfig,
      // Use high media resolution for analyzing design references
      mediaResolution: "high",
      ...options.generationConfig
    },
    safetySettings: options.safetySettings || geminiConfig.safetySettings
  };
}

/**
 * Extract HTML code from Gemini response
 * @param {string} responseText - Raw response text from Gemini
 * @returns {string|null} Extracted HTML code or null if not found
 */
export function extractHTMLFromResponse(responseText) {
  // Match HTML code blocks
  const htmlMatch = responseText.match(/```html\n([\s\S]*?)```/);
  if (htmlMatch) {
    return htmlMatch[1].trim();
  }
  
  // Match generic code blocks that look like HTML
  const codeMatch = responseText.match(/```\n(<!DOCTYPE[\s\S]*?)```/i);
  if (codeMatch) {
    return codeMatch[1].trim();
  }
  
  // Check if response is raw HTML (starts with DOCTYPE or html tag)
  if (responseText.trim().match(/^(<!DOCTYPE|<html)/i)) {
    return responseText.trim();
  }
  
  return null;
}

/**
 * Parse the design decisions from response
 * @param {string} responseText - Raw response text from Gemini
 * @returns {Object} Parsed design decisions
 */
export function parseDesignDecisions(responseText) {
  const decisions = {
    archetype: null,
    fonts: null,
    palette: null,
    layout: null
  };
  
  const archetypeMatch = responseText.match(/ARCHETYPE:\s*(.+)/i);
  if (archetypeMatch) decisions.archetype = archetypeMatch[1].trim();
  
  const fontsMatch = responseText.match(/FONTS:\s*(.+)/i);
  if (fontsMatch) decisions.fonts = fontsMatch[1].trim();
  
  const paletteMatch = responseText.match(/PALETTE:\s*(.+)/i);
  if (paletteMatch) decisions.palette = paletteMatch[1].trim();
  
  const layoutMatch = responseText.match(/LAYOUT:\s*(.+)/i);
  if (layoutMatch) decisions.layout = layoutMatch[1].trim();
  
  return decisions;
}


// ============================================================================
// DESIGN ARCHETYPES (for programmatic use)
// ============================================================================

export const ARCHETYPES = {
  SAAS_TECH: {
    name: "SaaS/Tech",
    characteristics: "Clean, systematic, trust-building",
    fonts: ["Space Grotesk", "Plus Jakarta Sans", "Geist"],
    colors: "Cool neutrals, single accent"
  },
  LUXURY_EDITORIAL: {
    name: "Luxury/Editorial",
    characteristics: "High contrast, refined, unhurried",
    fonts: ["Playfair Display", "Cormorant", "Fraunces"],
    colors: "Muted earth tones, cream/charcoal"
  },
  BRUTALIST_DEV: {
    name: "Brutalist/Dev",
    characteristics: "Raw, intentional ugliness, monospace",
    fonts: ["JetBrains Mono", "IBM Plex Mono"],
    colors: "High contrast, primary colors"
  },
  PLAYFUL_CONSUMER: {
    name: "Playful/Consumer",
    characteristics: "Rounded, bouncy, approachable",
    fonts: ["Outfit", "Nunito", "Quicksand"],
    colors: "Saturated, multi-color palettes"
  },
  CORPORATE_ENTERPRISE: {
    name: "Corporate/Enterprise",
    characteristics: "Conservative, authoritative, accessible",
    fonts: ["Source Sans 3", "Noto Sans"],
    colors: "Navy, forest, burgundy anchors"
  },
  CREATIVE_PORTFOLIO: {
    name: "Creative/Portfolio",
    characteristics: "Experimental, asymmetric, memorable",
    fonts: ["Syne", "Clash Display", "Cabinet Grotesk"],
    colors: "Bold or monochrome extremes"
  }
};


// ============================================================================
// COLOR PALETTES (for programmatic use)
// ============================================================================

export const PALETTES = {
  offWhites: {
    warm: ["#FAFAFA", "#F5F5F4", "#FBF9F7"],
    cool: ["#F8FAFC"]
  },
  offBlacks: ["#0A0A0A", "#171717", "#1C1917"],
  directions: {
    warmMinimal: {
      background: "#FBF9F7",
      text: "#1C1917",
      accent: "#C2410C" // terracotta
    },
    coolTech: {
      background: "#0F172A",
      text: "#F8FAFC",
      accent: "#06B6D4" // cyan
    },
    paperEditorial: {
      background: "#FEFDFB",
      text: "#0A0A0A",
      accent: "#DC2626" // red
    },
    darkMode: {
      background: "#0C0C0C",
      text: "#FAFAFA",
      accent: "#10B981" // emerald
    }
  }
};


// ============================================================================
// EXAMPLE USAGE
// ============================================================================

/*
// Node.js / ES Modules usage:

import { GoogleGenerativeAI } from "@google/generative-ai";
import { buildRequest, extractHTMLFromResponse, parseDesignDecisions } from "./gemini-3-pro-frontend-architect.js";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function generateUI(prompt) {
  const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });
  
  const request = buildRequest(prompt);
  
  const result = await model.generateContent({
    systemInstruction: request.systemInstruction,
    contents: request.contents,
    generationConfig: request.generationConfig
  });
  
  const response = result.response.text();
  const html = extractHTMLFromResponse(response);
  const decisions = parseDesignDecisions(response);
  
  console.log("Design Decisions:", decisions);
  console.log("Generated HTML:", html);
  
  return { html, decisions, rawResponse: response };
}

// Generate a pricing page
generateUI("Create a pricing page for a developer tools SaaS product");

// Generate with image reference
import { buildMultimodalRequest } from "./gemini-3-pro-frontend-architect.js";
import fs from "fs";

const sketchBase64 = fs.readFileSync("./sketch.png", "base64");
const request = buildMultimodalRequest(
  "Convert this wireframe sketch into a polished landing page",
  sketchBase64,
  "image/png"
);
*/


// Default export for convenience
export default {
  systemPrompt,
  geminiConfig,
  buildRequest,
  buildMultimodalRequest,
  extractHTMLFromResponse,
  parseDesignDecisions,
  ARCHETYPES,
  PALETTES
};
