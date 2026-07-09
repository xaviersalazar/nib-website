import LegalLayout, { Lead, Section, Bullets } from "./LegalLayout.jsx";

export default function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" lastUpdated="July 9, 2026">
      <Lead>
        Nib is built to respect your privacy. The app does not collect, store,
        or share your personal information. There are no accounts, no tracking,
        and no advertising. This policy explains what that means in practice.
      </Lead>

      <Section title="Information we don't collect">
        <p>
          We designed Nib to work without knowing anything about you. We do not
          collect:
        </p>
        <Bullets
          items={[
            "Names, email addresses, or contact details",
            "Precise or approximate location",
            "Advertising identifiers or cross-app tracking data",
            "Analytics on how you use the app — we use no third-party analytics or SDKs",
          ]}
        />
        <p>
          Because we collect none of this, there is no personal profile of you
          on our side to lose, sell, or hand over.
        </p>
      </Section>

      <Section title="Information stored on your device">
        <p>
          Your Nib experience — the facts you save, your reading streak, and
          your app preferences — is stored locally on your device using Apple's
          on-device frameworks. This information stays on your device, is never
          transmitted to us, and is removed when you delete the app.
        </p>
      </Section>

      <Section title="Content delivery">
        <p>
          Nib periodically downloads fact content from our servers at
          nibapp.net so the app can stay fresh. When your device makes these
          requests, our hosting and content-delivery provider may automatically
          process standard technical information — such as your device's IP
          address — for the sole purpose of delivering the content and keeping
          the service secure and reliable.
        </p>
        <p>
          We do not use this information to identify you, build a profile, or
          track you across apps or websites, and we do not combine it with any
          other data.
        </p>
      </Section>

      <Section title="Notifications">
        <p>
          If you enable daily fact reminders, those notifications are scheduled
          locally on your device by iOS. We do not operate a push-notification
          server and do not receive any information about your notifications.
          You can turn reminders off at any time in the app or in your device
          settings.
        </p>
      </Section>

      <Section title="Purchases">
        <p>
          If Nib offers any in-app purchases, they are processed entirely by
          Apple through the App Store under{" "}
          <a
            href="https://www.apple.com/legal/privacy/"
            className="underline underline-offset-2 hover:text-black"
            target="_blank"
            rel="noopener noreferrer"
          >
            Apple's Privacy Policy
          </a>
          . We never receive or store your payment details.
        </p>
      </Section>

      <Section title="Children's privacy">
        <p>
          Nib is suitable for a general audience and collects no personal
          information from anyone, including children. Because we do not collect
          personal data at all, we do not knowingly collect information from
          children under 13 (or the equivalent minimum age in your region).
        </p>
      </Section>

      <Section title="Your rights">
        <p>
          Privacy laws such as the GDPR and CCPA give you rights to access,
          correct, or delete personal information a company holds about you.
          Since Nib does not collect or retain personal information, we have
          nothing to retrieve or erase on your behalf. The data stored on your
          device remains fully under your control and can be removed at any time
          by deleting the app.
        </p>
      </Section>

      <Section title="Changes to this policy">
        <p>
          If our data practices ever change — for example, if a future version
          of the app introduces analytics or optional accounts — we will update
          this page, revise the “Last updated” date above, and reflect those
          changes in the app's privacy details on the App Store before the new
          practices take effect.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about this policy or your privacy? Reach us at{" "}
          <a
            href="mailto:support@nibapp.net"
            className="underline underline-offset-2 hover:text-black"
          >
            support@nibapp.net
          </a>
          .
        </p>
      </Section>
    </LegalLayout>
  );
}
