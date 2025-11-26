# Manual Testing Guide for GitHub README

This guide provides step-by-step instructions for manually testing the README on GitHub.

---

## Prerequisites

1. ✅ README.md pushed to GitHub repository
2. ⚠️ Snake animation workflow executed (generates SVG files)
3. ⚠️ Resume PDF uploaded to `./assets/Rishi_SWE_Resume.pdf`

---

## Test 1: Light Mode Rendering

**Steps**:
1. Navigate to your GitHub profile: `https://github.com/Rishi-Mad`
2. Ensure GitHub is in light mode (Settings → Appearance → Light)
3. Scroll through entire README

**Verify**:
- [ ] Typing animation displays with rose pink color
- [ ] Status banner shows "Now: pushing Neo-Alexandria..."
- [ ] All badges load (followers, views, resume, email, LinkedIn)
- [ ] About Me section displays with colored text highlights
- [ ] All 3 project cards visible with status badges
- [ ] Tech stack icons and badges load correctly
- [ ] GitHub stats cards display with themed colors
- [ ] Snake animation shows (light mode version)
- [ ] Contact section badges display

**Expected Colors**:
- Rose pink (#E6A8C2) for primary elements
- Soft purple (#9B7EBD) for secondary elements
- Light backgrounds with subtle color accents

---

## Test 2: Dark Mode Rendering

**Steps**:
1. Switch GitHub to dark mode (Settings → Appearance → Dark)
2. Refresh your profile page
3. Scroll through entire README

**Verify**:
- [ ] All text remains readable
- [ ] Rose pink/purple colors still visible
- [ ] Dark mode snake animation loads (`snake-dark.svg`)
- [ ] Stats cards display correctly
- [ ] Badges maintain visibility
- [ ] No contrast issues

**Expected Behavior**:
- Picture element should automatically switch to `snake-dark.svg`
- Colors should remain vibrant against dark background
- Text should have sufficient contrast

---

## Test 3: Badge Loading

**Steps**:
1. Open browser DevTools (F12)
2. Go to Network tab
3. Refresh profile page
4. Monitor badge loading

**Verify Each Badge**:
- [ ] GitHub followers: `img.shields.io/github/followers/Rishi-Mad`
- [ ] Profile views: `komarev.com/ghpvc/?username=Rishi-Mad`
- [ ] Resume PDF: `img.shields.io/badge/Resume-PDF-C5B8D8`
- [ ] Email: `img.shields.io/badge/Email-Contact-F4D4E1`
- [ ] LinkedIn: `img.shields.io/badge/LinkedIn-Connect-9B7EBD`
- [ ] All tech stack badges load (50+ badges)
- [ ] Project status badges display

**Expected**:
- All badges return HTTP 200
- Load time < 2 seconds per badge
- No broken image icons

---

## Test 4: Link Functionality

**Test Email Link**:
1. Click email badge in header
2. **Expected**: Opens default email client with `rishimadipalli@gmail.com`

**Test LinkedIn Link**:
1. Click LinkedIn badge in header
2. **Expected**: Opens `linkedin.com/in/rishi-madipalli-123a89289/`

**Test GitHub Followers**:
1. Click followers badge
2. **Expected**: Opens followers page

**Test Resume PDF**:
1. Click Resume badge
2. **Expected**: Opens or downloads `Rishi_SWE_Resume.pdf`

**Test Contact Section**:
1. Click email badge in footer
2. Click LinkedIn badge in footer
3. **Expected**: Same behavior as header badges

**Test Project Links** (when available):
1. Click repo links for each project
2. **Expected**: Opens project repository

---

## Test 5: Snake Animation

**Generate Animation** (if not done):
1. Go to repository Actions tab
2. Find "Generate Snake Animation" workflow
3. Click "Run workflow" → "Run workflow"
4. Wait for completion (~1-2 minutes)
5. Verify commit with "Update snake animation" message

**Test Light Mode**:
1. View profile in light mode
2. Scroll to "Contribution Snake" section
3. **Verify**:
   - [ ] Snake animation displays
   - [ ] Uses rose pink/purple color palette
   - [ ] Animation runs smoothly
   - [ ] No broken image icon

**Test Dark Mode**:
1. Switch to dark mode
2. Scroll to "Contribution Snake" section
3. **Verify**:
   - [ ] Dark mode version loads automatically
   - [ ] Colors match theme
   - [ ] Animation runs smoothly

**Check Assets**:
1. Navigate to repository
2. Go to `assets/` directory
3. **Verify files exist**:
   - [ ] `snake.svg`
   - [ ] `snake-dark.svg`

---

## Test 6: Responsive Behavior

**Mobile Testing** (iOS/Android):
1. Open GitHub profile on mobile browser
2. Scroll through README

**Verify**:
- [ ] Typing animation displays correctly
- [ ] Badges stack vertically or wrap properly
- [ ] Text is readable without zooming
- [ ] Images scale appropriately
- [ ] No horizontal scrolling required
- [ ] Collapsible sections work (tap to expand)
- [ ] Links are tappable (not too small)

**Tablet Testing**:
1. Open on tablet device
2. Test both portrait and landscape
3. **Verify**: Layout adapts appropriately

**Browser Zoom**:
1. Test at 50%, 100%, 150%, 200% zoom
2. **Verify**: Content remains readable and accessible

---

## Test 7: Typing Animation

**Steps**:
1. Open profile page
2. Watch header animation

**Verify**:
- [ ] Animation starts automatically
- [ ] First line types: "hey, i'm Rishi 👋"
- [ ] Second line types: "AI + systems engineer building useful tools"
- [ ] Color is rose pink (#E6A8C2)
- [ ] Animation loops continuously
- [ ] No lag or stuttering
- [ ] Text is centered

**Performance**:
- Animation should be smooth (60fps)
- No impact on page load time
- Works on mobile devices

---

## Test 8: GitHub Stats Cards

**Stats Card**:
1. Locate GitHub stats card
2. **Verify**:
   - [ ] Displays total stars
   - [ ] Shows total commits
   - [ ] Lists PRs and issues
   - [ ] Uses themed colors (rose pink/purple)
   - [ ] Border color matches theme

**Top Languages Card**:
1. Locate languages card
2. **Verify**:
   - [ ] Shows top 8 languages
   - [ ] Compact layout
   - [ ] Themed colors
   - [ ] Accurate language percentages

**Streak Stats**:
1. Locate streak stats card
2. **Verify**:
   - [ ] Shows current streak
   - [ ] Displays total contributions
   - [ ] Uses themed colors (lavender ring, rose fire)
   - [ ] Matches other card styling

**Alignment**:
- [ ] Stats and languages cards side-by-side
- [ ] Equal height
- [ ] Centered on page
- [ ] Streak stats below, centered

---

## Test 9: Content Accuracy

**Proofread Text**:
- [ ] No spelling errors in headers
- [ ] No typos in descriptions
- [ ] Grammar is correct
- [ ] Punctuation is proper

**Verify Information**:
- [ ] Work experience details accurate
- [ ] Project descriptions correct
- [ ] Tech stack up to date
- [ ] Contact information correct
- [ ] Links point to correct destinations

**Check Formatting**:
- [ ] Bold text displays correctly
- [ ] Italic text displays correctly
- [ ] Code formatting (if any) works
- [ ] Lists are properly formatted
- [ ] Horizontal rules display

---

## Test 10: Performance & Loading

**Page Load Test**:
1. Clear browser cache
2. Open profile page
3. Monitor load time

**Expected**:
- [ ] Page loads in < 3 seconds
- [ ] Typing animation starts immediately
- [ ] Badges load progressively
- [ ] Stats cards load within 2 seconds
- [ ] Snake animation loads last (acceptable)

**Performance Metrics**:
- First Contentful Paint: < 1 second
- Largest Contentful Paint: < 2.5 seconds
- Time to Interactive: < 3 seconds

**Check DevTools**:
1. Open Performance tab
2. Record page load
3. **Verify**: No long tasks blocking main thread

---

## Common Issues & Solutions

### Issue: Snake Animation Not Displaying

**Symptoms**: Broken image icon in snake section

**Solutions**:
1. Check if workflow has run: Actions → "Generate Snake Animation"
2. Verify SVG files exist in `assets/` directory
3. Check file paths in README match actual file locations
4. Manually trigger workflow if needed

### Issue: Badges Not Loading

**Symptoms**: Broken badge images

**Solutions**:
1. Check internet connection
2. Verify external services are online (shields.io, etc.)
3. Check badge URLs for typos
4. Try refreshing page
5. Clear browser cache

### Issue: Stats Cards Show Error

**Symptoms**: Error message in stats card

**Solutions**:
1. Verify GitHub username is correct (`Rishi-Mad`)
2. Check if Vercel service is online
3. Wait a few minutes and refresh (rate limiting)
4. Verify repository is public

### Issue: Dark Mode Not Switching

**Symptoms**: Light mode snake shows in dark mode

**Solutions**:
1. Check browser supports `prefers-color-scheme`
2. Verify picture element syntax is correct
3. Clear browser cache
4. Try different browser

### Issue: Mobile Layout Broken

**Symptoms**: Horizontal scrolling, tiny text

**Solutions**:
1. Check viewport meta tag (GitHub handles this)
2. Verify no fixed-width elements
3. Test on different mobile browsers
4. Check image sizes are responsive

---

## Testing Checklist Summary

Use this quick checklist for comprehensive testing:

### Visual Testing
- [ ] Light mode rendering
- [ ] Dark mode rendering
- [ ] Color theme consistency
- [ ] Responsive on mobile
- [ ] Responsive on tablet

### Functional Testing
- [ ] All badges load
- [ ] All links work
- [ ] Email link opens client
- [ ] LinkedIn link navigates
- [ ] Resume PDF opens

### Animation Testing
- [ ] Typing animation works
- [ ] Snake animation displays (light)
- [ ] Snake animation displays (dark)
- [ ] Animations are smooth

### Content Testing
- [ ] No spelling errors
- [ ] Information accurate
- [ ] Formatting correct
- [ ] All sections present

### Performance Testing
- [ ] Page loads quickly
- [ ] No lag or stuttering
- [ ] Stats cards load
- [ ] Images optimized

---

## Reporting Issues

If you find issues during testing:

1. **Document the issue**:
   - What you expected
   - What actually happened
   - Steps to reproduce
   - Browser/device information

2. **Take screenshots**:
   - Capture the issue
   - Include browser DevTools if relevant

3. **Check console**:
   - Open DevTools → Console
   - Look for errors
   - Copy error messages

4. **Test in multiple browsers**:
   - Verify if issue is browser-specific
   - Test on Chrome, Firefox, Safari

---

## Success Criteria

The README passes manual testing if:

✅ All sections display correctly in light and dark modes  
✅ All badges and images load without errors  
✅ All links navigate to correct destinations  
✅ Animations run smoothly without lag  
✅ Content is accurate and error-free  
✅ Responsive design works on mobile and tablet  
✅ Page loads in under 3 seconds  
✅ No console errors or warnings  

---

*Last Updated: October 28, 2025*
