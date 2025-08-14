import React from 'react';

function Disclaimer() {
  return (
    <div className='container mx-auto px-4 py-8 md:px-6 lg:px-8'>
      <h1 className='text-3xl font-bold mb-6'>Disclaimer</h1>
      <p className='text-gray-700 mb-4'>
        www.connect2lawyer.com.au is a website dedicated to serving the public
        as an informational resource, providing accurate content about various
        medical treatments and associated side effects. www.connect2lawyer.com.au
        also connects users with its legal partners, who can evaluate whether an
        individual has a legal case as a result of side effects or complications
        caused by a medical treatment.
      </p>
      <p className='text-gray-700 mb-4'>
        www.connect2lawyer.com.au is not affiliated with any pharmaceutical
        companies or drug manufacturers and does not accept advertising or host
        online advertisements.
      </p>
      <p className='text-gray-700 mb-6'>
        There may be times when a visitor comes to www.connect2lawyer.com.au
        looking for assistance with a drug or medical device and Connect2lawyer
        determines that visitor would be better served by a trusted outside
        service provider or law firm. In those cases, the visitor may be
        contacted directly by that provider or firm.
      </p>

      {/* --- */}

      <h2 className='text-2xl font-semibold mb-4'>Consent to Contact</h2>
      <p className='text-gray-700 mb-6'>
        By submitting a form about a specific drug or medical device, you
        consent to be contacted by a Connect2lawyer representative or a
        representative from the appropriate service provider. Any information
        provided to www.connect2lawyer.com.au will be shared with the service
        provider. Information provided to www.connect2lawyer.com.au will not be
        shared, sold, or provided to a data collection company unless
        specifically authorized.
      </p>

      {/* --- */}

      <h2 className='text-2xl font-semibold mb-4'>Updated with Latest Information</h2>
      <p className='text-gray-700 mb-4'>
        www.connect2lawyer.com.au is continually updated to ensure current
        information about medications and medical devices and associated side
        effects is provided to the public. The information on the site is meant
        to complement a doctor or healthcare professional’s advice and should not
        be used in place of medical advice. It is important to note that most,
        if not all, drugs or medical devices discussed on
        www.connect2lawyer.com.au are FDA approved.
      </p>
      <p className='text-gray-700 mb-4'>
        Content found on www.connect2lawyer.com.au should not be taken as
        medical advice and site visitors are encouraged to speak with a medical
        professional for medical treatment, information and recommendations.
      </p>
      <h5 className='text-lg font-bold text-black-600 my-4'>
        Furthermore, site visitors should not discontinue use of a drug or
        medical device without first seeking the advice of a medical
        professional.
      </h5>
      <p className='text-gray-700 mb-4'>
        Additionally, the legal information on www.connect2lawyer.com.au should
        not be taken as legal advice, as the content on the site is meant to
        provide general legal information and is not intended to provide
        information about a specific visitor’s situation. The information on
        www.connect2lawyer.com.au is not an offer to create an attorney-client
        relationship or perform legal services. Visitors should not act or
        refrain from acting due to information found on this site without the
        guidance of a qualified and licensed attorney.
      </p>
      <h5 className='text-lg font-bold text-black-600 my-4'>
        Please seek the advice of a medical professional before making health
        care decisions.
      </h5>
    </div>
  );
}

export default Disclaimer;