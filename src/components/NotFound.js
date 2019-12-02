import React from 'react';
//Stateless

const NotFound = () => {

  return (
  <li className="not-found">
    <h3>No Results Found</h3>
    <p>You search did not return any results, so here is a lovely picture of Big Sur. Please try again.</p>
    {/* Image for empty space styling on webpage */}
    <a data-flickr-embed="true" href="https://www.flickr.com/photos/9756642@N02/7378502272/in/photolist-cf1KEq-cf1mUm-5VAh7o-gptmxB-3Am3VD-8WFZVr-N6tu7g-awPvNp-g67jjj-j1Z155-csJ99Q-A5z8-o4Rbfd-8WK3FA-Ypx3Hj-2aGYFTp-28kMt8-28PvtM-28wkd8J-dWNCnP-bvWZr-8rAaEe-28eK5oa-dSh9sr-rdu4ce-5TLM5G-8rAaBF-rLr5v-c6u3Fq-cf1fDo-Cn6Hp-9bhDYK-2eqTcCF-8rDfC9-Eh25T-cf1bKC-rLqAb-7tuur9-rDPh3-8nLEHQ-dWNAma-cf1Mhw-6y4s14-rLqrE-6LGU9T-nzsvHE-4vkJb2-ofLave-7FVUNv-TzVL8f" title="Big Sur-12"><img src="https://live.staticflickr.com/7244/7378502272_f05e1d0b1c_k.jpg" className="ocean" width="1500" height="600" alt="stuartlchambers/Big Sur-12" /><script async src="//embedr.flickr.com/assets/client-code.js" charSet="utf-8"></script>
    </a>
  </li>
  );
}

export default NotFound;