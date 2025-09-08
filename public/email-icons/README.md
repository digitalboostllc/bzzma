# Email Icons for Bzz.ma

Professional icons for email templates, hosted on Vercel and optimized for email clients.

## 📧 Available Icons

| Icon | Filename | URL | Size |
|------|----------|-----|------|
| 📞 | `phone.png` | `https://bzzma.vercel.app/email-icons/phone.png` | 0.3KB |
| ✉️ | `email.png` | `https://bzzma.vercel.app/email-icons/email.png` | 0.2KB |
| 💬 | `whatsapp.png` | `https://bzzma.vercel.app/email-icons/whatsapp.png` | 0.4KB |
| 🌐 | `web.png` | `https://bzzma.vercel.app/email-icons/web.png` | 0.4KB |
| 💻 | `laptop.png` | `https://bzzma.vercel.app/email-icons/laptop.png` | 0.2KB |
| ⚙️ | `settings.png` | `https://bzzma.vercel.app/email-icons/settings.png` | 0.4KB |
| 🎧 | `headset.png` | `https://bzzma.vercel.app/email-icons/headset.png` | 0.3KB |
| 💾 | `database.png` | `https://bzzma.vercel.app/email-icons/database.png` | 0.3KB |
| 🔍 | `search.png` | `https://bzzma.vercel.app/email-icons/search.png` | 0.3KB |
| ⏰ | `clock.png` | `https://bzzma.vercel.app/email-icons/clock.png` | 0.3KB |
| 🤝 | `handshake.png` | `https://bzzma.vercel.app/email-icons/handshake.png` | 0.3KB |

## 🎨 Design Specifications

- **Size**: 24x24 pixels
- **Format**: PNG with transparency
- **Color**: White icons on transparent background
- **Optimization**: Maximum compression for email compatibility
- **Style**: Font Awesome inspired, clean line art

## 📧 Email Usage

### HTML Email Example
```html
<img src="https://bzzma.vercel.app/email-icons/phone.png" 
     width="16" 
     height="16" 
     alt="📞" 
     style="vertical-align: middle; margin-right: 6px;">
```

### Best Practices
- Always include `width` and `height` attributes
- Provide emoji fallback in `alt` attribute
- Use `style="vertical-align: middle;"` for inline icons
- Keep size 14-20px for optimal email display

## 🔄 Updates

To add new icons:
1. Create SVG in this directory
2. Run `node scripts/svg-to-png.js`
3. Icons will be auto-deployed with Vercel

## ✅ Email Client Compatibility

These icons are tested and work in:
- ✅ Gmail (web, mobile, app)
- ✅ Outlook (all versions)
- ✅ Apple Mail
- ✅ Yahoo Mail
- ✅ Thunderbird
- ✅ Mobile email clients

## 🚀 Hosting

Icons are automatically deployed to Vercel at: `https://bzzma.vercel.app/email-icons/`

No CDN configuration needed - Vercel handles global distribution and caching automatically.
