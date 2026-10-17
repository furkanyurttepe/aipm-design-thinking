# Store Notes — Card Session

**Card Session — jam prompts for musicians.** The app is a Progressive Web
App (PWA) in this folder, built from the course prototype (`prototype/`).
Checked on 2026-10-17; verify current rules before submitting.

## What the app does today

- **Single Play:** random jam prompts on playing cards (genre, key, chords,
  Roman numerals, meter, tempo, strumming, theme and opening line); "Next"
  deals the next card.
- **Group Jam:** Create (6-digit code) or Join (enter the code); everyone
  sees the same card; the creator deals; musicians in the session are counted;
  cards turn over to a question about the music just played; a Break joker
  every 8 cards asks a personal question.
- **Metronome** in the card's tempo and meter, accenting groups (e.g. 2+2+2+3).
- Meters include 4/4, 3/4, 6/8, 5/4 and Turkish aksak 9/8, 7/8, 5/8.
- Works offline after the first visit (card images and font are bundled).

> ⚠️ **Group Jam uses a simulated server.** Tabs in the same browser really
> share cards and are counted; a few simulated musicians join over time;
> separate phones do **not** connect. A real version needs a realtime service
> (e.g. Supabase or Firebase): the user creates the account, then the
> simulated `createSession` is replaced behind the same interface.

## 1. Try it

- **Same Wi-Fi (no install, no offline):** run the local server (see
  `.claude/launch.json`), open `http://<computer's local IP>:8080` on the
  phone. Turn off silent mode on iPhone to hear the metronome.
- **Install as a PWA (works offline):** serve `app/` over HTTPS, e.g. GitHub
  Pages from a **public** repo (Pages on a private repo needs a paid plan).
  - Android (Chrome): menu → *Install app*.
  - iPhone (Safari): Share → *Add to Home Screen*. After a rename or icon
    change, remove and add it again.

Use the PWA for a real-user test at a jam before any store work.

## 2. App Store and Google Play via Capacitor (later)

Wraps the same HTML/CSS/JS in native iOS and Android shells.

```bash
npm init -y
npm install @capacitor/core @capacitor/cli @capacitor/ios @capacitor/android
npx cap init "Card Session" com.example.cardsession --web-dir app
npx cap add ios
npx cap add android
npx cap sync
npx cap open ios
```

Needs a Mac with Xcode (iOS) and Android Studio (Android). Replace
`com.example.cardsession` with your own reverse-domain ID.

## 3. Checklist

| Item | Apple App Store | Google Play |
|---|---|---|
| Developer account | $99 / year | $25 one-time |
| Identity check | Yes | Yes (government ID) |
| Testing before release | TestFlight (optional) | **New personal accounts: closed test with ≥ 12 testers for 14 days** |
| Review risk | **Guideline 4.2:** must be more than a repackaged website | Lower |
| Privacy policy | **Required** (link in store listing and in the app) | Required |
| Icons and screenshots | Several sizes | Several sizes |

### Reducing Guideline 4.2 risk
Lean on what a website cannot do well: offline use, home-screen app,
metronome, session log export, haptic feedback on Jam (native plugin),
safe-area layout for notches.

## 4. Privacy (draft for the policy)

Single Play collects no personal data and sends nothing to any server. The
session log stays on the device until the user exports it. No analytics, no
accounts, no ads. **Once Group Jam uses a real server**, the policy must say
that the session code, the cards dealt and an anonymous device ID are sent to
that service to keep devices in sync, and how long they are kept.

## 5. Name

"Card Session" — no app with this name found on the App Store or Google Play
(2026-10-17). "Card session" is also a technical term (Apple NFC, payment
SDKs), so search visibility is weak: use the subtitle "jam prompts for
musicians" in store listings. Rejected: "Riffle" (a music-creation platform
called riffle already exists). Check trademarks (e.g. TÜRKPATENT, EUIPO)
before a public launch.

## 6. Making money (options, not decided)

| Option | Fit |
|---|---|
| ⭐ Sponsored Break card by a local music shop or venue | Music-related, no tracking, works offline |
| ⭐ Paid branded decks and sessions for jam hosts, venues, music schools | Pays where the problem is felt |
| Extra card packs (e.g. Turkish aksak, jazz standards) | Ad-free; store commission applies |
| Tip jar | Easy, unpredictable |
| Classic banner ads (AdMob/AdSense) | **Weak fit:** tiny revenue at this scale, needs internet, consent banners and tracking, breaks the mood |

First validate: ask a jam host whether they would use it regularly and pay
for a branded deck.

## 7. Future ideas (not validated)

Use the playing card itself: number = bars or rounds to play; suit = mood
(♥ soft, ♠ hard, ♦ bright, ♣ groove); ace = a solo; jack = the newest
musician starts, queen sets the tempo, king ends the song.

## 8. Licences to keep

- Card images: SVG-cards (David Bellot, Huub de Beer), LGPL-2.1 —
  `assets/cards/LICENSE.txt`; credit shown in the app.
- Font: Caveat, SIL Open Font License 1.1 — `assets/fonts/OFL.txt`.

## 9. Before investing in the stores

All evidence in this project is simulated, and the features added after the
course (PWA, metronome, Group Jam, aksak meters) were added without user
testing. Run the real-user test first (two jam evenings, see `extensions.md`
→ Decision Brief). Similar apps exist (Jam Lab, ComposerDeck, Jam Dice); the
difference to position is the conversation question on the back and the
Break joker.

## Sources

- Apple App Review Guidelines (4.2, 4.2.2, 5.1.1):
  https://developer.apple.com/app-store/review/guidelines/
- Google Play testing requirements for new personal accounts:
  https://support.google.com/googleplay/android-developer/answer/14151465
- Store fees: https://splitmetrics.com/blog/google-play-apple-app-store-fees/
- Capacitor: https://capacitorjs.com/docs
