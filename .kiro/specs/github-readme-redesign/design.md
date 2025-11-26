# Design Document

## Overview

This design document outlines the comprehensive redesign of Rishi's GitHub profile README with a professional black and white aesthetic. The redesign will create a visually cohesive, engaging profile that emphasizes professionalism, clarity, and GitHub activity visualization through statistics and an animated contribution snake game.

### Design Goals

1. Create a clean, professional monochromatic visual identity using black, white, and gray
2. Prominently display GitHub statistics with large, clear numbers and contribution visualizations
3. Implement an engaging animated snake game that "eats" GitHub contributions
4. Organize technical skills in a scannable, categorized format
5. Showcase featured projects with clear visual hierarchy
6. Maintain strong professional credibility with a minimalist design
7. Ensure excellent readability in both light and dark GitHub themes

## Architecture

### Color Palette

**Primary Colors:**
- Pure Black: `#000000` (Darkest elements, text)
- Dark Gray: `#1a1a1a` (Dark backgrounds)
- Medium Dark: `#333333` (Primary text, borders)
- Medium Gray: `#666666` (Secondary text)
- Light Gray: `#999999` (Tertiary elements)
- Lighter Gray: `#cccccc` (Borders, dividers)
- Off White: `#f5f5f5` (Light backgrounds)
- Pure White: `#FFFFFF` (Brightest elements, backgrounds)

**Accent Colors (Use Sparingly):**
- Charcoal: `#2d2d2d` (for subtle emphasis)
- Silver: `#c0c0c0` (for highlights)
- Dark Green: `#0e4429` (for contribution intensity - highest)
- Medium Green: `#006d32` (for contribution intensity - high)
- Light Green: `#26a641` (for contribution intensity - medium)
- Pale Green: `#39d353` (for contribution intensity - low)

**Usage Guidelines:**
- Headers and primary elements: Use black (#000000) or dark gray (#1a1a1a)
- Badges: Use grayscale tones with black/white/gray combinations
- Statistics: Use large, bold black numbers on white/light gray backgrounds
- Contribution visualization: Use green shades for contribution intensity (GitHub standard)
- Accents and icons: Use medium grays (#666666, #999999) for subtle emphasis
- Backgrounds: White or off-white for light mode, dark gray for dark mode
- Text: High contrast black on white or white on black
- Keep overall aesthetic clean, minimal, and professional

### Section Structure

The README will follow this top-to-bottom structure:

1. **Animated Header** - Typing animation with name and tagline (monochrome)
2. **Status Banner** - Current focus/project
3. **Social Badges** - Contact and profile metrics (grayscale)
4. **About Me** - Brief professional summary
5. **Featured Projects** - 4 main projects with collapsible details (monochrome badges)
6. **Tech Stack** - Categorized skills in table format with icons and badges (grayscale)
7. **GitHub Stats** - Prominent statistics with large numbers and contribution graph (monochrome with green accents)
8. **Contribution Snake** - Animated snake eating contribution squares
9. **Contact** - Footer with contact information (grayscale badges)

## Components and Interfaces

### 1. Animated Header Component

**Purpose:** Create an engaging first impression with animated typing effect

**Implementation:**
- Use `readme-typing-svg.demolab.com` service
- Configure with monochrome gradient colors (black to gray)
- Display name and professional tagline
- Center-aligned with appropriate sizing

**Configuration:**
```
Font: Inter, weight 700
Size: 36-40px
Colors: Gradient from #000000 to #666666 (black to medium gray)
Animation: Typing effect with pause
Lines: 
  - "hey, i'm Rishi 👋"
  - "AI + systems engineer building useful tools"
```

### 2. Status Banner Component

**Purpose:** Highlight current work and focus

**Implementation:**
- Centered text below header
- Black bold text for project name
- Gray accent for descriptive text
- Concise one-liner format

### 3. Badge System

**Purpose:** Provide visual indicators for skills, stats, and links

**Badge Categories:**

**Social/Profile Badges:**
- GitHub followers (black/gray theme)
- Profile views (gray theme)
- Email (black theme)
- LinkedIn (gray theme)

**Tech Stack Badges:**
- Languages: Black/dark gray color scheme
- Frameworks & Tools: Medium gray color scheme
- AI/ML & Data: Light gray/charcoal color scheme

**Status Badges:**
- In Progress: Gray with white text
- Finished: Black with white text
- Public/Private: Light gray with black text

**Implementation:**
- Use `shields.io` for custom badges
- Use `skillicons.dev` for technology icons
- Apply custom colors: `color=000000` (black), `color=333333` (dark gray), `color=666666` (medium gray), `color=999999` (light gray)
- Use `labelColor` for background: white (#FFFFFF) or light gray (#f5f5f5)
- Consistent styling across all badges with monochrome palette
- Flat or flat-square style for modern, clean look

### 4. About Me Section

**Purpose:** Provide professional context and background

**Structure:**
- Section header with emoji icon
- Bullet points with key highlights
- Bold black text for emphasis
- Concise, scannable format

**Content Areas:**
- Builder philosophy
- Current role/focus
- Key experience highlights (Fisker IT, EPICS, SoC Extension Tech)
- Technical interests

### 5. Featured Projects Section

**Purpose:** Showcase key projects with detailed information

**Project Card Structure:**

Each project includes:
- Project number and name (black heading)
- Status badge (in progress/finished) with grayscale theme
- Visibility badge (public/private) with light gray theme
- One-line description with key features in bold
- Tech stack with monochrome badges
- Links section (repo, demo, docs)
- Collapsible details section for additional info

**Visual Design:**
- Numbered list format (1, 2, 3, 4)
- Status indicators with grayscale badges (black for finished, gray for in progress)
- Horizontal rule separators between projects
- Collapsible sections for detailed features
- Clean, minimal styling with high contrast

### 6. Tech Stack Section

**Purpose:** Display technical skills in organized, visual format using a table layout

**Organization:**

**Category 1: Languages**
- Python, TypeScript, JavaScript, Java, C, HTML5, CSS3

**Category 2: Frameworks & Tools**
- React, Flask, Node.js, Vite, Tailwind CSS, Docker, Git, VSCode, Linux, MongoDB, OpenCV, AWS, Next.js, Figma

**Category 3: AI/ML & Data**
- TensorFlow, PyTorch, OpenCV, HuggingFace Transformers, Pandas, NumPy

**Implementation:**

**Table Layout:**
- Three-column table with equal width columns
- Each column represents a category
- Vertical alignment at top
- Clean borders and spacing

**Icon Grid:**
- Use `skillicons.dev` for visual icons
- Arrange in centered rows within each table cell
- Monochrome or default icon colors

**Badge Grid:**
- Custom shields.io badges for each technology
- Monochrome color scheme (black, dark gray, medium gray)
- `style=for-the-badge` for consistent, modern look
- Organized vertically within each table cell
- Clean, professional appearance

### 7. Contribution Snake Component

**Purpose:** Add engaging, gamified visualization of GitHub contributions

**Design Concept:**
An animated snake that "eats" contribution squares from the GitHub contribution graph, creating a fun, game-like visualization of activity. The snake moves through the contribution grid, consuming squares based on contribution intensity.

**Implementation: GitHub Contribution Snake**
- Use `Platane/snk` GitHub Action (snk@v3)
- Generate animated SVG from actual GitHub contribution data
- Snake moves through contribution grid eating squares
- Customize colors to monochrome with green contribution intensity
- Supports light/dark mode variants
- Smooth animation that loops continuously

**Configuration:**
```yaml
# In .github/workflows/snake.yml
- uses: Platane/snk@v3
  with:
    github_user_name: Rishi-Mad
    outputs: |
      dist/github-contribution-grid-snake.svg
      dist/github-contribution-grid-snake-dark.svg?palette=github-dark
```

**Color Scheme:**
- Light mode: White background with green contribution squares (GitHub standard)
- Dark mode: Dark gray background with green contribution squares
- Snake: Contrasting color that stands out against background
- Grid: Subtle gray lines

**Display:**
```html
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://raw.githubusercontent.com/Rishi-Mad/Rishi-Mad/output/github-contribution-grid-snake-dark.svg" />
    <source media="(prefers-color-scheme: light)" srcset="https://raw.githubusercontent.com/Rishi-Mad/Rishi-Mad/output/github-contribution-grid-snake.svg" />
    <img alt="Snake eating my contributions" src="https://raw.githubusercontent.com/Rishi-Mad/Rishi-Mad/output/github-contribution-grid-snake.svg" />
  </picture>
</div>
```

**Animation Behavior:**
- Snake starts at one corner of the contribution grid
- Moves through the grid in a path that creates visual interest
- "Eats" contribution squares as it passes over them
- Animation loops seamlessly
- Smooth, engaging motion that draws attention

### 8. GitHub Stats Section

**Purpose:** Prominently visualize GitHub activity and statistics with large, clear numbers

**Design Inspiration:**
Based on the provided inspiration image showing:
- Large profile header with username
- Contribution count (410 Contributions in 2025)
- Public repos count (21 Public Repos)
- Join date (Joined GitHub 2 years ago)
- Professional title (LinkedIn SWE Intern)
- Contribution graph showing activity over time
- Contribution grid with color intensity

**Components:**

**Primary Stats Display:**
- Large, bold numbers for key metrics
- Total contributions in current year
- Current streak count
- Longest streak count
- Clean, card-based layout with prominent typography

**Stats Card:**
- Use `github-readme-stats.vercel.app`
- Custom monochrome theme
- Display: total contributions, stars, commits, PRs, issues
- Hide title for cleaner look
- Large font size for numbers

**Language Stats:**
- Top languages card
- Compact layout
- Monochrome color scheme
- 8 languages displayed

**Contribution Graph:**
- Display contribution activity over the last year
- Use GitHub's standard green color intensity scale
- Show month labels and day-of-week labels
- Grid format matching GitHub's contribution calendar

**Configuration:**
```
Theme parameters:
- title_color: 000000 (black)
- icon_color: 333333 (dark gray)
- text_color: 000000 (black)
- bg_color: FFFFFF (white)
- border_color: cccccc (light gray)
- ring_color: 666666 (medium gray)
```

**Layout:**
- Center-aligned
- Large stat numbers prominently displayed at top
- Two cards side-by-side (stats + languages)
- Contribution graph below
- Consistent height for visual balance
- Clean spacing between elements

### 9. Contact Section

**Purpose:** Provide clear contact information

**Implementation:**
- Simple centered format
- Monochrome badge links (black and gray)
- Email and LinkedIn
- Call-to-action message
- Clean, minimal footer styling

## Data Models

### Badge Configuration Model

```typescript
interface BadgeConfig {
  label: string;
  message: string;
  color: '000000' | '333333' | '666666' | '999999' | 'cccccc';
  labelColor?: 'FFFFFF' | 'f5f5f5' | '1a1a1a';
  logo?: string;
  logoColor?: 'white' | 'black';
  style: 'flat' | 'flat-square' | 'for-the-badge';
}
```

### Project Model

```typescript
interface Project {
  name: string;
  status: 'in progress' | 'finished';
  visibility: 'public' | 'private';
  description: string;
  techStack: string[];
  links: {
    repo?: string;
    demo?: string;
    docs?: string;
  };
  highlights: string[];
}
```

### GitHub Stats Model

```typescript
interface GitHubStats {
  totalContributions: number;
  currentStreak: number;
  longestStreak: number;
  publicRepos: number;
  joinDate: string;
  professionalTitle?: string;
}
```

## Error Handling

### Image Loading Failures
- Use alt text for all images
- Provide fallback text in markdown
- Use reliable services (shields.io, vercel.app)
- Test all URLs before deployment

### Animation Performance
- Limit animated elements to header and snake game
- Use optimized SVG animations
- Avoid heavy GIFs
- Test on various devices

### Theme Compatibility
- Test in both light and dark modes
- Use `prefers-color-scheme` media queries
- Ensure sufficient contrast ratios
- Provide dark mode variants for custom graphics

## Testing Strategy

### Visual Testing
- Verify color scheme consistency
- Check alignment and spacing
- Validate responsive behavior
- Test in light and dark modes

### Content Testing
- Verify all links work
- Check for typos and formatting errors
- Validate markdown rendering
- Ensure information accuracy

### Performance Testing
- Ensure fast page load
- Verify animations don't cause lag
- Check image optimization

### Accessibility Testing
- Ensure sufficient color contrast
- Verify alt text for images
- Check semantic HTML structure

## Implementation Notes

### Asset Management

**Directory Structure:**
```
/
├── README.md
├── .github/
│   └── workflows/
│       └── snake.yml
└── (GitHub Action outputs to 'output' branch)
    ├── github-contribution-grid-snake.svg
    └── github-contribution-grid-snake-dark.svg
```

**Note:** The snake animation SVGs are generated by GitHub Actions and stored in the `output` branch, then referenced via raw.githubusercontent.com URLs in the README.

### External Services Used

1. **readme-typing-svg.demolab.com** - Animated typing header with monochrome gradient
2. **shields.io** - Custom badges with grayscale color schemes
3. **skillicons.dev** - Technology icons for visual tech stack display
4. **github-readme-stats.vercel.app** - GitHub statistics cards with monochrome theme
5. **streak-stats.demolab.com** - Contribution streak statistics with grayscale theme
6. **Platane/snk** (GitHub Action) - Contribution snake animation generator

### Maintenance Considerations

- Update project statuses as work progresses
- Add new technologies to tech stack as learned
- Refresh links when projects go public
- Update "Now" banner with current focus
- Snake animation regenerates automatically via GitHub Actions (daily schedule)
- Keep contact information current
- Monitor GitHub stats accuracy and update theme parameters if needed
- Ensure all external service URLs remain functional
