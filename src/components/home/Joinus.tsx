import Link from 'next/link';

const Joinus = () => {
  return (
    <div className="relative flex h-screen w-full flex-col bg-[url('/images/amazing.png')] bg-cover bg-no-repeat" id="joinus">
      <div className="flex h-full flex-col items-center justify-center ">
        <div className="text-center font-tt text-[7rem] leading-[1] " id="join_heading">
          Become One of Us <br />
        </div>
      <div className="mt-10 text-left font-space text-xl mw50 mb-24">

      <strong>CITIZEN UPDATE: </strong> 
      
      The minting of the interim token has been completed and the new token will be sent to all participants as the next step.<br/><br/>

      We are now in Phase 3 as outlined in our announcement.<br/><br/>
      <Link
                rel="noopener noreferrer"
                target="_blank"
                className="lun"
                href="/files/Token_Announcement-March_19_2023.pdf"
              >
      Read the full announcement
      </Link><br/><br/>

      The Dean&apos;s List DAO is looking for talented and passionate individuals to become one of us. If you have what it takes to become one of us then <Link href="/joindl">join us</Link> today. <br />{" "}
      </div>
      <div className="text-left font-space text-xl mw50 mb-12">
        <div className='tableauPlaceholder' id='viz1678731768375' style={{position: 'relative'}}>
          <object className='tableauViz' style={{display: 'none'}}><param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' /> 
          <param name='embed_code_version' value='3' /> 
          <param name='site_root' value='' />
          <param name='name' value='DeansListNetworkState&#47;Dashboard1' />
          <param name='tabs' value='no' /><param name='toolbar' value='yes' />
          <param name='static_image' value='https:&#47;&#47;public.tableau.com&#47;static&#47;images&#47;De&#47;DeansListNetworkState&#47;Dashboard1&#47;1.png' /> 
          <param name='animate_transition' value='yes' /><param name='display_static_image' value='yes' />
          <param name='display_spinner' value='yes' /><param name='display_overlay' value='yes' />
          <param name='display_count' value='yes' /><param name='language' value='en-US' /></object>
        </div>
          <script type='text/javascript'>                    
          var divElement = document.getElementById(&apos;viz1678731768375&apos;);                    
          var vizElement = divElement.getElementsByTagName(&apos;object&apos;)[0];                    
          var scriptElement = document.createElement(&apos;script&apos;);                   
          scriptElement.src = &apos;https://public.tableau.com/javascripts/api/viz_v1.js&apos;;                    
          vizElement.parentNode.insertBefore(scriptElement, vizElement);                
          </script>
      </div>
        <Link href="/joindl">
        <button className="group flex h-14 w-max items-center justify-center gap-x-2 rounded bg-white pl-8 pr-7 font-space text-lg font-medium text-black">
          Start your journey today
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-7 w-7 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Joinus;

