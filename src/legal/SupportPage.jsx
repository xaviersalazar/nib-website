import LegalLayout, { Lead, Section } from "./LegalLayout.jsx";

const mailtoClass = "underline underline-offset-2 hover:text-black";

export default function SupportPage() {
  return (
    <LegalLayout title="Support">
      <Lead>
        Need a hand or have a question about Nib? We're happy to help. Email us
        at{" "}
        <a href="mailto:support@nibapp.net" className={mailtoClass}>
          support@nibapp.net
        </a>{" "}
        and we'll get back to you.
      </Lead>

      <Section title="Do I need an account?">
        <p>
          No. Nib is free, requires no account, and works completely offline.
          Everything you do stays on your device.
        </p>
      </Section>

      <Section title="Is my data private?">
        <p>
          Yes. Your saved facts, reading history, streaks, and preferences are
          stored only on your device. Nib doesn't collect, track, or sell any
          personal data. See our{" "}
          <a href="/privacy" className={mailtoClass}>
            Privacy Policy
          </a>
          .
        </p>
      </Section>

      <Section title="How does the daily fact work?">
        <p>
          Each day, Nib shows you one new fact. You won't see the same fact
          twice, so there's always something new to discover.
        </p>
      </Section>

      <Section title="How do I turn on the daily reminder?">
        <p>
          Open Nib → Settings → Daily Reminder, then pick a time. Nib will ask
          permission to send notifications the first time you enable it.
        </p>
      </Section>

      <Section title="I'm not getting notifications.">
        <p>
          Make sure notifications are allowed in the iOS Settings app under
          Settings → Nib → Notifications. Then re-open Nib → Settings → Daily
          Reminder to confirm it's on and set to the time you want.
        </p>
      </Section>

      <Section title="Do I lose my progress if I miss a day?">
        <p>
          Never. Nib doesn't punish missed days. If you skip a day, your current
          streak simply starts again — your longest streak and everything you've
          learned are always kept.
        </p>
      </Section>

      <Section title="How do I add the widget?">
        <p>
          Touch and hold your Home Screen or Lock Screen, tap the “+” (or Edit),
          search for Nib, and choose the size you like.
        </p>
      </Section>

      <Section title="Can I use Siri?">
        <p>
          Yes. Just ask, “What did I learn today in Nib,” and Siri will read you
          today's fact.
        </p>
      </Section>

      <Section title="How do I save a fact?">
        <p>
          Tap the bookmark icon on any fact. Find everything you've saved under
          Collections → Saved Facts.
        </p>
      </Section>

      <Section title="Does Nib work offline?">
        <p>
          Completely. All content is available without a connection. New facts
          and collections are added automatically over time when you're online —
          no app update needed.
        </p>
      </Section>

      <Section title="How do I get help with something else?">
        <p>
          Email{" "}
          <a href="mailto:support@nibapp.net" className={mailtoClass}>
            support@nibapp.net
          </a>{" "}
          and we'll help you out.
        </p>
      </Section>
    </LegalLayout>
  );
}
