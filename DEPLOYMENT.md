# Deployment Guide

## Quick Deploy to Vercel (Recommended)

1. **Push to GitHub**:
   ```bash
   git push origin main
   ```

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com/)
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings

3. **Set Environment Variables** (Optional):
   - In Vercel project settings → Environment Variables
   - Add `NEXT_PUBLIC_FORMSPREE_FORM_ID` if using environment variable for form

4. **Deploy**:
   - Vercel will automatically build and deploy
   - Your site will be live at `your-project.vercel.app`

## Alternative Platforms

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Cloudflare Pages

1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set output directory: `.next`
4. Deploy

## Custom Domain Setup

### On Vercel:
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. SSL certificate is automatically provisioned

### DNS Configuration:
- **A Record**: Point to Vercel's IP (provided in dashboard)
- **CNAME**: Point to `cname.vercel-dns.com`

## Post-Deployment Checklist

- [ ] Test all navigation links
- [ ] Verify contact form submissions (check Formspree dashboard)
- [ ] Test on mobile devices
- [ ] Check Journey timeline animation
- [ ] Verify folder cards interactions
- [ ] Test fuzzy critter footer physics
- [ ] Confirm social media links work
- [ ] Check image loading
- [ ] Test accessibility (keyboard navigation, screen readers)
- [ ] Verify reduced motion preferences work

## Performance Optimization

Already configured:
- ✅ Next.js automatic code splitting
- ✅ Image optimization with Next.js Image
- ✅ Static generation for pages
- ✅ Font optimization with next/font

## Monitoring

Set up monitoring in Vercel:
- **Analytics**: Track page views and performance
- **Speed Insights**: Monitor Core Web Vitals
- **Error Tracking**: Get notified of runtime errors

## Troubleshooting

### Build fails:
- Check Node.js version (needs 18+)
- Verify all dependencies installed
- Check for TypeScript errors: `npm run build`

### Contact form not working:
- Verify Formspree form ID in `components/Contact.tsx`
- Check CORS settings if using custom domain
- Test form submission in Formspree dashboard

### Animations not playing:
- Check browser compatibility
- Verify JavaScript is enabled
- Test with reduced motion disabled

## Updating Content

1. Edit `data/content.ts`
2. Commit changes: `git commit -am "Update content"`
3. Push to GitHub: `git push`
4. Vercel auto-deploys the changes

## Support

For deployment issues:
- **Vercel**: [vercel.com/support](https://vercel.com/support)
- **Next.js**: [nextjs.org/docs](https://nextjs.org/docs)
- **This project**: Open an issue on GitHub
