import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { Link } from "react-router-dom";
import {BsFacebook, BsInstagram, BsTwitterX, BsYoutube} from 'react-icons/bs';

export default function FooterComponent() {
  return (
    <Footer container className="border border-t-8 border-teal-500">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid-w-full justify-between sm:flex md:grid-cols-1">
          <div className="mt-5">
            <Link
              to="/"
              className="self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white"
            >
              <span className="px-2 py-1 bg-gradient-to-r from-blue-500 via-blue-700 to-blue-900 rounded-lg text-white">
                TypoTales
              </span>
              Blog
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <FooterTitle title="About" />
              <FooterLinkGroup col>
                <FooterLink
                  href="/about"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  TypoTales Blog
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </FooterLink>
                <FooterLink
                  href="https://www.github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Facebook
                </FooterLink>
              </FooterLinkGroup>
            </div>
            <div>
              <FooterTitle title="Follow us" />
              <FooterLinkGroup col>
                <FooterLink
                  href="#"
                >
                  Privacy Policy
                </FooterLink>
                <FooterLink
                  href="#"
                >
                  Terms and Conditions
                </FooterLink>
              </FooterLinkGroup>
            </div>
          </div>
        </div>
        <FooterDivider/>
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <FooterCopyright href="#" by="TypoTales Blog" year={new Date().getFullYear()}/>
          <div className="flex sm:mt-0 mt-4 gap-6 items-center">

          <FooterIcon href="#" icon={BsFacebook}/>
          <FooterIcon href="#" icon={BsInstagram}/>
          <FooterIcon href="#" icon={BsYoutube}/>
          <FooterIcon href="#" icon={BsTwitterX}/>
          </div>
        </div>
      </div>
    </Footer>
  );
}
