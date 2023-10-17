import style from './Footer.module.css'
import {
  SlSocialFacebook,
  SlSocialTwitter,
  SlSocialInstagram,
} from 'react-icons/sl'
import { FaPinterestP } from 'react-icons/fa'
import { BiSupport } from 'react-icons/bi'
import paymentOptions from "../assets/payemnt-gateway.png"

export default function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.footerLinks}>
        <div className={style.footerLinksTitle}>
          <h2 className={style.LinksTitleMain}>AUREO & CO</h2>
          <p className={style.LinksTitleText}>Gold & Diamond</p>
        </div>
        <div className={style.footerLinksAbout}>
          <h3 className={style.aboutTitle}>About Aureo</h3>
          <ul>
            <li>About Us</li>
            <li>Core Values</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Blog</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className={style.footerLinksCompany}>
          <h3 className={style.companyTitle}>Our Company</h3>
          <ul>
            <li>Shopping App</li>
            <li>Be an Affiliate</li>
            <li>Advertise Your Product</li>
            <li>Media Enquires</li>
            <li>Other Services</li>
          </ul>
        </div>
        <div className={style.footerLinksDetails}>
          <h3 className={style.detailsTitle}>Store Details</h3>
          <ul>
            <div className={style.support}>
              <BiSupport className={style.supportIcon} />
              <div>
                <p>Need Any Help?</p>
                <p className={style.supportNumber}>123 456 7890</p>
              </div>
            </div>
            <li>Address:502 New Design Str, Melbourne, Australia</li>
            <li>Email: aureo@domain.com</li>
          </ul>
        </div>
        <div className={style.footerLinksFollow}>
          <h3 className={style.followTitle}>Follow Us</h3>
          <ul className={style.social}>
            <li>
              <SlSocialFacebook className={style.icon} />
            </li>
            <li>
              <SlSocialTwitter className={style.icon} />
            </li>
            <li>
              <SlSocialInstagram className={style.icon} />
            </li>
            <li>
              <FaPinterestP className={style.icon} />
            </li>
          </ul>
        </div>
      </div>
      <div className={style.footerTradeMark}>
        <img src={paymentOptions} alt="payments options" />
        <span>Aureo © 2023 by Github: @Alecxz20 All Rights Reserved.</span>
      </div>
    </footer>
  )
}
