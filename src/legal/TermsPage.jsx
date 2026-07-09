import LegalLayout, { Lead, Section, Bullets } from "./LegalLayout.jsx";

export default function TermsPage() {
  return (
    <LegalLayout title="Terms of Service" lastUpdated="July 9, 2026">
      <Lead>
        These terms govern your use of the Nib app. By downloading or using Nib,
        you agree to them. Please read them — they're short.
      </Lead>

      <Section title="Using Nib">
        <p>
          We grant you a personal, non-exclusive, non-transferable, revocable
          license to download and use Nib for your own, non-commercial enjoyment
          on Apple devices that you own or control, in accordance with the App
          Store Terms of Service. This license does not transfer any ownership
          of the app or its content to you.
        </p>
      </Section>

      <Section title="Content and intellectual property">
        <p>
          The facts, text, editorial curation, design, logos, and other
          materials in Nib are owned by Nib or its licensors and are protected
          by intellectual-property laws. You may enjoy this content within the
          app, but you may not:
        </p>
        <Bullets
          items={[
            "Copy, scrape, or extract the fact library in bulk by any automated means",
            "Redistribute, sell, or publish the content as your own",
            "Use the content to build or train a competing product or dataset",
          ]}
        />
        <p>
          Sharing an individual fact with a friend is welcome — wholesale
          copying of the collection is not.
        </p>
      </Section>

      <Section title="Acceptable use">
        <p>
          You agree not to misuse the app: don't attempt to reverse-engineer,
          decompile, or interfere with it, don't disrupt or place unreasonable
          load on our servers, and don't use it in any way that violates
          applicable law.
        </p>
      </Section>

      <Section title="Accuracy of facts">
        <p>
          Nib's content is curated for curiosity and general interest. We work
          hard to keep it accurate and well-sourced, but facts evolve and errors
          can slip through. Content is provided for educational and
          entertainment purposes only, is offered “as is,” and should not be
          relied upon as professional, medical, legal, or financial advice.
        </p>
      </Section>

      <Section title="Apple App Store">
        <p>
          Nib is distributed through the Apple App Store, and your use is also
          subject to Apple's applicable terms. This agreement is between you and
          Nib, not with Apple. Apple is not responsible for the app or its
          content, and Apple and its subsidiaries are third-party beneficiaries
          of these terms with the right to enforce them against you.
        </p>
      </Section>

      <Section title="Disclaimer of warranties">
        <p>
          Nib is provided “as is” and “as available,” without warranties of any
          kind, whether express or implied, including any implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. We do not warrant that the app will be
          uninterrupted, error-free, or free of inaccuracies.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the fullest extent permitted by law, Nib and its developer will not
          be liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, arising out of or relating to
          your use of — or inability to use — the app.
        </p>
      </Section>

      <Section title="Changes to these terms">
        <p>
          We may update these terms from time to time. When we do, we'll revise
          the “Last updated” date above. Your continued use of Nib after changes
          take effect means you accept the updated terms.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of the United States and the
          State of Texas, without regard to conflict-of-law principles.
        </p>
      </Section>

      <Section title="Contact">
        <p>
          Questions about these terms? Reach us at{" "}
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
