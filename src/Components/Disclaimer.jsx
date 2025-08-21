import React from "react";

function Disclaimer() {
  return (
    <div className="container mx-auto px-4 py-10 md:px-8 lg:px-12 ">
      <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center">
        WEBSITE DISCLAIMER
      </h1>
      <p className='text-gray-700 mb-4'><span className='font-bold'>Last Updated :</span> August 21, 2025</p>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="font-semibold mb-2">1. No Legal Advice Provided</h2>
          <p>
            The information contained on this website (“Website”) is provided for
            general informational purposes only and does not constitute legal
            advice. Connect2Lawyer Pty Ltd (“Connect2Lawyer”, “we”, “us”, “our”)
            is not a law firm and does not provide legal advice. Any content,
            materials or information made available on this Website are of a
            general nature and should not be relied upon as a substitute for
            legal advice from a qualified legal practitioner.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">2. No Client–Lawyer Relationship</h2>
          <p>
            Use of this Website or communication with Connect2Lawyer does not
            create a solicitor-client relationship between you and
            Connect2Lawyer. We act solely as a referral and lead generation
            platform, assisting users to connect with independent lawyers or
            legal practitioners. Any legal services you may receive are provided
            solely by the lawyer with whom you engage, not by Connect2Lawyer.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">3. Third Party Lawyers</h2>
          <p>
            Connect2Lawyer makes no representations or warranties about the
            qualifications, expertise, availability, or suitability of any lawyer
            or law firm listed on our Website or referred through our service. We
            encourage you to make your own inquiries and assessments before
            engaging a legal practitioner. Any engagement you enter into with a
            lawyer is entirely between you and that lawyer.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">4. Accuracy of Information</h2>
          <p>
            While we strive to ensure that information on our Website is accurate
            and up to date, we make no representations or warranties of any kind,
            express or implied, about the completeness, accuracy, reliability,
            suitability, or availability of any information contained on the
            Website. You acknowledge that any reliance you place on such
            information is strictly at your own risk.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">5. Limitation of Liability</h2>
          <p>
            To the extent permitted by law, Connect2Lawyer accepts no
            responsibility and excludes all liability for any loss, damage, costs
            or expenses (whether direct, indirect, consequential or otherwise)
            arising from your use of, or inability to use, the Website, or your
            reliance upon any content or information contained in or accessed
            through the Website or any referral provided by us.
          </p>
          <p>
            Nothing in this Disclaimer is intended to exclude any legal rights
            that cannot be excluded under Australian law, including under the
            Australian Consumer Law (Schedule 2, Competition and Consumer Act
            2010 (Cth)).
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">6. External Links</h2>
          <p>
            This Website may contain links to other websites or resources
            operated by third parties. We have no control over the nature,
            content and availability of those sites or services, and we are not
            responsible for any content or privacy practices of such external
            sites.
          </p>
        </section>

        <section>
          <h2 className="font-semibold mb-2">7. Jurisdiction</h2>
          <p>
            This Disclaimer is governed by the laws of the Commonwealth of
            Australia and the laws of the State of{" "}
            <span className="italic">[insert relevant State/Territory]</span>. By
            using this Website, you submit to the exclusive jurisdiction of the
            courts of that State/Territory and the Commonwealth of Australia.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Disclaimer;
