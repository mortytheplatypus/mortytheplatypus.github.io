import React from 'react';
import './Resume.css';

export default function Resume() {
    return (
        <div className="resume-container">
            <div className="pdf-viewer">
                <iframe
                    src="/assets/pdf/al_amru_bil_maruf_cv.pdf"
                    title="Resume PDF"
                    className="pdf-iframe"
                    type="application/pdf"
                >
                    <p>
                        <a 
                            href="/assets/pdf/al_amru_bil_maruf_cv.pdf" 
                            download="al_amru_bil_maruf_cv.pdf"
                        >
                            Download the PDF instead
                        </a>
                    </p>
                </iframe>
            </div>

            <a 
                href="/assets/pdf/al_amru_bil_maruf_cv.pdf" 
                download="al_amru_bil_maruf_cv.pdf"
                className="download-button"
            >
                Download
            </a>
        </div>
    );
}