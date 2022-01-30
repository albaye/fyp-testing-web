import React, { useState, useEffect } from 'react';
import samplePDF from '../pdf/FYP.pdf';
import AllPagesPDFViewer from "../components/AllPages.js";
import SinglePagePDFViewer from '../components/SinglePage.js';
import $ from 'jquery';



const Test2Screen = () => {
  // const [scrollbar, setScrollbar] = useState(0);
  
  var myIframe;

  const scroll = (e) => {
    myIframe = document.getElementById('iframe');
    
    window.onscroll = () => {
      console.log('aaaaaaaaaaa')
    }

    console.log('content window ', myIframe.contentWindow);
    // console.log("content document ", myIframe.contentDocument.body);
    // myIframe.contentWindow.document.body.onclick = function () {
    //   console.log('aaaaaaaaaa')
    // }
    // myIframe.style.height = myIframe.contentWindow.document.body.scrollHeight + 'px';
    // console.log('qwerqwerqwer: ', window.document)
    // myIframe.contentWindow.document.body.addEventListener('scroll', (e) => {
    //   console.log('aaaaaaaaaaaaaaaaa', window.scrollY)
    // })
  }

  return(
    <div className="container-fluid p-0">
      {/* <div className="row">
        <div className="col-12" > */}
            <iframe id="iframe" className="pdf" src={samplePDF} typeof="pdf" title="webviewer"
             onLoad={scroll} frameborder="0" width="100%" height="15550"></iframe>
            {/* <embed id="iframe" src={samplePDF} type="application/pdf" onLoad={scroll} width="100%" height="100%" /> */}
            {/* <h4>Single Page</h4>
            <SinglePagePDFViewer pdf={samplePDF} />
            <hr /> */}

            {/* <h4>All Pages</h4>
            <div className="all-page-container">
              <AllPagesPDFViewer pdf={samplePDF} />
            </div> */}

            {/* <hr /> */}
        {/* </div>
      </div> */}
    </div>
  )
}


export default Test2Screen;