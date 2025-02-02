import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

import "./ShareButtons.css";
import XIcon from "../../Elements/icons/XIcon";

function ShareButtons({ position, path }) {
  const url = `https://abelling.ai${path}`;

  return (
    <div className={`social_share_buttons ${position}`}>
      <FacebookShareButton url={url}>
        <FacebookIcon size={44} borderRadius={8} />
      </FacebookShareButton>
      <FacebookMessengerShareButton url={url}>
        <FacebookMessengerIcon size={44} borderRadius={8} />
      </FacebookMessengerShareButton>
      <WhatsappShareButton url={url}>
        <WhatsappIcon size={44} borderRadius={8} />
      </WhatsappShareButton>
      <LinkedinShareButton url={url}>
        <LinkedinIcon size={44} borderRadius={8} />
      </LinkedinShareButton>
      <TwitterShareButton url={url}>
        <XIcon />
      </TwitterShareButton>
      <EmailShareButton url={url}>
        <EmailIcon size={44} borderRadius={8} />
      </EmailShareButton>
      {/* <a
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&subject=BlogArticle&body=info@bastu.com.bd"
                rel="noopener noreferrer"
                target="_blanck"
                style={{ cursor: 'pointer' }}
            >
                <button class="">
                    <svg viewBox="0 0 64 64" width="50" height="50">
                        <rect width="64" height="64" rx="8" ry="8" fill="#7f7f7f"></rect>
                        <path d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z" fill="white"></path>
                    </svg>
                </button>
            </a> */}
      <button
        className="copy_clipboard"
        onClick={() => {
          navigator.clipboard.writeText(url + path.slice(1, -1));
        }}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          height="24"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path d="M7 6V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-3v3c0 .552-.45 1-1.007 1H4.007A1.001 1.001 0 0 1 3 21l.003-14c0-.552.45-1 1.007-1H7zM5.003 8L5 20h10V8H5.003zM9 6h8v10h2V4H9v2z"></path>
          </g>
        </svg>
      </button>
    </div>
  );
}

export default ShareButtons;
