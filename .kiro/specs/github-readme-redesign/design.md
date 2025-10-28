# Design Document

## Overview

This design document outlines the comprehensive redesign of Rishi's GitHub profile README with a creative rose pink and purple aesthetic. The redesign will create a visually cohesive, engaging profile that balances professional presentation with creative flair.

### Design Goals

1. Create a distinctive rose pink and purple visual identity
2. Organize technical skills in a scannable, categorized format
3. Showcase featured projects with clear visual hierarchy
4. Include engaging interactive elements (snake game, animations)
5. Maintain professional credibility while being creative
6. Ensure readability in both light and dark GitHub themes

## Architecture

### Color Palette

**Primary Colors:**
- Rose Pink Primary: `#E6A8C2` (Muted Rose)
- Rose Pink Light: `#F4D4E1` (Soft Blush)
- Rose Pink Pale: `#F8E8EE` (Pale Rose)
- Purple Primary: `#9B7EBD` (Soft Purple)
- Purple Dark: `#7D6B9D` (Dusty Purple)
- Purple Light: `#C5B8D8` (Lavender)

**Accent Colors (Use Sparingly):**
- Rose Pink Accent: `#D88CA6` (for key highlights only)
- Purple Accent: `#8B6FA8` (for important elements only)

**Supporting Colors:**
- White: `#FFFFFF`
- Dark Background: `#1a1a1a`
- Text Primary: `#333333`
- Text Secondary: `#666666`

**Usage Guidelines:**
- Headers and primary elements: Use muted rose pink and soft purple
- Badges: Predominantly use light, subtle tones (F4D4E1, C5B8D8)
- Accents and icons: Reserve brighter tones (D88CA6, 8B6FA8) for emphasis only
- Backgrounds: Light backgrounds with very subtle colored accents
- Avoid vibrant hot pink (#FF69B4) - use muted alternatives
- Keep overall aesthetic soft and professional with subtle color presence

### Section Structure

The README will follow this top-to-bottom structure:

1. **Animated Header** - Typing animation with name and tagline
2. **Status Banner** - Current focus/project
3. **Social Badges** - Contact and profile metrics
4. **About Me** - Brief professional summary
5. **Featured Projects** - 3 main projects with collapsible details
6. **Tech Stack** - Categorized skills with icons and badges
7. **Snake Game** - Interactive game section
8. **GitHub Stats** - Statistics and visualizations
9. **Contact** - Footer with contact information

## Components and Interfaces

### 1. Animated Header Component

**Purpose:** Create an engaging first impression with animated typing effect

**Implementation:**
- Use `readme-typing-svg.demolab.com` service
- Configure with rose pink and purple gradient colors
- Display name and professional tagline
- Center-aligned with appropriate sizing

**Configuration:**
```
Font: Inter, weight 700
Size: 36-40px
Colors: Gradient from #E6A8C2 to #9B7EBD (muted rose to soft purple)
Animation: Typing effect with pause
Lines: 
  - "hey, i'm Rishi 👋"
  - "AI + systems engineer building useful tools"
```

### 2. Status Banner Component

**Purpose:** Highlight current work and focus

**Implementation:**
- Centered text below header
- Rose pink bold text for project name
- Purple accent for descriptive text
- Concise one-liner format

### 3. Badge System

**Purpose:** Provide visual indicators for skills, stats, and links

**Badge Categories:**

**Social/Profile Badges:**
- GitHub followers (purple theme)
- Profile views (rose pink theme)
- Resume link (purple theme)
- Email (rose pink theme)
- LinkedIn (purple theme)

**Tech Stack Badges:**
- Languages: Rose pink color scheme
- Frontend: Purple color scheme
- Backend: Rose pink color scheme
- Databases: Purple color scheme
- DevOps/Tools: Rose pink color scheme
- AI/ML: Purple color scheme

**Implementation:**
- Use `shields.io` for custom badges
- Use `skillicons.dev` for technology icons
- Apply custom colors: `color=E6A8C2` (muted rose) or `color=9B7EBD` (soft purple)
- Use lighter tones (F4D4E1, C5B8D8) for most badges
- Reserve accent colors (D88CA6, 8B6FA8) for important badges only
- Consistent styling across all badges with subtle color presence

### 4. About Me Section

**Purpose:** Provide professional context and background

**Structure:**
- Section header with rose pink/purple emoji icon
- Bullet points with key highlights
- Mix of rose pink and purple for emphasis text
- Concise, scannable format

**Content Areas:**
- Builder philosophy
- Current role/focus
- Key experience highlights (Fisker IT, Autonomy, Research)
- Technical interests

### 5. Featured Projects Section

**Purpose:** Showcase key projects with detailed information

**Project Card Structure:**

Each project includes:
- Project number and name (rose pink heading)
- Status badge (in progress/finished) with purple theme
- One-line description with key features in bold
- Tech stack with rose pink/purple badges
- Links section (repo, demo, docs)
- Collapsible details section for additional info

**Visual Design:**
- Numbered list format (1, 2, 3)
- Status indicators with colored badges
- Horizontal rule separators between projects
- Collapsible sections for detailed features

### 6. Tech Stack Section

**Purpose:** Display technical skills in organized, visual format

**Organization:**

**Category 1: Languages**
- Java, Python, React, CSS3, HTML5, JavaScript, R, Solidity, Flutter, LaTeX, PHP, TypeScript, Dart

**Category 2: Tools and Frameworks**
- Firebase, Pandas, Jupyter, TailwindCSS, Vite, Git, Replit, VSCode, Eclipse, IntelliJ IDEA, Linux, MongoDB, OpenCV, AWS, Node.js, Next.js, Slack, SSH, Stack Overflow, Vercel, Webflow, Figma, Google Cloud, JUnit, Android Studio, AppWrite, Canva

**Category 3: Learning**
- MySQL, NumPy, OAuth, Rails, Swift, PyTorch, Kubernetes, Unity, PyCharm, TensorFlow

**Implementation:**

**Icon Grid:**
- Use `skillicons.dev` for visual icons
- Arrange in rows with `perline` parameter
- Apply rose pink/purple tinting where possible

**Badge Grid:**
- Custom shields.io badges for each technology
- Alternate rose pink and purple colors by category
- Include version numbers where relevant
- Organized in paragraph blocks by category

### 7. Snake Game Component

**Purpose:** Add interactive, fun element to profile

**Implementation: GitHub Contribution Snake (Recommended)**
- Use `github-contribution-grid-snake` action
- Generate animated SVG from contribution graph
- Customize colors to rose pink and purple
- Supports light/dark mode variants

**Configuration:**
```yaml
# In .github/workflows/snake.yml
- uses: Platane/snk@v3
  with:
    github_user_name: Rishi-Mad
    outputs: |
      dist/snake.svg
      dist/snake-dark.svg?palette=pink,#F8E8EE,#F4D4E1,#E6A8C2,#9B7EBD,#7D6B9D
```

**Display:**
```html
<div align="center">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="./assets/snake-dark.svg" />
    <img alt="snake game animation" src="./assets/snake.svg" />
  </picture>
</div>
```

### 8. GitHub Stats Section

**Purpose:** Visualize GitHub activity and statistics

**Components:**

**Stats Card:**
- Use `github-readme-stats.vercel.app`
- Custom theme with rose pink and purple
- Display: stars, commits, PRs, issues
- Hide title for cleaner look

**Language Stats:**
- Top languages card
- Compact layout
- Rose pink/purple color scheme
- 8 languages displayed

**Streak Stats:**
- Use `streak-stats.demolab.com`
- Custom theme matching color palette
- Display current streak and contributions

**Configuration:**
```
Theme parameters:
- title_color: E6A8C2 (muted rose)
- icon_color: 9B7EBD (soft purple)
- text_color: 333333
- bg_color: FFFFFF
- border_color: F4D4E1 (soft blush)
- ring_color: C5B8D8 (lavender)
```

**Layout:**
- Center-aligned
- Two cards side-by-side (stats + languages)
- Streak stats below on separate line
- Consistent height for visual balance

### 9. Contact Section

**Purpose:** Provide clear contact information

**Implementation:**
- Simple list format
- Rose pink and purple badge links
- Email and LinkedIn
- Call-to-action message

## Data Models

### Badge Configuration Model

```typescript
interface BadgeConfig {
  label: string;
  message: string;
  color: 'E6A8C2' | '9B7EBD' | 'F4D4E1' | 'C5B8D8' | 'D88CA6' | '8B6FA8';
  logo?: string;
  logoColor?: string;
  style: 'flat' | 'flat-square';
  colorIntensity: 'subtle' | 'accent'; // subtle for most, accent for emphasis
}
```

### Project Model

```typescript
interface Project {
  name: string;
  status: 'in progress' | 'finished';
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
└── assets/
    ├── snake.svg
    └── snake-dark.svg
```

### External Services Used

1. **readme-typing-svg.demolab.com** - Animated typing header
2. **shields.io** - Custom badges
3. **skillicons.dev** - Technology icons
4. **github-readme-stats.vercel.app** - GitHub statistics
5. **streak-stats.demolab.com** - Contribution streaks
6. **github-contribution-grid-snake** - Snake game animation

### Maintenance Considerations

- Update project statuses as work progresses
- Add new technologies to tech stack as learned
- Refresh links when projects go public
- Update "Now" banner with current focus
- Regenerate snake animation via GitHub Actions
- Keep contact information current
