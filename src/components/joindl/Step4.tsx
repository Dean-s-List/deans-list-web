const Step4 = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/high5.jpg')] bg-cover bg-no-repeat" id="step4">
      <div className="flex h-full flex-col items-center justify-center ">
        <div className="text-center font-tt text-[4rem] leading-[1] mb-12 mt-12" id="step4_heading">
        Step 4: Jump In, Provide<br/>Feedback & Get Paid<br />
        </div>
      <div className="lh-spc text-left font-tt mb-12 ml-48 mr-48 lh-spc text-[2rem]">
        <h2 className="text-[2rem]">Feedback sessions are the flagship service of the DAO and are marketed to other projects across the Web 3 ecosystem.</h2>
        <p className="text-med pt-6">
        As a member of the DAO, you will have the opportunity to review projects and provide feedback.
        <ul className="list-disc">
        <li>Make sure to be constructive and professional in your feedback</li>
        <li>Seek to add value and offer specific suggestions for improvement</li>
        </ul>
        <h3>We look forward to your contributions in improving the Web3 Ecosystem, One Feedback at a time.</h3>
        </p>
        </div>
      </div>
    </div>
  );
};

export default Step4;